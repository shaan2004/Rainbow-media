"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Check, Smile, Smartphone, Leaf, Zap, Boxes, Users, LineChart, UserCheck } from "lucide-react";
import { useState } from "react";
import { BENEFITS } from "@/lib/constants";

const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const DIAGRAM_NODES = [
  { label: "User Friendly Interface", icon: <Smile size={18} />, x: 70, y: 290, brief: "Zero training required. A simple, self-explanatory UI built for lightning-fast billing." },
  { label: "Mobile Accessibility", icon: <Smartphone size={18} />, x: 92, y: 220, brief: "Create, manage, and share professional invoices on the go from any smartphone." },
  { label: "Paperless Billing", icon: <Leaf size={18} />, x: 138, y: 160, brief: "100% digital receipts. Go eco-friendly, save paper expenses, and share via WhatsApp." },
  { label: "Effortless Invoicing", icon: <Zap size={18} />, x: 202, y: 125, brief: "Generate tax-compliant GST bills and receipt registers in just three clicks." },
  { label: "Inventory Management", icon: <Boxes size={18} />, x: 298, y: 125, brief: "Track stock quantities, receive low-stock alerts, and auto-adjust product lines." },
  { label: "Customer Integration", icon: <Users size={18} />, x: 362, y: 160, brief: "Maintain deep ledger profiles, outstanding balances, and purchase histories." },
  { label: "Sales & Expense Reports", icon: <LineChart size={18} />, x: 408, y: 220, brief: "Gain instant clarity with real-time tax logs, net profit summaries, and cashflows." },
  { label: "Staff Sales Tracking", icon: <UserCheck size={18} />, x: 430, y: 290, brief: "Monitor manager sales tallies, assign granular roles, and track individual shifts." },
];

export function Benefits() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section
      id="benefits"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Interactive staggered list */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
              >
                Key Benefits of our billing software
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary max-w-lg font-medium leading-relaxed"
              >
                Enjoy high-speed cloud billing designed to eliminate transaction delays, optimize inventory levels in real-time, and save thousands in paper costs instantly.
              </motion.p>
            </div>

            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {BENEFITS.map((benefit, index) => {
                const isActive = activeNode === index;
                return (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-300 select-none cursor-pointer group ${
                      isActive
                        ? "bg-gradient-to-r from-brand-primary to-brand-accent border-transparent scale-[1.02] shadow-lg shadow-brand-primary/15"
                        : "bg-surface-2 border-border hover:border-slate-300 hover:bg-surface-3"
                    }`}
                  >
                    <span className={`h-6.5 w-6.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-white text-brand-primary scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                        : "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary group-hover:scale-105"
                    }`}>
                      <Check size={13} strokeWidth={isActive ? 3.5 : 2.5} />
                    </span>
                    <span className={`text-sm font-bold transition-colors ${
                      isActive ? "text-white" : "text-text-primary group-hover:text-brand-primary"
                    }`}>
                      {benefit}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* Right Column: Semicircular Interactive Network Diagram */}
          <div className="relative w-full max-w-[500px] h-[400px] mx-auto flex items-end justify-center overflow-visible select-none">
            
            {/* SVG Link Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-primary)" />
                  <stop offset="100%" stopColor="var(--brand-accent)" />
                </linearGradient>
              </defs>
              
              {/* Static Dashed Links */}
              {DIAGRAM_NODES.map((node, i) => (
                <path
                  key={`dashed-${i}`}
                  d={`M ${node.x} ${node.y} L 250 310`}
                  stroke="rgba(15, 23, 42, 0.08)"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
              ))}

              {/* Glowing Interactive Laser Path */}
              {DIAGRAM_NODES.map((node, i) => {
                const isActive = activeNode === i;
                return (
                  <motion.path
                    key={`glow-${i}`}
                    d={`M ${node.x} ${node.y} L 250 310`}
                    stroke="url(#glowGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isActive
                        ? { pathLength: 1, opacity: 1, strokeDashoffset: [0, -20] }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: { duration: 0.35, ease: "easeOut" },
                      strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" }
                    }}
                    strokeDasharray={isActive ? "10 5" : "none"}
                    className="drop-shadow-[0_0_8px_rgba(16,62,133,0.4)]"
                  />
                );
              })}
            </svg>

            {/* Central Circle Hub */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[210px] h-[210px] rounded-full bg-gradient-to-b from-brand-primary to-brand-accent p-1 shadow-[0_20px_50px_rgba(16,62,133,0.18)] z-10 overflow-hidden flex items-end justify-center group/hub">
              {/* Spinning Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dashed border-white/40 pointer-events-none z-0"
              />
              
              <div className="w-full h-full rounded-full bg-surface-1 overflow-hidden flex items-end justify-center relative">
                <img
                  src="/assets/benefits_avatar.png"
                  alt="Professional Billing Specialist"
                  className="w-[85%] h-auto object-contain z-10 translate-y-1 group-hover/hub:scale-[1.04] transition-transform duration-500"
                />
                
                {/* Visual Glassmorphic Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,var(--surface-2)_95%)] pointer-events-none z-20" />
                
                {/* Idle Indicator Overlay Text */}
                <div className={`absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3 border border-border shadow-md z-20 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${
                  activeNode !== null ? "opacity-0" : "opacity-100"
                }`}>
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                    FEATURES
                  </span>
                  <span className="text-[8px] font-bold text-text-secondary truncate w-full">
                    Hover a node to inspect
                  </span>
                </div>

                {/* Sliding Explanation Brief Panel */}
                <motion.div
                  initial={{ y: 210 }}
                  animate={{ y: activeNode !== null ? 0 : 210 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-30 p-4 flex flex-col justify-center items-center text-center text-white"
                >
                  {activeNode !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col items-center gap-1.5 w-full"
                    >
                      <div className="h-8.5 w-8.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 shrink-0">
                        {DIAGRAM_NODES[activeNode].icon}
                      </div>
                      <h4 className="text-[11px] font-extrabold tracking-tight uppercase bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                        {DIAGRAM_NODES[activeNode].label}
                      </h4>
                      <p className="text-[9px] font-semibold leading-relaxed text-white/80 px-2 my-0.5">
                        {DIAGRAM_NODES[activeNode].brief}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Orbiting Feature Node Rings */}
            {DIAGRAM_NODES.map((node, i) => {
              const isActive = activeNode === i;
              return (
                <motion.div
                  key={`node-${i}`}
                  style={{
                    position: "absolute",
                    left: node.x - 22,
                    top: node.y - 22,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`h-11 w-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 select-none ${
                    isActive
                      ? "bg-gradient-to-r from-brand-primary to-brand-accent text-white scale-125 shadow-[0_0_20px_rgba(152,23,118,0.4)]"
                      : "bg-surface-2 border border-border text-text-secondary hover:bg-surface-3 hover:border-slate-400 hover:scale-110 shadow-md"
                  }`}
                  aria-label={node.label}
                  role="button"
                  tabIndex={0}
                >
                  {node.icon}
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
