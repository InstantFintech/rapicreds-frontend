import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Contact from "../Contact/Contact.tsx";
import About from "../About/About.tsx";
import Account from "../Account/Account.tsx";
import App from "../App/App.tsx";
import './Header.css';

export default function Header() {
  // Actualiza el estado cada vez que cambia el hash de la URL
  return (
    <Router>
      <header className="header-container">
        <div className="header-logo"></div>

        <div className="nav-container">

          <div>
            <nav>
              <ul>
                <li>
                  <NavLink
                      className={({isActive}) => (isActive ? 'header-button-active' : 'header-button')}
                      to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      className={({isActive}) => (isActive ? 'header-button-active' : 'header-button')}
                      to="https://api.whatsapp.com/send?phone=5491126706752"
                  >
                    Contacto
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      className={({isActive}) => (isActive ? 'header-button-active' : 'header-button')}
                      to="/about"
                  >
                    Acerca de Nosotros
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="account-container">
            <nav>
              <ul>
                <li>
                  <NavLink
                      className={({isActive}) => (isActive ? 'header-button-active' : 'header-button')}
                      to="/account"
                  >
                    Mi Cuenta
                  </NavLink>
                </li>

                <li>
                  <NavLink
                      className={({isActive}) => (isActive ? 'blue-header-button-active' : 'blue-header-button')}
                      to="/account"
                  >
                    Solicitar Prestamo
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

        </div>

      </header>

      <main>
        <Routes>
          {/* Rutas definidas */}
          <Route path="/" element={<App/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </Router>

  );
}