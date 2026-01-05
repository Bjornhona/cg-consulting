'use client'
import { useSettings } from "@/lib/SettingsProvider";

const LegalNoticeContent = () => {
  const settings = useSettings()

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4">Aviso Legal</h1>
        <p className="mb-4">
          En cumplimiento con el deber de información establecido en la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
          del Comercio Electrónico (LSSI-CE), se facilitan a continuación los
          siguientes datos:
        </p>

        <div className="mb-4">
          <p><strong>Titular del sitio web:</strong><br/></p>
          <ul>
            <li><p>Nombre comercial: {settings?.siteTitle}</p></li>
            {settings?.companyName && <li><p>Razón social: {settings.companyName}</p></li>}
            {settings?.companyNIF && <li><p>NIF/CIF: {settings.companyNIF}</p></li>}
            {settings?.location && <li><p>Domicilio social: {settings.location}</p></li>}
            {settings?.email && <li><p>Correo electrónico: {settings.email}</p></li>}
            {settings?.phone && <li><p>Teléfono: {settings.phone}</p></li>}
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>Actividad:</strong></p>
          <p>Servicios de consultoría en recursos humanos, selección,
          evaluación y formación.</p>
        </div>

        <div className="mb-4">
          <p><strong>Condiciones de uso:</strong></p>
          <p>El acceso y uso de este sitio web atribuye la
          condición de usuario e implica la aceptación plena de las presentes
          condiciones. El titular se reserva el derecho a modificar, en cualquier momento y sin
          previo aviso, la presentación y configuración del sitio web, así como el
          presente aviso legal.</p>
        </div>

        <div className="mb-4">
          <p><strong>Propiedad intelectual e industrial:</strong></p>
          <p>Todos los contenidos del sitio web
          (textos, imágenes, diseño, código fuente, etc.) son titularidad del
          propietario o de terceros autorizados, quedando prohibida su
          reproducción sin autorización expresa.</p>
        </div>
        
        <div className="mb-4">
          <p><strong>Legislación aplicable y jurisdicción:</strong></p>
          <p>La relación entre el usuario y el
          titular se regirá por la normativa española vigente. Para cualquier
          controversia que pudiera derivarse, ambas partes se someterán a los
          juzgados y tribunales de Barcelona.</p>
        </div>
      </div>
    </main>
  )
}

export default LegalNoticeContent;
