"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null)

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)
  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  const ref = useRef(null)
  const inView = useInView(ref, { triggerOnce: true })

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="flex justify-center relative top-20 ">
        <div ref={ref}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-5xl text-white space-grotesk font-extrabold m-10`}
          >
            Media
          </motion.h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1-" + idx}
              className="relative h-80 w-full"
            >
              <Image
                src={el}
                fill
                className="object-cover object-left-top rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2-" + idx}
              className="relative h-80 w-full"
            >
              <Image
                src={el}
                fill
                className="object-cover object-left-top rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3-" + idx}
              className="relative h-80 w-full"
            >
              <Image
                src={el}
                fill
                className="object-cover object-left-top rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
