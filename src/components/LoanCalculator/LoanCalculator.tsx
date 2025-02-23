import React, { useState } from "react";

function ShadowCard({children}: { children: React.ReactNode }) {
  return (
    <div className="shadow_card">
      {children}
    </div>
  );
}

function Card({children}: { children: React.ReactNode }) {
  return <div className="p-8 bg-white shadow-2xl rounded-2xl w-full max-w-lg border border-gray-200">{children}</div>;
}

function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void, className: string }) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(1800000);
  const [installments, setInstallments] = useState(18);
  const interestRate = 0.05; // Tasa de interés ficticia

  const monthlyPayment = (
    (amount * interestRate) / (1 - Math.pow(1 + interestRate, -installments))
  ).toFixed(2);

  let [entero, decimal] = monthlyPayment.split('.');  // Aseguramos que haya 2 decimales

  // Formateamos la parte entera con separadores de miles
  entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Unimos la parte entera y decimal con coma
  const fixedMonthlyPayment = `${entero},${decimal}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <ShadowCard>
        <Card>
          <h2 className="loan_calculator_title">Importe a solicitar</h2>


          <div className="mb-6">
            <p className="loan_current_amount">$ {amount.toLocaleString()}</p>

            <div className="input_container">
              <input
                type="range"
                min="10000"
                max="1800000"
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="range"
              />
            </div>


            <div className="loan_amount_container">
              <p className="loan_min_amount">$10.000</p>
              <p className="loan_max_amount">$1.800.000</p>
            </div>


          </div>

          <div className="loan-information-container">
            <div className="loan-information-month-container">
              <p className="loan-information-months-amount">{installments} cuotas</p>
              <p className="loan-information-months-text">de</p>
            </div>

            <div className="loan-information-payment-container">
              <p className="loan-information-payment-amount">$ {fixedMonthlyPayment}</p>
              <p className="loan-information-payment-text">por mes</p>
            </div>
          </div>


          <div className="input_container">
            <input
              type="range"
              min="3"
              max="18"
              step="1"
              value={installments}
              onChange={(e) => setInstallments(Number(e.target.value))}
              className="range"
            />

            <div className="loan_months_container">
              <p className="loan_min_months">3 cuotas</p>
              <p className="loan_max_months">18 cuotas</p>
            </div>

          </div>


          <Button className="button-continue-loan" onClick={() => alert("Préstamo solicitado")}>Continuar</Button>
        </Card>
      </ShadowCard>

    </div>
  );
}
