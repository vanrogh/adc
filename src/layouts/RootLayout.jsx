import { Outlet, NavLink, ScrollRestoration, Link } from "react-router-dom"
import logo from '../assets/logo.jpg';

export default function RootLayout() {
    return (
      <section className="font-roboto">
        <ScrollRestoration />
        <header>
          <nav className="h-16 flex items-center justify-evenly shadow-lg text-lg">
            <NavLink to="/"><img src={logo} alt="Logo" width={59} height={111} /></NavLink>
            <Link className="hover:text-slate-gray" to="/">О нас</Link>
            <NavLink className="hover:text-slate-gray" to="services">Наши услуги</NavLink>
            <NavLink className="hover:text-slate-gray" to="contacts">Контакты</NavLink>
          </nav>
        </header>
        
        <main>
          <Outlet />
        </main>
  
        <footer className="bg-primary h-28 mt-16 flex justify-center items-center flex-grow-1">
          <p className="text-slate-gray">© 2012—2024 «AD Company»</p>
        </footer>
      </section>
    )
  }