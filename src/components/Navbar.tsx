import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Smartphone, Terminal, Sparkles, Send, Palette, ChevronDown, Check } from 'lucide-react';
import { playPopSound, playSuccessBeep, getSoundEnabled, setSoundEnabled } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenEstimator: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const { theme, themeId, setThemeId, availableThemes } = useTheme();
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themePickerRef.current && !themePickerRef.current.contains(e.target as Node)) {
        setThemePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playPopSound();
  };

  const handleNavClick = (id: string) => {
    playPopSound();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeChange = (id: typeof themeId) => {
    playSuccessBeep();
    setThemeId(id);
    setThemePickerOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/85 border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer" onClick={() => handleNavClick('hero')}>
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-[1.5px] shadow-lg transition-all"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  boxShadow: `0 4px 20px -2px ${theme.primaryColor}55`,
                }}
              >
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span 
                    className="font-black text-lg tracking-tighter"
                    style={{ color: theme.primaryColor }}
                  >
                    RD
                  </span>
                </div>
              </div>
              <div 
                className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-2 border-slate-950 rounded-full animate-pulse"
                style={{ backgroundColor: theme.primaryColor }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white tracking-tight text-base sm:text-lg">
                  RoadSide<span style={{ color: theme.primaryColor }}>-</span>Devloper
                </span>
                <span 
                  className="hidden sm:inline text-[11px] font-mono px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: `${theme.primaryColor}15`,
                    borderColor: `${theme.primaryColor}35`,
                    color: theme.primaryColor,
                  }}
                >
                  v2026.PRO
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="font-medium text-slate-200">Arpit Tiwari</span>
                <span className="text-slate-600">·</span>
                <span>App Builder & Publisher</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('apps')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Published Apps
            </button>
            <button
              onClick={() => handleNavClick('simulator')}
              className="hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <Smartphone className="w-4 h-4" style={{ color: theme.secondaryColor }} />
              3D Simulator
            </button>
            <button
              onClick={() => handleNavClick('pipeline')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Build & Publish
            </button>
            <button
              onClick={() => handleNavClick('mascot')}
              className="hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1.5"
              style={{ color: theme.primaryColor }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Cartoon Mascots
            </button>
            <button
              onClick={() => handleNavClick('tech')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Tech Stack
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Interactive Theme Switcher Dropdown */}
            <div className="relative" ref={themePickerRef}>
              <button
                onClick={() => {
                  playPopSound();
                  setThemePickerOpen(!themePickerOpen)}
                }
                title="Change Theme Aesthetic"
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-white/10 bg-slate-900/80 hover:bg-slate-800/90 text-xs font-semibold text-slate-200 transition-all cursor-pointer shadow-sm hover:border-white/20"
              >
                <Palette className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                <span className="hidden sm:inline">{theme.emoji} {theme.name}</span>
                <span className="sm:hidden">{theme.emoji}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${themePickerOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Theme Popover Menu */}
              {themePickerOpen && (
                <div className="absolute right-0 mt-2 w-64 p-2 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl z-50 animate-fadeIn space-y-1">
                  <div className="px-2.5 py-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Select Aesthetic</span>
                    <Sparkles className="w-3 h-3" style={{ color: theme.primaryColor }} />
                  </div>

                  {availableThemes.map((t) => {
                    const isSelected = t.id === themeId;
                    return (
                      <button
                        key={t.id}
                        onClick={() => handleThemeChange(t.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/10 text-white font-bold border border-white/15'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{t.emoji}</span>
                          <div>
                            <div className="font-semibold text-white">{t.name}</div>
                            <div className="text-[10px] text-slate-400 leading-tight">{t.tagline}</div>
                          </div>
                        </div>

                        {isSelected && (
                          <div 
                            className="w-4 h-4 rounded-full flex items-center justify-center text-slate-950"
                            style={{ backgroundColor: t.primaryColor }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Audio SFX toggle */}
            <button
              onClick={toggleSound}
              title={soundOn ? 'Sound effects enabled' : 'Sound effects muted'}
              className="p-2 sm:p-2.5 rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4" style={{ color: theme.primaryColor }} />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Quick Contact / Hire Button */}
            <button
              onClick={() => {
                playPopSound();
                onOpenEstimator();
              }}
              style={{
                background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              }}
              className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              <span>Let's Build & Publish</span>
            </button>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-slate-900/80 text-slate-300"
            >
              <Terminal className="w-5 h-5" style={{ color: theme.primaryColor }} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 space-y-2 bg-slate-950/95 backdrop-blur-2xl">
            <button
              onClick={() => handleNavClick('apps')}
              className="block w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Published Apps
            </button>
            <button
              onClick={() => handleNavClick('simulator')}
              className="block w-full text-left px-3 py-2 text-sm text-cyan-400 hover:bg-white/5 rounded-lg"
            >
              3D Live Phone Simulator
            </button>
            <button
              onClick={() => handleNavClick('pipeline')}
              className="block w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Build & Publish Pipeline
            </button>
            <button
              onClick={() => handleNavClick('mascot')}
              className="block w-full text-left px-3 py-2 text-sm text-amber-300 hover:bg-white/5 rounded-lg"
            >
              RoadSide Cartoon Mascot Gallery
            </button>
            <button
              onClick={() => handleNavClick('tech')}
              className="block w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Tech Stack Highway
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
