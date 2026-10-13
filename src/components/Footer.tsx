import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden transition-colors">
      {/* Roadside divider stripe line with dynamic theme gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.primaryColor}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Creator Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl p-[1.5px]"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                }}
              >
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-lg" style={{ color: theme.primaryColor }}>
                  RD
                </div>
              </div>
              <div>
                <h3 className="font-black text-lg text-white">
                  RoadSide<span style={{ color: theme.primaryColor }}>-</span>Devloper
                </h3>
                <p className="text-xs text-slate-400">Founded by Arpit Tiwari</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              "I build apps and I publish them." Crafting high-performance mobile and web applications, from roadside inspiration all the way to global App Store and Google Play releases.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  playPopSound();
                  onOpenEstimator();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer hover:brightness-110"
                style={{
                  backgroundColor: `${theme.primaryColor}15`,
                  borderColor: `${theme.primaryColor}40`,
                  color: theme.primaryColor,
                }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>arpitt576@gmail.com</span>
              </button>
            </div>
          </div>

          {/* Published Apps quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Featured Apps
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  RoadMate HUD & Telemetry
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  PulseTrack Offline Gym
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  DevFuel Mobile Toolbox
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  EchoWave Voice Studio
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  QuickDrop P2P Transfer
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Mascot universe */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              RoadSide Studio
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#simulator" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>3D Phone Emulator</span>
                  <span 
                    className="text-[10px] font-mono px-1.5 rounded font-bold"
                    style={{
                      backgroundColor: `${theme.secondaryColor}25`,
                      color: theme.secondaryColor,
                    }}
                  >
                    LIVE
                  </span>
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-white transition-colors">
                  Build & Publish Pipeline (01-04)
                </a>
              </li>
              <li>
                <a href="#mascot" className="hover:text-white transition-colors flex items-center gap-1.5" style={{ color: theme.primaryColor }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cartoon Mascot Gallery</span>
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-white transition-colors">
                  Tech Highway Frameworks
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400 font-mono">
              Direct Contact: arpitt576@gmail.com
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} RoadSide-Devloper · Built & Published by</span>
            <span className="text-slate-200 font-bold">Arpit Tiwari</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1">
              Active Theme: <strong style={{ color: theme.primaryColor }}>{theme.name}</strong>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
