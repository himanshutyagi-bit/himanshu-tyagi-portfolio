"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" }
];

export function SiteNav() {
  const [activeTab, setActiveTab] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      // Check which section is currently in the upper half of the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the last section whose top is above the scroll line
      let foundSection = null;

      for (const item of navItems) {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          const { top } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            foundSection = item.name;
          }
        }
      }

      let currentSection = foundSection || navItems[0].name;

      // If user scrolled to the absolute bottom, select the last item
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = navItems[navItems.length - 1].name;
      }

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6">
      <nav className="flex items-center justify-between w-full px-6 py-4 rounded-full border border-white/10 bg-[#0d0e15]/80 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="font-mono text-xl tracking-tighter leading-none border-l-4 border-[#a855f7] pl-2">
            <span className="font-bold text-white block">HIMANSHU</span>
            <span className="text-[10px] text-zinc-400 font-semibold tracking-widest block">DATA ANALYST</span>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase relative">
          {navItems.map((item) => (
            <li key={item.name} className="relative flex flex-col justify-center">
              <a 
                href={item.href} 
                onClick={() => setActiveTab(item.name)}
                className={`transition-colors pb-1 ${activeTab === item.name ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {item.name}
              </a>
              {activeTab === item.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-white rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300 hover:text-white hover:border-white/40 transition-all bg-transparent">
          LET'S CONNECT <ArrowRight size={14} weight="bold" />
        </a>
      </nav>
    </header>
  );
}
