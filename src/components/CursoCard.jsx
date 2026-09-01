import { Link } from 'react-router-dom'
import Chip from './Chip'

export default function CursoCard({ curso }) {
  return (
    <Link
      to={`/cursos/${curso.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900">{curso.nome}</h3>
          <p className="text-sm text-slate-500">{curso.instituicao}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Chip tone="amber">Curso</Chip>
        <Chip>{curso.regiao}</Chip>
        <Chip>{curso.duracao}</Chip>
      </div>
    </Link>
  )
}
