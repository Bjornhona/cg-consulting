import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/ui/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: 'Política de Privacidad | CG Consulting',
  description: 'Información legal del titular del sitio web',
}

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContent />
  )
}

export default PrivacyPolicy
