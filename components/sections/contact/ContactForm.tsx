'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input/Input'
import { Textarea } from '@/components/ui/input/TextArea'
import Button from '@/components/ui/button/Button'

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <Input
        label="Nombre"
        name="name"
        required
        placeholder="Tu nombre"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        required
        placeholder="tu@email.com"
      />

      <Input
        label="Empresa"
        name="company"
        placeholder="Nombre de la empresa (opcional)"
      />

      <Textarea
        label="Mensaje"
        name="message"
        required
        placeholder="Cuéntanos brevemente en qué podemos ayudarte"
        rows={5}
      />

      <Button variant="primary" size="lg">
        Enviar mensaje
      </Button>

      <p>
        Respondemos normalmente en menos de 24 horas.
      </p>
    </motion.form>
  )
}
