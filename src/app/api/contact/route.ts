import { NextResponse } from 'next/server'

const recipient = 'info@soilwatch.eu'

type ContactPayload = {
  name?: unknown
  email?: unknown
  org?: unknown
  type?: unknown
  message?: unknown
}

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = readString(payload.name)
  const email = readString(payload.email)
  const org = readString(payload.org)
  const type = readString(payload.type)
  const message = readString(payload.message)

  if (!name || !email || !type || !message) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: 'Contact sender email is not configured.' }, { status: 500 })
  }

  const subject = `SoilWatch enquiry: ${type}`
  const html = `
    <h2>New SoilWatch contact enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organisation:</strong> ${escapeHtml(org || 'Not provided')}</p>
    <p><strong>Project / Interest Type:</strong> ${escapeHtml(type)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'SoilWatch contact form',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: recipient,
      reply_to: email,
      subject,
      html,
    }),
  })

  if (!response.ok) {
    const details = await response.json().catch(() => null)
    const error =
      process.env.NODE_ENV === 'development' && details?.message
        ? details.message
        : 'Unable to send message right now.'

    return NextResponse.json({ error }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
