"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
    },
  }),
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
