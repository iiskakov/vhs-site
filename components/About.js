'use client'

import React from "react";
import { motion } from "framer-motion";
import { anton } from '@/app/fonts';


const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust this value for the desired delay between children
    },
  },
};

const textVariants = {
  hidden: {  y: '100%' },
  visible: {  y: 0, transition: { duration: 0.5 } },
};

const StaggeredText = () => {
  return (
       <div className="flex justify-center items-center align-center h-screen">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textContainerVariants}
      style={{ overflow: "hidden" }}
      className={`${anton.className} text-8xl uppercase text-center`}
    >
      <div  style={{ overflow: "hidden", height: "1em", marginBottom: '0.3em' }}>
        <motion.div variants={textVariants}>
           we are <span style={{ color: '#FFC634' }}>a team</span> of enthusiasts
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1em", marginBottom: '0.3em' }}>
        <motion.div variants={textVariants}>
          who have <span style={{ color: '#FD511C' }}>one big idea —</span>
        </motion.div>
      </div>
      <div style={{ overflow: "hidden", height: "1em" }}>
        <motion.div variants={textVariants}>
          to create <span style={{ color: '#F1015D' }}>high impact</span> projects
        </motion.div>
      </div>
    </motion.div>
      </div>
  );
};

export default StaggeredText;
