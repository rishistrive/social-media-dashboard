import React from "react";
import { motion } from "framer-motion";

const chartStyle =
  "bg-white p-5 rounded-3xl drop-shadow-[0_10px_15px_rgba(34,197,94,0.25)] hover:drop-shadow-[0_15px_25px_rgba(34,197,94,0.4)] transition-transform hover:scale-105 h-72 flex flex-col cursor-pointer";

const chartTitle = "text-center text-lg font-semibold text-gray-800 mb-3";
const chartWrapper = "relative flex-1 overflow-hidden";

export default function ChartCard({ title, chart, index }) {
  const animations = [
    { x: -50 },
    { y: -50 },
    { x: 50 },
    { y: 50 },
    { x: -30 },
    { y: -30 },
    { x: 30 },
    { y: 30 },
    { y: -50 },
    { x: 50 },
  ];

  const motionProps = {
    initial: { opacity: 0, ...animations[index % animations.length] },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className={chartStyle} {...motionProps}>
      <p className={chartTitle}>{title}</p>
      <div className={chartWrapper}>{chart}</div>
    </motion.div>
  );
}
