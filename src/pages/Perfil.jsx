import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import {
  ESCOLARIDADES,
  INTERESSES,
  REGIOES,
  getCursoPorId,
  getOportunidadePorId,
  rotuloTipo,
} from '../data/mockData'
import Chip from '../components/Chip'

export default function Perfil() {
  const { perfil, atualizarPerfil, habilidades, cursosConcluidos, candidaturas } =
    useUser()
  const [editando, setEditando] = useState(false)
  const [rascunho, setRascunho] = useState(perfil)

  const iniciarEdicao = () => {
    setRascunho(perfil)
    setEditando(true)
  }

  const alternarInteresse = (interesse) => {
    setRascunho((atual) => {
      const jaSelecionado = atual.interesses.includes(interesse)
      return {
        ...atual,
        interesses: jaSelecionado
          ? atual.interesses.filter((i) => i !== interesse)
          : [...atual.interesses, interesse],
      }
    })
  }

  const salvar = (e) => {
    e.preventDefault()
    atualizarPerfil(rascunho)
    setEditando(false)
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Meu desenvolvimento
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe seu progresso rumo ao trabalho decente: cursos
          concluídos, habilidades desenvolvidas e candidaturas feitas.
        </p>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <ResumoCard numero={cursosConcluidos.length} rotulo="Cursos concluídos" />
        <ResumoCard numero={habilidades.length} rotulo="Habilidades" />
        <ResumoCard numero={candidaturas.length} rotulo="Candidaturas" />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Dados do perfil</h2>
          {!editando ? (
            <button
              type="button"
              onClick={iniciarEdicao}
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              Editar
            </button>
          ) : null}
        </div>

        {!editando ? (
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <Info label="Nome" valor={perfil.nome} />
            <Info label="Idade" valor={perfil.idade} />
            <Info label="Região" valor={perfil.regiao} />
            <Info label="Escolaridade" valor={perfil.escolaridade} />
            <Info
              label="Áreas de interesse"
              valor={perfil.interesses.join(', ') || '—'}
            />
            <Info label="Objetivo profissional" valor={perfil.objetivo || '—'} />
          </div>
        ) : (
          <form onSubmit={salvar} className="mt-4 flex flex-col gap-4">
            <Campo label="Nome">
              <input
                type="text"
                value={rascunho.nome}
                onChange={(e) =>
                  setRascunho({ ...rascunho, nome: e.target.value })
                }
                className="input"
              />
            </Campo>

            <Campo label="Idade">
              <input
                type="number"
                value={rascunho.idade}
                onChange={(e) =>
                  setRascunho({ ...rascunho, idade: e.target.value })
                }
                className="input"
              />
            </Campo>

            <Campo label="Região / bairro">
              <select
                value={rascunho.regiao}
                onChange={(e) =>
                  setRascunho({ ...rascunho, regiao: e.target.value })
                }
                className="input"
              >
                {REGIOES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Campo>

            <Campo label="Escolaridade">
              <select
                value={rascunho.escolaridade}
                onChange={(e) =>
                  setRascunho({ ...rascunho, escolaridade: e.target.value })
                }
                className="input"
              >
                {ESCOLARIDADES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Campo>

            <Campo label="Áreas de interesse">
              <div className="flex flex-wrap gap-2">
                {INTERESSES.map((interesse) => {
                  const selecionado = rascunho.interesses.includes(interesse)
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
                value={rascunho.objetivo}
                onChange={(e) =>
                  setRascunho({ ...rascunho, objetivo: e.target.value })
                }
                rows={3}
                className="input resize-none"
              />
            </Campo>

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Salvar alterações
              </button>
              <button
                type="button"
                onClick={() => setEditando(false)}
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">
          Habilidades desenvolvidas
        </h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {habilidades.length ? (
            habilidades.map((h) => (
              <Chip key={h} tone="emerald">
                {h}
              </Chip>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              Nenhuma habilidade registrada ainda.
            </p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Cursos concluídos</h2>
        {cursosConcluidos.length ? (
          <ul className="mt-3 flex flex-col gap-2">
            {cursosConcluidos.map((id) => {
              const curso = getCursoPorId(id)
              if (!curso) return null
              return (
                <li key={id}>
                  <Link
                    to={`/cursos/${id}`}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm hover:bg-slate-100"
                  >
                    <span className="font-medium text-slate-700">
                      {curso.nome}
                    </span>
                    <span className="text-slate-400">{curso.instituicao}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Você ainda não concluiu nenhum curso. Explore as{' '}
            <Link to="/oportunidades" className="text-emerald-700 underline">
              oportunidades
            </Link>{' '}
            para encontrar cursos recomendados.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">Candidaturas feitas</h2>
        {candidaturas.length ? (
          <ul className="mt-3 flex flex-col gap-2">
            {candidaturas.map(({ oportunidadeId, data }) => {
              const oportunidade = getOportunidadePorId(oportunidadeId)
              if (!oportunidade) return null
              return (
                <li key={oportunidadeId}>
                  <Link
                    to={`/oportunidades/${oportunidadeId}`}
                    className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-slate-700">
                      {oportunidade.cargo} · {oportunidade.empresa}
                    </span>
                    <span className="text-slate-400">
                      {rotuloTipo(oportunidade.tipo)} ·{' '}
                      {new Date(data).toLocaleDateString('pt-BR')}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Você ainda não se candidatou a nenhuma vaga.
          </p>
        )}
      </section>
    </div>
  )
}

function ResumoCard({ numero, rotulo }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-emerald-700">{numero}</p>
      <p className="text-xs text-slate-500">{rotulo}</p>
    </div>
  )
}

function Info({ label, valor }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="font-medium text-slate-700">{valor || '—'}</p>
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
