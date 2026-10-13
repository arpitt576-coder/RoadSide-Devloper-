import React, { useState } from 'react';
import { PublishedApp } from '../types';
import { PUBLISHED_APPS } from '../data/appsData';
import { Card3D } from './Card3D';
import { playPopSound } from '../utils/audio';
import { Star, Download, Smartphone, Laptop, Globe, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AppsGridProps {
  onSelectApp: (app: PublishedApp) => void;
}

export const PublishedAppsGrid: React.FC<AppsGridProps> = ({ onSelectApp }) => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<'all' | 'Mobile' | 'Dev Tools' | 'Utility' | 'Audio'>('all');

  const filteredApps = filter === 'all' 
    ? PUBLISHED_APPS 
    : PUBLISHED_APPS.filter((a) => a.category === filter);

  const handleFilterClick = (cat: 'all' | 'Mobile' | 'Dev Tools' | 'Utility' | 'Audio') => {
    playPopSound();
    setFilter(cat);
  };

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'iOS':
      case 'Android':
        return <span key={platform} title={platform}><Smartphone className="w-3.5 h-3.5" /></span>;
      case 'Desktop':
        return <span key={platform} title={platform}><Laptop className="w-3.5 h-3.5" /></span>;
      case 'Web':
        return <span key={platform} title={platform}><Globe className="w-3.5 h-3.5" /></span>;
      default:
        return null;
    }
  };

  return (
    <section id="apps" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className="text-xs font-mono font-bold tracking-wider uppercase mb-2"
              style={{ color: theme.primaryColor }}
            >
              ROADSIDE-DEVLOPER CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Published Applications
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              Engineered, polished, and shipped to millions of users worldwide by Arpit Tiwari. Every app is built with zero compromise on performance.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-white/10 rounded-2xl overflow-x-auto backdrop-blur-md">
            {(['all', 'Mobile', 'Dev Tools', 'Utility', 'Audio'] as const).map((cat) => {
              const label = cat === 'all' ? 'All Apps' : cat;
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterClick(cat)}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                          color: '#020617',
                        }
                      : {}
                  }
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'shadow-md font-black'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredApps.map((app) => (
            <Card3D
              key={app.id}
              maxTilt={10}
              className={`bg-slate-900/80 border border-white/10 ${theme.cardBorderHover} shadow-xl backdrop-blur-xl transition-all flex flex-col justify-between group`}
              onClick={() => {
                playPopSound();
                onSelectApp(app);
              }}
            >
              <div className="p-6">
                
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-slate-950 text-base shadow-lg transition-transform group-hover:scale-105"
                      style={{ backgroundColor: app.accentColor }}
                    >
                      {app.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                        {app.name}
                      </h3>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {app.packageId}
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-2 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-white transition-colors border border-white/5"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {app.shortDesc}
                </p>

                {/* Unboxed clean metadata (WCAG AA compliant, zero pills) */}
                <div className="flex items-center gap-2 text-xs text-slate-400 py-2 border-y border-white/10 mb-4">
                  <span className="flex items-center gap-1 font-bold" style={{ color: theme.primaryColor }}>
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{app.rating}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" style={{ color: theme.secondaryColor }} />
                    <span className="text-slate-300">{app.downloads}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{app.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{app.releaseYear}</span>
                </div>

                {/* Tech Stack items */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {app.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-800/90 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {app.techStack.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{app.techStack.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer with Platform icons */}
              <div className="px-6 py-3.5 bg-slate-950/70 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">Platforms:</span>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    {app.platforms.map((p) => renderPlatformIcon(p))}
                  </div>
                </div>

                <span 
                  className="font-bold text-[11px]"
                  style={{ color: theme.primaryColor }}
                >
                  {app.badge}
                </span>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
