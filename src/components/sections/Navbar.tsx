"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link on scroll
  useEffect(() => {
    const handleIntersection = () => {
      const sections = NAV_LINKS.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleIntersection);
    return () => window.removeEventListener("scroll", handleIntersection);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-surface-1/80 backdrop-blur-xl border-b border-border py-3 shadow-md shadow-slate-200/40"
            : "bg-transparent pt-4 pb-6"
        )}
      >
        {/* Sleek Contact Information Topbar */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden text-xs text-text-secondary border-b border-border/20 max-w-7xl mx-auto px-6 w-full",
            isScrolled ? "h-0 opacity-0 mb-0 pointer-events-none" : "h-7 opacity-100 mb-3"
          )}
        >
          <div className="flex justify-between items-center w-full pb-2">
            <div className="flex items-center gap-4">
              <a
                href="mailto:billitrm@gmail.com"
                className="flex items-center gap-1.5 hover:text-text-primary transition-colors text-[11px] sm:text-xs font-semibold"
              >
                <Mail size={12} className="text-brand-primary" />
                <span>billitrm@gmail.com</span>
              </a>
              <span className="text-border/40 select-none">|</span>
              <a
                href="tel:+917305821333"
                className="flex items-center gap-1.5 hover:text-text-primary transition-colors text-[11px] sm:text-xs font-semibold"
              >
                <Phone size={12} className="text-brand-primary" />
                <span>+91 73058 21333</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 font-semibold text-text-tertiary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Direct Support Desk</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group select-none">
            <img
              src="/assets/logo.png"
              alt="BillIT NOW Logo"
              className="h-9 w-auto object-contain hover:scale-105 transition-transform duration-300 brightness-0 opacity-85 hover:opacity-100"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-semibold tracking-wide transition-colors py-1.5",
                  activeLink === link.href ? "text-text-primary font-bold" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:block">
            <Button onClick={onOpenDemo} variant="primary" size="sm">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-3 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-surface-1 flex flex-col pt-24 px-8 pb-10 lg:hidden"
          >
            <nav className="flex flex-col gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold tracking-wide transition-colors py-2 border-b border-border",
                    activeLink === link.href ? "text-brand-primary" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05 }}
              className="mt-auto space-y-6"
            >
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-4 text-base"
              >
                Book Demo
              </Button>

              <div className="pt-6 border-t border-border flex flex-col gap-3.5 text-sm font-semibold text-text-secondary">
                <div className="text-xs uppercase text-text-tertiary tracking-wider font-bold">Contact Support</div>
                <a href="mailto:billitrm@gmail.com" className="flex items-center gap-2 hover:text-text-primary transition-colors">
                  <Mail size={16} className="text-brand-primary" />
                  <span>billitrm@gmail.com</span>
                </a>
                <a href="tel:+917305821333" className="flex items-center gap-2 hover:text-text-primary transition-colors">
                  <Phone size={16} className="text-brand-primary" />
                  <span>+91 73058 21333</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
