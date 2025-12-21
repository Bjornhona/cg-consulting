import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Política de Cookies | CG Consulting',
  description: 'Información legal del titular del sitio web',
}

const CookiesPolicy = () => {
  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4">Política de Cookies</h1>
        <p className="mb-4">
          Este sitio web no utiliza cookies propias ni de terceros con fines
          analíticos, publicitarios o de seguimiento.
        </p>

        <p className="mb-4">
          Únicamente se utilizan cookies técnicas necesarias para el correcto
          funcionamiento del sitio web.
        </p>

        <p className="mb-4">
          En caso de que en el futuro se incorporen cookies adicionales, esta
          política será actualizada convenientemente.
        </p>
      </div>
    </main>
  );
};

export default CookiesPolicy;
