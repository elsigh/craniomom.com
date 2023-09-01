'use client'

import { useId, useState } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import { redirect } from 'next/navigation'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

import { sendContactEmail } from '@/app/actions'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}
export function ContactForm() {
  const { pending } = useFormStatus()
  const [error, setError] = useState('')
  const send = async (formData) => {
    const { sent, error } = await sendContactEmail(formData)
    console.debug('action send', { sent, error })
    if (sent) {
      redirect('/contact/thanks')
      return
    }
    setError(error)
  }
  return (
    <FadeIn className="lg:order-last">
      <form action={send}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contact Angela
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
          />
          <TextInput label="Message" name="message" />
        </div>
        <Button disabled={pending} type="submit" className="mt-10">
          {pending ? 'Sending...' : 'Send a message'}
        </Button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </FadeIn>
  )
}
