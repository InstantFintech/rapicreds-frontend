import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Contact from "../Contact/Contact.tsx";
import About from "../About/About.tsx";
import Account from "../Account/Account.tsx";
import App from "../App/App.tsx";
import './Header.css';
import {useEffect, useState} from "react";

export default function Header() {
  // Actualiza el estado cada vez que cambia el hash de la URL

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log("value:: tt" + true);

    fetch('http://localhost:8080/auth/valid-session', {
      credentials: 'include',
    }) // Ejemplo de URL de API
      .then(response => {

        if (response.status == 404) {
          setAuthenticated(false);

        } else if (response.status == 200) {
          setAuthenticated(true);

        }
      })
    /*.then(data => {
          console.log("No error found " + data.status + " | " +JSON.stringify(data));

          data.code
          setAuthenticated(true);
        })*/
      .catch(err => {
        console.log("value:: " + true);

        setAuthenticated(false);
      });
  }, []);


  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }


  function setSecureCookie(name: string, value: string, days: number): void {
    console.log("value:: " + value);
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
    const expiresString = `expires=${expires.toUTCString()}`;

    // Set the cookie with secure and HttpOnly flags
    document.cookie = `${name}=${value}; ${expiresString}; path=/; Secure; HttpOnly`;
  }


  const handleItemClick = (item) => {
    const data = {
      email: "usuario541111311@ejemplo.com",
      password: "password123",
    };

    fetch('http://localhost:8080/auth/signup', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json", // Indica que estamos enviando JSON
      },
      body: JSON.stringify(data),
    }) // Ejemplo de URL de API
      .then(response => {

        if (response.status == 404) {
          setAuthenticated(false);

          console.log("Not Registered");
        } else if (response.status == 200) {
          setAuthenticated(true);

          response.json().then(r => {
            console.log("Found " + r.token);

            setSecureCookie("session_token", r.token, 1);

          });


        } else if (response.status == 409) {
          console.log("Registered");
          setAuthenticated(false);

        }
      })
      .catch(err => {
        console.log("Error found " + JSON.stringify(err));
        setAuthenticated(false);
      });
    
    
  };

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


                {/* Muestra un botón dependiendo de la respuesta de la API */}
                {authenticated ? (

                  <li>
                    <NavLink
                      className={({isActive}) => (isActive ? 'header-button-active' : 'header-button')}
                      to="/account"

                    >
                      Cerrar Session
                    </NavLink>
                  </li>



                ) : (
                  <li className="header-button" onClick={() => handleItemClick("Item 1")}>

                    Mi Cuenta
                  </li>
                )}


                <li>
                  <NavLink
                    className={({isActive}) => (isActive ? 'blue-header-button-active' : 'blue-header-button')}
                    to="/loan"
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