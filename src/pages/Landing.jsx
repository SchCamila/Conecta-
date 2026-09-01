import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Landing() {
  const { cadastrado } = useUser()

  return (
    <div className="flex flex-col items-center gap-10 py-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-extrabold text-white">
          C+
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Conecta+
        </h1>
        <p className="max-w-md text-lg text-slate-600">
          Cursos, oportunidades de trabalho e mobilidade urbana em um só
          lugar, para jovens de áreas periféricas darem o próximo passo rumo
          ao trabalho decente.
        </p>
      </div>

      <Link
        to={cadastrado ? '/inicio' : '/cadastro'}
        className="rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
      >
        {cadastrado ? 'Ir para meu painel' : 'Criar meu cadastro'}
      </Link>

      <div className="grid w-full gap-4 sm:grid-cols-3">
        <FeatureCard
          titulo="Oportunidades"
          texto="Vagas de emprego, estágio e Jovem Aprendiz pensadas para quem está começando."
        />
        <FeatureCard
          titulo="Cursos"
          texto="Cursos curtos que ajudam a preencher a habilidade que falta para a vaga desejada."
        />
        <FeatureCard
          titulo="Mobilidade"
          texto="Informações de como chegar até a vaga ou o curso usando transporte público."
        />
      </div>

      <p className="max-w-md text-xs text-slate-400">
        Este é um protótipo acadêmico com dados fictícios. Nenhuma vaga,
        empresa ou curso aqui é real.{' '}
        <Link to="/sobre" className="underline">
          Saiba mais sobre o app
        </Link>
        .
      </p>
    </div>
  )
}

function FeatureCard({ titulo, texto }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
      <h2 className="font-semibold text-emerald-700">{titulo}</h2>
      <p className="mt-1 text-sm text-slate-600">{texto}</p>
    </div>
  )
}
