import { RadioButtonsProps } from "@/components/ui/input/types";

const RadioButtons = ({ purpose, handleChange }: RadioButtonsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>
        Identifica el propósito de la consulta (opcional)
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
        <p>Soy Empresa / Cliente</p>
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
        <p>Soy Candidato</p>
      </label>
    </div>
  );
};

export default RadioButtons;
