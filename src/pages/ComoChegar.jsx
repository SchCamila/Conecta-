import { Link, Navigate, useParams } from 'react-router-dom'
import {
  getCursoPorId,
  getOportunidadePorId,
  getRotaPorId,
} from '../data/mockData'

const ICONES = {
  a_pe: '🚶',
  onibus: '🚌',
  integracao: '🔄',
  metro: '🚇',
}

export default function ComoChegar() {
  const { destinoTipo, destinoId } = useParams()

  const destino =
    destinoTipo === 'curso'
      ? getCursoPorId(destinoId)
      : getOportunidadePorId(destinoId)

  if (!destino) {
    return <Navigate to="/oportunidades" replace />
  }

  const rota = getRotaPorId(destino.rotaId)
  const nomeDestino = destinoTipo === 'curso' ? destino.nome : destino.cargo
  const localDestino =
    destinoTipo === 'curso' ? destino.instituicao : destino.empresa
  const voltarPara =
    destinoTipo === 'curso'
      ? `/cursos/${destino.id}`
      : `/oportunidades/${destino.id}`

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to={voltarPara} className="text-sm text-emerald-700 hover:underline">
          ← Voltar
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">Como chegar</h1>
        <p className="mt-1 text-sm text-slate-500">
          Rota de transporte público até{' '}
          <span className="font-medium text-slate-700">{nomeDestino}</span>{' '}
          ({localDestino}).
        </p>

        {!rota ? (
          <p className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            Este destino é oferecido no formato online, então não é
            necessário se deslocar até um endereço físico.
          </p>
        ) : (
          <>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                ⏱ {rota.duracaoEstimada}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                💰 {rota.custoEstimado}
              </span>
            </div>

            <ol className="mt-5 flex flex-col gap-3">
              {rota.passos.map((passo, indice) => (
                <li
                  key={indice}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <span className="text-xl leading-none">
                    {ICONES[passo.tipo] ?? '➡️'}
                  </span>
                  <span className="text-sm text-slate-700">
                    {passo.detalhe}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-xs text-slate-400">
              Rota fictícia criada apenas para o protótipo, com base em uma
              referência de partida da região {rota.origemReferencia}.
              Horários e linhas reais não estão representados aqui.
            </p>
          </>
        )}

        <div className="mt-6">
          <Link
            to="/perfil"
            className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Ir para meu desenvolvimento
          </Link>
        </div>
      </div>
    </div>
  )
}
