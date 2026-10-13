import React, { useState } from 'react';
import { MASCOT_CARDS, DEVELOPER_TIPS } from '../data/appsData';
import { Card3D } from './Card3D';
import { Sparkles, Lightbulb, Compass, Award } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const RoadsideMascotGallery: React.FC = () => {
  const { theme } = useTheme();
  const [activeTipIndex, setActiveTipIndex] = useState(0);

  const handleNextTip = () => {
    playPopSound();
    setActiveTipIndex((prev) => (prev + 1) % DEVELOPER_TIPS.length);
  };

  return (
    <section id="mascot" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Decorative ambient lights with theme palette */}
      <div 
        className="absolute top-10 left-10 w-96 h-96 blur-[150px] pointer-events-none rounded-full opacity-25"
        style={{ backgroundColor: theme.primaryColor }}
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 blur-[150px] pointer-events-none rounded-full opacity-25"
        style={{ backgroundColor: theme.secondaryColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md"
            style={{
              backgroundColor: `${theme.primaryColor}15`,
              borderColor: `${theme.primaryColor}40`,
              color: theme.primaryColor,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RoadSide-Devloper Mascot Universe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The 3D World of <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>RoadSide-Devloper</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Where roadside grit meets high-end 3D artistry. Explore the animated mascot avatars, the neon road workstation, and the launchpad behind Arpit Tiwari’s app publishing journey.
          </p>
        </div>

        {/* 3D Mascot Cards Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {MASCOT_CARDS.map((card) => (
            <Card3D
              key={card.id}
              maxTilt={12}
              className={`bg-slate-900/90 border border-white/10 ${theme.cardBorderHover} shadow-2xl backdrop-blur-xl transition-all overflow-hidden group`}
            >
              {/* Image Frame with 3D Depth */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Badge on top */}
                <div 
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border text-xs font-semibold"
                  style={{
                    borderColor: `${theme.primaryColor}40`,
                    color: theme.primaryColor,
                  }}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Text & Philosophy Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {card.title}
                </h3>
                <p 
                  className="text-xs font-semibold mb-3"
                  style={{ color: theme.secondaryColor }}
                >
                  {card.caption}
                </p>

                <p className="text-sm text-slate-300 italic leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                  {card.quote}
                </p>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Interactive "RoadSide Pro Tip" interactive banner */}
        <div 
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            boxShadow: `0 15px 40px -10px ${theme.primaryColor}22`,
          }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: `${theme.primaryColor}20`,
                borderColor: `${theme.primaryColor}50`,
                color: theme.primaryColor,
              }}
            >
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <span style={{ color: theme.primaryColor }}>ROADSIDE DEVELOPER TIP #{activeTipIndex + 1}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 font-sans">App Publishing Wisdom</span>
              </div>
              <p className="text-sm sm:text-base font-medium text-white max-w-2xl leading-relaxed">
                {DEVELOPER_TIPS[activeTipIndex]}
              </p>
            </div>
          </div>

          <button
            onClick={handleNextTip}
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
            }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer hover:brightness-110"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>Next Tip from Arpit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
