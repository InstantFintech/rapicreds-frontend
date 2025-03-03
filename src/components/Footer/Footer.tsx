import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  // Actualiza el estado cada vez que cambia el hash de la URL
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <Router>
      <div className="footer-container">

        <div className="footer-items">
          <div className="footer-logo"></div>

          <div className="footer-first-row">
            <a>
              <NavLink
                className='footer-button'
                to="/"
              >
                Inicio
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/contact"
              >
                Contacto
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/about"
              >
                Acerca de Nosotros
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/loan"
              >
                Solicita tu prestamo
              </NavLink>
            </a>
          </div>


          <div className="footer-second-row">
            <a>
              <NavLink
                className='footer-button'
                to="/cancel-loan"
              >
                Boton de arrepentimiento
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/terms-and-conditions"
              >
                Terminos y condiciones
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/contract-model"
              >
                Modelo de contrato Ley 24.240
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/loan"
              >
                Informacion al usuario de servicios financieros
              </NavLink>
            </a>
            <a>
              <NavLink
                className='footer-button'
                to="/loan"
              >
                Defensa al consumidor
              </NavLink>
            </a>
          </div>


          <div className="footer-third-row">
            <a className="footer-simple-text">
              Seguinos en
            </a>

            <div className="footer-social-media">
              <div className="footer-instagram"></div>
              <div className="footer-facebook"></div>
            </div>

            <a className="footer-simple-text">
              Contactanos
            </a>

            <div className="footer-contact">
              <div className="footer-mail-container">
                <div className="footer-mail"></div>

                <a className="footer-simple-child-text">
                  contacto@rapicreds.com
                </a>
              </div>

              <div className="footer-whatsapp-container">
                <div className="footer-whatsapp"></div>

                <a className="footer-simple-child-text">
                  +54 9 1126706753
                </a>
              </div>
            </div>
          </div>

        </div>


        <div className="footer-description">

          <div className="footer-description-text-container">

            <div className="footer-description-subtext-container">
              <a className="footer-description-subtext">
                El período mínimo para la devolución de un préstamo es de 3 meses, siendo el máximo 18 meses. La TNA de
                un
                préstamo varía dependiendo del perfil crediticio del solicitante, siendo la mínima 169,0% y la máxima
                279,0%. A su vez, la TEA mínima es de 386,03% siendo la máxima 1128,69%
              </a>
            </div>


            <div className="footer-description-main-container">
              <a className="footer-description-maintext">
                (CFT) con IVA: Mínimo: 560,77% - Máximo: 1858,45%
              </a>
            </div>

            <div className="footer-description-subtext-container">
              <a className="footer-description-subtext">
                A modo de ejemplo Monto solicitado de $50.000 a 12 meses TNA (sin IVA): 169,0% - TEA (sin IVA): 386,03% - CFTEA (con IVA): 560,77% Cuota: $10.039,84 Total a pagar: $120.478,04
              </a>
            </div>

            <div className="footer-description-subtext-container">
              <a className="footer-description-subtext">
                Lavalle 815, Quilmes Centro, Buenos Aires, Argentina
              </a>
            </div>

            <div className="footer-fiscal-data-container">
              <div className="footer-fiscal-data"></div>
              <div className="footer-fiscal-user"></div>

            </div>

          </div>

        </div>
      </div>


    </Router>

  );
}