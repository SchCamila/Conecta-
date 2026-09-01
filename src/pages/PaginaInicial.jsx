import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { cursos, oportunidades } from '../data/mockData'
import OportunidadeCard from '../components/OportunidadeCard'

export default function PaginaInicial() {
  const { perfil } = useUser()

  const oportunidadesRecomendadas = oportunidades.filter((o) =>
    perfil.interesses.includes(o.area),
  )
  const cursosRecomendados = cursos.filter((c) =>
    perfil.interesses.includes(c.area),
  )

  const listaOportunidades = oportunidadesRecomendadas.length
    ? oportunidadesRecomendadas
    : oportunidades.slice(0, 3)
  const listaCursos = cursosRecomendados.length
    ? cursosRecomendados
    : cursos.slice(0, 3)

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-bold text-slate-900">
          Olá, {perfil.nome.split(' ')[0] || 'jovem'}! 👋
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Com base no seu interesse em{' '}
          <span className="font-medium text-emerald-700">
            {perfil.interesses.join(', ') || 'diversas áreas'}
          </span>
          , separamos estas oportunidades e cursos para você.
        </p>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">
            Oportunidades para você
          </h2>
          <Link
            to="/oportunidades"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            Ver todas
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {listaOportunidades.map((o) => (
            <OportunidadeCard key={o.id} oportunidade={o} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-semibold text-slate-800">
          Cursos recomendados
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {listaCursos.map((curso) => (
            <Link
              key={curso.id}
              to={`/cursos/${curso.id}`}
              className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{curso.nome}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {curso.instituicao} · {curso.duracao} · {curso.modalidade}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
