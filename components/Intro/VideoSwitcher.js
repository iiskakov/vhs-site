import React from 'react';
import { lato } from '@/app/fonts';

const VideoSwitcher = ({ videos, activeVideo, setActiveVideo, data }) => {
  return (
    <div className="absolute bottom-8 left-16 z-20 font-sans text-sm">
      {videos.map((video) => (
        <div
          key={video.id}
          onClick={() => setActiveVideo(video.id)}
          className="flex items-center cursor-pointer mb-2.5"
        >
          <img
            src="/circle-icon.svg"
            alt="Circle Icon"
            className={`mr-2 h-2.5 w-2.5 ${activeVideo === video.id ? '' : 'opacity-50'}`}
            style={{ fill: activeVideo === video.id ? video.color : 'none' }}
          />
          <span className={`${lato.className}`}>{video.label}</span>
        </div>
      ))}
    </div>
  );
};

export default VideoSwitcher;
