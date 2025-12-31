"use client";
import { motion } from "framer-motion";
import Input from "@/components/ui/input/Input";
import Textarea from "@/components/ui/input/TextArea";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useToast } from "@/components/ui/toast/ToastContext";
import RadioButtons from "@/components/ui/input/RadioButtons";

export default function ContactForm() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    privacyAccepted: false,
    website: "",
    phone: "",
    purpose: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

const isPhoneValid = useMemo(() => {
  if (!form.phone) return true;
  return /^[+]?[\d\s\-()]{7,20}$/.test(form.phone);
}, [form.phone]);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }, [form.email]);

  const isFormValid =
    form.name.trim().length > 0 &&
    isEmailValid &&
    form.message.trim().length > 0 &&
    form.privacyAccepted &&
    isPhoneValid;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || !isFormValid) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        const message =
          data?.error || "No se pudo enviar el mensaje. Inténtalo de nuevo.";
        throw new Error(message);
      }

      showToast(
        "success",
        "Mensaje enviado correctamente. Te contactaremos pronto."
      );

      // Reset form state
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        privacyAccepted: false,
        website: "",
        phone: "",
        purpose: ""
      });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Error de red. Inténtalo más tarde.";

      showToast("error", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col"
      onSubmit={handleSubmit}
      noValidate
    >
      <Input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        value={form.website}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-6">
        <Input
          label="Nombre *"
          name="name"
          required
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Email *"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
          error={form.email && !isEmailValid ? "Email inválido" : undefined}
        />

        <Input
          label="Teléfono (opcional)"
          name="phone"
          type="tel"
          placeholder="+34 612 345 678"
          value={form.phone}
          onChange={handleChange}
          error={form.phone && !isPhoneValid ? "Número de teléfono inválido" : undefined}
        />

        <RadioButtons purpose={form.purpose} handleChange={handleChange} />

        <Input
          label="Empresa (opcional)"
          name="company"
          placeholder="Nombre de la empresa"
          value={form.company}
          onChange={handleChange}
        />

        <Textarea
          label="Mensaje *"
          name="message"
          required
          placeholder="Cuéntanos brevemente en qué podemos ayudarte"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />

        <label className="flex items-start gap-3 text-sm text-gray-medium">
          <input
            type="checkbox"
            name="privacyAccepted"
            checked={form.privacyAccepted}
            onChange={handleChange}
            required
            className="mt-1 accent-primary"
          />
          <span>
            He leído y acepto la{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="underline hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>{" "}
            *
          </span>
        </label>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </div>

      <p className="text-xs text-gray-medium">
        * Campos obligatorios. Respondemos normalmente en menos de 24 horas.
      </p>
    </motion.form>
  );
}
