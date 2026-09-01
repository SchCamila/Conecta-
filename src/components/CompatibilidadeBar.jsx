export default function CompatibilidadeBar({ percentual }) {
  const cor =
    percentual >= 80
      ? 'bg-emerald-600'
      : percentual >= 50
        ? 'bg-amber-500'
        : 'bg-rose-500'

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-600">
          Compatibilidade com seu perfil
        </span>
        <span className="font-bold text-slate-800">{percentual}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${cor} transition-all`}
          style={{ width: `${percentual}%` }}
        />
      </div>
    </div>
  )
}
