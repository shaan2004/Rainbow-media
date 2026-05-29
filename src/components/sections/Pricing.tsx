"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "../ui/Button";

interface PricingProps {
  onOpenDemo: () => void;
}

export function Pricing({ onOpenDemo }: PricingProps) {
  const [currency, setCurrency] = useState<"inr" | "usd">("inr");

  return (
    <section
      id="pricing"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-4 font-medium"
          >
            Choose the license that fits your register counts. Special onboarding configuration included with every tier.
          </motion.p>

          {/* Currency Toggle Switch */}
          <div className="flex justify-center mt-10">
            <div className="relative flex items-center p-1 rounded-xl bg-surface-2 border border-border select-none">
              <button
                onClick={() => setCurrency("inr")}
                className={`relative px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                  currency === "inr" ? "text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {currency === "inr" && (
                  <motion.div
                    layoutId="activeCurrencyBg"
                    className="absolute inset-0 bg-brand-primary rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">INR (₹)</span>
              </button>
              <button
                onClick={() => setCurrency("usd")}
                className={`relative px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                  currency === "usd" ? "text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {currency === "usd" && (
                  <motion.div
                    layoutId="activeCurrencyBg"
                    className="absolute inset-0 bg-brand-primary rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">USD ($)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const isRec = plan.recommended;
            const activePrice = currency === "inr" ? plan.price.inr : plan.price.usd;
            const activeRenewal = currency === "inr" ? plan.renewal.inr : plan.renewal.usd;
            const priceSymbol = currency === "inr" ? "₹" : "$";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl sm:rounded-3xl p-2 sm:p-8 flex flex-col justify-between transition-all duration-300 select-none ${
                  isRec
                    ? "border-2 border-brand-primary bg-surface-2 shadow-[0_20px_50px_rgba(2,132,199,0.1)] md:scale-105 z-10"
                    : "border border-border bg-surface-2 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-300/20"
                }`}
              >
                {/* Custom glowing tag for Recommended */}
                {isRec && (
                  <div className="absolute -top-2 sm:-top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-brand-primary text-white text-[5px] sm:text-[10px] tracking-widest font-extrabold px-1 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase whitespace-nowrap shadow-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-1 sm:space-y-4 mb-2 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[10px] sm:text-xl font-extrabold text-text-primary">{plan.name}</h3>
                    {isRec && <ShieldCheck className="text-brand-primary h-3 w-3 sm:h-6 sm:w-6" />}
                  </div>
                  <p className="text-[7px] sm:text-xs text-text-secondary font-medium leading-tight sm:leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <div className="flex items-baseline gap-0.5 sm:gap-1 text-text-primary">
                      <span className="text-xs sm:text-4xl font-heading font-extrabold">{priceSymbol}{activePrice.toLocaleString()}</span>
                      <span className="text-text-secondary text-[7px] sm:text-xs font-semibold">/yr</span>
                    </div>
                    <span className="text-[6px] sm:text-xs font-bold text-text-secondary/70 block mt-0.5 sm:mt-1">
                      Renews: {priceSymbol}{activeRenewal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border my-2 sm:my-6" />

                {/* Features List */}
                <ul className="space-y-1.5 sm:space-y-3.5 mb-3 sm:mb-8 flex-1">
                  {plan.features.map((feat, fidx) => (
                    <li
                      key={fidx}
                      className={`flex items-start gap-1 sm:gap-3 text-[7px] sm:text-xs leading-normal sm:leading-relaxed font-semibold ${
                        feat.included ? "text-text-primary" : "text-text-secondary/50 line-through"
                      }`}
                    >
                      {feat.included ? (
                        <span className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full bg-brand-success/10 border border-brand-success/20 flex items-center justify-center text-brand-success mt-0.5 shadow-sm shrink-0">
                          <Check className="h-2 w-2 sm:h-3 sm:w-3" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="h-3.5 w-3.5 sm:h-5 sm:w-5 rounded-full bg-surface-3 border border-border flex items-center justify-center text-text-secondary/40 mt-0.5 shrink-0">
                          <X className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5" strokeWidth={2.5} />
                        </span>
                      )}
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA Button */}
                <Button
                  onClick={onOpenDemo}
                  variant={isRec ? "primary" : "outline"}
                  className="w-full py-1.5 sm:py-3.5 text-[8px] sm:text-sm"
                >
                  Book Demo
                </Button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
