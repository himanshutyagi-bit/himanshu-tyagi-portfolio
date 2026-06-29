"use client";

import React, { useState } from "react";
import StarBorder from "@/components/ui/StarBorder";
import { CheckCircle } from "@phosphor-icons/react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8XioDHboh17fZkmmDzdqrG2gb4Ovz9_nbJNgdDut-nnWU2EMMXd4ikVBF5K4fAb3v/exec";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const data = new URLSearchParams();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Subject", formData.Subject);
    data.append("Message", formData.Message);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
      });
      
      // With no-cors, fetch resolves opaquely if network succeeds
      setIsSuccess(true);
      setFormData({ Name: "", Email: "", Subject: "", Message: "" });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError("Failed to send message. Please try again or reach out via email.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card-dark !p-8 flex flex-col gap-4 bg-[#151620] !border-none !bg-transparent h-full w-full relative">
      <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">CONTACT</span>
      
      {isSuccess && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#151620]/95 backdrop-blur-md z-10 flex flex-col items-center justify-center rounded-[1.5rem] p-6 text-center border border-emerald-500/30">
          <CheckCircle size={48} className="text-emerald-500 mb-4" weight="fill" />
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-zinc-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      )}

      <input 
        type="text" 
        name="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        placeholder="Name" 
        className="w-full bg-[#0d0e15] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-all text-sm shadow-inner"
      />
      <input 
        type="email"
        name="Email" 
        value={formData.Email}
        onChange={handleChange}
        required
        placeholder="Email" 
        className="w-full bg-[#0d0e15] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-all text-sm shadow-inner"
      />
      <input 
        type="text"
        name="Subject" 
        value={formData.Subject}
        onChange={handleChange}
        required
        placeholder="Subject" 
        className="w-full bg-[#0d0e15] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-all text-sm shadow-inner"
      />
      <textarea 
        name="Message"
        value={formData.Message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="Message" 
        className="w-full bg-[#0d0e15] border border-white/5 rounded-lg px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-all resize-none text-sm shadow-inner"
      ></textarea>
      
      {error && <p className="text-red-400 text-xs">{error}</p>}
      
      <StarBorder as="button" type="submit" disabled={isSubmitting} className={`w-full mt-2 rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} color="#d946ef" speed="4s" thickness={2}>
        <span className="block w-full px-6 py-4 rounded-lg font-bold text-xs tracking-widest uppercase text-zinc-300 border border-white/10 hover:bg-white/5 transition-all active:scale-[0.98] bg-[#151620]/60 backdrop-blur-sm text-center">
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </span>
      </StarBorder>
    </form>
  );
}
