import React, { useState } from 'react';
import { Card3D } from './Card3D';
import { Smartphone, Download, Star, Sparkles, ExternalLink, ShieldCheck, Flame, ArrowRight, Zap } from 'lucide-react';
import { playPopSound, playLaunchSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenEstimator: () => void;
  onExploreApps: () => void;
  onTrySimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEstimator,
  onExploreApps,
  onTrySimulator,
}) => {
  const { theme } = useTheme();
  const [mascotTipIndex, setMascotTipIndex] = useState(0);

  const developerSayings = [
    "“I don’t just write code — I ship apps that real humans use on the road and at home.”",
    "“From roadside inspiration to top 10 rankings on the App Store.”",
    "“Zero crashes, sub-50ms render times, and flawless Google Play compliance.”",
    "“Got an app idea? Let's take it from roadmap to the global App Store!”",
  ];

  const cycleSaying = () => {
    playPopSound();
    setMascotTipIndex((prev) => (prev + 1) % developerSayings.length);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden road-highway-grid">
      
      {/* Animated perspective highway stripes running in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 animated-highway-lines" />
      </div>

      {/* Dynamic ambient glowing colored orbs based on active theme */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[140px] pointer-events-none rounded-full transition-all duration-700 opacity-25"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor}, ${theme.secondaryColor})`,
        }}
      />
      <div 
        className="absolute -top-24 right-10 w-80 h-80 blur-[120px] pointer-events-none rounded-full transition-all duration-700 opacity-20"
        style={{ backgroundColor: theme.secondaryColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top road marker pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border text-xs font-semibold shadow-lg backdrop-blur-md transition-colors"
            style={{
              borderColor: `${theme.primaryColor}55`,
              color: theme.primaryColor,
              boxShadow: `0 4px 20px -2px ${theme.primaryColor}33`,
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: theme.primaryColor }}
            />
            <span className="font-bold">RoadSide-Devloper HQ</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono">THEME: {theme.name.toUpperCase()}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: theme.secondaryColor }} />
            <span>Apple & Google Play Verified Publisher</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Arpit's Story & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium tracking-wide">
                <span className="text-xl">👋</span>
                <span 
                  className="font-bold uppercase tracking-wider text-xs"
                  style={{ color: theme.primaryColor }}
                >
                  HEY THERE! WELCOME TO MY CODE GARAGE
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                I’m <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>Arpit Tiwari</span>.
                <br />
                <span className="text-slate-200">I build apps and I </span>
                <span className="relative inline-block">
                  <span 
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${theme.secondaryColor}, ${theme.primaryColor})`,
                    }}
                  >
                    publish them.
                  </span>
                  <span 
                    className="absolute bottom-1 left-0 w-full h-3.5 -rotate-1 -z-0 rounded opacity-25"
                    style={{ backgroundColor: theme.secondaryColor }}
                  />
                </span>
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Founder of <strong className="text-white font-bold">RoadSide-Devloper</strong>. I take raw mobile & web concepts from roadside coffee brainstorms to high-performance, polished production apps deployed live on the 
              <strong className="text-white font-medium"> Google Play Store</strong>, <strong className="text-white font-medium">Apple App Store</strong>, and Web.
            </p>

            {/* Mascot Quote Interactive Balloon */}
            <div 
              onClick={cycleSaying}
              className="group p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-xl relative"
              style={{
                boxShadow: `0 10px 30px -10px ${theme.primaryColor}22`,
              }}
            >
              <div className="flex items-start gap-3.5">
                <div className="relative shrink-0">
                  <img
                    src="/src/assets/images/mascot_avatar_1791865310205.jpg"
                    alt="Arpit Tiwari RoadSide Mascot Avatar"
                    className="w-12 h-12 rounded-xl object-cover ring-2 transition-all shadow-md"
                    style={{
                      borderColor: theme.primaryColor,
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div 
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-slate-950 font-bold"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    💬
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-white">Cartoon Arpit says:</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-white transition-colors flex items-center gap-1 font-mono">
                      <span>Click to cycle thoughts</span>
                      <Sparkles className="w-3 h-3" style={{ color: theme.primaryColor }} />
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-200 italic leading-snug">
                    {developerSayings[mascotTipIndex]}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  playLaunchSound();
                  onTrySimulator();
                }}
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  boxShadow: `0 8px 30px -4px ${theme.primaryColor}55`,
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-slate-950 font-black text-sm hover:brightness-110 transition-all active:scale-95 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-slate-950" />
                <span>Test Drive in 3D Phone</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  onExploreApps();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm transition-all cursor-pointer backdrop-blur-md"
              >
                <Download className="w-4 h-4" style={{ color: theme.primaryColor }} />
                <span>Browse Published Apps (6)</span>
              </button>

              <button
                onClick={() => {
                  playPopSound();
                  onOpenEstimator();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Hire RoadSide-Devloper</span>
                <ExternalLink className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
              </button>
            </div>

            {/* Roadside Stats Ticker */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-black text-white" style={{ color: theme.primaryColor }}>
                  440K+
                </div>
                <div className="text-xs text-slate-400 font-medium">Total Downloads</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-black" style={{ color: theme.secondaryColor }}>
                  6 Apps
                </div>
                <div className="text-xs text-slate-400 font-medium">Published Live</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-black" style={{ color: theme.primaryColor }}>4.9 ★</div>
                <div className="text-xs text-slate-400 font-medium">Average Store Rating</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
                <div className="text-2xl font-black text-indigo-400">99.9%</div>
                <div className="text-xs text-slate-400 font-medium">Crash-Free Sessions</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* The 3D Tilt Card containing Hero Mascot Illustration */}
            <Card3D maxTilt={14} className="border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden group">
                <img
                  src="/src/assets/images/hero_roadside_dev_1791865311638.jpg"
                  alt="RoadSide Developer 3D Cartoon Hero Scene"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* RoadSide Neon Badge */}
                <div 
                  className="absolute top-3 left-3 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border text-xs font-mono"
                  style={{
                    borderColor: `${theme.primaryColor}55`,
                    color: theme.primaryColor,
                  }}
                >
                  <Flame className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                  <span>RoadSide HQ · Neon Highway</span>
                </div>

                {/* Bottom Card Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold text-white">RoadSide-Devloper Studio</h2>
                    <p className="text-xs text-slate-400">Arpit Tiwari · Coding & Publishing Worldwide</p>
                  </div>
                  <div 
                    className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md border"
                    style={{
                      backgroundColor: `${theme.primaryColor}15`,
                      borderColor: `${theme.primaryColor}35`,
                      color: theme.primaryColor,
                    }}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Top Rated</span>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Floating 3D Badge 1: App Store & Play Store ready */}
            <div 
              className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/15 shadow-2xl animate-float-slow z-20 flex items-center gap-3"
              style={{
                boxShadow: `0 15px 35px -5px ${theme.secondaryColor}33`,
              }}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${theme.secondaryColor}22`,
                  color: theme.secondaryColor,
                }}
              >
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Published on Both Stores</div>
                <div className="text-[11px]" style={{ color: theme.secondaryColor }}>Apple App Store · Google Play</div>
              </div>
            </div>

            {/* Floating 3D Badge 2: RoadSide Garage Ready */}
            <div 
              className="absolute -top-5 -right-2 sm:-right-4 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/15 shadow-2xl animate-float-reverse z-20 flex items-center gap-2.5"
              style={{
                boxShadow: `0 15px 35px -5px ${theme.primaryColor}33`,
              }}
            >
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${theme.primaryColor}22`,
                  color: theme.primaryColor,
                }}
              >
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">3D Cartoon Mascot</div>
                <div className="text-[10px] text-slate-400">RoadSide-Devloper Brand</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
