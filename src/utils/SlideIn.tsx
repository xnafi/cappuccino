"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
}

const fadeUp: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeUp}
      custom={delay}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
