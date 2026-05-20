"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REPORTS_TABS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { ArrowRight, FileSpreadsheet, TrendingUp, Users, Calendar, BarChart2 } from "lucide-react";

interface ReportsShowcaseProps {
  onOpenDemo: () => void;
}

export function ReportsShowcase({ onOpenDemo }: ReportsShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState(REPORTS_TABS[0].id);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const activeTab = REPORTS_TABS.find((t) => t.id === activeTabId) || REPORTS_TABS[0];

  // Helper icons for each tab
  const getTabIcon = (id: string) => {
    switch (id) {
      case "summary":
        return <FileSpreadsheet size={16} />;
      case "detail":
        return <BarChart2 size={16} />;
      case "staff":
        return <Users size={16} />;
      case "day":
        return <Calendar size={16} />;
      case "month":
        return <TrendingUp size={16} />;
      default:
        return <FileSpreadsheet size={16} />;
    }
  };

  // Map tab IDs to the respective image asset names requested by the user
  const getImageName = (id: string) => {
    switch (id) {
      case "summary":
        return "r1";
      case "detail":
        return "r2";
      case "staff":
        return "r3";
      case "day":
        return "r4";
      case "month":
        return "r5";
      default:
        return "r1";
    }
  };

  // Render high-fidelity replicas of the user's actual product dashboards (with image fallback support)
  const renderMockup = (type: string) => {
    const imageName = getImageName(type);

    // If no error occurred yet, attempt to display the user-provided screenshot
    if (!imageErrors[type]) {
      return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl relative bg-surface-1">
          <img
            src={`/assets/${imageName}.png`}
            alt={`${activeTab.label} dashboard mockup`}
            onError={() => setImageErrors((prev) => ({ ...prev, [type]: true }))}
            className="w-full h-full object-cover sm:object-contain rounded-xl hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      );
    }

    // Graceful fallback to gorgeous, detailed interactive HTML/CSS mockups
    switch (type) {
      case "summary":
        return (
          <div className="w-full h-full flex flex-col justify-between text-[8px] sm:text-[9px] text-text-secondary select-none font-sans">
            {/* Header row */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-xs">Invoice Summary</span>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-brand-primary text-white font-bold text-[8px]">Create Bill</span>
                <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white font-bold text-[8px]">Jenifer Joshua</span>
              </div>
            </div>

            {/* Filter inputs */}
            <div className="grid grid-cols-4 gap-1.5 py-2 border-b border-white/5 bg-surface-1/40 p-2 rounded-lg my-1.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">From Date</span>
                <div className="bg-surface-3 border border-white/5 px-1.5 py-0.5 rounded text-white text-[7px]">22-07-2023</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">To Date</span>
                <div className="bg-surface-3 border border-white/5 px-1.5 py-0.5 rounded text-white text-[7px]">22-07-2023</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Billing Type</span>
                <div className="bg-surface-3 border border-white/5 px-1.5 py-0.5 rounded text-white text-[7px]">Services</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Invoice No</span>
                <div className="bg-surface-3 border border-white/5 px-1.5 py-0.5 rounded text-text-secondary/50 text-[7px]">Search</div>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-hidden flex flex-col gap-1">
              <div className="grid grid-cols-8 gap-1 font-bold text-white bg-brand-primary/10 border border-brand-primary/20 p-1.5 rounded text-[7px] items-center">
                <span>S No</span>
                <span>Invoice No</span>
                <span>Date</span>
                <span className="col-span-2">Customer Name</span>
                <span>Phone No</span>
                <span>Type</span>
                <span className="text-right">Total</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
                {[
                  { sno: "01", inv: "SINV003", date: "17-12-2023", name: "Rajesh T", phone: "7092510097", type: "Cash", amt: "₹401.98" },
                  { sno: "02", inv: "SINV004", date: "17-12-2023", name: "Preethi K", phone: "9840926626", type: "Cash", amt: "₹622.00" },
                  { sno: "03", inv: "SINV005", date: "17-12-2023", name: "Anitha L", phone: "9840928426", type: "Gpay", amt: "₹824.00" },
                  { sno: "04", inv: "SINV006", date: "17-12-2023", name: "Rita A", phone: "8684092662", type: "Card", amt: "₹240.56" }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-8 gap-1 bg-surface-1/40 border border-white/5 p-1.5 rounded items-center hover:bg-surface-3/50 transition-colors">
                    <span className="text-white/60">{row.sno}</span>
                    <span className="font-semibold text-white">{row.inv}</span>
                    <span className="text-white/70">{row.date}</span>
                    <span className="col-span-2 font-bold text-white">{row.name}</span>
                    <span className="text-white/70">{row.phone}</span>
                    <span className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-center font-bold text-[7px] text-brand-accent">{row.type}</span>
                    <span className="text-right font-extrabold text-white">{row.amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="mt-2 grid grid-cols-5 gap-1 bg-brand-primary border border-brand-primary/30 p-1.5 rounded-lg text-white font-bold text-[7px] text-center select-none shadow-md">
              <div>Count: <span className="text-white font-extrabold">183</span></div>
              <div className="col-span-2">Cash & UPI: <span className="text-white font-extrabold">₹4,698.00</span></div>
              <div className="col-span-2">Total Sale: <span className="text-white font-extrabold">₹10,84,794.00</span></div>
            </div>
          </div>
        );

      case "detail":
        return (
          <div className="w-full h-full flex flex-col justify-between text-[8px] sm:text-[9px] text-text-secondary select-none font-sans">
            {/* Header row */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-xs">Invoice Detail view</span>
              <span className="px-2 py-0.5 rounded bg-brand-accent/20 border border-brand-accent/30 text-brand-accent font-bold text-[8px]">Services Register</span>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-4 gap-1.5 py-1.5 border-b border-white/5 bg-surface-1/40 p-2 rounded-lg my-1.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">From Date</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-white text-[7px]">21-01-2024</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">To Date</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-white text-[7px]">22-01-2024</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Billing Type</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-white text-[7px]">Services</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Staff Name</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-text-secondary/50 text-[7px]">Search</div>
              </div>
            </div>

            {/* Detail Table */}
            <div className="flex-1 overflow-hidden flex flex-col gap-1">
              <div className="grid grid-cols-10 gap-1 font-bold text-white bg-brand-accent/15 border border-brand-accent/20 p-1.5 rounded text-[7px] items-center">
                <span>S No</span>
                <span>Invoice No</span>
                <span>Date</span>
                <span className="col-span-2">Customer</span>
                <span>Staff</span>
                <span className="col-span-2">Service Name</span>
                <span>Type</span>
                <span className="text-right">Total</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
                {[
                  { sno: "01", inv: "SINV003", date: "22-01-2024", cust: "Stella F", staff: "Rizwan", svc: "Keratin Treatment", type: "Cash", total: "₹409.98" },
                  { sno: "02", inv: "SINV003", date: "22-01-2024", cust: "Stella F", staff: "Dinesh", svc: "Keraboost", type: "Cash", total: "₹631.00" },
                  { sno: "03", inv: "SINV005", date: "21-01-2024", cust: "Anitha L", staff: "Dinesh", svc: "Hair Straightening", type: "Gpay", total: "₹829.00" },
                  { sno: "04", inv: "SINV006", date: "21-01-2024", cust: "Rita A", staff: "Ajey", svc: "Hair Straightening", type: "Card", total: "₹249.56" }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-10 gap-1 bg-surface-1/40 border border-white/5 p-1.5 rounded items-center hover:bg-surface-3/50 transition-colors">
                    <span className="text-white/60">{row.sno}</span>
                    <span className="font-semibold text-white">{row.inv}</span>
                    <span className="text-white/70">{row.date}</span>
                    <span className="col-span-2 font-bold text-white">{row.cust}</span>
                    <span className="text-brand-accent font-semibold">{row.staff}</span>
                    <span className="col-span-2 text-white/95 font-semibold">{row.svc}</span>
                    <span className="text-white/80">{row.type}</span>
                    <span className="text-right font-extrabold text-white">{row.total}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="mt-2 flex justify-between bg-surface-3/80 border border-white/5 p-1.5 rounded-lg text-white font-bold text-[7px] shadow-sm select-none">
              <span>Billing Logs Loaded</span>
              <span className="text-brand-success">Count: 183 Register Hits</span>
            </div>
          </div>
        );

      case "staff":
        return (
          <div className="w-full h-full flex flex-col justify-between text-[8px] sm:text-[9px] text-text-secondary select-none font-sans">
            {/* Header row */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-xs">Staff Performance Report</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[7.5px] text-text-secondary/70">Total Sale:</span>
                <span className="px-2 py-0.5 rounded bg-brand-success/15 border border-brand-success/30 text-brand-success font-extrabold text-[8px]">₹15,389.00</span>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-4 gap-1.5 py-1.5 border-b border-white/5 bg-surface-1/40 p-2 rounded-lg my-1.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">From Date</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-white text-[7px]">20-01-2024</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">To Date</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-white text-[7px]">22-01-2024</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Staff Name</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-text-secondary/70 text-[7px]">Select</div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[7px] text-text-secondary/70">Invoice Type</span>
                <div className="bg-surface-3 border border-white/5 px-1 py-0.5 rounded text-text-secondary/70 text-[7px]">Choose</div>
              </div>
            </div>

            {/* Staff performance list */}
            <div className="flex-1 overflow-hidden flex flex-col gap-1">
              <div className="grid grid-cols-7 gap-1 font-bold text-white bg-brand-success/10 border border-brand-success/20 p-1.5 rounded text-[7px] items-center">
                <span>S No</span>
                <span>Invoice No</span>
                <span>Date</span>
                <span className="col-span-2">Item Name</span>
                <span>Staff Name</span>
                <span className="text-right">Amount</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
                {[
                  { sno: "01", inv: "SINV003", date: "22-01-2024", item: "Layercut", staff: "Uma", amt: "₹800.00" },
                  { sno: "02", inv: "SINV004", date: "21-01-2024", item: "Smoothening / Straightening - Loreal", staff: "Irshad", amt: "₹3,000.00" },
                  { sno: "03", inv: "SINV005", date: "21-01-2024", item: "Smoothening / Straightening - Matrix", staff: "Manju", amt: "₹2,999.00" },
                  { sno: "04", inv: "SINV006", date: "21-01-2024", item: "Smoothening / Straightening - Matrix", staff: "Rizwan", amt: "₹2,000.00" },
                  { sno: "05", inv: "SINV007", date: "21-01-2024", item: "Layercut & Highlights", staff: "Sakibe", amt: "₹2,500.00" }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-7 gap-1 bg-surface-1/40 border border-white/5 p-1.5 rounded items-center hover:bg-surface-3/50 transition-colors">
                    <span className="text-white/60">{row.sno}</span>
                    <span className="font-semibold text-white">{row.inv}</span>
                    <span className="text-white/70">{row.date}</span>
                    <span className="col-span-2 font-bold text-white truncate">{row.item}</span>
                    <span className="text-brand-success font-semibold">{row.staff}</span>
                    <span className="text-right font-extrabold text-white">{row.amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "day":
        return (
          <div className="w-full h-full flex flex-col justify-between text-[8px] sm:text-[9px] text-text-secondary select-none font-sans">
            {/* Header row */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-xs">Day wise Report</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[7.5px] text-text-secondary/70">Total Sale:</span>
                <span className="px-2 py-0.5 rounded bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-extrabold text-[8px]">₹12,839.00</span>
              </div>
            </div>

            {/* Sub headers parameters */}
            <div className="flex gap-4 py-1.5 text-[7px] text-text-secondary/80">
              <div>Year: <span className="text-white font-bold">2023</span></div>
              <div>Month: <span className="text-white font-bold">January</span></div>
            </div>

            {/* Floating orange peak values tag */}
            <div className="relative flex-1 bg-surface-1/40 border border-white/5 rounded-xl p-3 mt-1.5 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Floating Orange Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-2 left-[20%] bg-brand-primary text-white font-extrabold text-[7px] px-2 py-0.5 rounded shadow-lg z-20 flex flex-col items-center"
              >
                <span>04/01/24</span>
                <span>₹65,000</span>
                {/* Micro downwards indicator triangle */}
                <div className="w-1 h-1 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-brand-primary" />
              </motion.div>

              {/* Bar Chart Container */}
              <div className="flex items-end gap-[2px] sm:gap-[3px] h-[95px] pt-4 relative">
                {[
                  48, 54, 78, 65, 52, 44, 51, 55, 35, 1, 60, 46, 43, 45, 43, 50, 48, 47, 42, 23, 16, 1, 19, 52, 73, 46, 43, 48, 67, 36, 52
                ].map((val, idx) => {
                  const isDay04 = idx === 3;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ delay: 0.1 + idx * 0.015, duration: 0.8 }}
                        className={`w-full rounded-t-[1px] bg-gradient-to-t from-brand-primary to-brand-accent ${
                          isDay04 ? "opacity-100 shadow-[0_0_10px_rgba(217,70,239,0.4)]" : "opacity-80 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Chart Dates Axis */}
              <div className="flex justify-between text-[6px] text-text-secondary/70 pt-1.5 border-t border-white/5 font-mono">
                <span>01</span>
                <span>05</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>31</span>
              </div>
            </div>
          </div>
        );

      case "month":
        return (
          <div className="w-full h-full flex flex-col justify-between text-[8px] sm:text-[9px] text-text-secondary select-none font-sans">
            {/* Header row */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-white text-xs">Month wise Report</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[7.5px] text-text-secondary/70">Total Sale:</span>
                <span className="px-2 py-0.5 rounded bg-brand-success/15 border border-brand-success/30 text-brand-success font-extrabold text-[8px]">₹15,389.00</span>
              </div>
            </div>

            {/* Sub headers parameters */}
            <div className="flex gap-4 py-1.5 text-[7px] text-text-secondary/80">
              <div>Year: <span className="text-white font-bold">2023</span></div>
            </div>

            {/* Floating orange peak values tag */}
            <div className="relative flex-1 bg-surface-1/40 border border-white/5 rounded-xl p-3 mt-1.5 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Floating Orange Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-2 left-[15%] bg-brand-primary text-white font-extrabold text-[7px] px-2.5 py-0.5 rounded shadow-lg z-20 flex flex-col items-center animate-pulse"
              >
                <span>Feb</span>
                <span>₹4,90,000</span>
                <div className="w-1 h-1 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-brand-primary" />
              </motion.div>

              {/* Bar Chart Container */}
              <div className="flex items-end gap-1.5 sm:gap-2.5 h-[95px] pt-4 relative">
                {[
                  36, 48, 73, 55, 62, 39, 37, 24, 48, 59, 82, 44
                ].map((val, idx) => {
                  const isFeb = idx === 1;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ delay: 0.1 + idx * 0.03, duration: 0.8 }}
                        className={`w-full rounded-t-sm bg-gradient-to-t from-brand-primary to-brand-accent ${
                          isFeb ? "opacity-100 shadow-[0_0_12px_rgba(217,70,239,0.5)]" : "opacity-80 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Chart Months Axis */}
              <div className="flex justify-between text-[6px] sm:text-[7.5px] font-bold text-text-secondary/70 pt-1.5 border-t border-white/5 font-mono">
                {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="reports"
      className="relative py-24 bg-surface-1 overflow-hidden"
    >
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
            Everything Your Business Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mt-4 font-medium"
          >
            Deep analytics and consolidated financial exports prepared with full compliance. Run report audits instantly.
          </motion.p>
        </div>

        {/* Dynamic Tab Switcher Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-surface-2 border border-border overflow-x-auto max-w-full no-scrollbar">
            {REPORTS_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-300 whitespace-nowrap ${
                    isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {/* Sliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeReportPill"
                      className="absolute inset-0 bg-brand-primary rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {getTabIcon(tab.id)}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-border bg-surface-2 p-6 sm:p-10 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
            >
              
              {/* Left 3 Cols: Mockup Image */}
              <div className="lg:col-span-3">
                <div className="relative aspect-[1.4] w-full rounded-2xl border border-border bg-surface-3 p-4 sm:p-5 shadow-2xl shadow-slate-300/40 flex items-stretch">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-brand-primary/5 pointer-events-none rounded-2xl" />
                  {renderMockup(activeTab.mockupType)}
                </div>
              </div>

              {/* Right 2 Cols: Details Copy */}
              <div className="lg:col-span-2 flex flex-col gap-6 items-start">
                <div className="space-y-4">
                  <span className="h-8 w-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center font-bold">
                    {getTabIcon(activeTab.id)}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-text-primary">
                    {activeTab.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-medium leading-relaxed">
                    {activeTab.description}
                  </p>
                </div>

                <Button onClick={onOpenDemo} variant="primary" className="gap-2 group text-sm py-3.5">
                  Book Live Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
