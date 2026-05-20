"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "../animations/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function CustomerMgmt() {
  return (
    <section
      id="customers"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Premium Laptop Database Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none flex justify-center py-6 px-2"
          >
            {/* Decorative ambient under-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/15 blur-[90px]" />
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-primary/10 blur-[90px]" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-[540px] drop-shadow-[0_20px_45px_rgba(15,23,42,0.16)] select-none animate-float"
            >
              <img
                src="/assets/customer.png"
                alt="BillIT NOW Customer Summary Dashboard Mockup"
                className="w-full h-auto object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300 contrast-[1.02] saturate-[1.03]"
                style={{ imageRendering: "auto" }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Copy & Animated stats counters */}
          <div className="space-y-10">
            <div className="space-y-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
              >
                Managing Customer Relationships
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary font-medium leading-relaxed max-w-lg"
              >
                Full admin control — create, list, edit, and delete customer records with ease. Track pending balances, record histories, and optimize retention pipelines seamlessly.
              </motion.p>
            </div>

            {/* Counters grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-1 select-none"
                >
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-text-primary tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <span className="text-[10px] sm:text-xs font-bold text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
