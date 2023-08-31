import { Container } from '@/components/Container'

export default function Thanks() {
  return (
    <Container className="my-12">
      <h1 className="mb-12 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Thanks!
      </h1>
      <p className="font-display text-4xl font-semibold">
        Your message has been sent to Angela.
      </p>
    </Container>
  )
}
