"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({ children, className = "", as = "div" }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className = "", as = "div" }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component variants={item} className={className}>
      {children}
    </Component>
  );
}
