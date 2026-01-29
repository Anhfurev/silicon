import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Мэдээлэл дутуу байна" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Шинэ хүсэлт – ${name}`,
      html: `
        <h3>Шинэ холбоо барих хүсэлт</h3>
        <p><strong>Нэр:</strong> ${name}</p>
        <p><strong>Имэйл:</strong> ${email}</p>
        <p><strong>Хүсэлт:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Имэйл илгээхэд алдаа гарлаа" },
      { status: 500 }
    )
  }
}
