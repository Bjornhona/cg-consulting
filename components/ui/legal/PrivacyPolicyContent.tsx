'use client'
import { useSettings } from "@/lib/SettingsProvider";

const PrivacyPolicyContent = () => {
  const settings = useSettings()

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4">Política de Privacidad</h1>
        <p className="mb-4">
          <strong>Responsable del tratamiento:</strong>
          <ul>
            {settings?.companyName && <li>Nombre comercial: {settings.companyName}</li>}
            {settings?.companyName && <li>Razón social: {settings.contactPerson}</li>}
            {settings?.companyNIF && <li>NIF/CIF: {settings.companyNIF}</li>}
            {settings?.location && <li>Dirección: {settings.location}</li>}
            {settings?.email && <li>Correo electrónico: {settings.email}</li>}
          </ul>
        </p>

          <p className="mb-4"><strong>Datos personales recogidos:</strong><br/>
          A través del formulario de contacto se recogen los siguientes datos:
          <ul>
            <li>Nombre: Nombre del usuario</li>
            <li>Dirección de correo electrónico: Email del usuario</li>
            <li>Mensaje: Mensaje del usuario</li>
          </ul></p>

          <p className="mb-4"><strong>Finalidad del tratamiento:</strong><br/>
          Los datos se utilizan exclusivamente para atender consultas, solicitudes de información
          o contactos profesionales realizados por el usuario.</p>

          <p className="mb-4"><strong>Legitimación:</strong><br/>
          La base legal para el tratamiento de los datos es el consentimiento expreso del usuario,
          otorgado mediante la aceptación de la presente política de privacidad.</p>

          <p className="mb-4"><strong>Conservación de los datos:</strong><br/>
          Los datos se conservarán únicamente durante el tiempo necesario para atender la consulta
          y mientras puedan derivarse responsabilidades legales.</p>

          <p className="mb-4"><strong>Destinatarios:</strong><br/>
          No se cederán datos a terceros, salvo obligación legal.
          Los datos podrán ser tratados por proveedores de servicios necesarios para el funcionamiento
          del sitio web (hosting, correo electrónico), bajo contratos de confidencialidad.</p>

          <p className="mb-4"><strong>Derechos del usuario:</strong><br/>
          El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
          limitación y portabilidad enviando una solicitud al correo electrónico indicado. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección
          de Datos (www.aepd.es).</p>

          <p className="mb-4"><strong>Seguridad:</strong><br/>
          El titular adopta las medidas técnicas y organizativas necesarias para garantizar la
          seguridad de los datos personales.
        </p>
      </div>
    </main>
  )
}

export default PrivacyPolicyContent;
