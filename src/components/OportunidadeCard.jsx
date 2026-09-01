import { Link } from 'react-router-dom'
import { calcularCompatibilidade, rotuloTipo } from '../data/mockData'
import { useUser } from '../context/UserContext'
import Chip from './Chip'

export default function OportunidadeCard({ oportunidade }) {
  const { habilidades } = useUser()
  const { percentual } = calcularCompatibilidade(oportunidade, habilidades)

  return (
    <Link
      to={`/oportunidades/${oportunidade.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900">{oportunidade.cargo}</h3>
          <p className="text-sm text-slate-500">{oportunidade.empresa}</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white">
          {percentual}%
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Chip tone="emerald">{rotuloTipo(oportunidade.tipo)}</Chip>
        <Chip>{oportunidade.regiao}</Chip>
        <Chip>{oportunidade.nivel}</Chip>
      </div>
    </Link>
  )
}
