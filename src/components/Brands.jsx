import { motion } from "framer-motion";
import brandOne from "../assets/brands/brand-1.webp";
import brandTwo from "../assets/brands/brand-2.webp";
import brandThree from "../assets/brands/brand-3.webp";
import brandFour from "../assets/brands/brand-4.webp";
import brandFive from "../assets/brands/brand-5.webp";
import brandSix from "../assets/brands/brand-6.webp";

export default function Brands() {
  // Define the animation variants for each image
  const variants = {
    initial: { opacity: 0, y: 20 }, // Start with images below and hidden
    animate: (i) => ({
      opacity: [0, 1], // Fade in
      y: [20, 0], // Move up from below
      transition: {
        delay: i * 0.3, // Stagger the appearance
        duration: 1, // Duration of animation
        ease: "easeOut", // Smooth easing
      },
    }),
  };

  // Define the animation variants for the heading
  const headingVariants = {
    initial: { opacity: 0, y: 20 }, // Start with heading below and hidden
    animate: {
      opacity: [0, 1], // Fade in
      y: [20, 0], // Move up from below
      transition: {
        duration: 1, // Duration of animation
        ease: "easeOut", // Smooth easing
      },
    },
  };

  return (
    <section className="py-28">
      {/* Animate the heading */}
      <motion.h3
        variants={headingVariants}
        initial="initial"
        animate="animate"
        className="text-xl text-center font-semibold"
      >
        WE WORKED WITH GLOBAL LARGEST BRANDS
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-12">
        {/* Map over each brand image */}
        {[brandOne, brandTwo, brandThree, brandFour, brandFive, brandSix].map(
          (brand, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="initial"
              animate="animate"
              className="flex items-center justify-center"
            >
              <img src={brand} alt={`brand-${index + 1}`} />
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
