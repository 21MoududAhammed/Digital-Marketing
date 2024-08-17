import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import introImg from "../assets/who-we-are-img.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function PositiveIntroduction() {
  const textVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  const circleVariant = {
    hidden: { y: -50, opacity: 0 }, // Start above and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2, // Delayed to appear after the text
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const circleHover = {
    hover: {
      width: "100%", // Expand fill to 100%
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Reference for the image
  const imageRef = useRef(null);
  // Track if the image is in view
  const isInView = useInView(imageRef, { once: false, threshold: 0.2 });

  const imageVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-5 bg-black text-white font-kanit">
      {/* image */}
      <motion.div
        ref={imageRef}
        className="md:ps-14 py-20"
        variants={imageVariant}
        initial="hidden"
        animate={isInView ? "visible" : "exit"} // Animate based on scroll position
      >
        <img src={introImg} alt="" />
      </motion.div>

      <div className="flex flex-col gap-14 justify-center items-start md:pt-20">
        {/* heading */}
        <div className="uppercase">
          <motion.h4
            className="text-lg md:text-xl font-bold"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0} // First line
          >
            Who We Are
          </motion.h4>
          <motion.h2
            className=" text-3xl md:text-7xl font-extrabold"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1} // Second line
          >
            We are a leading digital marketing agency.
          </motion.h2>
        </div>

        <div className="md:ps-24 h-full">
          <div className="flex flex-col gap-8  justify-around items-start md:ps-8 pb-8 md:border-l-2 md:border-gray-600 h-full">
            {/* explanation */}
            <motion.div
              className="max-w-96"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={2} // Third line
            >
              <p className="text-lg font-bold text-gray-600">
                We’re a team of strategic digital marketing working globally
                with the largest brands. We believe that progress only happens
                when you refuse to play things safe. We combine ideas, behaviors,
                and insights with design, technology, and data to produce brand
                experiences that customers love.
              </p>
            </motion.div>
            {/* circle */}
            <motion.div
              className="w-36 h-36 border-2 border-gray-600 rounded-full flex justify-center items-center relative overflow-hidden"
              variants={circleVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Background div for the white fill */}
              <motion.div
                className="absolute left-0 top-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "0%" }} // Initial state: no fill
                variants={circleHover} // Animate width to 100% on hover
              />
              {/* Content inside the circle */}
              <div className="relative z-10 flex justify-center items-center text-gray-600">
                Explore US
                <MdOutlineArrowOutward />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
