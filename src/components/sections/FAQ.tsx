"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-0 py-3.5 sm:py-4 select-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 hover:text-text-primary transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-bold text-text-primary group-hover:text-brand-accent transition-colors duration-300">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-6 w-6 rounded-md bg-surface-3 border border-border flex items-center justify-center text-text-secondary group-hover:text-text-primary transition-colors duration-300 shrink-0 ml-4 shadow-sm"
        >
          <Plus size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-semibold pt-2 pb-4 max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary tracking-tight"
          >
            Your Questions, Answered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-4 font-medium"
          >
            Get clear, prompt answers on custom onboarding configurations, digital WhatsApp invoicing, and pricing tier licensing.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-surface-2 p-6 sm:p-8 shadow-2xl shadow-slate-200/40"
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA banner */}
        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm font-semibold text-text-secondary tracking-wide">
            Still have questions?{" "}
            <a
              href="#footer"
              className="text-brand-primary hover:text-brand-primary/80 hover:underline transition-colors decoration-brand-primary/50"
            >
              Contact our Chennai support team →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
