'use client'
import React, { useEffect } from 'react';

import Image from 'next/image'
import { motion, AnimatePresence, useAnimate } from "framer-motion";

import { anton } from '@/app/fonts';
import { lato } from '@/app/fonts';
import { orbitron } from '@/app/fonts';

import hq from "@/public/hq.svg";
import oppo from "@/public/oppo_logo.svg";


const Spline = ({ project_name, label, director }) => {


  return (
    <motion.div className="absolute right-0 top-0 h-full z-20 flex flex-col items-center justify-between" >
  <img
    src="/spline.svg"
    alt="Spline"
    className="h-full w-auto"
  />

  <div className="absolute top-0 w-full flex justify-center my-6">
    <Image width={83} height={41} src={hq} alt="HQ logo" />
  </div>

  <div className="absolute top-1/4 transform -translate-y-1/4 w-full text-center text-black">
    <div className={`${lato.className} text-[24px] uppercase mt-8 mb-4`}>2024</div>
    <div className={`${orbitron.className} text-[8px] uppercase font-extrabold`}>Directed by</div>
    <motion.div
      key={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${orbitron.className} text-center text-black font-extrabold uppercase text-[15px]`}
    >
      {director}
    </motion.div>
  </div>

  <div className="absolute bottom-0 w-full flex flex-col items-center text-black mb-6">
    <motion.div
      key={label}
      initial={{ y: -100, rotate: 180 }}
      animate={{ y: 0, rotate: 180 }}
      exit={{ y: 100, rotate: 180 }}
      className={`${anton.className} mb-6 uppercase font-extrabold text-4xl text-left leading-9 h-72 break-words [writing-mode:vertical-lr] rotate-180 whitespace-normal overflow-wrap-break-word select-none`}
    >
    {project_name}
    </motion.div>

    <div className={`${lato.className} flex justify-center align-center`}>
      <div className="w-[60px] flex flex-row text-xs items-center font-bold">
        by <Image src={oppo} alt="oppo logo" className="accordion-oppo" />
      </div>
    </div>
  </div>
</motion.div>


  );
};

export default Spline;
