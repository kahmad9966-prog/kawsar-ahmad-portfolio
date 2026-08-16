"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  enter: (direction: 1 | -1) => ({
    opacity: 0,
    scale: 0.94,
    y: direction === 1 ? 60 : -60,
    filter: "blur(10px)",
    rotateX: direction === 1 ? 4 : -4,
  }),
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    rotateX: 0,
  },
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    scale: 0.94,
    y: direction === 1 ? -60 : 60,
    filter: "blur(10px)",
    rotateX: direction === 1 ? -4 : 4,
  }),
};

export default function SceneShell({
  children,
  direction,
}: {
  children: ReactNode;
  direction: 1 | -1;
}) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="absolute inset-0 flex items-center justify-center px-6 pt-24 pb-10 sm:px-10"
    >
      {children}
    </motion.div>
  );
}
