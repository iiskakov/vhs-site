'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anton } from '@/app/fonts'

import logo from "@/public/logo.svg";
import hq from "@/public/hq.svg";
import oppo from "@/public/oppo_logo.svg";
import hyundai from "@/public/hyundai-logo.svg";
import redbull from "@/public/redbull-logo.svg";
import Image from 'next/image'

const accordionData = [
  {
    title: "HYUNDAI X \u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0 ASTANA MOTORS",
    year: 2021,
    color: "#7861fe",
    directedBy: "AISULTAN",
    client: "HYUNDAI",
    category: "COMMERCIAL",
  },
  {
    title:
      "ALTERNATIVA \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 FILM PROJECT",
    year: 2023,
    color: "#63c278",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "FILM",
  },
  {
    title: "DIMASH X OPPO",
    year: 2023,
    color: "#ffde6d",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "COMMERCIAL",
  },
  {
    title: "REDBULL SOUNDCLASH",
    year: 2023,
    color: "#fe2c52",
    directedBy: "AISULTAN",
    client: "REDBULL",
    category: "COMMERCIAL",
  },
  {
    title: "AITPA SHOW",
    year: 2022,
    color: "#fd7a00",
    directedBy: "AISULTAN",
    client: "HYUNDAI",
    category: "SHOW",
  },
  {
    title: "VISIT ALMATY",
    year: 2023,
    color: "#fda4b5",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "CAMPAIGN",
  },
  {
    title: "BCC BUSINESS",
    year: 2023,
    color: "#9147AE",
    directedBy: "AISULTAN",
    client: "OPPO",
    category: "CAMPAIGN",
  },
];

const AccordionItem = ({
  title,
  year,
  color,
  client,
  category,
  index,
  isInView,
}) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ rotate: 15 }}
      animate={isInView && {rotate: 0}}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ y: !isOpen ? -15 : 0 }}
      whileTap={{ scale: 0.95 }}
      className="accordion-item"
      style={{ backgroundColor: color }}
    >
      <motion.div
        initial={false}
        transition={{ duration: 0.6 }}
        className="accordion-header"
        onClick={handleClick}
      >
        <div className="accordion-header-logo">
          {client === 'OPPO' ? (
            <Image src={oppo} alt="oppo logo" className="accordion-oppo" />
          ) : client === 'HYUNDAI' ? (
            <Image src={hyundai} alt="hyundai logo" className="accordion-hyundai" />
          ) : client === 'REDBULL' ? (
            <Image src={redbull} alt="redbull logo" className="accordion-redbull" />
          ) : null}
        </div>
        <motion.div className="accordion-year">{year}</motion.div>
        <motion.div className={`${anton.className} accordion-title`}>{title}</motion.div>
        <div className="accordion-footer">
          <Image src={logo} alt="2d Production logo" className="accordion-logo" />
          <Image src={hq} alt="HQ logo" className="accordion-hq" />
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.4 }}
            initial={{ width: '0px' }}
            animate={{ width: '300px' }}
            exit={{ width: '0px' }}
            className="accordion-content"
          >
            <video
              src="https://samplelib.com/lib/preview/webm/sample-5s.webm"
              autoPlay
              loop
              preload="auto"
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const [isInView, setIsInView] = useState(false);

  return (
      <motion.div
      whileInView={() => {
        // when element in viewport , set IsInView true!
        setIsInView(true);
        return {};
      }}
      className="my-[80px]"
    >
    <motion.div
      initial={{ x: '95vw' }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }} >
      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
    </motion.div>
  );
};




export default App;
