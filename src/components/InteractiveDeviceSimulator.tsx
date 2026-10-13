import React, { useState } from 'react';
import { PublishedApp } from '../types';
import { PUBLISHED_APPS } from '../data/appsData';
import { playPopSound, playLaunchSound, playSuccessBeep } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { 
  Smartphone, 
  Download, 
  Star, 
  Wifi, 
  Battery, 
  Signal, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  RotateCw,
  ExternalLink,
  Layers,
  Activity,
  Sliders,
  Eye
} from 'lucide-react';

interface SimulatorProps {
  onSelectAppForDetails: (app: PublishedApp) => void;
}

export const InteractiveDeviceSimulator: React.FC<SimulatorProps> = ({ onSelectAppForDetails }) => {
  const { theme } = useTheme();
  const [selectedAppId, setSelectedAppId] = useState<string>(PUBLISHED_APPS[0].id);
  const [simulatedActionCount, setSimulatedActionCount] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [installedApps, setInstalledApps] = useState<Record<string, boolean>>({});
  const [isIsometric, setIsIsometric] = useState<boolean>(true);

  const currentApp = PUBLISHED_APPS.find((a) => a.id === selectedAppId) || PUBLISHED_APPS[0];

  const handleSelectApp = (id: string) => {
    playPopSound();
    setSelectedAppId(id);
    setSimulatedActionCount(0);
  };

  const handleRunAppAction = () => {
    playLaunchSound();
    setIsSimulating(true);
    setSimulatedActionCount((prev) => prev + 1);
    setTimeout(() => {
      setIsSimulating(false);
      playSuccessBeep();
    }, 600);
  };

  const handleSimulateInstall = () => {
    playLaunchSound();
    setInstalledApps((prev) => ({
      ...prev,
      [currentApp.id]: !prev[currentApp.id],
    }));
    playSuccessBeep();
  };

  const isInstalled = !!installedApps[currentApp.id];

  return (
    <section id="simulator" className="py-16 sm:py-24 bg-slate-950/70 border-y border-white/10 relative overflow-hidden">
      
      {/* Background glow accents based on theme */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: theme.secondaryColor }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-96 h-96 blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: theme.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md"
            style={{
              backgroundColor: `${theme.secondaryColor}15`,
              borderColor: `${theme.secondaryColor}40`,
              color: theme.secondaryColor,
            }}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive 3D Phone Emulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Test Drive Arpit’s <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>Published Apps</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Switch between published applications below. Experience the native-feeling interface, telemetry stats, and interactive handlers built by RoadSide-Devloper.
          </p>
        </div>

        {/* View Controls & App Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* App Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto no-scrollbar">
            {PUBLISHED_APPS.map((app) => {
              const isActive = app.id === currentApp.id;
              return (
                <button
                  key={app.id}
                  onClick={() => handleSelectApp(app.id)}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                          color: '#020617',
                          boxShadow: `0 4px 18px -2px ${theme.primaryColor}55`,
                        }
                      : {}
                  }
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'scale-105 font-black'
                      : 'bg-slate-900/90 border border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{app.name.split(' ')[0]}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${isActive ? 'bg-black/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                    {app.rating}★
                  </span>
                </button>
              );
            })}
          </div>

          {/* Perspective Angle Toggle */}
          <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => {
                playPopSound();
                setIsIsometric(true);
              }}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                isIsometric ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>3D Angle</span>
            </button>
            <button
              onClick={() => {
                playPopSound();
                setIsIsometric(false);
              }}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                !isIsometric ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Flat Screen</span>
            </button>
          </div>

        </div>

        {/* Main 3D Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3D Phone Bezel Representation */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Outer 3D Phone Shell */}
            <div 
              style={{ perspective: '1400px' }} 
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              <div 
                style={{
                  transform: isIsometric ? 'rotateY(-6deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)',
                  boxShadow: theme.phoneGlow,
                }}
                className="relative rounded-[48px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-4 border-slate-600/60 transition-all duration-500 hover:rotate-0"
              >
                {/* Physical side buttons mockup */}
                <div className="absolute -left-5 top-28 w-1.5 h-12 bg-slate-700 rounded-l-md" />
                <div className="absolute -left-5 top-44 w-1.5 h-12 bg-slate-700 rounded-l-md" />
                <div className="absolute -right-5 top-32 w-1.5 h-16 bg-slate-700 rounded-r-md" />

                {/* Inner Bezel Screen */}
                <div className="relative rounded-[38px] overflow-hidden bg-slate-950 border border-white/10 flex flex-col min-h-[580px] text-white">
                  
                  {/* Status Bar */}
                  <div className="pt-3 px-6 pb-2 flex items-center justify-between text-xs text-slate-400 font-mono select-none">
                    <span className="font-bold text-white">9:41</span>
                    
                    {/* Dynamic Island / Notch */}
                    <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-2 border border-slate-800">
                      <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <span className="text-[10px] text-slate-300 font-sans tracking-tight">RD 5G</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Signal className="w-3.5 h-3.5" />
                      <Wifi className="w-3.5 h-3.5" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    
                    {/* App Header in Phone */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-slate-950 text-sm shadow-md"
                            style={{ backgroundColor: currentApp.accentColor }}
                          >
                            {currentApp.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white leading-tight">{currentApp.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{currentApp.packageId}</div>
                          </div>
                        </div>

                        <span 
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: `${theme.primaryColor}15`,
                            borderColor: `${theme.primaryColor}35`,
                            color: theme.primaryColor,
                          }}
                        >
                          {currentApp.badge}
                        </span>
                      </div>

                      {/* Main Telemetry / App Metric Card */}
                      <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-white/10 mt-3 text-center relative overflow-hidden">
                        <div className="text-[11px] font-mono mb-1 flex items-center justify-center gap-1" style={{ color: theme.secondaryColor }}>
                          <Activity className="w-3 h-3 animate-spin" />
                          <span>{currentApp.simulatedScreen.mockStatus}</span>
                        </div>

                        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 py-1 tracking-tight">
                          {currentApp.simulatedScreen.heroMetric}
                        </div>

                        <div className="text-xs text-slate-400 font-medium">
                          {currentApp.simulatedScreen.heroLabel}
                        </div>

                        {/* Interactive reaction badge */}
                        {simulatedActionCount > 0 && (
                          <div 
                            className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold animate-pulse"
                            style={{
                              backgroundColor: `${theme.primaryColor}25`,
                              color: theme.primaryColor,
                            }}
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Action Dispatched #{simulatedActionCount}</span>
                          </div>
                        )}
                      </div>

                      {/* Sub-Stats Grid inside Phone */}
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {currentApp.simulatedScreen.subStats.map((stat, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400 truncate">{stat.label}</div>
                            <div className="text-xs font-bold text-slate-200 mt-0.5">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Interactive Area inside Phone */}
                    <div className="space-y-3 pt-4">
                      {/* Interactive Test Action Button */}
                      <button
                        onClick={handleRunAppAction}
                        disabled={isSimulating}
                        className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-95"
                        style={{
                          backgroundColor: currentApp.accentColor,
                        }}
                      >
                        {isSimulating ? (
                          <>
                            <RotateCw className="w-4 h-4 animate-spin" />
                            <span>Executing Haptic Routine...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-slate-950" />
                            <span>{currentApp.simulatedScreen.actionLabel}</span>
                          </>
                        )}
                      </button>

                      {/* Store install simulator */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <button
                          onClick={handleSimulateInstall}
                          className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                          <span>{isInstalled ? 'Installed on Device' : 'Simulate Store Download'}</span>
                        </button>

                        <div className="flex items-center gap-1 text-[11px] font-bold" style={{ color: theme.primaryColor }}>
                          <Star className="w-3 h-3 fill-current" />
                          <span>{currentApp.rating} ({currentApp.reviewsCount})</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Home Bar Indicator */}
                  <div className="pb-2 flex justify-center">
                    <div className="w-28 h-1 bg-slate-600 rounded-full" />
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right: Technical Specs & App Publishing Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="text-xs font-mono uppercase tracking-wider font-semibold"
                  style={{ color: theme.primaryColor }}
                >
                  PUBLISHED PRODUCT DETAILS
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">RELEASE YEAR {currentApp.releaseYear}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentApp.name}
              </h3>
              <p className="text-base font-medium mt-1" style={{ color: theme.secondaryColor }}>
                {currentApp.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentApp.longDesc}
            </p>

            {/* Core Features list */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Production Highlights & Features
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentApp.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-200 backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: theme.secondaryColor }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Highway tags */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" style={{ color: theme.secondaryColor }} />
                <span>Architecture & Engineering Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-mono border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  playPopSound();
                  onSelectAppForDetails(currentApp);
                }}
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:brightness-110 active:scale-95"
              >
                <span>View Full App Specifications</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </button>

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                <span>Published by Arpit Tiwari · RoadSide-Devloper</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
