// header motions
export const headerVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0,
        transition: {
            delay: .2,
            type: "tween",
            duration: .5
        }
    }
}

// stagercontainer
export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    }
  })

// hero motions
export const fadeIn = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            delay: .3,
            duration: 1
        }
    }
}