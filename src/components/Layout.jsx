import { NavLink, Outlet } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const tabClasses = ({ isActive }) =>
  `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium transition ${
    isActive ? 'text-emerald-700' : 'text-slate-400 hover:text-emerald-600'
  }`

export default function Layout() {
  const { cadastrado, perfil } = useUser()

  return (
    <div className="flex min-h-svh flex-col bg-[#f6f5f2] text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-extrabold text-emerald-700">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
              C+
            </span>
            <span className="text-lg">Conecta+</span>
          </NavLink>

          {cadastrado ? (
            perfil.nome ? (
              <span className="text-sm text-slate-500">
                Olá, <span className="font-medium text-slate-700">{perfil.nome.split(' ')[0]}</span>
              </span>
            ) : null
          ) : (
            <NavLink
              to="/cadastro"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Criar meu cadastro
            </NavLink>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 pb-24">
        <Outlet />
      </main>

      {cadastrado ? (
        <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-4xl">
            <NavLink to="/inicio" className={tabClasses} end>
              <span className="text-lg leading-none">🏠</span>
              Início
            </NavLink>
            <NavLink to="/oportunidades" className={tabClasses}>
              <span className="text-lg leading-none">🔎</span>
              Oportunidades
            </NavLink>
            <NavLink to="/perfil" className={tabClasses}>
              <span className="text-lg leading-none">👤</span>
              Perfil
            </NavLink>
          </div>
        </nav>
      ) : null}

      <footer className="border-t border-slate-200 bg-white pb-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 py-5 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>
            Conecta+ — protótipo acadêmico. Dados fictícios, sem funcionamento
            real.
          </p>
          <NavLink
            to="/sobre"
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Sobre o app
          </NavLink>
        </div>
      </footer>
    </div>
  )
}
