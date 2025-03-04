import React, { useState, useEffect } from "react";
import "./LoanForm.css";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellido: "",
    DNI: "",
    cod_area_input: "",
    cellphone_input: "",
    sexo: "",
    termsAccepted: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // actualiza inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Verifica campos llenos
  useEffect(() => {
    const allFieldsFilled =
      formData.nombres.trim() !== "" &&
      formData.apellido.trim() !== "" &&
      formData.DNI.trim() !== "" &&
      formData.cod_area_input.trim() !== "" &&
      formData.cellphone_input.trim() !== "" &&
      formData.sexo !== "" &&
      formData.termsAccepted;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="shadow_card">
        <div className="loan-form-title-container">
          <h1 className="loan_form_title_1">Completá tus datos personales</h1>
          <h2 className="loan_form_tittle_2">
            Vamos a corroborar si calificás para el crédito
          </h2>
        </div>

        <div className="user-name-container">
          <div className="user_name">
            <input
              type="text"
              name="nombres"
              id="nombres"
              placeholder=" "
              value={formData.nombres}
              onChange={handleInputChange}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^A-Za-z\s]/g,
                  ""
                );
              }}
            />
            <label htmlFor="nombres">Nombre</label>
          </div>
        </div>

        <div className="user-last-name-container">
          <div className="user_last_name">
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder=" "
              value={formData.apellido}
              onChange={handleInputChange}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^A-Za-z\s]/g,
                  ""
                );
              }}
            />
            <label htmlFor="apellido">Apellido</label>
          </div>
        </div>

        <div className="user-dni-container">
          <div className="user-dni">
            <input
              type="text"
              name="user-dni"
              id="user-dni"
              placeholder=" "
              value={formData.DNI}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, "").slice(0, 8);

                const formattedDNI = rawValue.replace(
                  /^(\d{2})(\d{3})?(\d{3})?$/,
                  (_, p1, p2, p3) => {
                    const parts = [p1, p2, p3].filter(Boolean);
                    return parts.join(".");
                  }
                );

                setFormData((prev) => ({ ...prev, DNI: formattedDNI }));
              }}
            />
            <label htmlFor="user-dni">DNI</label>
          </div>
          {formData.DNI.length > 0 && formData.DNI.length < 8 && (
            <p className="error-text-form ">
              El DNI debe tener exactamente 8 números
            </p>
          )}
        </div>

        <div className="user_sexo">
          <label className="sexo-title">Sexo que figura en tu DNI</label>
          <div className="sexo-options">
            <input
              type="radio"
              id="check1"
              name="sexo"
              value="Femenino"
              onChange={handleInputChange}
            />
            <label htmlFor="check1">Femenino</label>

            <input
              type="radio"
              id="check2"
              name="sexo"
              value="Masculino"
              onChange={handleInputChange}
            />
            <label htmlFor="check2">Masculino</label>

            <input
              type="radio"
              id="check3"
              name="sexo"
              value="X"
              onChange={handleInputChange}
            />
            <label htmlFor="check3">X</label>
          </div>
        </div>

        <div className="contact-container">
          <div className="cod-area-container">
            <input
              className="cod-area-input"
              type="number"
              name="cod_area_input"
              id="cod_area_input"
              placeholder=" "
              value={formData.cod_area_input}
              onChange={handleInputChange}
            />
            <label className="cod-area-label" htmlFor="cod-area-input">
              Cod. de área
            </label>
          </div>
          <div className="cellphone-container">
            <input
              className="cellphone-input"
              type="number"
              name="cellphone_input"
              id="cellphone_input"
              placeholder=" "
              value={formData.cellphone_input}
              onChange={handleInputChange}
            />
            <label htmlFor="cellphone-input" className="cellphone-label">
              Telefono celular
            </label>
          </div>
        </div>

        <small className="title_area">
          Agregá tu número de celular con el código de área sin 0 ni 15
        </small>

        <div className="user-condition-container">
          <div className="user-condition-input-container">
            <input
              type="checkbox"
              id="check-terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
          </div>
          <div className="user-condition-label-container">
            <label htmlFor="check-terms">
              Acepto gestionar mi Atención al Cliente vía Whatsapp para
              Asistencia de Ventas, Atención al Cliente y Cobranzas.
            </label>
          </div>
        </div>

        <div className="user_terminos">
          <label htmlFor="terminos">
            Al hacer clic en “Evaluar si califico”, acepto los Términos y
            condiciones generales, declaro que no soy Sujeto Obligado ni Persona
            Expuesta Políticamente (PEP), y los fondos que aplicaré a la
            operatoria provienen de origen lícito.
          </label>
        </div>

        <button
          className={`button-request-loan ${
            isFormValid ? "enabled" : "disabled"
          }`}
          onClick={() => alert("Préstamo solicitado")}
          disabled={!isFormValid}
        >
          Evaluar si califico
        </button>
      </div>
    </div>
  );
}
