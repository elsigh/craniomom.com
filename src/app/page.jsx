import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import imageBabyFlowers from '@/images/baby-flowers.jpg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import imageNewBaby from '@/images/new-baby.jpg'

const clients = [
  ['Phobia', logoPhobiaLight],
  //   ['Family Fund', logoFamilyFund],
  //   ['Unseal', logoUnseal],
  //   ['Mail Smirk', logoMailSmirk],
  //   ['Home Work', logoHomeWork],
  //   ['Green Life', logoGreenLife],
  //   ['Bright Path', logoBrightPath],
  //   ['North Adventures', logoNorthAdventures],
  //
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I work with families to make happy babies.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

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
        client={false && { name: 'Phobia', logo: logoPhobiaDark }}
      >
        The therapist’s touch is light with craniosacral therapy and intended to
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
