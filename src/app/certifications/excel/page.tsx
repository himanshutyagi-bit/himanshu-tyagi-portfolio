"use client";

import Link from "next/link";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function ExcelCertificationPage() {
  return (
    <div className="flex flex-col gap-12 pb-20 items-center justify-center min-h-[80vh] px-4 sm:px-6 relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl flex items-center justify-between z-10"
      >
        <Link href="/#experience" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <div className="size-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Timeline</span>
        </Link>

        <a href="/certificates/excel.jpg" download className="flex items-center gap-2 text-[#22c55e] hover:text-[#22c55e]/80 transition-colors group">
          <span className="text-[10px] font-bold uppercase tracking-widest">Download PDF</span>
          <div className="size-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center border border-[#22c55e]/20 group-hover:bg-[#22c55e]/20 transition-colors">
            <DownloadSimple size={16} />
          </div>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center gap-8 z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col items-center text-center gap-4">
           <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
             <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> LINKEDIN LEARNING
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
             Excel Essential Training
           </h1>
        </div>

        <div className="w-full glass-card-dark !p-4 md:!p-8 shadow-[0_0_50px_rgba(34,197,94,0.15)] border-white/10 flex items-center justify-center bg-[#151620]/80">
          <div className="w-full max-w-4xl aspect-[1.414/1] relative rounded-lg overflow-hidden border border-white/10 bg-[#0d0e15] flex items-center justify-center group">
            {/* We use the uploaded image from the user. Since the image name isn't fixed, we assume it's placed here. */}
            {/* If the image isn't at this exact path, a placeholder text will show instructing where to place it. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 gap-2 p-10 text-center">
              <span className="text-sm font-bold uppercase tracking-widest">Image Placeholder</span>
              <span className="text-xs">Please save your Excel certificate image as <code className="text-[#22c55e]">public/certificates/excel.jpg</code> in your project folder.</span>
            </div>
            
            <img 
              src="/certificates/excel.jpg" 
              alt="Excel Essential Training Certificate" 
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                // Hide image if it fails to load, showing the placeholder behind it
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
