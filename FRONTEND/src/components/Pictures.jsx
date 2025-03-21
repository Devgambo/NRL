import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion"; // Updated import
import { cn } from "@/lib/utils"; // Ensure this path is correct in your Vite project

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);

  // Use the useScroll hook from framer-motion
  const { scrollYProgress } = useScroll({
    container: gridRef, // Remove this if your container is not fixed height
    offset: ["start start", "end start"], // Remove this if your container is not fixed height
  });

  // Use the useTransform hook from framer-motion
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Split images into three parts
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);


  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true });

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="flex justify-center relative top-20 ">
        <div ref={ref}>
          <motion.h1
            initial={{ opacity: 0, y: 50, size: 0 }}
            animate={inView ? { opacity: 1, y: 0, size: 1 } : {}}
            transition={{ duration: 1.25 }}
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
              style={{ y: translateFirst }} // Apply the translateY motion value
              key={"grid-1-" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
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
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
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
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};