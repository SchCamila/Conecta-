import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Layout from './components/Layout'
import RequireCadastro from './components/RequireCadastro'
import Landing from './pages/Landing'
import Cadastro from './pages/Cadastro'
import PaginaInicial from './pages/PaginaInicial'
import Oportunidades from './pages/Oportunidades'
import DetalhesVaga from './pages/DetalhesVaga'
import CursoRecomendado from './pages/CursoRecomendado'
import ComoChegar from './pages/ComoChegar'
import Perfil from './pages/Perfil'
import Sobre from './pages/Sobre'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="sobre" element={<Sobre />} />

          <Route
            path="inicio"
            element={
              <RequireCadastro>
                <PaginaInicial />
              </RequireCadastro>
            }
          />
          <Route
            path="oportunidades"
            element={
              <RequireCadastro>
                <Oportunidades />
              </RequireCadastro>
            }
          />
          <Route
            path="oportunidades/:id"
            element={
              <RequireCadastro>
                <DetalhesVaga />
              </RequireCadastro>
            }
          />
          <Route
            path="cursos/:id"
            element={
              <RequireCadastro>
                <CursoRecomendado />
              </RequireCadastro>
            }
          />
          <Route
            path="como-chegar/:destinoTipo/:destinoId"
            element={
              <RequireCadastro>
                <ComoChegar />
              </RequireCadastro>
            }
          />
          <Route
            path="perfil"
            element={
              <RequireCadastro>
                <Perfil />
              </RequireCadastro>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
