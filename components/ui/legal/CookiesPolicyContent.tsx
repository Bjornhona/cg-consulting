"use client";
import { useSettings } from "@/lib/SettingsProvider";

const CookiesPolicyContent = () => {
  const LAST_UPDATED = "2026-01-05";
  const settings = useSettings();
  
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

export default CookiesPolicyContent;
