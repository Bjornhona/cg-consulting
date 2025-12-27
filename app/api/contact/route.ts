import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, message, website, privacyAccepted } = body

    // ✅ Server-side validation (VERY important)
    if (!name || !email || !message || !privacyAccepted) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    // 2️⃣ Validate email format (server-side!)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // 4️⃣ Check for website field (hidden but required)
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 }) // Pretend success
    }

    // 3️⃣ Ensure email credentials exist
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.error("❌ Missing email environment variables");
      return NextResponse.json(
        { error: "Email configuration is not available" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      // from: 'Contacto <onboarding@resend.dev>', // by Resend.com, always works, replace once domain verified
      from: 'CG Consulting <catalina@cg-consulting.es>',
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || '—'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);

    return NextResponse.json(
      { error: 'Error sending message'},
      { status: 500 }
    )
  }
}
