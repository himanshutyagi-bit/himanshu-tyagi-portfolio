"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, DownloadSimple, MapPin, GraduationCap, Crosshair, Target, ChartBar, Lightbulb, ChatText, EnvelopeSimple, LinkedinLogo, MapPinLine, GithubLogo, MagnifyingGlass, BriefcaseMetal, Table, Database, ShareNetwork, PresentationChart, Users, FileText, Strategy, Gear } from "@phosphor-icons/react";
import BorderGlow from "@/components/ui/BorderGlow";
import TiltedCard from "@/components/ui/TiltedCard";
import StarBorder from "@/components/ui/StarBorder";
import ContactForm from "@/components/ui/ContactForm";
import { MagicCard, GlobalSpotlight } from "@/components/ui/MagicCard";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex flex-col gap-32 pb-20 overflow-x-hidden relative">
      <GlobalSpotlight containerRef={containerRef} />
      
      {/* 1. HERO SECTION */}
      <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-16 lg:pt-32 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-[#3b82f6]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col gap-6 items-start relative z-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#151620]/60 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 shadow-xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
            DATA ANALYST • BUSINESS INTELLIGENCE • VISUALIZATION
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            COMMERCE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#c084fc] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">BRAIN.</span><br />
            DATA <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#c084fc] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">HANDS.</span><br />
            DESIGN <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#c084fc] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">EYES.</span>
          </motion.h1>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-[50ch] leading-relaxed mt-2 font-medium">
            Turning raw data into meaningful insights through analytics, visualization, and business understanding.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <MagicCard className="rounded-lg w-fit" glowColor="139, 92, 246">
              <a href="#projects" className="bg-gradient-to-r from-[#8b5cf6] to-[#60a5fa] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-[0.98] flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)]">
                VIEW PROJECTS <ArrowRight weight="bold" />
              </a>
            </MagicCard>
            <MagicCard className="rounded-lg w-fit" glowColor="56, 189, 248">
              <Link href="/resume" className="px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest text-zinc-300 border border-white/10 hover:bg-white/5 transition-all active:scale-[0.98] flex items-center gap-2 bg-[#151620]/60 backdrop-blur-sm h-full w-full">
                <DownloadSimple weight="bold" /> DOWNLOAD RESUME
              </Link>
            </MagicCard>
          </div>
        </div>

        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0 perspective-[1000px]">
          <TiltedCard 
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
          >
            <div className="w-full max-w-[380px] h-[500px] mx-auto relative flex items-center justify-center pointer-events-none">
              <BorderGlow borderRadius={24} glowRadius={30} edgeSensitivity={60} colors={['#3b82f6', '#a855f7', '#ec4899']} className="w-full h-full rounded-[1.5rem] relative pointer-events-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1c1d29] to-[#0d0e15] border border-white/10 rounded-[1.5rem] overflow-hidden z-0">
                  <img 
                    src="/profile.jpg" 
                    alt="Himanshu Tyagi" 
                    className="w-full h-full object-cover opacity-90 scale-105"
                  />
                </div>
                
                {/* Top Left Floating Code */}
                <div className="absolute top-12 -left-12 lg:-left-20 glass-card-dark !bg-[#151620]/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex flex-col gap-3 w-[180px] z-20">
                   <p className="text-xs text-white font-mono font-medium">Top Skills</p>
                   <div className="flex flex-col gap-1 w-full">
                     <div className="flex justify-between items-center w-full">
                       <span className="text-[10px] text-zinc-300 font-mono">SQL</span>
                       <span className="text-[10px] text-zinc-300 font-mono">89%</span>
                     </div>
                     <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-[89%] h-full bg-[#a855f7]"></div>
                     </div>
                   </div>
                   <div className="flex flex-col gap-1 w-full">
                     <div className="flex justify-between items-center w-full">
                       <span className="text-[10px] text-zinc-300 font-mono">Tableau</span>
                       <span className="text-[10px] text-zinc-300 font-mono">65%</span>
                     </div>
                     <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-[65%] h-full bg-[#3b82f6]"></div>
                     </div>
                   </div>
                </div>
                
                {/* Bottom Right Projects Badge */}
                <div className="absolute bottom-10 -right-8 lg:-right-16 glass-card-dark !bg-[#151620]/80 backdrop-blur-xl p-5 rounded-xl border border-white/10 shadow-2xl flex flex-col gap-1 z-20 min-w-[220px]">
                  <span className="text-[11px] text-white font-medium mb-1">Projects Completed</span>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-white tracking-tight">08+</span>
                    <div className="size-8 rounded-lg border border-white/20 flex items-center justify-center">
                      <Database size={16} className="text-zinc-300" weight="regular" />
                    </div>
                  </div>
                  <span className="text-[9px] text-zinc-400 mt-2">Successful Analytics Projects Delivered</span>
                </div>
              </BorderGlow>
            </div>
          </TiltedCard>
        </div>
      </section>

      {/* 2. TRUST BANNER */}
      <section className="flex flex-col items-center gap-6 py-10 relative">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          <Target size={12} className="text-neon-purple" /> TRUST & CREDENTIALS
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Certified. <span className="text-gradient">Skilled.</span> Trusted.
        </h2>
      </section>

      {/* 3. WHO AM I */}
      <section id="about" className="px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ABOUT ME</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white">
              WHO AM I? <br />
              <span className="text-white mt-4 block text-4xl md:text-5xl">Commerce Brain.</span>
              <span className="text-[#8b5cf6] block text-4xl md:text-5xl">Data Hands.</span>
              <span className="text-white block text-4xl md:text-5xl">Design Eyes.</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p className="border-l-2 border-neon-purple pl-4 text-zinc-300">
                Building at the intersection of business, analytics, and technology.
              </p>
              <p>
                I'm Himanshu Tyagi, a Commerce (Honours) student and aspiring Data Analyst based in Ghaziabad. 
              </p>
              <p>
                My journey sits at the intersection of business, technology, and design. While my academic foundation is rooted in finance and accounting, my curiosity has led me deep into the world of data analytics, artificial intelligence, and digital products.
              </p>
              <p>
                I believe the most valuable professionals are those who can connect multiple disciplines. That's why I continuously explore new tools, new systems, and new ways of thinking—from building dashboards and analyzing business data to experimenting with AI-powered workflows and improving personal performance through discipline and consistency.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Single Card with dividers */}
            <div className="glass-card-dark !p-0 flex flex-col divide-y divide-white/5">
              <div className="flex items-start gap-4 p-6">
                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shrink-0"><MapPin size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">LOCATION</span>
                  <span className="text-white text-sm font-medium mt-1">Ghaziabad, India</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6">
                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shrink-0"><GraduationCap size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">EDUCATION</span>
                  <span className="text-white text-sm font-medium mt-1">B.Com (Hons)</span>
                  <span className="text-zinc-500 text-xs mt-1 leading-tight">JIMS Engineering Management Technical Campus<br/>Affiliated to GGSIPU</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6">
                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shrink-0"><Crosshair size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">FOCUS</span>
                  <span className="text-white text-sm font-medium mt-1">Data Analytics & Business Intelligence</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6">
                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shrink-0"><Target size={16} /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">CURRENT GOAL</span>
                  <span className="text-white text-sm font-bold mt-1">Securing a Data Analyst Role</span>
                  <span className="text-zinc-400 text-xs mt-1">Where I can learn, take risks and create impact through data-driven decisions.</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Tall Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <MagicCard className="h-full rounded-[1.5rem]" glowColor="56, 189, 248">
                <div className="glass-card-dark flex flex-col items-center text-center gap-4 !px-6 !py-8 group hover:border-[#38bdf8]/50 h-full !border-none !bg-transparent">
                  <div className="size-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8]">
                    <ChartBar size={24} weight="duotone" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Business & Data Analytics</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Transforming raw data into actionable business insights through dashboards, reporting, and data visualization.</p>
                  <div className="mt-auto pt-6 border-t border-white/5 w-full flex flex-col items-center gap-2">
                    <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">TOOLS</span>
                    <span className="text-xs font-semibold text-[#38bdf8]">Excel - Power BI<br/>SQL - Tableau</span>
                  </div>
                </div>
              </MagicCard>
              
              <MagicCard className="h-full rounded-[1.5rem]" glowColor="192, 132, 252">
                <div className="glass-card-dark flex flex-col items-center text-center gap-4 !px-6 !py-8 group hover:border-[#c084fc]/50 h-full !border-none !bg-transparent">
                  <div className="size-12 rounded-full bg-[#c084fc]/10 flex items-center justify-center text-[#c084fc]">
                    <Lightbulb size={24} weight="duotone" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Product Thinking & AI</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Exploring how AI and modern digital tools can improve products, workflows, and decision-making.</p>
                  <div className="mt-auto pt-6 border-t border-white/5 w-full flex flex-col items-center gap-2">
                    <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">TOOLS & PLATFORMS</span>
                    <span className="text-xs font-semibold text-[#c084fc]">Repl.it - Anthropic<br/>AI Tools - Web</span>
                  </div>
                </div>
              </MagicCard>

              <MagicCard className="h-full rounded-[1.5rem]" glowColor="52, 211, 153">
                <div className="glass-card-dark flex flex-col items-center text-center gap-4 !px-6 !py-8 group hover:border-[#34d399]/50 h-full !border-none !bg-transparent">
                  <div className="size-12 rounded-full bg-[#34d399]/10 flex items-center justify-center text-[#34d399]">
                    <ChatText size={24} weight="duotone" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Communication & Presentation</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">Turning complex financial and analytical concepts into clear, engaging, and easy to understand stories.</p>
                  <div className="mt-auto pt-6 border-t border-white/5 w-full flex flex-col items-center gap-2">
                    <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">FOCUS</span>
                    <span className="text-xs font-semibold text-[#34d399]">Presentations<br/>Storytelling</span>
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUADRANT TOOLS ECOSYSTEM */}
      <section id="skills" className="py-20 relative w-full flex flex-col items-center overflow-hidden">
        {/* Core background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 blur-[150px] rounded-full pointer-events-none animate-pulse" />
             <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[800px] aspect-[4/5] sm:aspect-square md:aspect-[4/3] flex items-center justify-center sm:scale-100"
        >
          
          {/* Quadrant Lines (The X cross) */}
          <div className="absolute w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 z-10" />
          <div className="absolute w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 z-10" />
          
          {/* Petal Shapes (Top, Right, Bottom, Left) */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[45%] h-[40%] bg-gradient-to-t from-[#1c1d29]/60 to-[#1c1d29]/0 rounded-[50%_50%_0_0] border-t border-white/5 z-0" />
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[45%] h-[40%] bg-gradient-to-b from-[#1c1d29]/60 to-[#1c1d29]/0 rounded-[0_0_50%_50%] border-b border-white/5 z-0" />
          <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[40%] h-[45%] bg-gradient-to-l from-[#1c1d29]/60 to-[#1c1d29]/0 rounded-[50%_0_0_50%] border-l border-white/5 z-0" />
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[40%] h-[45%] bg-gradient-to-r from-[#1c1d29]/60 to-[#1c1d29]/0 rounded-[0_50%_50%_0] border-r border-white/5 z-0" />

          {/* Central Core */}
          <div className="absolute z-30 size-32 sm:size-48 md:size-56 rounded-full bg-gradient-to-br from-[#1c1d29] to-[#0d0e15] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center group hover:shadow-[0_0_60px_rgba(139,92,246,0.5),inset_0_0_20px_rgba(255,255,255,0.05)] transition-all animate-float">
            <h3 className="text-white font-bold text-sm sm:text-xl md:text-2xl tracking-tight text-center leading-none">Himanshu<br className="sm:hidden"/> Tyagi</h3>
            <p className="text-zinc-500 text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-widest mt-1 md:mt-2 text-center leading-tight">Data Analyst & BI<br/>Specialist</p>
          </div>

          {/* TOP (Analytics) */}
          <div className="absolute top-[22%] sm:top-[28%] left-1/2 -translate-x-1/2 text-white font-bold tracking-[0.2em] text-[8px] sm:text-[10px] uppercase z-20">ANALYTICS</div>
          <div className="absolute top-[5%] sm:top-[8%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-4 z-20">
             <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 shadow-lg">
               <div className="size-4 sm:size-5 md:size-6 bg-emerald-600 text-white text-[8px] sm:text-[10px] md:text-xs font-bold flex items-center justify-center rounded-sm">X</div>
             </div>
             <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#38bdf8] font-bold text-[10px] sm:text-sm md:text-xl shadow-lg">SQL</div>
             <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-purple-400 shadow-lg"><ShareNetwork size={16} className="md:w-[22px] md:h-[22px]" weight="duotone" /></div>
             <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#f59e0b] shadow-lg"><ChartBar size={16} className="md:w-[22px] md:h-[22px]" weight="fill" /></div>
          </div>

          {/* BOTTOM (Business Foundation) */}
          <div className="absolute bottom-[22%] sm:bottom-[28%] left-1/2 -translate-x-1/2 text-white font-bold tracking-[0.2em] text-[8px] sm:text-[10px] uppercase text-center w-24 sm:w-32 z-20 leading-tight">BUSINESS<br/>FOUNDATION</div>
          <div className="absolute bottom-[5%] sm:bottom-[8%] left-1/2 -translate-x-1/2 flex items-end justify-center gap-2 sm:gap-4 z-20">
             <div className="flex flex-col items-center gap-1 sm:gap-2">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#8b5cf6] shadow-lg"><ChartBar size={16} className="md:w-[20px] md:h-[20px]"/></div>
               <span className="text-[7px] sm:text-[9px] md:text-[10px] text-zinc-400 text-center max-w-[40px] sm:max-w-[60px] leading-tight">Financial<br/>Analysis</span>
             </div>
             <div className="flex flex-col items-center gap-1 sm:gap-2">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#e879f9] shadow-lg"><MagnifyingGlass size={16} className="md:w-[20px] md:h-[20px]"/></div>
               <span className="text-[7px] sm:text-[9px] md:text-[10px] text-zinc-400 text-center max-w-[40px] sm:max-w-[60px] leading-tight">Market<br/>Research</span>
             </div>
             <div className="flex flex-col items-center gap-1 sm:gap-2">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#c084fc] shadow-lg"><ShareNetwork size={16} className="md:w-[20px] md:h-[20px]"/></div>
               <span className="text-[7px] sm:text-[9px] md:text-[10px] text-zinc-400 text-center max-w-[40px] sm:max-w-[60px] leading-tight">Strategic<br/>Planning</span>
             </div>
             <div className="flex flex-col items-center gap-1 sm:gap-2">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#8b5cf6] shadow-lg"><Gear size={16} className="md:w-[20px] md:h-[20px]"/></div>
               <span className="text-[7px] sm:text-[9px] md:text-[10px] text-zinc-400 text-center max-w-[40px] sm:max-w-[60px] leading-tight">Business<br/>Process</span>
             </div>
          </div>

          {/* LEFT (Communication) */}
          <div className="absolute left-[15%] sm:left-[20%] top-1/2 -translate-y-1/2 text-white font-bold tracking-[0.2em] text-[8px] sm:text-[10px] uppercase text-right w-16 sm:w-28 z-20">COMMUNICATION</div>
          <div className="absolute left-[1%] sm:left-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-4 items-end z-20">
             <div className="flex items-center gap-1 sm:gap-3">
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium text-right leading-tight max-w-[45px] sm:max-w-none">Data<br/>Storytelling</span>
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 shadow-lg"><ChatText size={16} className="md:w-[20px] md:h-[20px] text-[#a78bfa]" /></div>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium text-right max-w-[45px] sm:max-w-none">Presentation</span>
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 shadow-lg"><PresentationChart size={16} className="md:w-[20px] md:h-[20px] text-[#a78bfa]" /></div>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium text-right leading-tight max-w-[45px] sm:max-w-none">Stakeholder<br/>Management</span>
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 shadow-lg"><Users size={16} className="md:w-[20px] md:h-[20px] text-[#a78bfa]" /></div>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium text-right leading-tight max-w-[45px] sm:max-w-none">Technical<br/>Writing</span>
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 shadow-lg"><FileText size={16} className="md:w-[20px] md:h-[20px] text-[#a78bfa]" /></div>
             </div>
          </div>

          {/* RIGHT (Productivity & AI) */}
          <div className="absolute right-[15%] sm:right-[20%] top-1/2 -translate-y-1/2 text-white font-bold tracking-[0.2em] text-[8px] sm:text-[10px] uppercase text-left w-16 sm:w-28 z-20 leading-tight">PRODUCTIVITY<br/>& AI</div>
          <div className="absolute right-[1%] sm:right-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-4 items-start z-20">
             <div className="flex items-center gap-1 sm:gap-3">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-emerald-500 shadow-lg"><ChatText size={16} className="md:w-[20px] md:h-[20px]" weight="fill"/></div>
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium whitespace-nowrap">ChatGPT</span>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-white font-bold font-serif text-[12px] sm:text-lg shadow-lg">N</div>
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium whitespace-nowrap">Notion</span>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-white shadow-lg"><GithubLogo size={16} className="md:w-[20px] md:h-[20px]" weight="fill"/></div>
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium whitespace-nowrap">GitHub</span>
             </div>
             <div className="flex items-center gap-1 sm:gap-3">
               <div className="size-8 sm:size-10 md:size-12 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-orange-500 shadow-lg">
                 <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.7 7.7L22 6l-4.5 6.3 3.4 7.7-7-4.4-7 4.4 3.4-7.7L1.8 12.3 6.3 6 12 0z"/></svg>
               </div>
               <span className="text-[7px] sm:text-[10px] md:text-xs text-zinc-400 font-medium whitespace-nowrap">Zapier</span>
             </div>
          </div>

        </motion.div>

        {/* BOTTOM STATS BAR */}
        <div className="w-full max-w-4xl relative mt-12 p-[1px] rounded-3xl bg-gradient-to-r from-neon-purple via-[#3b82f6] to-neon-purple shadow-[0_0_30px_rgba(139,92,246,0.3)]">
           <div className="w-full h-full glass-panel-dark rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 p-6 overflow-hidden bg-[#0d0e15]">
             <div className="flex flex-col items-center justify-center py-4">
               <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">08+</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">PROJECTS</span>
             </div>
             <div className="flex flex-col items-center justify-center py-4">
               <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">60+</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">HOURS</span>
             </div>
             <div className="flex flex-col items-center justify-center py-4">
               <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">02</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">CERTS</span>
             </div>
             <div className="flex flex-col items-center justify-center py-4">
               <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">2026</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">JOURNEY</span>
             </div>
           </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECT (BRAD PITT EFFECT) */}
      <section id="projects" className="px-4 sm:px-6 py-10 flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">FEATURED PROJECT</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
          One Project. <span className="text-[#a855f7]">Real Process.</span><br/>
          Real Insight.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 relative mt-8">
          {/* Intense Background Glow for Featured Project */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120%] bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/30 blur-[100px] rounded-full pointer-events-none z-0" />
          
          <MagicCard className="h-full rounded-[1.5rem] w-full" glowColor="168, 85, 247">
            <div className="glass-card-dark !p-0 overflow-hidden relative group border-white/10 z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-full !border-none !bg-transparent rounded-[1.5rem]">
               {/* Using a cyberpunk man image as placeholder for Brad Pitt */}
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" alt="The Brad Pitt Effect" className="w-full h-full object-cover min-h-[400px] opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 rounded-[1.5rem]" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] via-transparent to-[#0d0e15]/40 flex flex-col justify-between p-6 rounded-[1.5rem]">
                  <div className="bg-[#1c1d29]/80 backdrop-blur-md self-start px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-zinc-300 flex items-center gap-2 font-medium">
                    <FileText size={14} /> Research Case Study
                  </div>
                  <div className="flex items-end justify-between w-full mt-auto">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-md">The Brad Pitt Effect</h3>
                      <div className="bg-[#1c1d29]/80 backdrop-blur-md self-start px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-zinc-300 flex items-center gap-2 font-medium">
                        <FileText size={14} /> Research Case Study
                      </div>
                    </div>
                    <MagicCard className="rounded-lg" glowColor="168, 85, 247">
                      <button className="bg-gradient-to-r from-[#9333ea] to-[#a855f7] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-[0_0_30px_rgba(168,85,247,0.6)] h-full w-full">
                        VIEW CASE STUDY
                      </button>
                    </MagicCard>
                  </div>
               </div>
            </div>
          </MagicCard>

          <MagicCard className="h-full rounded-[1.5rem] w-full" glowColor="59, 130, 246">
            <div className="glass-card-dark flex flex-col justify-center z-10 !bg-[#151620]/90 backdrop-blur-xl divide-y divide-white/5 !px-8 h-full !border-none">
               <div className="flex flex-col gap-2 py-6">
                 <span className="text-[10px] font-bold text-zinc-300 tracking-widest">QUESTION</span>
                 <p className="text-[#93c5fd] text-sm leading-relaxed">What is the data-driven impact of celebrity endorsements on market trends?</p>
               </div>
               <div className="flex flex-col gap-2 py-6">
                 <span className="text-[10px] font-bold text-zinc-300 tracking-widest">TOOLS & SOURCES</span>
                 <p className="text-zinc-300 text-sm leading-relaxed">Google, ChatGPT, Data Analysis, Visualization</p>
               </div>
               <div className="flex flex-col gap-2 py-6">
                 <span className="text-[10px] font-bold text-zinc-300 tracking-widest">CONCLUSION</span>
                 <p className="text-zinc-300 text-sm leading-relaxed">Explored correlations between public appearance and stock performance, uncovering actionable insights.</p>
               </div>
            </div>
          </MagicCard>
        </div>
      </section>

      {/* 6. TIMELINE */}
      <section id="experience" className="px-4 sm:px-6 py-20 flex flex-col items-center gap-16 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4">
           <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
             <MapPinLine size={14} className="text-zinc-400" /> THE ROAD TO DATA ANALYTICS
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
             THE ROAD TO <span className="text-gradient">DATA ANALYTICS</span>
           </h2>
        </div>

        <div className="relative w-full max-w-5xl h-[450px] mt-4 overflow-x-auto overflow-y-visible hide-scrollbar">
           <div className="min-w-[1200px] w-full h-full relative">
             
             {/* The Thick Rod */}
             <div className="absolute top-1/2 left-0 w-full h-10 bg-[#151620] border border-white/5 rounded-full -translate-y-1/2 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)]">
               <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-white/10 to-transparent rounded-l-full" />
             </div>
             
             {/* --- ITEM 1 (TOP) - Graduation --- */}
             <div className="absolute bottom-[calc(50%+45px)] left-[10%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md">
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-b border-r border-white/10 rotate-45" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm">Graduation<br/>(B.Com Hons)</span>
                 <GraduationCap size={22} className="text-[#a855f7]" weight="fill" />
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">Aug 08, 2025</span>
             </div>
             <div className="absolute bottom-[50%] left-[10%] w-[2px] h-[45px] bg-white/10 z-10" />
             <div className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#93c5fd] shadow-[0_0_15px_#93c5fd] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[calc(50%+30px)] left-[10%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2025</div>

             {/* --- ITEM 2 (BOTTOM) - Starting B.Com --- */}
             <div className="absolute bottom-[calc(50%+30px)] left-[26%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2025</div>
             <div className="absolute top-1/2 left-[26%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#a855f7] shadow-[0_0_15px_#a855f7] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[50%] left-[26%] w-[2px] h-[45px] bg-white/10 z-10" />
             <div className="absolute top-[calc(50%+45px)] left-[26%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md">
               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-t border-l border-white/10 rotate-45" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm">Starting B.Com</span>
                 <div className="size-6 bg-[#3b82f6] rounded flex items-center justify-center text-white"><LinkedinLogo size={16} weight="fill" /></div>
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">Aug 17, 2025</span>
             </div>

             {/* --- ITEM 3 (TOP) - Excel --- */}
             <Link href="/certifications/excel" className="absolute bottom-[calc(50%+45px)] left-[42%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md group hover:border-[#22c55e]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all cursor-pointer">
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-b border-r border-white/10 rotate-45 group-hover:border-[#22c55e]/50 transition-all" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm group-hover:text-[#22c55e] transition-colors">Excel Certification<br/>(LinkedIn Learning)</span>
                 <div className="size-6 bg-[#22c55e] rounded flex items-center justify-center text-black font-black text-xs shrink-0">X</div>
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">March 03, 2026</span>
               <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#22c55e] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate &rarr;
               </div>
             </Link>
             <div className="absolute bottom-[50%] left-[42%] w-[2px] h-[45px] bg-white/10 z-10" />
             <div className="absolute top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#64748b] shadow-[0_0_15px_rgba(100,116,139,0.5)] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[calc(50%+30px)] left-[42%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2026</div>

             {/* --- ITEM 4 (BOTTOM) - Tableau --- */}
             <div className="absolute bottom-[calc(50%+30px)] left-[58%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2026</div>
             <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#a855f7] shadow-[0_0_15px_#a855f7] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[50%] left-[58%] w-[2px] h-[45px] bg-white/10 z-10" />
             <Link href="/certifications/tableau" className="absolute top-[calc(50%+45px)] left-[58%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md group hover:border-[#3b82f6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all cursor-pointer">
               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-t border-l border-white/10 rotate-45 group-hover:border-[#3b82f6]/50 transition-all" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm pr-2 group-hover:text-[#3b82f6] transition-colors">Tableau Training<br/>(AMVI Consultancy)</span>
                 <div className="flex flex-wrap gap-[2px] w-6 h-6 shrink-0 rotate-45">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                 </div>
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">March 30, 2026</span>
               <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate &rarr;
               </div>
             </Link>

             {/* --- ITEM 5 (TOP) - Deloitte --- */}
             <Link href="/certifications/deloitte" className="absolute bottom-[calc(50%+45px)] left-[74%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md group hover:border-[#84bd00]/50 hover:shadow-[0_0_30px_rgba(132,189,0,0.3)] transition-all cursor-pointer">
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-b border-r border-white/10 rotate-45 group-hover:border-[#84bd00]/50 transition-all" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm group-hover:text-[#84bd00] transition-colors">Data Analytics Simulation<br/>(Deloitte on Forage)</span>
                 <div className="size-6 bg-[#84bd00] rounded flex items-center justify-center text-white font-black text-xs shrink-0"><ChartBar size={14} weight="bold" /></div>
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">June 25, 2026</span>
               <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#84bd00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate &rarr;
               </div>
             </Link>
             <div className="absolute bottom-[50%] left-[74%] w-[2px] h-[45px] bg-white/10 z-10" />
             <div className="absolute top-1/2 left-[74%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#84bd00] shadow-[0_0_15px_rgba(132,189,0,0.5)] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[calc(50%+30px)] left-[74%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2026</div>

             {/* --- ITEM 6 (BOTTOM) - Tata --- */}
             <div className="absolute bottom-[calc(50%+30px)] left-[90%] -translate-x-1/2 text-sm font-bold text-zinc-400 tracking-wider">2026</div>
             <div className="absolute top-1/2 left-[90%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-md bg-[#3b82f6] shadow-[0_0_15px_#3b82f6] border-2 border-[#1c1d29] z-30" />
             <div className="absolute top-[50%] left-[90%] w-[2px] h-[45px] bg-white/10 z-10" />
             <Link href="/certifications/tata" className="absolute top-[calc(50%+45px)] left-[90%] -translate-x-1/2 glass-card-dark !p-5 w-64 shadow-2xl z-20 border-white/5 bg-[#1a1b26]/90 backdrop-blur-md group hover:border-[#3b82f6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all cursor-pointer">
               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1b26] border-t border-l border-white/10 rotate-45 group-hover:border-[#3b82f6]/50 transition-all" />
               <div className="flex justify-between items-start">
                 <span className="font-bold text-white text-sm pr-2 group-hover:text-[#3b82f6] transition-colors">GenAI Data Analytics<br/>(Tata on Forage)</span>
                 <div className="size-6 bg-[#3b82f6] rounded flex items-center justify-center text-white font-black text-xs shrink-0"><Lightbulb size={14} weight="bold" /></div>
               </div>
               <span className="text-xs text-zinc-400 mt-2 block">June 27, 2026</span>
               <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Certificate &rarr;
               </div>
             </Link>

           </div>
        </div>
      </section>

      {/* 7. FUTURE & GROWTH */}
      <section className="px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-12">
         <div className="md:col-span-4 flex flex-col gap-4">
           <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">FUTURE & GROWTH</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white">
             FUTURE & <br/><span className="text-gradient">GROWTH.</span>
           </h2>
           <p className="text-zinc-400 text-sm md:text-base mt-4 border-l-2 border-white/10 pl-4 leading-relaxed max-w-[25ch]">
             The journey has just started. Always learning, always evolving.
           </p>
         </div>

         <MagicCard className="md:col-span-8 rounded-[1.5rem] w-full" glowColor="168, 85, 247">
           <div className="glass-card-dark !p-8 flex flex-col gap-6 !border-none !bg-transparent h-full">
             <h3 className="text-xs font-bold text-white uppercase tracking-widest">WHAT'S NEXT?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="glass-card-dark !p-6 flex flex-col gap-3 !bg-[#1c1d29]/40 border-white/5 hover:border-white/10">
                 <div className="size-8 rounded-md bg-[#2a2b38] border border-white/5 flex items-center justify-center text-[#3b82f6]"><ChartBar size={16} weight="fill"/></div>
                 <h4 className="text-white font-bold text-sm">Build Advanced Dashboards</h4>
                 <p className="text-zinc-500 text-xs leading-relaxed">Build advanced Dashboards in Sports Analysis environments to actionable statements.</p>
               </div>
               <div className="glass-card-dark !p-6 flex flex-col gap-3 !bg-[#1c1d29]/40 border-white/5 hover:border-white/10">
                 <div className="size-8 rounded-md bg-[#2a2b38] border border-white/5 flex items-center justify-center text-amber-500"><BriefcaseMetal size={16} weight="fill"/></div>
                 <h4 className="text-white font-bold text-sm">Work on Real-World Projects</h4>
                 <p className="text-zinc-500 text-xs leading-relaxed">Experience Real-World Projects and improve products, solve problems, and products.</p>
               </div>
               <div className="glass-card-dark !p-6 flex flex-col gap-3 !bg-[#1c1d29]/40 border-white/5 hover:border-white/10">
                 <div className="size-8 rounded-md bg-[#2a2b38] border border-white/5 flex items-center justify-center text-[#a855f7]"><ShareNetwork size={16} weight="fill"/></div>
                 <h4 className="text-white font-bold text-sm">Deepen Business Understanding</h4>
                 <p className="text-zinc-500 text-xs leading-relaxed">Deepen Business Understanding understand the process and analytics.</p>
               </div>
               <div className="glass-card-dark !p-6 flex flex-col gap-3 !bg-[#1c1d29]/40 border-white/5 hover:border-white/10">
                 <div className="size-8 rounded-md bg-[#2a2b38] border border-white/5 flex items-center justify-center text-emerald-500"><ChartBar size={16} weight="fill"/></div>
                 <h4 className="text-white font-bold text-sm">Make Data-Driven Impact</h4>
                 <p className="text-zinc-500 text-xs leading-relaxed">Impact combination solutions and analytics that make data-driven impact.</p>
               </div>
             </div>
           </div>
         </MagicCard>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" className="px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-8">
           <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">CONTACT</span>
           </div>
           <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white">
             LET'S BUILD SOMETHING <br/><span className="text-gradient">IMPACTFUL.</span>
           </h2>

           <MagicCard className="rounded-[1.5rem] mt-4 w-full" glowColor="59, 130, 246">
             <div className="glass-card-dark flex flex-col !p-0 overflow-hidden !border-none !bg-transparent h-full">
               <div className="p-6">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest block mb-4">REACH ME AT</span>
                  <div className="flex flex-col gap-0 divide-y divide-white/5">
                     {/* Email */}
                     <a href="mailto:himanshutyagi.ht.work@gmail.com" className="flex items-center gap-4 py-4 hover:opacity-80 transition-opacity">
                       <div className="size-10 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#3b82f6] shrink-0"><EnvelopeSimple size={18} weight="fill"/></div>
                       <div className="flex flex-col">
                         <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">EMAIL</span>
                         <span className="text-white text-sm font-medium">himanshutyagi.ht.work@gmail.com</span>
                       </div>
                     </a>
                     {/* LinkedIn */}
                     <a href="https://www.linkedin.com/in/himanshu-tyagi-a0549939b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 hover:opacity-80 transition-opacity">
                       <div className="size-10 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#3b82f6] shrink-0"><LinkedinLogo size={18} weight="fill"/></div>
                       <div className="flex flex-col">
                         <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">LINKEDIN</span>
                         <span className="text-white text-sm font-medium">himanshu-tyagi-a0549939b</span>
                       </div>
                     </a>
                     {/* Github */}
                     <a href="https://github.com/himanshutyagi-bit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 hover:opacity-80 transition-opacity">
                       <div className="size-10 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-white shrink-0"><GithubLogo size={18} weight="fill"/></div>
                       <div className="flex flex-col">
                         <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">GITHUB</span>
                         <span className="text-white text-sm font-medium">himanshutyagi-bit</span>
                       </div>
                     </a>
                     {/* Location */}
                     <div className="flex items-center gap-4 py-4">
                       <div className="size-10 rounded-xl bg-[#2a2b38] flex items-center justify-center border border-white/5 text-[#a855f7] shrink-0"><MapPin size={18} weight="fill"/></div>
                       <div className="flex flex-col">
                         <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">LOCATION</span>
                         <span className="text-white text-sm font-medium">Ghaziabad, India</span>
                       </div>
                     </div>
                  </div>
               </div>
             </div>
           </MagicCard>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-end">
          <MagicCard className="rounded-[1.5rem] w-full" glowColor="236, 72, 153">
            <ContactForm />
          </MagicCard>
        </div>
      </section>

    </div>
  );
}
