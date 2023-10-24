'use server'
import { EmailTemplate } from '@/components/EmailTemplate'
import { redirect } from 'next/navigation'

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState, formData) {
  try {
    const from = formData.get('email')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const message = formData.get('message')
    if (!from || !name || !phone || !message) {
      return { error: 'Please fill out all fields' }
    }
    const data = await resend.emails.send({
      from: 'noreply@craniomom.com',
      to: ['info@craniomom.com'],
      subject: 'Contact from website',
      react: EmailTemplate({ from, message, name, phone }),
    })
  } catch (error) {
    console.error(error)
    return { error }
  }
  redirect('/contact/thanks')
}
