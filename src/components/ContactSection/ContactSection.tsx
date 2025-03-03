import { NavLink } from 'react-router-dom';

import './ContactSection.css';

export default function ContactSection() {
  // Actualiza el estado cada vez que cambia el hash de la URL
  return (
    <div className="contact-section-container">
      <div className="contact-section-items">
        <div className="contact-section-image"></div>

        <div>
          <p className="contact-section-main-title">Siempre Con Vos</p>
        </div>

        <div>
          <p className="contact-section-sub-title">Estamos disponibles para ayudarte con lo que necesites.</p>
        </div>

        <div className="contact-section-blue-header-button-container">
          <NavLink
            className='contact-section-blue-header-button'
            to="/contact"
          >
            Contactanos
          </NavLink>
        </div>

      </div>
    </div>

  );
}