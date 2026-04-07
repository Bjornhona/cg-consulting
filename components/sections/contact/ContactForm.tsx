"use client";
import { motion } from "framer-motion";
import Input from "@/components/ui/input/Input";
import Textarea from "@/components/ui/input/TextArea";
import Button from "@/components/ui/button/Button";
import { Link } from "@/i18n/navigation";
import { useMemo, useState } from "react";
import { useToast } from "@/components/ui/toast/ToastContext";
import RadioButtons from "@/components/ui/input/RadioButtons";
import { trackEvent, EVENTS } from "@/lib/tracking";
import { useTranslations } from "next-intl";

const DEFAULT_VISIBLE_FIELDS = [
  "name",
  "email",
  "phone",
  "purpose",
  "company",
  "message",
];

type Props = {
  visibleFields?: string[];
};

export default function ContactForm({
  visibleFields = DEFAULT_VISIBLE_FIELDS,
}: Props) {
  const t = useTranslations("contact");
  const { showToast } = useToast();
  const fields = useMemo(
    () => new Set(visibleFields || DEFAULT_VISIBLE_FIELDS),
    [visibleFields],
  );
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    privacyAccepted: false,
    website: "",
    phone: "",
    purpose: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    (!fields.has("name") || form.name.trim().length > 0) &&
    (!fields.has("email") || isEmailValid) &&
    (!fields.has("message") || form.message.trim().length > 0) &&
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
        const message = data?.error || t("errorSendingMessage");
        throw new Error(message);
      }

      if (res.ok) {
        trackEvent(EVENTS.FORM_SUBMIT, {
          form: "contact_form",
        });

        showToast("success", t("successSendingMessage"));

        // Reset form state
        setForm({
          name: "",
          email: "",
          company: "",
          message: "",
          privacyAccepted: false,
          website: "",
          phone: "",
          purpose: "",
        });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : t("networkError");

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
        {fields.has("name") && (
          <Input
            label={t("nameLabel") + " *"}
            name="name"
            required
            placeholder={t("namePlaceholder")}
            value={form.name}
            onChange={handleChange}
          />
        )}

        {fields.has("email") && (
          <Input
            label={t("emailLabel") + " *"}
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            value={form.email}
            onChange={handleChange}
            error={form.email && !isEmailValid ? t("invalidEmail") : undefined}
          />
        )}

        {fields.has("phone") && (
          <Input
            label={t("phoneLabel")}
            name="phone"
            type="tel"
            placeholder={t("phonePlaceholder")}
            value={form.phone}
            onChange={handleChange}
            error={form.phone && !isPhoneValid ? t("invalidPhone") : undefined}
          />
        )}

        {fields.has("purpose") && (
          <RadioButtons purpose={form.purpose} handleChange={handleChange} />
        )}

        {fields.has("company") && (
          <Input
            label={t("companyLabel")}
            name="company"
            placeholder={t("companyPlaceholder")}
            value={form.company}
            onChange={handleChange}
          />
        )}

        {fields.has("message") && (
          <Textarea
            label={t("messageLabel") + " *"}
            name="message"
            required
            placeholder={t("messagePlaceholder")}
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
        )}

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
            {t("privacyAcceptedLabel")}{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="underline hover:text-white transition-colors"
            >
              {t("privacyPolicyLink")}
            </Link>{" "}
            *
          </span>
        </label>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
          onClick={() => {
            trackEvent(EVENTS.CTA_CLICK, {
              location: "contact_form",
              label: "submit_button",
            });
          }}
        >
          {loading ? t("sending") + "..." : t("submitButton")}
        </Button>
      </div>

      <p className="text-xs text-gray-medium">* {t("requiredFields")}</p>
    </motion.form>
  );
}
