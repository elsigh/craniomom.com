import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import imageMomAndBaby from '@/images/mom-and-baby.jpg'

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
          <GridListItem title="CCPB1" invert>
            CranioSacral Applications for Conception, Pregnancy and Birthing 1 -
            Upledger Institute’s Carol McLellan CMT, CST-D - August 1-4, 2013
          </GridListItem>
          <GridListItem title="TummyTime Training for Professionals" invert>
            Michelle Price Emanuel, OTR/L, CST, CIMI, NBCR, RYT200 - Feb 28 -
            Mar 2, 2014
          </GridListItem>
          <GridListItem title="Craniosacral Therapy for Infants" invert>
            Carol Gray, LMT, CST, RPYT - Oct 20-24, 2014
          </GridListItem>
          <GridListItem
            title="Craniosacral Therapy for Infant Breastfeeding"
            invert
          >
            Dr. Alison Hazelbaker - August 3-7, 2015
          </GridListItem>
          <GridListItem
            title="Cranial Nerve Dysfunction (CND) in the Newborn to Precrawling Infant"
            invert
          >
            Michelle Price Emanuel, OTR/L, CST, CIMI, NBCR, RYT200 - Oct 20-22,
            2016.
          </GridListItem>
          <GridListItem title="Infant & Maternal CST Conference" invert>
            Carol Gray, LMT, CST, RPYT - Sept. 13-17, 2016.
          </GridListItem>
          <GridListItem
            title="NM1: Neural Manipulation: Neuromeningeal Manipulation; An Integrative Approach to Trauma"
            invert
          >
            International Association of Healthcare Practioner’s Lisa Polec, DC,
            BI-D - Sept 9-11, 2016.
          </GridListItem>
          <GridListItem title="VM1: Visceral Manipulation: Abdomen 1" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - Oct 9-14, 2016
          </GridListItem>
          <GridListItem title="VM2: Visceral Manipulation: Abdomen 2" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - Nov 6-11, 2016
          </GridListItem>
          <GridListItem title="VM3: Visceral Manipulation: The Pelvis" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - August 20-25, 2017
          </GridListItem>
          <GridListItem
            title="LT1: Visceral Manipulation: Listening Techniques 1"
            invert
          >
            An Integrative Approach to Evaluation - CaGail Wetzler, PT, DPT,
            EDO, BI-D - Jan 19-21, 2018
          </GridListItem>
          <GridListItem
            title="CI-CRBMT: Clinical Interventions: Concussion Recovery"
            invert
          >
            Barral Manual Therapy CI-CRBMT - Gail Wetzler, PT, DPT, EDO, BI-D -
            Sept 13-15, 2019
          </GridListItem>
          <GridListItem
            title="VM4-VC: Visceral Manipulation: The Thorax"
            invert
          >
            Barral Instutute’s Wetzler, Frey - June 12-13, 2020
          </GridListItem>
          <GridListItem
            title="LT2: Visceral Manipulation: Listening Techniques 2"
            invert
          >
            An Advanced Evaluation Approach to Total Body Systems - Upledger
            Institues’s Gail Wetzler, PT, DPT, EDO, BI-D - Oct 1-3, 2020
          </GridListItem>
          <GridListItem title="Mindfulness Teacher Training" invert>
            Mindfulness Training Institute - Mark Coleman and Marin Aylward -
            Sept 2022 - June 2023
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About',
  description: '',
}

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
            <Image src={imageMomAndBaby} alt="" className="lg:w-[600px]" />
          </div>
          <p className="mt-8 flex gap-x-2  text-neutral-950">
            I didn’t know what a difference having trained as a craniosacral
            practitioner would make the night I went into labor.
          </p>

          <p className="mt-6 flex gap-x-2  text-neutral-950">
            I began applying craniosacral therapy (CST) for healing in 1997
            while a pre-med student at the University of Texas, Austin. I was
            drawn to CST because the touch is light and intended to optimize the
            motility of the intricate web of bones, muscles, soft tissues and
            fluid that makes us who we are. The techniques resonated with the
            mindfulness mediation practice I was enjoying at Austin’s newly
            opened (San Francisco’s branch) Zen Center.
          </p>
          <p className="mt-6 flex gap-x-2  text-neutral-950">
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
          <p className="mt-6 flex gap-x-2  text-neutral-950">
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
