import React, { useState } from "react";
import "./LoanQuestion.css";
import { motion } from "framer-motion";

function ShadowCard({ children }: { children: React.ReactNode }) {
  return <div className="shadow_card_question">{children}</div>;
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="shadow_card_question">{children}</div>;
}

function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default function LoanQuestion() {
  const [activeTab, setActiveTab] = useState("solicitar");

  return (
    <div className="">
      <Card>
        <h2 className="loan-question-title">Preguntas frecuentes</h2>
        <h2 className="loan-question-title-2">
          Obtené las respuestas que necesitás y solicitá el préstamo para vos.
        </h2>

        {/* Botones con nombres personalizados */}
        <div className="flex space-x-4 mt-4 mb-6">
          <Button
            className={`tab-button Nosotros ${
              activeTab === "Nosotros" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Nosotros")}
          >
            Nosotros
          </Button>

          <Button
            className={`tab-button Requisitos ${
              activeTab === "Requisitos" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Requisitos")}
          >
            Requisitos
          </Button>

          <Button
            className={`tab-button Solicitud ${
              activeTab === "Solicitud" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Solicitud")}
          >
            Solicitud
          </Button>

          <Button
            className={`tab-button Registro ${
              activeTab === "Registro" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Registro")}
          >
            Registro
          </Button>
          <Button
            className={`tab-button Cuotas ${
              activeTab === "Cuotas" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Cuotas")}
          >
            Cuotas y pagos
          </Button>
          <Button
            className={`tab-button Renovacion ${
              activeTab === "Renovacion" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Renovacion")}
          >
            Renovación
          </Button>
        </div>
        <hr className="divider" />

        <div className="text-gray-700 text-lg">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activeTab === "Nosotros" && (
              <>
                <h1>¿Qué es RapiCreds?</h1>
                <p>
                  Somos una Fintech que otorga préstamos personales 100% online.
                  Estamos comprometidos a brindar soluciones rápidas y efectivas
                  a las necesidades de las personas. Garantizamos transparencia
                  y sinceridad a todos nuestros clientes RapiCreds.
                </p>
                <h1>¿Cuál es el horario de atención de RapiCreds?</h1>
                <p>
                  Nuestros horarios y días de atención son de lunes a viernes de
                  8:00 a 20:00 hs. Tené en cuenta que podés solicitar tu crédito
                  online las 24 horas del día. En caso de estar aprobado, este
                  será depositado en días hábiles.
                </p>
                <h1>¿Cuál es el horario de atención de RapiCreds?</h1>
                <p>
                  Nuestros horarios y días de atención son de lunes a viernes de
                  8:00 a 20:00 hs. Tené en cuenta que podés solicitar tu crédito
                  online las 24 horas del día. En caso de estar aprobado, este
                  será depositado en días hábiles.
                </p>
                <h1>¿Cuáles son los medios de contacto de RapiCreds?</h1>
                <p>
                  Podés contactarte con nosotros a través de WhatsApp al +54
                  91126706752, enviando un correo electrónico a
                  hola@rapicreds.com o por nuestras redes sociales Instagram
                  @RapiCreds.ar y Facebook /RapiCreds.ar o /RapiCreds.comunidad.
                  O bien, podés enviarnos tu consulta a través del chat que se
                  encuentra en nuestra página web.
                </p>

                <p>
                  También podés solicitar tu crédito con nuestros asesores
                  comerciales vía WhatsApp al +54 91126706752
                </p>
                <h1>¿Por qué elegir RapiCreds?</h1>
                <p>
                  Para nosotros lo más importante es que puedas acceder a un
                  préstamo fácil y rápido para lograr tus objetivos. Por eso,
                  otorgamos préstamos personales con mínimos requisitos. No te
                  exigimos papeles o comprobantes al momento de solicitar. No
                  cobramos comisiones ni seguros por nuestros servicios.
                </p>
              </>
            )}
            {activeTab === "Requisitos" && (
              <>
                <h1>¿Qué requisitos se necesitan?</h1>
                <p>
                  Los requisitos son ser mayor de 18 años, tener una caja de
                  ahorro, percibir ingresos mensuales, y tener un buen historial
                  crediticio.
                </p>
                <h1>
                  ¿Cómo sé si califico para un crédito y si me lo aprobaron?
                </h1>
                <p>
                  Una vez que ingresaste con tu DNI y sexo, te diremos si
                  pre-calificas para acceder a un crédito. Ahí mismo podrás
                  elegir el monto y las cuotas. Al finalizar la solicitud, la
                  aprobación de tu crédito quedará sujeto a un último análisis
                  crediticio y validación de identidad. Para confirmar todo, nos
                  pondremos en contacto con vos a la brevedad, al número que
                  dejaste registrado.
                </p>

                <p>
                  Si la página te muestra un mensaje que dice “¡Lo sentimos! En
                  este momento no tenemos un crédito para ofrecerte”, significa
                  que tu perfil crediticio no califica para sacar un crédito
                  RapiCreds en este momento pero no te desanimes porque podrás
                  volver a intentarlo más adelante.
                </p>

                <p>
                  En caso de que tu solicitud no haya sido aprobada, te
                  enviaremos un mail informándote la baja.
                </p>
                <h1>
                  ¿Cuál es el monto máximo que puedo pedir, en qué plazo y con
                  qué intereses?
                </h1>
                <p>
                  El monto que tengas disponible dependerá de tu perfil
                  crediticio al momento de registrarte.
                </p>
                <h1>Estoy en el Veraz, ¿puedo hacer la solicitud?</h1>
                <p>
                  No damos créditos a personas en situación de Veraz, ya que uno
                  de nuestros requisitos es tener un buen historial crediticio.
                </p>
              </>
            )}

            {activeTab === "Solicitud" && (
              <>
                <h1>¿Cómo comienzo mi solicitud?</h1>
                <p>
                  Una vez que crees una cuenta en nuestra página e ingreses tus
                  datos personales, vas a poder comenzar con la solicitud. Ahí
                  mismo podrás ver la calculadora de tu crédito, esta te
                  indicará el monto máximo y cantidad de cuotas máximas que
                  podés solicitar.
                </p>
                <h1>¿Qué datos me piden?</h1>
                <p>
                  Te pediremos tu número de celular y domicilio actual. Una vez
                  completada esa información te pediremos un CBU, que debe
                  encontrarse a tu nombre por motivos de seguridad, y que
                  cargues las fotos del frente de tu DNI, dorso, y una selfie
                  tuya con DNI en mano.
                </p>
                <h1>¿Qué pasa si no puedo cargar las fotos de mi DNI?</h1>
                <p>
                  ¡No te preocupes! Podés omitir ese paso y te las pediremos
                  luego.
                </p>
                <h1>
                  Si pido un crédito fuera del horario bancario. ¿Cuándo se
                  deposita el dinero en mi cuenta?
                </h1>
                <p>
                  El crédito se aprueba los días hábiles entre las 8hs y las
                  20hs. Todos los créditos que se soliciten fuera de ese horario
                  serán verificados en el transcurso del siguiente día hábil.
                </p>
                <h1>¿Cómo sé si aprobaron mi crédito?</h1>
                <p>
                  Al terminar la solicitud, el crédito queda preaprobado y
                  sujeto a un último análisis crediticio. Nos pondremos en
                  contacto con vos a la brevedad, por vía telefónica al número
                  que dejaste registrado. En caso de rechazarse, te enviaremos
                  un mail informándote la baja del mismo.
                </p>
              </>
            )}
            {activeTab === "Registro" && (
              <>
                <h1>¿Cómo creo mi usuario?</h1>
                <p>
                  Para registrarte como usuario, tenés que ingresar tus datos en
                  el formulario de registro que se encuentra en nuestra página.
                  Es necesario que pongas un correo electrónico al que tengas
                  acceso y una contraseña.
                </p>

                <p>
                  En el segundo paso, completá tus datos personales tal como
                  figuran en tu DNI (nombre, apellido, sexo y DNI) y número de
                  celular propio.
                </p>
                <h1>¿Qué hago si olvidé mi contraseña?</h1>
                <p>
                  Si olvidaste tu contraseña, podés recuperarla presionando
                  “Olvidé mi contraseña” al intentar iniciar sesión. Te
                  enviaremos un mail con un link para que la recuperes. Si te
                  llegaron varios mails de recuperación de clave, recordá entrar
                  siempre al último que te haya llegado.
                </p>
                <h1>¿Qué hago si ingresé algún dato erróneo al registrarme?</h1>
                <p>
                  Si ingresaste mal algún dato, por favor escribinos a nuestro
                  WhatsApp +54 911 2670 6752 o por mail a hola@rapicreds.com
                  para que podamos ayudarte.
                </p>
                <h1>¿Es seguro completar mis datos en RapiCreds?</h1>
                <p>
                  Si, los datos de nuestros clientes y de todas las personas que
                  se registran en nuestra web están protegidos de acuerdo con la
                  Ley 25.326 de Protección de los Datos Personales.
                </p>
                <h1>
                  ¿Qué hago si mi DNI se encuentra registrado con otro mail?
                </h1>
                <p>
                  Te pedimos que nos escribas por algún medio de contacto a la
                  brevedad para poder ayudarte. Si tenés problemas con tu mail,
                  escribinos por WhatsApp +54 911 2670 6752 o envíanos un correo
                  electrónico a hola@rapicreds.com.
                </p>
              </>
            )}
            {activeTab === "Cuotas" && (
              <>
                <h1>¿Las cuotas son fijas?</h1>
                <p>
                  Las cuotas son fijas y mensuales, el importe no se modifica de
                  acuerdo a la inflación ni suba del dólar.
                </p>
                <h1>¿Cuáles son los medios para abonar las cuotas?</h1>

                <p>
                  Dependiendo de tu banco, los pagos pueden ser mediante débito
                  directo en tu cuenta bancaria o con la boleta de pago a través
                  de Pago Fácil, Pago Mis Cuentas, transferencia o depósito
                  bancario. La boleta te llegará por correo electrónico a tu
                  mail registrado.
                </p>
              </>
            )}
            {activeTab === "Renovacion" && (
              <>
                <h1>¿En qué momento puedo solicitar un nuevo préstamo?</h1>
                <p>
                  Podés solicitarlo cuando tengas abonada al menos una cuota de
                  tu último préstamo vigente.
                </p>
                <h1>¿Dónde veo mi monto disponible para volver a solicitar?</h1>
                <p>
                  Ingresando a tu cuenta Rapicreds vas a poder verificarlo. El
                  importe dependerá de tus créditos activos y perfil crediticio.
                </p>
                <h1>¿Por qué rechazaron mi nueva solicitud?</h1>
                <p>
                  Cada vez que se realiza una solicitud, realizamos un nuevo
                  análisis crediticio sobre tu perfil. Si tenés mora vigente con
                  otras entidades, cuotas impagas de tu crédito, o pocas cuotas
                  abonadas, lamentablemente el sistema no nos permitirá
                  otorgarte un nuevo crédito.
                </p>
                <h1>¿Qué hago si ingresé algún dato erróneo al registrarme?</h1>
                <p>
                  Si ingresaste mal algún dato, por favor escribinos a nuestro
                  WhatsApp +54 911 2670 6752 o por mail a hola@rapicreds.com
                  para que podamos ayudarte.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
