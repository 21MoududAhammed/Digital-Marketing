import { IoCheckmark } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
/* eslint-disable react/no-unescaped-entities */
export default function Pricing() {
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
  return (
    <section className="grid grid-cols-2 gap-20 md:py-24 md:px-16 font-kanit bg-[#f3ecec]">
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
        {/* <div> */}
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
              This is the second `$item's` accordion body. It is hidden by
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
      <div className='flex flex-col justify-center items-start gap-16'>
        <div className="flex flex-col justify-center items-center gap-10">
          {/* card one  */}
          <div className="relative p-10 flex justify-center items-center gap-10 bg-black text-white rounded-xl">
            {/* checkbox icon  */}

            <div className="h-12 w-14 rounded bg-[#ff9776] flex justify-center items-center ">
              <span className="text-3xl text-gray-800">
                <IoCheckmark />
              </span>
            </div>
            {/* plan details  */}
            <div className="space-y-5">
              <div className="uppercase h-10 w-20 border-2 border-gray-400 rounded-full flex justify-center items-center ">
                <p className="text-gray-500">yearly</p>
              </div>
              <h1 className="uppercase text-3xl font-extrabold">
                14 days free
              </h1>
              <p className="text-lg text-gray-500">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
            {/* price  */}
            <div>
              <h2 className="relative bottom-9 text-3xl font-extrabold">
                $129.99
              </h2>
            </div>
            <div className="absolute right-10 top-[-15px] flex justify-center items-center h-8 w-32 bg-[#ff9776] rounded">
              <p className="text-base white font-semibold">Best Value</p>
            </div>
          </div>
          {/* card two  */}
          <div className=" p-10 flex justify-center items-center gap-10   rounded-xl bg-white">
            {/* checkbox icon  */}

            <div className="h-12 w-14 rounded border-2 border-gray-500 flex justify-center items-center ">
              <span className="text-3xl text-gray-800 ">
                <IoCheckmark />
              </span>
            </div>
            {/* plan details  */}
            <div className="space-y-5">
              <div className="uppercase h-10 w-24 border-2 border-gray-400 rounded-full flex justify-center items-center ">
                <p className="text-gray-500">monthly</p>
              </div>
              <h1 className="uppercase text-3xl font-extrabold text-black">
                7 days free
              </h1>
              <p className="text-lg text-gray-600">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
            {/* price  */}
            <div>
              <h2 className="relative bottom-9 text-3xl font-extrabold text-black">
                $129.99
              </h2>
            </div>
          </div>
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
          <div className="relative z-10 flex justify-center items-center text-gray-600 hover:text-white">
            Explore US
            <MdOutlineArrowOutward />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
