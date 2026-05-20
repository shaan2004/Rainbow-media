"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Maximize, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log("Video play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="video-intro"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Dynamic Brand Glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            See BillIT NOW in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-4 font-medium"
          >
            Watch how our intuitive platform streamlines billing and eliminates physical paperwork in under 60 seconds.
          </motion.p>
        </div>

        {/* Video Wrapper Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border bg-surface-2 p-2.5 shadow-2xl shadow-slate-300/40"
        >
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/60 group">
            {/* Native Video */}
            <video
              ref={videoRef}
              preload="none"
              poster="/assets/lap.png"
              loop
              playsInline
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            >
              {/* Native local high-res video */}
              <source
                src="/assets/VID.mov"
                type="video/quicktime"
              />
              <source
                src="/assets/VID.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="pointer-events-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(2,132,199,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause size={30} fill="white" className="text-white" />
                ) : (
                  <Play size={30} fill="white" className="text-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Controls Info Banner */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-[10px] sm:text-xs bg-surface-1/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="flex items-center gap-2">
                <Volume2 size={14} />
                Stereo Sound
              </span>
              <span className="font-semibold tracking-wider">
                BillIT NOW Demo Presentation
              </span>
              <span className="flex items-center gap-2">
                HD 1080p
                <Maximize size={14} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
