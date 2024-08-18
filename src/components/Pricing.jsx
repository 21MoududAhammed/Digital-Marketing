import { IoCheckmark } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
/* eslint-disable react/no-unescaped-entities */
export default function Pricing() {
  const cardOneVariant = {
    hidden: { y: 50, opacity: 0 }, // Start below and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const cardTwoVariant = {
    hidden: { y: -50, opacity: 0 }, // Start above and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
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
      color: "white", // Change text color to white on hover
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-2 md:py-24 md:px-16 font-kanit bg-[#f3ecec]">
      <div>
        {/* heading  */}
        <div className="mb-14">
          <h4 className="uppercase text-xl font-bold mb-6 text-gray-500">
            Pricing Table
          </h4>
          <h1 className="uppercase text-6xl font-extrabold">
            Be kind to your mind
          </h1>
        </div>
        {/* accordean  */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-semibold">
            Design should enrich our day
          </div>
          <div className="collapse-content">
            <p className="text-lg">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Bring their individual experience and creative
          </div>
          <div className="collapse-content">
            <p className="text-lg">
              This is the second $item's accordion body. It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Human centred design to challenges
          </div>
          <div className="collapse-content">
            <p className="text-lg">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Design should enrich our day
          </div>
          <div className="collapse-content">
            <p className="text-lg">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-semibold">
            Developing core web applications
          </div>
          <div className="collapse-content">
            <p className="text-lg">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </p>
          </div>
        </div>
      </div>
      {/* price cards  */}
      <div className="flex flex-col justify-center md:items-start gap-16">
        <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
          {/* card one  */}
          <motion.div
            className="relative p-5 md:p-10 flex justify-center items-center gap-5 md:gap-10 bg-black text-white rounded-xl"
            variants={cardOneVariant}
            initial="hidden"
            animate="visible"
          >
            {/* checkbox icon  */}
            <div className="h-10 md:h-12 w-14 rounded bg-[#ff9776] flex justify-center items-center ">
              <span className="md:text-3xl text-gray-800">
                <IoCheckmark />
              </span>
            </div>
            {/* plan details  */}
            <div className="space-y-5">
              <div className="uppercase h-10 w-20 border-2 border-gray-400 rounded-full flex justify-center items-center ">
                <p className="text-gray-500">yearly</p>
              </div>
              <h1 className="uppercase text-2xl sm:text-4xl font-extrabold">
                14 days free
              </h1>
              <p className="text-sm sm:text-lg text-gray-500">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
            {/* price  */}
            <div className="absolute top-8 right-20  md:relative md:bottom-9 md:top-0 md:right-0">
              <h2 className="  text-2xl md:text-3xl font-extrabold">$129.99</h2>
            </div>
            {/* badge  */}
            <div className="absolute right-20 md:right-10 top-[-15px] flex justify-center items-center h-8 w-32 bg-[#ff9776] rounded">
              <p className="text-base white font-semibold">Best Value</p>
            </div>
          </motion.div>
          {/* card two  */}
          <motion.div
            className="relative p-5 md:p-10 flex justify-center items-center gap-5 md:gap-10 bg-white  rounded-xl "
            variants={cardTwoVariant}
            initial="hidden"
            animate="visible"
          >
            {/* checkbox icon  */}
            <div className="h-10 md:h-12 w-14 rounded border-2 border-gray-500 flex justify-center items-center ">
              <span className="md:text-3xl text-gray-800">
                <IoCheckmark />
              </span>
            </div>
            {/* plan details  */}
            <div className="space-y-5 ">
              <div className="uppercase h-10 w-20 border-2 border-gray-400 rounded-full flex justify-center items-center ">
                <p className="text-gray-500">yearly</p>
              </div>
              <h1 className="uppercase text-2xl sm:text-4xl font-extrabold text-black">
                7 days free
              </h1>
              <p className="text-sm sm:text-lg text-gray-500">
                Subscription fee is $12.99 USD and automatically renews each
                year.
              </p>
            </div>
            {/* price  */}
            <div className="absolute top-8 right-20  md:relative md:bottom-9 md:top-0 md:right-0">
              <h2 className="  text-2xl md:text-3xl font-extrabold">$129.99</h2>
            </div>
            
          </motion.div>
        
          
        </div>
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
            className="absolute left-0 top-0 h-full bg-gray-600 "
            initial={{ width: "0%" }}
            animate={{ width: "0%" }} // Initial state: no fill
            variants={circleHover} // Animate width to 100% on hover
          />
          {/* Content inside the circle */}
          <motion.div
            className="relative z-10 flex justify-center items-center text-gray-600"
            variants={{ hover: { color: "white" } }} // Change text color to white on hover
          >
            <div>
            <p>Try It </p>
            <p>Free Now</p>
            </div>
            <h6><MdOutlineArrowOutward /></h6>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
