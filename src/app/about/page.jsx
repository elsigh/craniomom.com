import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import imageMomAndBaby from '@/images/mom-and-baby.jpg'

const trainings = [
  {
    code: 'TBSP1',
    title:
      'The Brain Speaks 1: CranioSacral Therapy Techniques for Listening to and Working with the Brain',
    presenter: "Upledger Institute's Avadhan Larson, LMT, LAc, CST-D",
    date: 'June 12-15, 2025',
  },
  {
    code: 'CCPB1',
    title: 'CranioSacral Applications for Conception, Pregnancy and Birthing 1',
    presenter: "Upledger Institute's Carol McLellan, CMT, CST-D",
    date: 'August 1-4, 2013',
  },
  {
    title: 'TummyTime Training for Professionals',
    presenter: 'Michelle Price Emanuel, OTR/L, CST, CIMI, NBCR, RYT200',
    date: 'Feb 28 - Mar 2, 2014',
  },
  {
    title: 'Craniosacral Therapy for Infants',
    presenter: 'Carol Gray, LMT, CST, RPYT',
    date: 'Oct 20-24, 2014',
  },
  {
    title: 'Craniosacral Therapy for Infant Breastfeeding',
    presenter: 'Dr. Alison Hazelbaker',
    date: 'August 3-7, 2015',
  },
  {
    title:
      'Cranial Nerve Dysfunction (CND) in the Newborn to Precrawling Infant',
    presenter: 'Michelle Price Emanuel, OTR/L, CST, CIMI, NBCR, RYT200',
    date: 'Oct 20-22, 2016',
  },
  {
    title: 'Infant & Maternal CST Conference',
    presenter: 'Carol Gray, LMT, CST, RPYT',
    date: 'Sept 13-17, 2016',
  },
  {
    code: 'NM1',
    title:
      'Neural Manipulation: Neuromeningeal Manipulation; An Integrative Approach to Trauma',
    presenter:
      "International Association of Healthcare Practitioner's Lisa Polec, DC, BI-D",
    date: 'Sept 9-11, 2016',
  },
  {
    code: 'VM1',
    title: 'Visceral Manipulation: Abdomen 1',
    presenter: "Barral Institute's Dee Dettmann Ahern, PT, BI-D",
    date: 'Oct 9-14, 2016',
  },
  {
    code: 'VM2',
    title: 'Visceral Manipulation: Abdomen 2',
    presenter: "Barral Institute's Dee Dettmann Ahern, PT, BI-D",
    date: 'Nov 6-11, 2016',
  },
  {
    code: 'VM3',
    title: 'Visceral Manipulation: The Pelvis',
    presenter: "Barral Institute's Dee Dettmann Ahern, PT, BI-D",
    date: 'August 20-25, 2017',
  },
  {
    code: 'LT1',
    title: 'Visceral Manipulation: Listening Techniques 1',
    presenter:
      'An Integrative Approach to Evaluation: CaGail Wetzler, PT, DPT, EDO, BI-D',
    date: 'Jan 19-21, 2018',
  },
  {
    code: 'CI-CRBMT',
    title: 'Clinical Interventions: Concussion Recovery',
    presenter:
      'Barral Manual Therapy CI-CRBMT: Gail Wetzler, PT, DPT, EDO, BI-D',
    date: 'Sept 13-15, 2019',
  },
  {
    code: 'VM4-VC',
    title: 'Visceral Manipulation: The Thorax',
    presenter: "Barral Institute's Wetzler, Frey",
    date: 'June 12-13, 2020',
  },
  {
    code: 'LT2',
    title: 'Visceral Manipulation: Listening Techniques 2',
    presenter:
      "An Advanced Evaluation Approach to Total Body Systems: Upledger Institute's Gail Wetzler, PT, DPT, EDO, BI-D",
    date: 'Oct 1-3, 2020',
  },
  {
    title: 'Mindfulness Teacher Training',
    presenter: 'Mindfulness Training Institute: Mark Coleman and Marin Aylward',
    date: 'Sept 2022 - June 2023',
  },
  {
    code: 'CSISC',
    title: 'CranioSacral Therapy for Infants with Special Circumstances',
    presenter: "NICU babies: Upledger Institute's Karen Quraishy, MSPT, CST-D",
    date: 'April 26-28, 2024',
  },
]

function Education() {
  return (
    <div className="clear-both mt-20 bg-neutral-950 py-24 lg:py-32">
      <SectionIntro eyebrow="Education" title="Classes & Training" invert>
        <p>
          Thank you for reading through these trainings. I’m committed to
          life-long learning and building a beautiful community. May you be well
          and thriving!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {trainings.map((training) => (
            <GridListItem
              key={training.code ?? training.title}
              title={
                training.code
                  ? `${training.code}: ${training.title}`
                  : training.title
              }
              invert
            >
              <span className="block">{training.presenter}</span>
              <span className="mt-1 block text-neutral-500">
                {training.date}
              </span>
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Angela Pater is a nationally certified massage therapist with over 25 years of experience, specializing in craniosacral therapy for infants and pediatric care.',
}
//  lg:mt-[-240px]
export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Angela Pater">
        <p>
          I’ve always had a strong sense of how to navigate my life, a way of
          listening to that internal quiet voice. I am so glad I’ve listened.
        </p>
        <p className="mt-8">In 2014 I became a mom.</p>
      </PageIntro>
      <Container className="mt-8">
        <FadeIn>
          <div className="lg:float-right lg:pb-12 lg:pl-8">
            <Image
              src={imageMomAndBaby}
              alt="Mother holding and looking lovingly at her baby"
              className="lg:w-[600px]"
              priority
            />
          </div>
          <p className="mt-8 flex gap-x-2 text-neutral-950">
            I didn’t know what a difference having trained as a craniosacral
            practitioner would make the night I went into labor.
          </p>

          <p className="mt-6 flex gap-x-2 text-neutral-950">
            I began applying craniosacral therapy (CST) for healing in 1997
            while a pre-med student at the University of Texas, Austin. I was
            drawn to CST because the touch is light and intended to optimize the
            motility of the intricate web of bones, muscles, soft tissues and
            fluid that makes us who we are. The techniques resonated with the
            mindfulness mediation practice I was enjoying at Austin’s newly
            opened (San Francisco’s branch) Zen Center.
          </p>
          <p className="mt-6 flex gap-x-2 text-neutral-950">
            And, I always had a strong sense that I’d study craniosacral therapy
            for the pediatric community when I became a mom. After 18 joyful
            years of marriage, travel and moving to the San Francisco Bay area,
            my partner and I wanted to welcome in a new journey. After 6 months
            of actively trying to become pregnant in 2013, I got the positive
            pregnancy test. The synchronicity of receiving that test a few days
            before my first Upledger CST Pediatric series began meant to me that
            I was on the right track. I work now with the pediatric community
            because parenthood is an intricate dance of welcoming what the
            present moment has to offer. I want to help create a world for our
            little ones where as individuals they are in relationship with their
            own essence and what it means to be self-regulated.
          </p>
          <p className="mt-6 flex gap-x-2 text-neutral-950">
            Upon the birth of my child at home, I personally experienced the
            profound benefit of this work. When the midwife informed us that our
            baby had water in her lungs and we’d need to be transferred to the
            hospital, I applied CST and the crisis unequivocally shifted. Our
            nurse midwife’s statement, ”Whatever you just did, she’s now 100%
            clear.” We all exhaled. I am eternally grateful for having the
            skillset and capacity to act swiftly, clearly and turn things around
            that night. CST has become an embodied tool that I look forward to
            offering to you because I have faith in the easeful difference it
            can make.
          </p>
        </FadeIn>
      </Container>

      <Education />

      <ContactSection />
    </>
  )
}
