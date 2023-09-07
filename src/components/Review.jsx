'use client'

import ReviewCard from "./ReviewCard"
import ali from "@/assets/images/ali.png"
import anisha from "@/assets/images/anisha.png"
import richared from "@/assets/images/richared.png"
import shania from "@/assets/images/shania.png"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/framerMotionVariants"
import GetStarted from "./GetStarted"

function Review() {

    const showCard = e => {
        let allPoints = document.querySelectorAll(".point")
        let newPoints = Array.from(allPoints)
        allPoints.forEach(point => {
            point.classList.remove("bg-bright-red")
        })
        e.currentTarget.classList.add("bg-bright-red")
        
        let index = newPoints.indexOf(e.currentTarget)
        let allViewCards = document.querySelectorAll(".view-card")
        allViewCards.forEach(card => {
            card.classList.add("hidden")
        })
        allViewCards[index].classList.remove("hidden")
    }

  return (
    <>
    <motion.section
        variants={ staggerContainer }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
    >

    <motion.div
        variants={fadeIn}
    >
                {/* title */}
        <div
            className="text-center mb-32"
        >
            <h2 className="text-very-dark-blue font-bold text-4xl">
                What they’ve said
            </h2>
        </div>

        {/* cards with overflow-x-auto */}
        <div className="hidden md:block">
            <div 
                className="flex flex-row content-stretch gap-10 md:overflow-x-auto pt-12"
            >
                
                <ReviewCard
                    avatar={ anisha }
                    name={ "Anisha Li" }
                    textReview={ "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" }
                />

                <ReviewCard
                    avatar={ ali }
                    name={ "Ali Bravo" }
                    textReview={ "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" }
                />

                <ReviewCard
                    avatar={  richared }
                    name={ " Richard Watts" }
                    textReview={ "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”" }
                />

                <ReviewCard
                    avatar={ shania }
                    name={ " Shanai Gough" }
                    textReview={ " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”" }
                />

            </div>
        </div>

        {/* slider */}
        <div className="md:hidden">

            <div className="view-card">
                <ReviewCard
                    avatar={ anisha }
                    name={ "Anisha Li" }
                    textReview={ "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" }
                />
            </div>

            <div className="view-card hidden">
                <ReviewCard
                    avatar={ ali }
                    name={ "Ali Bravo" }
                    textReview={ "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" }
                />
            </div>

            <div className="view-card hidden">
                <ReviewCard
                    avatar={  richared }
                    name={ " Richard Watts" }
                    textReview={ "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”" }
                />
            </div>

            <div className="view-card hidden">
                <ReviewCard
                    avatar={ shania }
                    name={ " Shanai Gough" }
                    textReview={ " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”" }
                />
            </div>

                <ul className="flex gap-5 justify-center items-center mt-10">
                    <li onClick={e => showCard(e)} className="point bg-bright-red"></li>
                    <li onClick={e => showCard(e)} className="point"></li>
                    <li onClick={e => showCard(e)} className="point"></li>
                    <li onClick={e => showCard(e)} className="point"></li>
                </ul>

        </div>


        <div className=" text-center my-16">
            <GetStarted />
        </div>

    </motion.div>

    </motion.section>
    </>
  )
}

export default Review