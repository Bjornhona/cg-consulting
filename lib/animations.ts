import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const container: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const cardItem: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const navVariants: Variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
};

export const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  hover: {
    scale: 1.05,
  },
};

export const sidebarVariants: Variants = {
  open: {
    clipPath: "circle(2500px at calc(100vw - 25px) 32px)",
    transition: {
      type: "spring",
      stiffness: 15,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0 at calc(100vw - 25px) 32px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
