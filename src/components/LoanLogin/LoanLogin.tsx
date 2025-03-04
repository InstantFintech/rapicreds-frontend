import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import "./LoanLogin.css";


export default function LoanLogin() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    termsAccepted: false,
  });

  const clienId =
    "590434445999-r3h4l926bnbi8b39e9u7n7jjkr3i4t41.apps.googleusercontent.com";

  const [isFormValid, setIsFormValid] = useState(false);

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
    const isPasswordValid = formData.password.length >=6;;
    const isEmailValid = formData.email.trim() !== "";
    const allFieldsValid = isPasswordValid && isEmailValid;

    setIsFormValid(allFieldsValid);
  }, [formData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="shadow_card">
        <div className="loan-login-title-container">
          <h1 className="loan_login_title_1">
            Si ya creaste tu cuenta, iniciá sesión
          </h1>
        </div>
        {/*<div className="google-login-button">
          <GoogleLogin
            buttonText="Hola"
        
            clientId={clienId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
          />
        </div>
        */}
        <button className="custom-button-SingUp">
          <div className="logo-google" />
          <span>Iniciá sesión con Google</span>
        </button>

        <a className="o" href="" target="" rel="">
          o
        </a>
        

        <div className="user-email-login-container">
          <div className="user-email-login">
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

        <div className="user-password-sign-up-container">
          <div className="user-password-sign-up">
            <input
              type="password"
              name="password"
              id="user-password-sign-up"
              placeholder=" "
              value={formData.password}
              onChange={handleInputChange}
            />

            <label htmlFor="user-password-sign-up">Contraseña</label>
          </div>
        </div>

        <a className="forgot-password" href="" target="" rel="">
          ¿Olvidaste tu contraseña?
        </a>
        <a className="no-password" href="" target="" rel="">
          No tengo contraseña
        </a>

        <button
          className={`button-loan-login ${
            isFormValid ? "enabled" : "disabled"
          }`}
          onClick={() => alert("Enviado")}
          disabled={!isFormValid}
        >
          Iniciar sesión
        </button>

        <a className="text-new-register">¿No tenés cuenta?</a>

        <a className="new-register" href="" target="" rel="">
          Registrate
        </a>
      </div>
    </div>
  );
}
