'use client'

import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const MotionImage = motion(Image)

export function GrayscaleTransitionImage(props) {
  let ref = useRef()
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  // Filter out props that React doesn't recognize on DOM elements
  const { blurWidth, blurHeight, ...imageProps } = props

  return (
    <div ref={ref} className="group relative">
      <MotionImage alt="" style={{ filter }} {...imageProps} />
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image alt="" {...imageProps} />
      </div>
    </div>
  )
}
