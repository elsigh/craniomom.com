'use server'

import { EmailTemplate } from '@/components/EmailTemplate'

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData) {
  try {
    const from = formData.get('email')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const data = await resend.emails.send({
      from: 'noreply@craniomom.com',
      to: ['info@craniomom.com'],
      subject: 'Contact from website',
      react: EmailTemplate({ from, message, name, phone }),
    })
    return { sent: true, error: null }
  } catch (error) {
    console.error(error)
    return { sent: false, error }
  }
}
