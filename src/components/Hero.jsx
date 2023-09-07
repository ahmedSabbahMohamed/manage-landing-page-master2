'use client'
import GetStarted from "./GetStarted"
import Image from "next/image"
import heroImage from "@/assets/images/hero.svg"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/framerMotionVariants"
import AbsoluteImage from "./AbsoluteImage"

function Hero() {
  return (
    <>
    <div className="">
        {/* HERO SECTION */}
        <motion.section 
            variants={ staggerContainer }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="hero-section container mx-auto my-10"

        >

            {/* content */}
            <motion.div 
                variants={fadeIn}
                className="flex items-center justify-between flex-col-reverse lg:flex-row gap-5"
            >

                {/* desc */}
                <div className="text-center md:text-left flex-1">
                    {/* heading one */}
                    <h1 className="text-very-dark-blue text-[4rem] leading-[1.3] font-bold mb-5">Bring everyone together to build better products.</h1>
                    {/* paragraph */}
                    <p className="text-dark-gray-blue font-medium text-xl md:w-3/4 mb-16">
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    {/* button */}
                    <GetStarted />
                </div>

                {/* image */}
                <div className="flex-1">
                    <Image src={ heroImage } alt="hero-image" />
                </div>

            </motion.div>


        {/* absolute image */}
        <AbsoluteImage 
            position={ "absolute -top-44 -right-48 -z-10" }
        />
        
        </motion.section>

    </div>
    </>
    )
}

export default Hero