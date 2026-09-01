import { Link, Navigate, useParams } from 'react-router-dom'
import {
  calcularCompatibilidade,
  getCursoPorId,
  getOportunidadePorId,
  rotuloTipo,
} from '../data/mockData'
import { useUser } from '../context/UserContext'
import Chip from '../components/Chip'
import CompatibilidadeBar from '../components/CompatibilidadeBar'

export default function DetalhesVaga() {
  const { id } = useParams()
  const { habilidades, candidatar, jaCandidatou } = useUser()
  const oportunidade = getOportunidadePorId(id)

  if (!oportunidade) {
    return <Navigate to="/oportunidades" replace />
  }

  const { percentual, faltantes } = calcularCompatibilidade(
    oportunidade,
    habilidades,
  )
  const cursoRecomendado = getCursoPorId(oportunidade.cursoRecomendadoId)
  const candidatado = jaCandidatou(oportunidade.id)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          to="/oportunidades"
          className="text-sm text-emerald-700 hover:underline"
        >
          ← Voltar para oportunidades
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {oportunidade.cargo}
            </h1>
            <p className="text-slate-500">{oportunidade.empresa}</p>
          </div>
          <Chip tone="emerald">{rotuloTipo(oportunidade.tipo)}</Chip>
        </div>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <Info label="Localização" valor={oportunidade.regiao} />
          <Info label="Horário" valor={oportunidade.horario} />
          <Info label="Nível de experiência" valor={oportunidade.nivel} />
          <Info label="Área" valor={oportunidade.area} />
        </div>

        <p className="mt-4 text-sm text-slate-600">
          {oportunidade.descricao}
        </p>

        <div className="mt-5">
          <CompatibilidadeBar percentual={percentual} />
        </div>

        {faltantes.length > 0 ? (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">
              Falta {faltantes.length > 1 ? 'algumas habilidades' : 'uma habilidade'} no
              seu perfil: {faltantes.join(', ')}.
            </p>
            {cursoRecomendado ? (
              <p className="mt-1">
                Que tal fazer o curso{' '}
                <Link
                  to={`/cursos/${cursoRecomendado.id}`}
                  className="font-semibold underline"
                >
                  {cursoRecomendado.nome}
                </Link>{' '}
                para aumentar sua compatibilidade com essa vaga?
              </p>
            ) : null}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            Seu perfil já atende a todos os requisitos dessa vaga. Boa sorte
            na candidatura!
          </div>
        )}

        <div className="mt-5">
          <h2 className="font-semibold text-slate-800">Requisitos</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {oportunidade.requisitos.map((req) => (
              <Chip
                key={req}
                tone={habilidades.includes(req) ? 'emerald' : 'rose'}
              >
                {req}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-slate-800">Benefícios</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {oportunidade.beneficios.map((b) => (
              <Chip key={b}>{b}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => candidatar(oportunidade.id)}
            disabled={candidatado}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              candidatado
                ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {candidatado ? 'Candidatura enviada ✓' : 'Candidatar-se'}
          </button>

          <Link
            to={`/como-chegar/oportunidade/${oportunidade.id}`}
            className="rounded-full border border-emerald-600 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Como chegar até a vaga
          </Link>
        </div>
      </div>
    </div>
  )
}

function Info({ label, valor }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="font-medium text-slate-700">{valor}</p>
    </div>
  )
}
