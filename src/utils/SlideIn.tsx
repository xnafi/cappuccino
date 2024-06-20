"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
}

const slideIn: Variants = {
  initial: {
    opacity: 0,
    x: -100, // Start position outside the viewport on the left
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={slideIn}
      custom={delay}
      viewport={{ once: true }} // Adjust threshold as needed
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
