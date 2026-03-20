import CookiesPolicyContent from "@/components/ui/legal/CookiesPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | CG Consulting",
  description: "Información legal del titular del sitio web",
};

const CookiesPolicy = async () => {
  return (
    <CookiesPolicyContent />
  )
};

export default CookiesPolicy;
