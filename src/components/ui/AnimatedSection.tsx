import { motion } from "framer-motion";
import { forwardRef, PropsWithChildren } from "react";

type AnimatedSectionProps = {
  className?: string;
};

export const AnimatedSection = forwardRef<
  HTMLElement,
  PropsWithChildren<AnimatedSectionProps>
>(({ children, className = "" }, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
});

AnimatedSection.displayName = "AnimatedSection";
