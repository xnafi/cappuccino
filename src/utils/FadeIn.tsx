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
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeIn}
      custom={delay}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
