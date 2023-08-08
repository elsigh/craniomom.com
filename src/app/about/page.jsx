import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import imageAboutFlowers from '@/images/about-flowers.jpg'

function Education() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
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
            Carol Gray, LMT, CST, RPYT - Oct 20- 24, 2014
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
            BI-D - Sept 9- 11, 2016.
          </GridListItem>
          <GridListItem title="VM1: Visceral Manipulation: Abdomen 1" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - Oct 9-14, 2016
          </GridListItem>
          <GridListItem title="VM2: Visceral Manipulation: Abdomen 2" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - Nov 6-11, 2016
          </GridListItem>
          <GridListItem title="VM3: Visceral Manipulation: The Pelvis" invert>
            Barral Institute’s Dee Dettmann Ahern, PT, BI-D - August 20- 25,
            2017
          </GridListItem>
          <GridListItem
            title="LT1: Visceral Manipulation: Listening Techniques 1"
            invert
          >
            An Integrative Approach to Evaluation - CaGail Wetzler, PT, DPT,
            EDO, BI-D - Jan 19- 21, 2018
          </GridListItem>
          <GridListItem
            title="CI-CRBMT: Clinical Interventions: Concussion Recovery"
            invert
          >
            Barral Manual Therapy CI-CRBMT - Gail Wetzler, PT, DPT, EDO, BI-D -
            Sept 13- 15, 2019
          </GridListItem>
          <GridListItem
            title="VM4-VC: Visceral Manipulation: The Thorax"
            invert
          >
            Barral Instutute’s Wetzler, Frey - June 12- 13, 2020
          </GridListItem>
          <GridListItem
            title="LT2: Visceral Manipulation: Listening Techniques 2"
            invert
          >
            An Advanced Evaluation Approach to Total Body Systems - Upledger
            Institues’s Gail Wetzler, PT, DPT, EDO, BI-D - Oct 1- 3, 2020
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
        <p>In 2014 I became a mom.</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I began applying craniosacral therapy for healing in 1997 while
            finishing a pre-med degree at the University of Texas, Austin. I
            always had a strong sense that I’d study craniosacral therapy for
            the pediatric community when I became a mom. I signed up for the
            first Upledger Peds series and was overjoyed to see a positive
            pregnancy test a few days before course one began - on the Monday
            before a Wednesday start of class, just days away from one another
            was the beginning of a new journey.
          </p>
          <FadeIn className="max-w-3xl">
            <Image
              src={imageAboutFlowers}
              alt="Baby"
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
          <p>
            A favorite testimonial to this work comes from the night of my
            daughter’s arrival. She had a home birth at home. When the midwife
            informed us that she had water in her lungs and we’d need transfer,
            I applied CST and the story shifted. Our midwife said, ”Whatever you
            just did, she’s now 100% clear.” We keep up monitoring and I’ll
            never regret trying to work with my daughter, helping her develop
            and thrive within those first hours.
          </p>
        </div>
      </PageIntro>

      <Education />

      <ContactSection />
    </>
  )
}
