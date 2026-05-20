"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./Button";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    },
  });

  // ESC key to close & body scroll freeze
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex="0"]';
    const getFocusable = () => {
      if (!modalRef.current) return [];
      return Array.from(modalRef.current.querySelectorAll(focusableSelectors)) as HTMLElement[];
    };

    const focusable = getFocusable();
    if (focusable.length > 0) {
      // Focus first interactive element on mount
      setTimeout(() => focusable[0].focus(), 150);
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const elements = getFocusable();
      if (elements.length === 0) return;
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    return () => window.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API round-trip
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface-2 p-6 sm:p-8 shadow-2xl shadow-slate-900/10 z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute right-4 top-4 p-1.5 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-3 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <div className="rounded-full bg-brand-success/10 p-3 text-brand-success mb-4 shadow-[0_0_20px_rgba(0,200,150,0.2)]">
                  <CheckCircle size={48} />
                </div>
                <h3 id="modal-title" className="text-2xl font-bold font-heading mb-2 text-text-primary">
                  Demo Booked Successfully!
                </h3>
                <p className="text-text-secondary mb-6 max-w-sm">
                  Our customer success representative will contact you on your registered details within 24 hours.
                </p>
                <Button onClick={handleModalClose} className="w-full">
                  Back to Website
                </Button>
              </motion.div>
            ) : (
              <div>
                <h3 id="modal-title" className="text-2xl font-bold font-heading mb-1 text-text-primary">
                  Schedule a Live Demo
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  Get a personalized walkthrough of BillIT NOW and see how it fits your business.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full rounded-xl border border-border bg-surface-3 px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="e.g. Shan Kumar"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-brand-primary text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border border-border bg-surface-3 px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="you@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-brand-primary text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-xl border border-border bg-surface-3 px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-brand-primary text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5" htmlFor="businessType">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      className="w-full rounded-xl border border-border bg-surface-3 px-4 py-3 text-text-primary focus:border-brand-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                      {...register("businessType")}
                    >
                      <option value="" disabled className="bg-surface-3 text-text-primary">Select your business type</option>
                      <option value="retail" className="bg-surface-3 text-text-primary">Retail Shop / Kirana</option>
                      <option value="wholesale" className="bg-surface-3 text-text-primary">Wholesale Store</option>
                      <option value="restaurant" className="bg-surface-3 text-text-primary">Restaurant / Cafe</option>
                      <option value="service" className="bg-surface-3 text-text-primary">Service-Based Business</option>
                      <option value="other" className="bg-surface-3 text-text-primary">Other Enterprise</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-brand-primary text-xs mt-1">{errors.businessType.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5" htmlFor="message">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full rounded-xl border border-border bg-surface-3 px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-brand-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your billing requirements..."
                      {...register("message")}
                    />
                  </div>

                  {/* Submit button */}
                  <Button type="submit" disabled={isSubmitting} className="w-full mt-2 py-3.5">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Scheduling Demo...
                      </>
                    ) : (
                      "Confirm Live Demo"
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
