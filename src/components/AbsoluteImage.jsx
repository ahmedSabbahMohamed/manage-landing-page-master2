import Image from "next/image"
import bgPattern from "@/assets/images/bg-tablet-pattern.svg"
import { delay, motion } from "framer-motion"

function AbsoluteImage({ position }) {
  return (
    <motion.div 
        initial={{x: '100vw', y: '-100vh'}}
        animate={{x: 0, y: 0}}
        transition={{
            type: "tween",
            delay: .5,
            duration: 1
        }}
        className={ position }>
        <Image src={ bgPattern } alt="bg-pattern" />
    </motion.div>
  )
}

export default AbsoluteImage