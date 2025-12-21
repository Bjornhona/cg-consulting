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

        <p className="mb-4">
          <strong>Titular del sitio web:</strong><br/>
          <ul>
            <li>Nombre comercial: {settings?.siteTitle}</li>
            {settings?.companyName && <li>Razón social: {settings.companyName}</li>}
            {settings?.companyNIF && <li>NIF/CIF: {settings.companyNIF}</li>}
            {settings?.location && <li>Domicilio social: {settings.location}</li>}
            {settings?.email && <li>Correo electrónico: {settings.email}</li>}
            {settings?.phone && <li>Teléfono: {settings.phone}</li>}
          </ul>
        </p>

        <p className="mb-4">
          <strong>Actividad:</strong><br/>
          Servicios de consultoría en recursos humanos, selección,
          evaluación y formación.
        </p>

        <p className="mb-4">
          <strong>Condiciones de uso:</strong><br/>
          El acceso y uso de este sitio web atribuye la
          condición de usuario e implica la aceptación plena de las presentes
          condiciones. El titular se reserva el derecho a modificar, en cualquier momento y sin
          previo aviso, la presentación y configuración del sitio web, así como el
          presente aviso legal.
        </p>

        <p className="mb-4">
          <strong>Propiedad intelectual e industrial:</strong><br/>
          Todos los contenidos del sitio web
          (textos, imágenes, diseño, código fuente, etc.) son titularidad del
          propietario o de terceros autorizados, quedando prohibida su
          reproducción sin autorización expresa.
        </p>
        
        <p className="mb-4">
          <strong>Legislación aplicable y jurisdicción:</strong><br/>
          La relación entre el usuario y el
          titular se regirá por la normativa española vigente. Para cualquier
          controversia que pudiera derivarse, ambas partes se someterán a los
          juzgados y tribunales de Barcelona.
        </p>
      </div>
    </main>
  )
}

export default LegalNoticeContent;
