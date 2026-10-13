import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, Sparkles, Smartphone, Globe, Shield, Clock } from 'lucide-react';
import { playPopSound, playSuccessBeep } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppEstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [platform, setPlatform] = useState<string>('Cross-Platform (iOS + Android)');
  const [timeline, setTimeline] = useState<string>('4 - 6 Weeks');
  const [appName, setAppName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [storePublishingHelp, setStorePublishingHelp] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessBeep();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText('arpitt576@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoLink = `mailto:arpitt576@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${appName || 'New App Idea'} for RoadSide-Devloper`
  )}&body=${encodeURIComponent(
    `Hi Arpit,\n\nI checked out RoadSide-Devloper and would love to work with you on an app.\n\nProject: ${appName || 'Not specified'}\nPlatform: ${platform}\nDesired Timeline: ${timeline}\nApp Store & Google Play Publishing Assistance: ${
      storePublishingHelp ? 'Yes, please handle the full publishing' : 'Code only'
    }\n\nProject Overview:\n${notes || 'Let\'s connect to discuss!'}\n\nMy Email: ${clientEmail}\n\nBest regards,`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900/95 border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] backdrop-blur-2xl"
        style={{
          borderColor: `${theme.primaryColor}40`,
          boxShadow: `0 25px 60px -15px ${theme.primaryColor}33`,
        }}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-2xl border flex items-center justify-center"
              style={{
                backgroundColor: `${theme.primaryColor}20`,
                borderColor: `${theme.primaryColor}50`,
                color: theme.primaryColor,
              }}
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Build & Publish Your App with Arpit Tiwari
              </h2>
              <p className="text-xs text-slate-400">
                RoadSide-Devloper Studio · Direct Pipeline to Google Play & App Store
              </p>
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-2xl border mx-auto flex items-center justify-center"
                style={{
                  backgroundColor: `${theme.primaryColor}20`,
                  borderColor: `${theme.primaryColor}50`,
                  color: theme.primaryColor,
                }}
              >
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-black text-white">
                Inquiry Prepared for RoadSide-Devloper!
              </h4>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Click below to launch your email client with your pre-filled project brief directly to Arpit Tiwari at <span className="font-mono font-bold" style={{ color: theme.primaryColor }}>arpitt576@gmail.com</span>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={mailtoLink}
                  onClick={() => playSuccessBeep()}
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-950 font-black text-sm shadow-lg transition-all cursor-pointer hover:brightness-110"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Email to arpitt576@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-white/10 text-slate-200 text-sm font-semibold transition-all cursor-pointer"
                >
                  <Copy className="w-4 h-4" style={{ color: theme.secondaryColor }} />
                  <span>{copied ? 'Email Copied!' : 'Copy Arpit’s Email'}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                You can also message directly anytime: <strong className="text-white">arpitt576@gmail.com</strong>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* App / Project Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your App Idea or Project Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-Gen Delivery HUD, Crypto Wallet, Fitness AI"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-all"
                />
              </div>

              {/* Target Platforms */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Target Platform(s)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Cross-Platform (iOS + Android)', icon: <Smartphone className="w-4 h-4" /> },
                    { label: 'Native iOS / Android', icon: <Smartphone className="w-4 h-4" /> },
                    { label: 'Full-Stack Web & Mobile', icon: <Globe className="w-4 h-4" /> },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => {
                        playPopSound();
                        setPlatform(item.label);
                      }}
                      style={
                        platform === item.label
                          ? {
                              backgroundColor: `${theme.primaryColor}15`,
                              borderColor: theme.primaryColor,
                              color: theme.primaryColor,
                            }
                          : {}
                      }
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                        platform === item.label
                          ? 'font-bold'
                          : 'bg-slate-950 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {item.icon}
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desired Timeline */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" style={{ color: theme.secondaryColor }} />
                  <span>Target Shipping Timeline</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['2 - 4 Weeks (Sprint)', '4 - 6 Weeks', '2+ Months'].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => {
                        playPopSound();
                        setTimeline(time);
                      }}
                      style={
                        timeline === time
                          ? {
                              backgroundColor: `${theme.secondaryColor}15`,
                              borderColor: theme.secondaryColor,
                              color: theme.secondaryColor,
                            }
                          : {}
                      }
                      className={`py-2 px-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                        timeline === time
                          ? 'font-bold'
                          : 'bg-slate-950 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* App Store Publishing Toggle */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5" style={{ color: theme.secondaryColor }} />
                  <div>
                    <div className="text-xs font-bold text-white">Full Store Publishing Management</div>
                    <div className="text-[11px] text-slate-400">
                      Let Arpit handle Apple review compliance, Play Console testers, and Fastlane CI/CD
                    </div>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={storePublishingHelp}
                  onChange={(e) => setStorePublishingHelp(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 cursor-pointer"
                  style={{ accentColor: theme.primaryColor }}
                />
              </div>

              {/* Client Email & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 focus:border-white/30 text-white text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Key Features / Brief
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Offline caching, map HUD, in-app subscriptions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 focus:border-white/30 text-white text-xs outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
                  <span>Direct: arpitt576@gmail.com</span>
                </button>

                <button
                  type="submit"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-950 font-black text-sm shadow-lg transition-all cursor-pointer hover:brightness-110 active:scale-95"
                >
                  <span>Prepare Launch Inquiry</span>
                  <Send className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
