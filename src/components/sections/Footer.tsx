"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

const SEO_KEYWORDS = [
  "Best digital marketing agencies in Chennai",
  "Top 10 best digital marketing agencies in guindy chennai",
  "Best digital marketing agencies in guindy Chennai",
  "Top digital marketing companies",
  "Best social media marketing agency in Guindy",
  "Best social media content creation services in guindy",
  "Top GMB marketing experts in Guindy",
  "Best seo smm and digital marketing in Guindy",
  "Best seo and smm service in Guindy",
  "Top social media marketing companies in Guindy",
  "Top social media marketing agency in Chennai",
  "Affordable on-page seo optimization in Guindy",
  "Top 5 Digital marketing agencies in Guindy",
  "Top 15 Best Digital Marketing Agencies in Chennai",
  "Top GMB and local SEO services in Guindy"
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-surface-2 border-t border-border pt-16 pb-8 overflow-hidden"
    >
      {/* Subtle backlighting glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Double Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-border mb-10">
          
          {/* Left Box: SEO Resources (2/3 width) */}
          <div className="lg:col-span-2 bg-surface-1 border border-border p-6 sm:p-8 rounded-2xl shadow-sm text-left flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-heading font-extrabold text-text-primary tracking-tight">
                Don&apos;t leave just yet, explore these resources!
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-text-secondary leading-relaxed">
                As a leading marketing and billing technology provider in Chennai, we help local businesses dominate the digital space. Check out our localized optimization pathways:
              </p>
              
              {/* Keywords Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-2">
                {SEO_KEYWORDS.map((kw, kidx) => (
                  <span
                    key={kidx}
                    className="inline-block text-[10px] sm:text-xs font-semibold text-text-secondary bg-surface-2 border border-border px-3 py-1.5 rounded-full hover:border-brand-primary/30 hover:text-brand-primary hover:bg-surface-3 transition-all duration-300 select-none cursor-pointer"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Box: Get in Touch Card (1/3 width) */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient decorative glow inside card */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-heading font-extrabold tracking-tight">Get in Touch</h4>
                <p className="text-xs text-white/80 font-bold uppercase tracking-widest">
                  Have questions? Contact us
                </p>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm font-semibold leading-relaxed">
                <li className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Phone size={14} />
                  </span>
                  <a href="tel:+917305821333" className="hover:underline transition-all">
                    +91 73058 21333
                  </a>
                </li>
                
                <li className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Mail size={14} />
                  </span>
                  <a href="mailto:rainbowmedia@gmail.com" className="hover:underline transition-all">
                    rainbowmedia@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <span className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </span>
                  <div className="flex flex-col text-white/90">
                    <span>Old.No. 83, New no.112,</span>
                    <span>2nd floor, Anna salai, Manickam lane</span>
                    <span>Guindy, Chennai-600032</span>
                    <span className="text-[10px] text-white/70 italic mt-1">
                      Landmark: Before street of Klase hotel, Guindy
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Brand visual link row */}
        <div className="flex flex-col items-center justify-center gap-6 pb-8">
          <div className="flex flex-col items-center gap-3">
            <h5 className="text-sm sm:text-base font-heading font-extrabold text-text-primary tracking-tight">
              Have Any Project in Mind?
            </h5>
            <div className="flex items-center justify-center gap-6 text-xs sm:text-sm font-bold">
              {["About Us", "Services", "Contact Us", "Careers"].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-text-secondary hover:text-brand-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Instagram size={15} />, label: "Instagram" },
              { icon: <Facebook size={15} />, label: "Facebook" },
              { icon: <Linkedin size={15} />, label: "LinkedIn" },
              { icon: <Twitter size={15} />, label: "Twitter" }
            ].map((social, sidx) => (
              <a
                key={sidx}
                href="#"
                className="h-8 w-8 rounded-full bg-surface-3 border border-border flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-primary hover:border-transparent transition-all duration-300 shadow-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-text-secondary select-none pt-6 border-t border-border/60">
          <p>© 2026 BillIT NOW by Rainbow Media. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
