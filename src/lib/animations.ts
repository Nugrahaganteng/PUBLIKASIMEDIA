export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }
  
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
      },
    }),
  }
  
  export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  }
  
  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  export const slideFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }
  
  export const slideFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }