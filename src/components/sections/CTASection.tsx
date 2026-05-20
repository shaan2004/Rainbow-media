"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate server transaction
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    // Confetti pop!
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FF6B35", "#00D4FF", "#00C896"],
    });

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <section
      id="cta"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Full-width brand card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero animate-gradient-slide p-8 sm:p-12 md:p-16 text-center shadow-2xl"
        >
          {/* Subtle noise mesh overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6 flex flex-col items-center">
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="flex flex-col items-center gap-4 py-6"
                >
                  <div className="rounded-full bg-white/20 p-2.5 text-white shadow-md">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight">
                    You&apos;re on the early access list!
                  </h3>
                  <p className="text-white/80 text-sm font-semibold max-w-sm">
                    Thank you! We will update you with exclusive retail release logs and product launches shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 w-full flex flex-col items-center"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                    Ready to Transform <br className="sm:hidden" /> Your Billing?
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base font-semibold max-w-lg">
                    Join early Indian retail store operators scaling business transactions and optimizing inventory with zero paperwork.
                  </p>

                  {/* Inline Newsletter Form */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md flex flex-col sm:flex-row gap-3 pt-3"
                  >
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-white text-xs font-bold text-left mt-1.5 pl-1 absolute sm:static">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 bg-white text-brand-primary hover:bg-white/90 hover:shadow-lg shrink-0 font-extrabold h-[48px] px-6 text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin text-brand-primary" />
                          Subscribing...
                        </>
                      ) : (
                        <span className="flex items-center gap-1.5 text-brand-primary">
                          Get Started
                          <ArrowRight size={14} className="text-brand-primary" />
                        </span>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
