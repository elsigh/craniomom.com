import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import imageBabyFlowers from '@/images/baby-flowers.jpg'
import imageNewBaby from '@/images/new-baby.jpg'

export const metadata = {
  description:
    'Angela Pater is a nationally certified massage therapist focused on craniosacral therapy for infant care.'
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24">
        <FadeIn className="max-w-3xl">
          <h1 className="mb-12 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Exceptional care for your new baby.
          </h1>
          <StylizedImage
            {...imageNewBaby}
            sizes="(min-width: 1024px) 41rem, 31rem"
            className="justify-center lg:justify-end lg:group-even/section:justify-start"
          />
          <p className="mt-12 text-xl text-neutral-600">
            Angela Pater is a nationally certified massage therapist focused on
            craniosacral therapy for infant care.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            It is the combined intelligence of all my teachers, education,
            experience, and my personal journey that supports me in supporting
            you.
          </p>
        </FadeIn>
      </Container>

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        The therapist&apos;s touch is light with craniosacral therapy and intended to
        optimize freedom within the intricate web of bones, muscles, soft
        tissues and fluid that makes us who we are.
      </Testimonial>

      <Container className="mt-24 text-center sm:mt-32 lg:mt-40">
        <FadeIn>
          <Image
            src={imageBabyFlowers}
            alt="Baby"
            className="m-auto lg:w-[600px]"
          />
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
