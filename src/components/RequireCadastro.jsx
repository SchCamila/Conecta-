import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function RequireCadastro({ children }) {
  const { cadastrado } = useUser()

  if (!cadastrado) {
    return <Navigate to="/cadastro" replace />
  }

  return children
}
