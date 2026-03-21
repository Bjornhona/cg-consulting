import { RadioButtonsProps } from "@/components/ui/input/types";
import { useTranslations } from "next-intl";

const RadioButtons = ({ purpose, handleChange }: RadioButtonsProps) => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-2">
      <label>
        {t("purposeLabel")}
      </label>

      <label htmlFor="purpose" className="flex items-center gap-2">
        <input
          id="purpose"
          type="radio"
          name="purpose"
          value="Empresa / Cliente"
          checked={purpose === "Empresa / Cliente"}
          onChange={handleChange}
        />
        <p>{t("iAmCompanyClient")}</p>
      </label>

      <label className="flex items-center gap-2">
        <input
          id="purpose"
          type="radio"
          name="purpose"
          value="Candidato"
          checked={purpose === "Candidato"}
          onChange={handleChange}
        />
        <p>{t("iAmCandidate")}</p>
      </label>
    </div>
  );
};

export default RadioButtons;
