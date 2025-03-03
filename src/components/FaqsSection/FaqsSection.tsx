import './FaqsSection.css';

export default function FaqsSection() {
  // Actualiza el estado cada vez que cambia el hash de la URL
  return (
    <div className="faqs-section-container">

      <div className="faq-header-container">
        <p className="faq-header-title">
          ¿Querés saber más?
        </p>
        <p className="faq-header-subtitle">
          Despejá tus dudas y solicitá tu préstamo al instante.
        </p>

      </div>


      <div className="faq-items">
        <div className="faq-item">
          <details>
            <summary>
              <div className="faq-text-container">
                <p className="faq-text">
                  ¿Quiénes somos?
                </p>

                <svg className="faq-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 7L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
              </div>


            </summary>
            <p className="faq-content">Somos una Fintech que otorga <b>préstamos personales 100% online</b>. Estamos
              comprometidos a brindar soluciones rápidas y efectivas a las necesidades de las personas. Garantizamos
              transparencia y sinceridad a todos nuestros clientes RapiCreds.

            </p>
          </details>
        </div>


        <div className="faq-item">
          <details>
            <summary>
              <div className="faq-text-container">
                <p className="faq-text">
                  ¿Por qué elegir RapiCreds?
                </p>

                <svg className="faq-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 7L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
              </div>


            </summary>
            <p className="faq-content">Para nosotros lo más importante es que puedas acceder a un <b>préstamo fácil y
              rápido</b> para lograr tus objetivos. Por eso, otorgamos préstamos personales con mínimos requisitos. No
              te exigimos papeles o comprobantes al momento de solicitar. <b>No cobramos comisiones ni seguros</b> por
              nuestros servicios.</p>
          </details>
        </div>


        <div className="faq-item">
          <details>
            <summary>
              <div className="faq-text-container">
                <p className="faq-text">
                  ¿Cuáles son los pasos para pedir un préstamo?
                </p>

                <svg className="faq-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 7L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
              </div>


            </summary>
            <p className="faq-content">
              1. Registrarte desde la web y completar tus datos personales. Si ya estás registrado, solo debes ingresar
              en tu cuenta.
            </p>
            <p className="faq-content">
              2. Cargar foto del frente y dorso de tu DNI y una selfie con tu DNI en mano para validar tu identidad. Si
              no podés subirlas, no te preocupes porque podés omitir este paso y te las solicitaremos luego.
            </p>
            <p className="faq-content">
              3. Te pediremos que ingreses el CBU o Alias de tu cuenta Bancaria para acreditar el dinero del crédito. Es
              importante que la cuenta esté a tu nombre.
            </p>
            <p className="faq-content">
              Por último, confirmas tus datos, nosotros te contactamos para validar todo y… ¡listo!
            </p>
          </details>
        </div>


        <div className="faq-item">
          <details>
            <summary>
              <div className="faq-text-container">
                <p className="faq-text">
                  ¿Cómo sé si califico para un préstamo y si me lo aprobaron?
                </p>

                <svg className="faq-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 7L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
              </div>


            </summary>
            <p className="faq-content">
              Una vez que ingresaste con tu DNI y sexo, te diremos si pre-calificas para acceder a un crédito. Ahí mismo
              podrás elegir el monto y las cuotas. Al finalizar la solicitud, la aprobación de tu crédito quedará sujeto
              a un último análisis crediticio y validación de identidad. Para confirmar todo, nos pondremos en contacto
              con vos a la brevedad, al número que dejaste registrado.
            </p>
            <p className="faq-content">
              Si la página te muestra un mensaje que dice “¡Lo sentimos! En este momento no tenemos un crédito para
              ofrecerte”, significa que tu perfil crediticio no califica para sacar un crédito RapiCreds en este momento
              pero no te desanimes porque podrás volver a intentarlo más adelante.
            </p>
            <p className="faq-content">
              En caso de que tu solicitud no haya sido aprobada, te avisaremos por mail.
            </p>
          </details>
        </div>


        <div className="faq-item">
          <details>
            <summary>
              <div className="faq-text-container">
                <p className="faq-text">
                  ¿Cuáles son los medios de pago de las cuotas?
                </p>

                <svg className="faq-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 7L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
              </div>


            </summary>
            <p className="faq-content">
              Dependiendo de tu banco, los pagos pueden ser mediante débito directo en tu cuenta bancaria o con la boleta de pago a través de Pago Fácil, Pago Mis Cuentas, transferencia o depósito bancario.
            </p>
          </details>
        </div>

        <div className="faq-more-faqs-container">
          <p className="faq-more-faqs-text">Ver más preguntas</p>
        </div>

      </div>

    </div>

  );
}