import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ESCOLARIDADES, INTERESSES, REGIOES } from '../data/mockData'
import { useUser } from '../context/UserContext'

const ESTADO_INICIAL = {
  nome: '',
  idade: '',
  regiao: '',
  escolaridade: '',
  interesses: [],
  objetivo: '',
}

export default function Cadastro() {
  const { cadastrar } = useUser()
  const navigate = useNavigate()
  const [dados, setDados] = useState(ESTADO_INICIAL)
  const [erro, setErro] = useState('')

  const alternarInteresse = (interesse) => {
    setDados((atual) => {
      const jaSelecionado = atual.interesses.includes(interesse)
      return {
        ...atual,
        interesses: jaSelecionado
          ? atual.interesses.filter((i) => i !== interesse)
          : [...atual.interesses, interesse],
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!dados.nome || !dados.idade || !dados.regiao || !dados.escolaridade) {
      setErro('Preencha nome, idade, região e escolaridade para continuar.')
      return
    }

    if (dados.interesses.length === 0) {
      setErro('Selecione pelo menos uma área de interesse.')
      return
    }

    setErro('')
    cadastrar(dados)
    navigate('/inicio')
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-bold text-slate-900">Criar meu cadastro</h1>
      <p className="mt-1 text-sm text-slate-500">
        Conte um pouco sobre você para recebermos oportunidades e cursos mais
        próximos do seu perfil. Todos os dados aqui são fictícios e não são
        salvos em nenhum servidor.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <Campo label="Nome">
          <input
            type="text"
            value={dados.nome}
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            placeholder="Seu nome completo"
            className="input"
          />
        </Campo>

        <Campo label="Idade">
          <input
            type="number"
            min="14"
            max="29"
            value={dados.idade}
            onChange={(e) => setDados({ ...dados, idade: e.target.value })}
            placeholder="Ex: 18"
            className="input"
          />
        </Campo>

        <Campo label="Região / bairro">
          <select
            value={dados.regiao}
            onChange={(e) => setDados({ ...dados, regiao: e.target.value })}
            className="input"
          >
            <option value="">Selecione sua região</option>
            {REGIOES.map((regiao) => (
              <option key={regiao} value={regiao}>
                {regiao}
              </option>
            ))}
          </select>
        </Campo>

        <Campo label="Escolaridade">
          <select
            value={dados.escolaridade}
            onChange={(e) =>
              setDados({ ...dados, escolaridade: e.target.value })
            }
            className="input"
          >
            <option value="">Selecione sua escolaridade</option>
            {ESCOLARIDADES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Campo>

        <Campo label="Áreas de interesse (selecione uma ou mais)">
          <div className="flex flex-wrap gap-2">
            {INTERESSES.map((interesse) => {
              const selecionado = dados.interesses.includes(interesse)
              return (
                <button
                  type="button"
                  key={interesse}
                  onClick={() => alternarInteresse(interesse)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                    selecionado
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-slate-300 bg-white text-slate-600 hover:border-emerald-400'
                  }`}
                >
                  {interesse}
                </button>
              )
            })}
          </div>
        </Campo>

        <Campo label="Objetivo profissional">
          <textarea
            value={dados.objetivo}
            onChange={(e) => setDados({ ...dados, objetivo: e.target.value })}
            placeholder="Ex: Quero conseguir meu primeiro estágio na área de tecnologia"
            rows={3}
            className="input resize-none"
          />
        </Campo>

        {erro ? (
          <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {erro}
          </p>
        ) : null}

        <button
          type="submit"
          className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Concluir cadastro
        </button>
      </form>
    </div>
  )
}

function Campo({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  )
}
