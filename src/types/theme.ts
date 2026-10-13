export type ThemeId = 'electric-cyan' | 'stealth-carbon' | 'cobalt-blue' | 'cyber-violet';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  emoji: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientText: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
  buttonGradient: string;
  cardGlow: string;
  cardBorderHover: string;
  phoneGlow: string;
  roadStripesColor: string;
  ambientBlob1: string;
  ambientBlob2: string;
  bgGradient: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'electric-cyan': {
    id: 'electric-cyan',
    name: 'Electric Cyan',
    tagline: 'High-Tech Cyan & Deep Space Blue',
    emoji: '⚡',
    primaryColor: '#00f0ff', // Hyper Electric Cyan
    secondaryColor: '#3b82f6', // Cobalt Blue
    accentColor: '#0284c7',
    gradientText: 'from-cyan-300 via-sky-400 to-blue-500',
    badgeBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-300',
    buttonGradient: 'from-cyan-400 via-sky-500 to-blue-600',
    cardGlow: 'hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]',
    cardBorderHover: 'hover:border-cyan-500/50',
    phoneGlow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 240, 255, 0.25)',
    roadStripesColor: 'rgba(0, 240, 255, 0.15)',
    ambientBlob1: 'bg-cyan-500/15',
    ambientBlob2: 'bg-blue-600/15',
    bgGradient: 'bg-slate-950',
  },
  'stealth-carbon': {
    id: 'stealth-carbon',
    name: 'Stealth Carbon',
    tagline: 'Matte Obsidian & Pure Ice White',
    emoji: '🖤',
    primaryColor: '#38bdf8', // Ice Sky Blue
    secondaryColor: '#94a3b8', // Silver Slate
    accentColor: '#64748b',
    gradientText: 'from-white via-slate-200 to-sky-300',
    badgeBorder: 'border-slate-700',
    badgeBg: 'bg-slate-800/60',
    badgeText: 'text-slate-200',
    buttonGradient: 'from-white via-slate-100 to-sky-200',
    cardGlow: 'hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]',
    cardBorderHover: 'hover:border-slate-600',
    phoneGlow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px rgba(56, 189, 248, 0.15)',
    roadStripesColor: 'rgba(255, 255, 255, 0.12)',
    ambientBlob1: 'bg-slate-700/15',
    ambientBlob2: 'bg-sky-500/10',
    bgGradient: 'bg-[#08090d]',
  },
  'cobalt-blue': {
    id: 'cobalt-blue',
    name: 'Cobalt Speed',
    tagline: 'Deep Royal Navy & Sapphire Glow',
    emoji: '🔷',
    primaryColor: '#60a5fa', // Sky Blue
    secondaryColor: '#2563eb', // Deep Cobalt
    accentColor: '#1d4ed8',
    gradientText: 'from-blue-300 via-indigo-300 to-cyan-400',
    badgeBorder: 'border-blue-500/30',
    badgeBg: 'bg-blue-500/10',
    badgeText: 'text-blue-300',
    buttonGradient: 'from-blue-500 via-indigo-600 to-sky-500',
    cardGlow: 'hover:shadow-[0_0_35px_rgba(96,165,250,0.22)]',
    cardBorderHover: 'hover:border-blue-500/50',
    phoneGlow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(96, 165, 250, 0.25)',
    roadStripesColor: 'rgba(96, 165, 250, 0.15)',
    ambientBlob1: 'bg-blue-600/15',
    ambientBlob2: 'bg-indigo-600/15',
    bgGradient: 'bg-[#060b17]',
  },
  'cyber-violet': {
    id: 'cyber-violet',
    name: 'Cyber Violet',
    tagline: 'Deep Neon Purple & Electric Indigo',
    emoji: '🔮',
    primaryColor: '#c084fc', // Neon Purple
    secondaryColor: '#818cf8', // Electric Indigo
    accentColor: '#6366f1',
    gradientText: 'from-purple-300 via-indigo-300 to-sky-300',
    badgeBorder: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-300',
    buttonGradient: 'from-purple-500 via-indigo-500 to-blue-500',
    cardGlow: 'hover:shadow-[0_0_35px_rgba(192,132,252,0.22)]',
    cardBorderHover: 'hover:border-purple-500/50',
    phoneGlow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(192, 132, 252, 0.25)',
    roadStripesColor: 'rgba(192, 132, 252, 0.15)',
    ambientBlob1: 'bg-purple-600/15',
    ambientBlob2: 'bg-indigo-600/15',
    bgGradient: 'bg-[#0a0614]',
  },
};
