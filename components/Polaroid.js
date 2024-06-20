'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import { anton } from '@/app/fonts';
import { marker } from '@/app/fonts';





const PolaroidCard = ({ imageSrc, videoSrc, name, title, dragConstraints, initial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      whileDrag={{ scale: 1.2 }}
      whileHover={{ rotate: initial.rotate + 3 }}
      initial={initial}
      dragMomentum={false}
      style={{
        width: "285px",
        height: "350px",
        backgroundColor: "white",
        padding: "15px",
        paddingTop: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
          zIndex: 20,
      }}
      className="draggable cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: "100%",
        height: "0",
        paddingBottom: "100%",
        position: "relative",
        marginBottom: "10px",
      }}>
        <video
          ref={videoRef}
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'block' : 'none'
          }}
          autoPlay
          loop
          muted
        />
        <img
          src={imageSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            display: isHovered ? 'none' : 'block'
          }}
          alt={name}
        />
      </div>
      <h1
        className={`${marker.className}`}
        style={{
        fontSize: "18px",
        textAlign: "center",
        marginTop: "5px",
        background: `url(${"https://storage.yandexcloud.kz/qarabucket/marker_texture.jpg"})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }}>{name} /<br /> {title}</h1>
    </motion.div>
  );
};


const polaroidData = {
  polaroidCards: [
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/yerkebulan.png",
      name: "Yerkebulan",
      title: "General Producer",
      initial: { x: 100, y: 200, rotate: -2 },
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/sardor.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Sardor",
      title: "Director of Photography",
      initial: { x: 200, y: -120, rotate: 5 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/zhandos.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Zhandos",
      title: "Director",
      initial: { x: 400, y: -260, rotate: 2 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/milana.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Milana",
      title: "Chief Marketing Officer",
      initial: { x: 130, y: -900, rotate: -5 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/aisultan.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Aisultan",
      title: "Director",
      initial: { x: 230, y: -500, rotate: -9 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/kamilla.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Kamilla",
      title: "Project Manager",
      initial: { x: 30, y: -800, rotate: 14 }
    },
    {
      imageSrc: "https://storage.yandexcloud.kz/qarabucket/team/ratmir.png",
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm',
      name: "Ratmir",
      title: "Commercial Director",
      initial: { x: 90, y: -1200, rotate: 4 }
    }
  ]
};



const App = () => {

  return (
      <div className="w-full h-full relative flex flex-col items-center justify-start pt-24">
  <h1 className={`drop-shadow-md select-none pointer-events-none text-[144px] z-50 mb-8 uppercase ${anton.className}`} >Team Behind</h1>
    {polaroidData.polaroidCards.map((card, index) => (
      <PolaroidCard
        key={index}
        imageSrc={card.imageSrc}
        videoSrc={card.videoSrc}
        name={card.name}
        title={card.title}
        initial={card.initial}
      />
    ))}
</div>

  );
};

export default App;
