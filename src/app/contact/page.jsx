import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'

function ContactDetails() {
  return (
    <FadeIn>
      <Offices className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email:{' '}
          <Link
            href={`mailto:info@craniomom.com`}
            className="text-neutral-600 hover:text-neutral-950"
          >
            info@craniomom.com
          </Link>
        </h2>
      </Border>
    </FadeIn>
  )
}

const faqs = [
  {
    question: 'What is craniosacral and why is helpful for babies?',
    answer:
      'Craniosacral is a gentle hands-on therapy that helps ease restrictions in the body and create better function. Often small restrictions or tightness can cause a baby to fuss, eat and sleep poorly. Craniosacral also provides ease in oral tissues in a way that can support babies before and after a tongue or lip tie release. ',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Unfortunately, similar to many holistic modalities, craniosacral is not covered by usual insurance. While insurance company CEO’s make millions, insurance companies are here to say no. Consider craniosacral an investment in your health, in your child’s health.',
  },
  {
    question: 'Can I use my FSA or HSA?',
    answer:
      'Angela will provide a receipt to allow patients to make their own claims to reimbursement accounts.',
  },
  {
    question:
      'My lactation consultant referred me to Angela for craniosacral therapy and tongue tie assessment. Do you accept insurance? Is there an extra fee? How long is the session? What should I expect during the session?',
    answer:
      'Initial visits for babies with feeding concerns are 75 minutes. New patient forms must be completed prior to the visit. Angela will perform a simple intake, detailed physical and oral motor exam including a tongue-tie exam. She will give parents exercises for a home program as well as treat the baby with craniosacral therapy.  Craniosacral is not covered by insurance.',
  },
  {
    question: 'Do you see patients in San Francisco?',
    answer:
      'Yes. On Fridays, appointments are available in Pacific Heights in San Francisco by appointment.',
  },
  {
    question: 'Can Angela do an in-home visit?',
    answer:
      'House calls are possible and reserved for babies under 8 weeks of age.',
  },
  {
    question: 'Can Angela assess a tongue tie?',
    answer:
      'Yes. Angela works with babies treating all kinds of feeding difficulties. She has trained with the developers of clinically validated tools for diagnosing tongue tie. She can guide families in understanding oral function and create a care plan for families who are struggling with breastfeeding and infant feeding.',
  },
  {
    question: 'Why is Angela different than other providers for baby bodywork?',
    answer:
      'As a licensed independent practitioner, a family nurse practitioner, she has committed countless hours of training to serve over 1000 babies with care and specialized attention. On top of basic primary and nursing care, she has 3000+ hours of bodywork education and advanced certification in craniosacral therapy from the Upledger Institute. She is a lactation counselor and has studied oromotor therapy, child space, primitive reflex integration, and TummyTime! to provide babies and their families with a thorough assessment, education, and treatment in a safe and compassionate manner.',
  },
  {
    question: 'Do you see adults for bodywork?',
    answer:
      'Yes. Angela has been working with adults for bodywork for over 25 years. Upon moving to San Francisco in 2007 she was employed by Google to work on employees there. After 16 years, she is moving to a dedicated practice to support the infant community, however, she has many modalities to help you including basic massage, deep tissue therapy, myofascial release, positional release, visceral manipulation, and osteopathic-based techniques. Angela applies a depth of knowledge to each person based on what the body needs for each treatment.',
  },
  {
    question: 'What precautions are taken in regard to Covid?',
    answer:
      'Angela wears appropriate PPE including masking per local health requirements. Angela’s office in San Francisco has a HEPA filter and a door or window to the outside to increase fresh air. Ventilation is our friend in a respiratory pandemic. Angela is fully vaccinated and boosted. Please reschedule if you or anyone in your household is ill. Masking is optional. However, I continue to wear one while working.',
  },
  {
    question: 'How often should I see Angela for craniosacral care?',
    answer:
      'Most human bodies require hands-on therapy at least seasonally. Our bodies need more craniosacral support when we have increased stress, injury, or surgical recovery. Many patients will need ongoing care for acute conditions. Babies needing craniosacral for feeding, digestive, or musculoskeletal concerns (torticollis and plagiocephaly ) return at least weekly for the first few sessions.',
  },
  {
    question: 'What is required of a new patient?',
    answer:
      'In order to secure an appointment, a $50 deposit is required at the time of booking. This fee can be applied to your fees/copays/craniosacral work.',
  },
  {
    question: 'How are payments are accepted?',
    answer:
      'Zelle, cash, or check. We cannot accept cards at the San Francisco office.',
  },
]

function FAQ() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <h2
          id="faq"
          className="text-2xl font-bold leading-10 tracking-tight text-gray-900"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Can’t find the answer you’re looking for? Reach out to{' '}
          <Link
            href={`mailto:info@craniomom.com`}
            className="text-neutral-600 hover:text-neutral-950"
          >
            info@craniomom.com
          </Link>
        </p>
      </div>
      <div className="mt-10 lg:col-span-7 lg:mt-0">
        <dl className="space-y-10">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Contact',
  description: 'I can’t wait to meet you and your baby.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="" title="Let’s work together">
        <p>I can’t wait to meet you and your baby.</p>
      </PageIntro>

      <Container className="mt-24">
        <Button
          href="https://cal.com/craniomom"
          invert={false}
          rel="noopener noreferrer"
          target="_blank"
        >
          Book a Session
        </Button>
      </Container>

      <Container className="mt-24">
        <FAQ />
      </Container>
    </>
  )
}