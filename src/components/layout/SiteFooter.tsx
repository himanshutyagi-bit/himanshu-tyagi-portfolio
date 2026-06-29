import { GithubLogo, XLogo, Link } from "@phosphor-icons/react/dist/ssr";

export function SiteFooter() {
  return (
    <footer className="w-full flex flex-col items-center gap-8 pb-8 px-6 mt-20 relative">
      <div className="w-full max-w-5xl glass-card-dark flex justify-center py-5 border border-white/5 relative overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-500/20 to-transparent" />
        <p className="text-zinc-300 text-[13px] font-medium tracking-wide relative z-10 text-center">
          <span className="text-[#3b82f6] font-bold tracking-widest uppercase text-xs mr-2">AVAILABLE FOR:</span> 
          Internships, Freelance, Full-time Roles, Collaborations
        </p>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3">
            <span className="font-mono italic text-3xl text-indigo-400 opacity-80" style={{ fontFamily: "cursive" }}>HT</span>
            <div className="font-bold text-white tracking-widest text-sm mt-1">
              HIMANSHU TYAGI
            </div>
          </div>
          <p className="text-zinc-500 text-[10px] tracking-wide font-medium">
            © {new Date().getFullYear()} Himanshu Tyagi. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="glass-panel-dark px-6 py-3 rounded-full border border-white/10 bg-[#1c1d29]/60">
            <p className="text-zinc-300 text-sm font-medium">
              "Let's turn data into decisions and ideas into impact."
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><XLogo size={20} /></a>
            <a href="https://github.com/himanshutyagi-bit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><GithubLogo size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Link size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
