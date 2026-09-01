import { createContext, useContext, useMemo, useState } from 'react'
import { HABILIDADES_BASE } from '../data/mockData'

const UserContext = createContext(null)

const PERFIL_VAZIO = {
  nome: '',
  idade: '',
  regiao: '',
  escolaridade: '',
  interesses: [],
  objetivo: '',
}

export function UserProvider({ children }) {
  const [cadastrado, setCadastrado] = useState(false)
  const [perfil, setPerfil] = useState(PERFIL_VAZIO)
  const [habilidades, setHabilidades] = useState([])
  const [cursosConcluidos, setCursosConcluidos] = useState([])
  const [candidaturas, setCandidaturas] = useState([])

  const cadastrar = (dados) => {
    setPerfil(dados)
    setHabilidades(HABILIDADES_BASE)
    setCadastrado(true)
  }

  const atualizarPerfil = (dadosParciais) => {
    setPerfil((atual) => ({ ...atual, ...dadosParciais }))
  }

  const concluirCurso = (curso) => {
    setCursosConcluidos((atual) =>
      atual.includes(curso.id) ? atual : [...atual, curso.id],
    )
    setHabilidades((atual) =>
      atual.includes(curso.habilidadeAlvo)
        ? atual
        : [...atual, curso.habilidadeAlvo],
    )
  }

  const candidatar = (oportunidadeId) => {
    setCandidaturas((atual) =>
      atual.some((c) => c.oportunidadeId === oportunidadeId)
        ? atual
        : [...atual, { oportunidadeId, data: new Date().toISOString() }],
    )
  }

  const jaCandidatou = (oportunidadeId) =>
    candidaturas.some((c) => c.oportunidadeId === oportunidadeId)

  const value = useMemo(
    () => ({
      cadastrado,
      perfil,
      habilidades,
      cursosConcluidos,
      candidaturas,
      cadastrar,
      atualizarPerfil,
      concluirCurso,
      candidatar,
      jaCandidatou,
    }),
    [cadastrado, perfil, habilidades, cursosConcluidos, candidaturas],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser deve ser usado dentro de UserProvider')
  return ctx
}
