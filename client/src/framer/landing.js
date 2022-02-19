export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 1,
    },
  },
};

export const item = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};
