// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';
import "./About.css";
import ContactSection from "../ContactSection/ContactSection.tsx";

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function About() {
  return (
    <>

      <div className="about-us-container">

        <div className="about-us-content">
          <div className="about-us-picture"></div>

          <div className="about-us-text-container">
            <p className="about-us-title">Somos RapidCreds</p>
          </div>
          <div className="about-us-text-container">
            <p className="about-us-subtitle">
              Nuestra misión es facilitarle a las personas el acceso al crédito para lograr sus objetivos. Por eso brindamos un servicio
              <b> 100% online, transparente, rápido y sin vueltas</b>.
            </p>
          </div>

          <div className="about-us-icons-container">
            <div className="about-us-human-container">
              <div className="about-us-human-picture"></div>

              <p className="about-us-description-title">
                Somos humanos
              </p>
              <p className="about-us-description-subtitle">
                Comprendemos la situación de cada cliente y buscamos la mejor forma de ayudarlo.
              </p>
            </div>


            <div className="about-us-human-container">
              <div className="about-us-sign-picture"></div>

              <p className="about-us-description-title">
                Somos comprometidos
              </p>
              <p className="about-us-description-subtitle">
                Ofrecemos soluciones rápidas y simples a las necesidades de las personas.
              </p>
            </div>


            <div className="about-us-human-container">
              <div className="about-us-contract-picture"></div>

              <p className="about-us-description-title">
                Somos transparentes
              </p>
              <p className="about-us-description-subtitle">
                Brindamos información clara y confiable sobre nuestros productos. No cobramos nada extra.
              </p>
            </div>
          </div>

          <ContactSection>

          </ContactSection>
        </div>


      </div>
    </>
  );
}

export default About;
