"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

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
  "Top GMB and local SEO services in Guindy",
  "Best simple billing software in Chennai",
  "GST billing made simple in Guindy Chennai",
  "Easy billing software for small business",
  "Smart invoicing software in Chennai",
  "User-friendly billing software for retail shops",
  "Simple GST invoice software in Chennai",
  "Fast billing software for supermarkets",
  "Inventory and billing software made simple",
  "Cloud billing software for businesses in Chennai",
  "Easy stock and billing management system",
  "Affordable billing software in Guindy Chennai",
  "Best billing software for startups",
  "Digital billing solutions for local businesses",
  "Simple accounting and billing software",
  "Best retail billing system in Chennai",
  "Billing software for medical shops and pharmacies",
  "Modern billing software company in Chennai",
  "Smart business billing solutions in Guindy"
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
              <div className="flex flex-wrap gap-1.5 max-h-32 sm:max-h-40 overflow-y-auto pr-1 pt-2 scrollbar-thin scrollbar-thumb-border/40 scrollbar-track-transparent">
                {SEO_KEYWORDS.map((kw, kidx) => (
                  <span
                    key={kidx}
                    className="inline-block text-[9px] sm:text-[10px] font-bold text-text-secondary bg-surface-2 border border-border px-2.5 py-1 rounded-lg hover:border-brand-primary/30 hover:text-brand-primary hover:bg-surface-3 transition-all duration-300 select-none cursor-pointer"
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
                  <a href="mailto:rainbowmedia1123@gmail.com" className="hover:underline transition-all">
                    rainbowmedia1123@gmail.com
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
        <div className="flex flex-col items-center justify-center gap-4 pb-8">
          <div className="flex flex-col items-center gap-4">
            <h5 className="text-sm sm:text-base font-heading font-extrabold text-text-primary tracking-tight">
              Have Any Project in Mind?
            </h5>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/917305821333?text=Hi!%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-extrabold shadow-md hover:shadow-[#25D366]/20 hover:scale-105 transition-all duration-300 group select-none cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-300 group-hover:rotate-12"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:rainbowmedia1123@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-border bg-surface-1 text-text-secondary hover:text-text-primary text-sm font-extrabold shadow-md hover:scale-105 transition-all duration-300 group select-none cursor-pointer"
              >
                <Mail size={16} className="text-brand-primary group-hover:rotate-6 transition-transform" />
                <span>Email Us</span>
              </a>
            </div>
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
