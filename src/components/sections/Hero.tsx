"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_WORDS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

// --- Typewriter Hook ---
function useTypewriter(words: string[], speed = 80, delay = 1800) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

// --- Canvas Background Particle Network ---
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 160 };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 1;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 20 + 8;
        this.color = Math.random() > 0.5 ? "#FF6B35" : "#00D4FF";
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Floating movement
        this.baseX += Math.sin(Date.now() * 0.0005 + this.density) * 0.03;
        this.baseY += Math.cos(Date.now() * 0.0005 + this.density) * 0.03;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * 0.5;
            const directionY = forceDirectionY * force * this.density * 0.5;

            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx / 15;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy / 15;
            }
          }
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const numberOfParticles = Math.min((width * height) / 9000, 120);
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Node links
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 90) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 * (1 - distance / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />;
}

// --- 3D Parallax Tilt Mockup ---
function TiltMockup() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Scale down angles for smooth 3D tilt
    const rX = -(mouseY / (height / 2)) * 8;
    const rY = (mouseX / (width / 2)) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex justify-center py-6 px-2">
      {/* Decorative ambient under-glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/20 blur-[90px]" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-primary/15 blur-[90px]" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        className="relative w-full max-w-[620px] drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)] cursor-grab active:cursor-grabbing select-none"
      >
        <img
          src="/assets/lap.png"
          alt="BillIT NOW Dashboard Mockup"
          className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300 contrast-[1.02] saturate-[1.03]"
          style={{ transform: "translateZ(30px)", imageRendering: "auto" }}
        />

        {/* Floating Animated Graph Card */}
        <motion.div
          style={{ transform: "translateZ(65px)" }}
          className="absolute -right-6 md:-right-10 bottom-8 z-20 w-44 sm:w-48 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col gap-2 pointer-events-none select-none"
        >
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Real-time Sales</span>
            <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              +18.4%
            </span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-heading font-extrabold text-white">₹48,250</span>
            <span className="text-[8px] font-bold text-white/40">today</span>
          </div>

          <div className="w-full h-11 relative mt-1 overflow-visible">
            <svg viewBox="0 0 140 45" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#103e85" />
                  <stop offset="100%" stopColor="#981776" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 5 38 C 25 32, 45 10, 75 22 S 105 2, 135 8"
                fill="none"
                stroke="url(#chartGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.8 }}
              />
              <motion.circle
                cx="135"
                cy="8"
                r="3.5"
                fill="#10B981"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- Main Hero Section ---
interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const typedWord = useTypewriter(HERO_WORDS, 90, 1600);

  const handleWatchDemoClick = () => {
    const videoSection = document.getElementById("video-intro");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] w-full flex items-center justify-center bg-surface-1 overflow-hidden pt-28 pb-12"
    >
      {/* Dynamic Background */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--surface-1)_95%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Layout */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10 pointer-events-none">
        
        {/* Left: Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 pointer-events-auto"
        >
          <Badge>
            🏆 India&apos;s #1 Billing Software
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-text-primary leading-tight">
            Billing Made Simple — <br />
            <span className="text-transparent bg-clip-text bg-gradient-hero inline-block min-h-[1.2em]">
              {typedWord}
              <span className="text-brand-accent animate-pulse font-normal">|</span>
            </span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg max-w-lg leading-relaxed font-medium">
            The finest billing software for every invoicing need — built for Indian businesses. Secure, paperless, and lightning fast.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Button onClick={onOpenDemo} variant="primary" className="gap-2 group">
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={handleWatchDemoClick} variant="outline" className="gap-2 border-border bg-surface-2 hover:bg-surface-3 text-text-primary shadow-sm">
              <Play size={16} fill="currentColor" className="text-text-primary" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof Strip */}
          <div className="flex items-center gap-2 mt-2 py-2">
            <div className="flex items-center gap-0.5 text-brand-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-semibold text-text-secondary tracking-wide">
              ★★★★★ Trusted by 500+ businesses
            </span>
          </div>
        </motion.div>

        {/* Right: 3D Parallax Device Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <TiltMockup />
        </motion.div>

      </div>
    </section>
  );
}
