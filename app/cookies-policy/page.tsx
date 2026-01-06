import { getSettings } from "@/sanity/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | CG Consulting",
  description: "Información legal del titular del sitio web",
};

const CookiesPolicy = async () => {
  const LAST_UPDATED = "2026-01-05";
  const settings = await getSettings();
  // const CookiePolicyText_EN = (
  //   <>
  //     <h1>Cookies Policy</h1>
  //     <p><strong>Last updated:</strong> {LAST_UPDATED}</p>
  //     <p>
  //       This website uses cookies to improve the user experience and to analyze
  //       website traffic. Below you will find detailed information about what
  //       cookies are, which cookies we use, and how you can manage your
  //       preferences.
  //     </p>

  //     <h3>1. What are cookies?</h3>
  //     <p>
  //       Cookies are small text files that are stored on your device (computer,
  //       tablet, mobile phone) when you visit a website. Cookies allow the
  //       website to remember your actions and preferences over a period of time,
  //       so you do not have to re-enter them each time you return to the site.
  //     </p>
  //     <p>Cookies can be:</p>
  //     <ul className="list-disc list-inside">
  //       <li>
  //         <strong>First-party cookies:</strong> set by this website
  //       </li>
  //       <li>
  //         <strong>Third-party cookies:</strong> set by external services
  //       </li>
  //     </ul>
      
  //     <h3>2. Types of cookies used on this website?</h3>
  //     <h5>a) Strictly necessary cookies</h5>
  //     <p>
  //       These cookies are essential for the website to function properly and
  //       cannot be disabled. They are usually set in response to actions such as
  //       setting your privacy preferences.
  //     </p>
  //     <p>Example:</p>
  //     <ul className="list-disc list-inside">
  //       <li>Cookie consent status</li>
  //     </ul>   
  //     <h5>b) Analytics cookies (optional)</h5>
  //     <p>
  //       Analytics cookies help us understand how visitors interact with the
  //       website by collecting information anonymously. This allows us to improve
  //       the website’s performance and content.
  //     </p>
  //     <p>These cookies are <strong>only used if you give your explicit consent.</strong></p>
  //     <p>Possible analytics tools:</p>
  //     <ul className="list-disc list-inside">
  //       <li>Google Analytics (GA4)</li>
  //     </ul>
  //     <p>Collected data may include:</p>
  //     <ul className="list-disc list-inside">
  //       <li>Pages visited</li>
  //       <li>Time spent on pages</li>
  //       <li>Device and browser type (anonymized)</li>
  //     </ul>
  //     <p>IP anonymization is enabled where applicable.</p>
      
  //     <h3>3. Cookie list</h3>
  //     <table>
  //       <thead>
  //         <tr className="border-b border-gray-200">
  //           <th className="text-left">Cookie name</th>
  //           <th className="text-left">Provider</th>
  //           <th className="text-left p-2">Purpose</th>
  //           <th className="text-left p-2">Duration</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr className="border-b border-gray-100">
  //           <td>cookie_consent</td>
  //           <td>This website</td>
  //           <td>Stores the user’s cookie preference</td>
  //           <td>1 year</td>
  //         </tr>
  //         <tr className="border-b border-gray-100">
  //           <td>_ga, _ga_*</td>
  //           <td>Google Analytics</td>
  //           <td>Website usage analytics (only if accepted)</td>
  //           <td>Up to 2 years</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <p className="text-gray-200"> * This list may be updated if new services are added.</p>
      
  //     <h3>4. Managing cookie preferences</h3>
  //     <p>When you first visit this website, you can:</p>
  //     <ul className="list-disc list-inside">
  //       <li><strong>Accept cookies</strong></li>
  //       <li><strong>Reject cookies</strong></li>
  //     </ul>
  //     <p>
  //       You can change or withdraw your consent at any time by clicking the <strong>“Cookie Settings”</strong> link available in the footer of the website.
  //     </p>
      
  //     <h3>5. How to disable cookies via your browser</h3>
  //     <p>
  //       You can also control and delete cookies through your browser settings.
  //       Please note that disabling cookies may affect the functionality of this
  //       website.
  //     </p>
  //     <p>Instructions for popular browsers:</p>
  //     <ul className="list-disc list-inside">
  //       <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
  //       <li>
  //         Firefox:
  //         <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a>
  //       </li>
  //       <li>
  //         Safari: <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">https://support.apple.com/en-gb/guide/safari/sfri11471/mac</a>
  //       </li>
  //       <li>Edge: <a href="https://support.microsoft.com/en-us/help/4027947" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/4027947</a></li>
  //     </ul>
  //     <h3>6. Changes to this Cookie Policy</h3>
  //     <p>
  //       This Cookie Policy may be updated to reflect changes in legal
  //       requirements or website functionality. Any changes will be published on
  //       this page with an updated revision date.
  //     </p>
  //     <h3>7. Contact</h3>
  //     <p>
  //       If you have any questions about this Cookie Policy or how we use
  //       cookies, you can contact us at:
  //     </p>
  //     <p><strong>{settings.companyName}</strong></p>
  //     <p><strong>Email:</strong> {settings.email}</p>
  //   </>
  // );

  const CookiePolicyText_ES = (
    <>
      <h1>Política de Cookies</h1>
      <p><strong>Última actualización:</strong> {LAST_UPDATED}</p>
      <p>
        Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio web. A continuación, encontrarás información detallada sobre qué son las cookies, qué cookies utilizamos y cómo puedes gestionar tus preferencias.
      </p>
      <h3>1. ¿Qué son las cookies?</h3>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, teléfono móvil) cuando visitas un sitio web. Las cookies permiten al sitio web recordar tus acciones y preferencias sobre un periodo de tiempo, por lo que no tienes que volver a introducirlos cada vez que vuelvas al sitio.
      </p>
      <p>Las cookies pueden ser:</p>
      <ul className="list-disc list-inside">
        <li><strong>Cookies de primeras partes:</strong> establecidas por este sitio web</li>
        <li><strong>Cookies de terceras partes:</strong> establecidas por servicios externos</li>
      </ul>
      
      <h3>2. Tipos de cookies utilizadas en este sitio web</h3>
      <h5>a) Cookies estrictamente necesarias</h5>
      <p>
        Estas cookies son esenciales para que el sitio web funcione correctamente y no pueden ser desactivadas. Se suelen establecer en respuesta a acciones como la configuración de tus preferencias de privacidad.
      </p>
      <p>Ejemplo:</p>
      <ul className="list-disc list-inside">
        <li>Estado de consentimiento de cookies</li>
      </ul>
      <h5>b) Cookies de análisis (opcionales)</h5>
      <p>
        Las cookies de análisis nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando información de forma anónima. Esto nos permite mejorar el rendimiento y el contenido del sitio web.
      </p>
      <p>Estas cookies <strong>solo se utilizan si das tu consentimiento explícitamente.</strong></p>
      <p>Posibles herramientas de análisis:</p>
      <ul className="list-disc list-inside">
        <li>Google Analytics (GA4)</li>
      </ul>
      <p>Los datos recopilados pueden incluir:</p>
      <ul className="list-disc list-inside">
        <li>Páginas visitadas</li>
        <li>Tiempo de permanencia en las páginas</li>
        <li>Tipo de dispositivo y navegador (anónimo)</li>
      </ul>
      <p>La anonimización de IP está habilitada donde sea aplicable.</p>
      
      <h3>3. Lista de cookies</h3>
      <table>
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left">Nombre de la cookie</th>
            <th className="text-left">Proveedor</th>
            <th className="text-left p-2">Propósito</th>
            <th className="text-left p-2">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td>cookie_consent</td>
            <td>Este sitio web</td>
            <td>Almacena la preferencia de cookies del usuario</td>
            <td>1 año</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td>_ga, _ga_*</td>
            <td>Google Analytics</td>
            <td>Análisis de uso del sitio web (solo si se acepta)</td>
            <td>Hasta 2 años</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-200"> * Esta lista puede ser actualizada si se añaden nuevos servicios.</p>

      <h3>4. Gestión de preferencias de cookies</h3>
      <p>Cuando visites este sitio web, podrás:</p>
      <ul className="list-disc list-inside">
        <li><strong>Aceptar cookies</strong></li>
        <li><strong>Rechazar cookies</strong></li>
      </ul>
      <p>
        Puedes cambiar o retirar tu consentimiento en cualquier momento haciendo clic en el enlace <strong>“Configuración de cookies”</strong> disponible en el pie de página del sitio web.
      </p>
      
      <h3>5. ¿Cómo desactivar las cookies a través de tu navegador?</h3>
      <p>
        También puedes controlar y eliminar cookies a través de la configuración de tu navegador. Por favor, ten en cuenta que desactivar las cookies puede afectar la funcionalidad de este sitio web.
      </p>
      <p>Instrucciones para navegadores populares:</p>
      <ul className="list-disc list-inside">
        <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
        <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
        <li>Safari: <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">https://support.apple.com/en-gb/guide/safari/sfri11471/mac</a></li>
        <li>Edge: <a href="https://support.microsoft.com/en-us/help/4027947" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/4027947</a></li>
      </ul>
      
      <h3>6. Cambios a esta Política de Cookies</h3>
      <p>
        Esta Política de Cookies puede ser actualizada para reflejar cambios en requisitos legales o funcionalidad del sitio web. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada.
      </p>
      
      <h3>7. Contacto</h3>
      <p>
        Si tienes alguna pregunta sobre esta Política de Cookies o cómo utilizamos las cookies, puedes contactarnos a través de:</p>
      <p><strong>{settings.companyName}</strong></p>
      <p><strong>Email:</strong> {settings.email}</p>
    </>
  );

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-4">
        {CookiePolicyText_ES}
      </div>
    </main>
  );
};

export default CookiesPolicy;
