// @ts-expect-error TS6133 for "unused" React import (must import or else TSX/JSX eslint errors)
import React, { } from 'react';

import './App.css';
import LoanCalculator from "../LoanCalculator/LoanCalculator.tsx";
import Reviews from "../Reviews/Reviews.tsx";
import ContactSection from "../ContactSection/ContactSection.tsx";
import FaqsSection from "../FaqsSection/FaqsSection.tsx";

/*
 * This is an example of a React functional component making use of "hooks".
 * It is arguably the "new way" of making components vs. class components.
 */
function App() {
  return (
    <>
      <div className="card">
        <div className="main-background">
          <div className="main-text-container">
            <p className="digital-loan">Préstamos Digitales</p>
            <p className="get-digital-loan">¡Obtene efectivo en el acto y solo con tu DNI!</p>
          </div>

          <LoanCalculator></LoanCalculator>
        </div>


        <div className="loan-requisites-container">
          <div className="loan-requisites-title">
            ¿Por qué elegir RapiCreds?
          </div>

          <div className="loan-requisites-images-container">

            <div className="instant-acreditation-container">
              <div className="loan-time"></div>

              <p className="instant-acreditation-title">Solicitud online</p>
              <p className="instant-acreditation-subtitle">y simple</p>
            </div>


            <div className="instant-acreditation-container">
              <div className="instant-acreditation"></div>

              <p className="instant-acreditation-title">Acreditación</p>
              <p className="instant-acreditation-subtitle">instantanea</p>
            </div>


            <div className="instant-acreditation-container">
              <div className="premium-support"></div>

              <p className="instant-acreditation-title">Soporte</p>
              <p className="instant-acreditation-subtitle">1 a 1</p>
            </div>

          </div>
        </div>


        <Reviews>

        </Reviews>

        <ContactSection>

        </ContactSection>

        <FaqsSection>

        </FaqsSection>
      </div>

    </>
  );
}

export default App;
