import React from 'react';
import { PublishedApp } from '../types';
import { X, Star, Download, ShieldCheck, CheckCircle2, Smartphone, Terminal, ExternalLink } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface AppDetailModalProps {
  app: PublishedApp | null;
  onClose: () => void;
  onOpenSimulatorForApp: (appId: string) => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({
  app,
  onClose,
  onOpenSimulatorForApp,
}) => {
  const { theme } = useTheme();
  if (!app) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900/95 border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] backdrop-blur-2xl"
        style={{
          borderColor: `${theme.primaryColor}40`,
          boxShadow: `0 25px 60px -15px ${theme.primaryColor}33`,
        }}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-slate-950/90 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg"
              style={{ backgroundColor: app.accentColor }}
            >
              {app.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{app.name}</h3>
                <span 
                  className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: `${theme.primaryColor}15`,
                    borderColor: `${theme.primaryColor}35`,
                    color: theme.primaryColor,
                  }}
                >
                  {app.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{app.packageId}</p>
            </div>
          </div>

          <button
            onClick={() => {
              playPopSound();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Tagline */}
          <div className="text-sm font-semibold" style={{ color: theme.secondaryColor }}>
            {app.tagline}
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed">
            {app.longDesc}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-center">
              <div className="text-xs text-slate-400 font-medium">Store Rating</div>
              <div className="text-lg font-black flex items-center justify-center gap-1 mt-0.5" style={{ color: theme.primaryColor }}>
                <Star className="w-4 h-4 fill-current" />
                <span>{app.rating}</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-center">
              <div className="text-xs text-slate-400 font-medium">Downloads</div>
              <div className="text-lg font-black flex items-center justify-center gap-1 mt-0.5" style={{ color: theme.secondaryColor }}>
                <Download className="w-4 h-4" />
                <span>{app.downloads}</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-center">
              <div className="text-xs text-slate-400 font-medium">Platforms</div>
              <div className="text-sm font-bold text-white mt-1">
                {app.platforms.join(' · ')}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-center">
              <div className="text-xs text-slate-400 font-medium">Release Year</div>
              <div className="text-lg font-bold text-slate-200 mt-0.5">
                {app.releaseYear}
              </div>
            </div>
          </div>

          {/* Feature checklist */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Key Built & Published Features
            </div>
            <div className="space-y-2">
              {app.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: theme.secondaryColor }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" style={{ color: theme.secondaryColor }} />
              <span>Full Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {app.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-slate-800 border border-white/10 text-slate-200 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4" style={{ color: theme.secondaryColor }} />
            <span>Passed 100% Apple & Google Play Store Reviews</span>
          </div>

          <button
            onClick={() => {
              playPopSound();
              onOpenSimulatorForApp(app.id);
              onClose();
            }}
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:brightness-110 active:scale-95"
          >
            <Smartphone className="w-4 h-4 text-slate-950" />
            <span>Test Drive in 3D Phone Emulator</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>

      </div>
    </div>
  );
};
