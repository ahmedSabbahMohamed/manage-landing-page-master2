'use client'
import Text from "./Text"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/framerMotionVariants"
import AbsoluteImage from "./AbsoluteImage"

function Hero2() {
  return (
    <>
    <motion.section
        variants={ staggerContainer }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto mt-56 relative"
    >
        {/* content */}
        <motion.div 
            variants={fadeIn}
            className="flex gap-10 justify-between items-start flex-col lg:flex-row px-2"
        >

            {/* col one */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-very-dark-blue font-bold leading-[1.3] text-[3.5rem] mb-5">
                    What’s different about Manage?
                </h2>
                <p className="text-dark-gray-blue text-xl font-medium">
                    Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. 
                </p>
            </div>

            {/* col two */}
            <div className="flex-1">
                <div className="">

                    <Text
                        number={ "01" }
                        heading={`
                            Track company-wide progress
                        `}
                        text={`
                            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                        `}
                    />

                    <Text
                        number={ "02" }
                        heading={`
                            Advanced built-in reports
                        `}
                        text={`
                        Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                        `}
                    />

                    <Text
                        number={ "03" }
                        heading={`
                            Everything you need in one place
                        `}
                        text={`
                        Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                        `}
                    />

                </div>
            </div>

        </motion.div>

        {/* absolute image */}
        <AbsoluteImage
            position={ "absolute -z-10 top-1/2 -left-[35%] -translate-y-1/2 -translate-x-1/2 hidden lg:block" }
        />

    </motion.section>
    </>
    )
}

export default Hero2