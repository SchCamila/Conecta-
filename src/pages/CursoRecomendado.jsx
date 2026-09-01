import { Link, Navigate, useParams } from 'react-router-dom'
import { getCursoPorId } from '../data/mockData'
import { useUser } from '../context/UserContext'
import Chip from '../components/Chip'

export default function CursoRecomendado() {
  const { id } = useParams()
  const { habilidades, cursosConcluidos, concluirCurso } = useUser()
  const curso = getCursoPorId(id)

  if (!curso) {
    return <Navigate to="/oportunidades" replace />
  }

  const jaConcluido = cursosConcluidos.includes(curso.id)
  const jaPossuiHabilidade = habilidades.includes(curso.habilidadeAlvo)

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
        <Chip tone="amber">Curso recomendado</Chip>
        <h1 className="mt-2 text-xl font-bold text-slate-900">
          {curso.nome}
        </h1>
        <p className="text-slate-500">{curso.instituicao}</p>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <Info label="Duração" valor={curso.duracao} />
          <Info label="Modalidade" valor={curso.modalidade} />
          <Info label="Local / formato" valor={curso.regiao} />
        </div>

        <p className="mt-4 text-sm text-slate-600">{curso.descricao}</p>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Ao concluir este curso, você desenvolve a habilidade{' '}
          <span className="font-semibold text-emerald-700">
            {curso.habilidadeAlvo}
          </span>
          , usada como critério de compatibilidade em várias oportunidades do
          Conecta+.
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => concluirCurso(curso)}
            disabled={jaConcluido || jaPossuiHabilidade}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              jaConcluido || jaPossuiHabilidade
                ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {jaConcluido || jaPossuiHabilidade
              ? 'Habilidade já no seu perfil ✓'
              : 'Marcar curso como concluído'}
          </button>

          {curso.regiao !== 'Online' && curso.rotaId ? (
            <Link
              to={`/como-chegar/curso/${curso.id}`}
              className="rounded-full border border-emerald-600 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Como chegar até o curso
            </Link>
          ) : null}
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Este é um curso fictício criado apenas para o protótipo — não há
          matrícula real.
        </p>
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
