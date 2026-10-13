import React, { useState } from 'react';
import { Card3D } from './Card3D';
import { playPopSound } from '../utils/audio';
import { Code2, Cpu, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TechItem {
  name: string;
  category: 'Mobile' | 'Backend' | 'DevOps' | 'Frontend';
  level: string;
  experience: string;
  shippedIn: string;
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'Flutter & Dart',
    category: 'Mobile',
    level: '98%',
    experience: '4+ Years',
    shippedIn: 'RoadMate HUD, QuickDrop',
    color: '#02569B',
  },
  {
    name: 'React Native',
    category: 'Mobile',
    level: '96%',
    experience: '5+ Years',
    shippedIn: 'PulseTrack, PitStop Cafes',
    color: '#61DAFB',
  },
  {
    name: 'Kotlin / Android Native',
    category: 'Mobile',
    level: '92%',
    experience: '4+ Years',
    shippedIn: 'OBD Telemetry & NDK modules',
    color: '#7F52FF',
  },
  {
    name: 'Swift / iOS Native',
    category: 'Mobile',
    level: '90%',
    experience: '3+ Years',
    shippedIn: 'EchoWave & CoreAudio pipelines',
    color: '#FA7343',
  },
  {
    name: 'TypeScript & Node.js',
    category: 'Backend',
    level: '98%',
    experience: '6+ Years',
    shippedIn: 'All API sync engines & DevFuel',
    color: '#3178C6',
  },
  {
    name: 'Fastlane & Store CI/CD',
    category: 'DevOps',
    level: '95%',
    experience: '4+ Years',
    shippedIn: 'Automated TestFlight & Play Deploy',
    color: '#00F2FE',
  },
  {
    name: 'SQLite / WatermelonDB',
    category: 'Backend',
    level: '94%',
    experience: '5+ Years',
    shippedIn: 'Offline-first database engines',
    color: '#003B57',
  },
  {
    name: 'Firebase & Supabase',
    category: 'Backend',
    level: '95%',
    experience: '5+ Years',
    shippedIn: 'Realtime telemetry, Auth, Storage',
    color: '#FFCA28',
  },
  {
    name: 'Tailwind CSS & Web UI',
    category: 'Frontend',
    level: '98%',
    experience: '5+ Years',
    shippedIn: 'DevFuel Web & Companion dashboards',
    color: '#38BDF8',
  },
  {
    name: 'WebRTC P2P Direct',
    category: 'Mobile',
    level: '90%',
    experience: '3+ Years',
    shippedIn: 'QuickDrop Local Share',
    color: '#333333',
  },
  {
    name: 'App Store Guidelines & ASO',
    category: 'DevOps',
    level: '99%',
    experience: '5+ Years',
    shippedIn: 'All 6 live published store apps',
    color: '#F59E0B',
  },
  {
    name: 'Docker & Cloud Run',
    category: 'DevOps',
    level: '91%',
    experience: '4+ Years',
    shippedIn: 'Microservices & proxy routing',
    color: '#2496ED',
  },
];

export const TechHighway: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Mobile' | 'Backend' | 'DevOps' | 'Frontend'>('All');

  const filtered = activeCategory === 'All'
    ? TECH_ITEMS
    : TECH_ITEMS.filter((t) => t.category === activeCategory);

  const handleFilter = (cat: 'All' | 'Mobile' | 'Backend' | 'DevOps' | 'Frontend') => {
    playPopSound();
    setActiveCategory(cat);
  };

  return (
    <section id="tech" className="py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background road grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className="text-xs font-mono font-bold tracking-wider uppercase mb-2"
              style={{ color: theme.secondaryColor }}
            >
              ENGINEERING POWERHOUSE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              The Tech Highway
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl">
              Languages, native frameworks, and distribution toolchains mastered by Arpit Tiwari at RoadSide-Devloper.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-white/10 rounded-2xl overflow-x-auto backdrop-blur-md">
            {(['All', 'Mobile', 'Backend', 'DevOps', 'Frontend'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={
                  activeCategory === cat
                    ? {
                        background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                        color: '#020617',
                      }
                    : {}
                }
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'font-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <Card3D
              key={item.name}
              maxTilt={12}
              className={`p-5 rounded-2xl bg-slate-900/80 border border-white/10 ${theme.cardBorderHover} shadow-lg backdrop-blur-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    {item.category}
                  </span>
                  <span 
                    className="text-xs font-mono font-bold"
                    style={{ color: theme.primaryColor }}
                  >
                    {item.experience}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 mb-4">
                  Shipped in: <span className="text-slate-200 font-medium">{item.shippedIn}</span>
                </p>
              </div>

              {/* Mastery bar */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Proficiency</span>
                  <span className="font-bold" style={{ color: theme.secondaryColor }}>{item.level}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: item.level,
                      background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})`,
                    }}
                  />
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Roadside Guarantee Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 shrink-0" style={{ color: theme.primaryColor }} />
            <div>
              <div className="text-sm font-bold text-white">Clean & Documented Code</div>
              <div className="text-xs text-slate-400">Maintainable modular architectures</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 shrink-0" style={{ color: theme.secondaryColor }} />
            <div>
              <div className="text-sm font-bold text-white">120Hz Smooth Performance</div>
              <div className="text-xs text-slate-400">Zero jank, instant launch times</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="w-6 h-6 shrink-0" style={{ color: theme.secondaryColor }} />
            <div>
              <div className="text-sm font-bold text-white">Direct App Store Publishing</div>
              <div className="text-xs text-slate-400">100% store pass guarantee</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
