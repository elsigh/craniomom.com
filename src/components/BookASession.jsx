'use client'
import Cal from '@calcom/embed-react'

export function BookASession() {
  return (
    <Cal
      calLink="craniomom"
      config={{
        name: '',
        email: '',
        notes: '',
        guests: [],
        theme: '',
      }}
    />
  )
}

export default function BookButton() {
  return <button data-cal-link="craniomom">Book a Session</button>
}
