'use client'

import { useActionState, useEffect, useId, useRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

import { sendContactEmail } from '@/app/actions'

function Spinner({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

function TextInput({ label, ...props }) {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
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
  const [{ error, inputs }, formAction] = useActionState(sendContactEmail, {
    error: null,
  })
  const formRef = useRef(null)

  useEffect(() => {
    if (error && formRef.current) {
      const firstInput = formRef.current.querySelector('input')
      firstInput?.focus()
    }
  }, [error])

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} action={formAction}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contact Angela
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            required
            value={inputs?.name}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={inputs?.email}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            value={inputs?.phone}
          />
          <TextInput label="Message" name="message" required value={inputs?.message} />
        </div>
        <SubmitButton />
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </FadeIn>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type="submit" className="mt-10">
      {pending && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
      Send a message
    </Button>
  )
}
