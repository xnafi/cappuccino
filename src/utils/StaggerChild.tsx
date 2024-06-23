'use client'
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StaggerChildProps {
  delay?: number;
}

const StaggerChild: React.FC<StaggerChildProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refCurrent = ref.current;
    if (refCurrent) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start('visible');
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );

      observer.observe(refCurrent);

      return () => {
        observer.unobserve(refCurrent);
      };
    }
  }, [controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5, // Adjust duration as needed
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerChild;
