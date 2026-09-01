import { useMemo, useState } from 'react'
import { REGIOES, TIPOS_OPORTUNIDADE, cursos, oportunidades } from '../data/mockData'
import OportunidadeCard from '../components/OportunidadeCard'
import CursoCard from '../components/CursoCard'

const FILTROS_TIPO = [...TIPOS_OPORTUNIDADE, { valor: 'curso', rotulo: 'Curso' }]

export default function Oportunidades() {
  const [tipo, setTipo] = useState('todos')
  const [regiao, setRegiao] = useState('todas')

  const itens = useMemo(() => {
    const vagas = oportunidades.map((o) => ({ tipo: 'oportunidade', dado: o }))
    const listaCursos = cursos.map((c) => ({ tipo: 'curso', dado: c }))
    return [...vagas, ...listaCursos]
  }, [])

  const filtrados = useMemo(() => {
    return itens.filter(({ tipo: categoria, dado }) => {
      const passaTipo =
        tipo === 'todos' ||
        (tipo === 'curso' ? categoria === 'curso' : dado.tipo === tipo)
      const passaRegiao = regiao === 'todas' || dado.regiao === regiao
      return passaTipo && passaRegiao
    })
  }, [itens, tipo, regiao])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Oportunidades</h1>
        <p className="mt-1 text-sm text-slate-500">
          Vagas e cursos fictícios de emprego, estágio e Jovem Aprendiz. Use
          os filtros para encontrar o que combina com você.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="input sm:w-1/2"
        >
          <option value="todos">Todos os tipos</option>
          {FILTROS_TIPO.map((t) => (
            <option key={t.valor} value={t.valor}>
              {t.rotulo}
            </option>
          ))}
        </select>

        <select
          value={regiao}
          onChange={(e) => setRegiao(e.target.value)}
          className="input sm:w-1/2"
        >
          <option value="todas">Todas as regiões</option>
          {REGIOES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
          <option value="Online">Online</option>
        </select>
      </div>

      {filtrados.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
          Nenhum resultado encontrado com esses filtros. Tente outra
          combinação.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtrados.map(({ tipo: categoria, dado }) =>
            categoria === 'curso' ? (
              <CursoCard key={dado.id} curso={dado} />
            ) : (
              <OportunidadeCard key={dado.id} oportunidade={dado} />
            ),
          )}
        </div>
      )}
    </div>
  )
}
