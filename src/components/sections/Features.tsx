"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FileText, Smartphone, Users, TrendingUp, Package, BarChart3, LucideIcon } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FileText: FileText,
  Smartphone: Smartphone,
  Users: Users,
  TrendingUp: TrendingUp,
  Package: Package,
  BarChart3: BarChart3,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            Powerful Features Crafted for Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-4 font-medium"
          >
            Explore all the custom modules designed to run billing workflows at maximum speed on any device.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || FileText;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative rounded-2xl border border-border bg-surface-2 p-6 sm:p-8 hover:bg-gradient-to-br hover:from-brand-primary hover:to-brand-accent hover:border-transparent hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,62,133,0.18)] transition-all duration-300 flex flex-col gap-5 select-none"
              >
                {/* Icon wrapper */}
                <div className="h-12 w-12 rounded-xl bg-surface-3 border border-border text-brand-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/10 group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-white/85 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
