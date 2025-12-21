import LegalNoticeContent from "@/components/ui/legal/LegalNoticeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aviso Legal | CG Consulting',
  description: 'Información legal del titular del sitio web',
}

const LegalNotice = () => {
  return (
    <LegalNoticeContent />
  );
};

export default LegalNotice;
