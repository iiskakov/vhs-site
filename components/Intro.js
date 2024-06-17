'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from "framer-motion";


import Logo from '@/components/Intro/Logo'
import Spline from '@/components/Intro/Spline'
import Videos from '@/components/Intro/Videos'
import VideoSwitcher from '@/components/Intro/VideoSwitcher'


const Intro = (data) => {
  const [activeVideo, setActiveVideo] = useState(1);


  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"/>
      <Logo/>
      <Videos videos={data.data.data} activeVideo={activeVideo} />
      <VideoSwitcher videos={data.data.data} activeVideo={activeVideo} setActiveVideo={setActiveVideo}/>
      <Spline project_name={data.data.data[activeVideo - 1]?.project_name} director={data.data.data[activeVideo - 1]?.director} label={data.data.data[activeVideo - 1]?.label} />
    </div>
  );
}

export default Intro;
