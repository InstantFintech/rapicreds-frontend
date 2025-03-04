import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoanCancel.css";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    DNI: "",
    email: "",

    termsAccepted: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    const isDNIValid = formData.DNI.length === 10;
    const isEmailValid = formData.email.trim() !== "";
    const allFieldsValid = isDNIValid && isEmailValid && captchaVerified;

    setIsFormValid(allFieldsValid);
  }, [formData, captchaVerified]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="shadow_card">
        <div className="loan-cancel-title-container">
          <h1 className="loan_cancel_title_1">Quiero cancelar mi crédito</h1>
          <h2 className="loan_cancel_tittle_2">
            Solo aplica si el mismo fue depositado en los últimos 10 días. Es
            necesario que reintegres el dinero acreditado en tu cuena bancaria
            para procesar la cancelación de arrepentimiento.
          </h2>
        </div>

        <div className="user-email-container">
          <div className="user-email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">E-mail</label>
          </div>

          {!validateEmail(formData.email) && formData.email.length > 0 && (
            <p className="error-text">Ingrese un email válido </p>
          )}
        </div>

        <div className="user-dni-cancel-container">
          <div className="user-dni-cancel">
            <input
              type="text"
              name="user-dni-cancel"
              id="user-dni-cancel"
              placeholder=" "
              value={formData.DNI}
              onChange={(e) => {
                let rawValue = e.target.value.replace(/\D/g, "").slice(0, 8);

                let formattedDNI = rawValue.replace(
                  /^(\d{2})(\d{3})?(\d{3})?$/,
                  (_, p1, p2, p3) => {
                    let parts = [p1, p2, p3].filter(Boolean);
                    return parts.join(".");
                  }
                );

                setFormData((prev) => ({ ...prev, DNI: formattedDNI }));
              }}
            />
            <label htmlFor="user-dni-cancel">DNI</label>
          </div>
          {formData.DNI.length > 0 && formData.DNI.length < 8 && (
            <p className="error-text">
              El DNI debe tener exactamente 8 números
            </p>
          )}
        </div>

        <div className="recaptcha-container">
          <ReCAPTCHA
            sitekey="6LfMiOcqAAAAAInI0bQUWuI1eq9qEoM68HNTfbG8"
            onChange={() => setCaptchaVerified(true)}
            onExpired={() => setCaptchaVerified(false)}
          />
        </div>

        <button
          className={`button-cancel-loan ${
            isFormValid ? "enabled" : "disabled"
          }`}
          onClick={() => alert("Enviado")}
          disabled={!isFormValid}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
