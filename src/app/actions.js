'use server'
import { EmailTemplate } from '@/components/EmailTemplate'
import { redirect } from 'next/navigation'
import { checkBotId } from 'botid/server'

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState, formData) {
  const verification = await checkBotId()
  
  if (verification.isBot) {
    return { error: 'Unable to process your request. Please try again.', inputs: {} }
  }
  try {
    const from = formData.get('email')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const inputs = { email: from, name, phone, message }
    const missing = []
    if (!name) missing.push('name')
    if (!from) missing.push('email')
    if (!phone) missing.push('phone')
    if (!message) missing.push('message')
    if (missing.length) {
      return { error: `Please provide your ${missing.join(', ')}`, inputs }
    }

    //validate email
    const emailableUrl = `https://api.emailable.com/v1/verify?api_key=${process.env.EMAILABLE}&email=${from}&timeout=10`
    const emailableResponse = await fetch(emailableUrl, { cache: 'no-store' })
    const emailableData = await emailableResponse.json()
    console.debug('emailableData', emailableData)
    if (emailableData.state !== 'deliverable') {
      return { error: 'This email address appears invalid. Please check for typos or use a different email.', inputs }
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
