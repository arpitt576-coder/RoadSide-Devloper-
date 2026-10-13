import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/appsData';
import { playPopSound } from '../utils/audio';
import { Rocket, Check, ArrowRight, Shield, Zap, Layers, UploadCloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const PublishingPipeline: React.FC = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStep = PIPELINE_STEPS[activeStep];

  const handleStepClick = (index: number) => {
    playPopSound();
    setActiveStep(index);
  };

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5" style={{ color: theme.primaryColor }} />;
      case 1:
        return <Zap className="w-5 h-5" style={{ color: theme.secondaryColor }} />;
      case 2:
        return <Shield className="w-5 h-5" style={{ color: theme.secondaryColor }} />;
      case 3:
        return <Rocket className="w-5 h-5" style={{ color: theme.primaryColor }} />;
      default:
        return <UploadCloud className="w-5 h-5" style={{ color: theme.primaryColor }} />;
    }
  };

  return (
    <section id="pipeline" className="py-16 sm:py-24 bg-slate-950/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <Rocket className="w-3.5 h-3.5" />
            <span>The Build & Publish Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Arpit Builds & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>Publishes Apps</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From line 1 of code to global store distribution. Here is the proven 4-stage engineering and publishing pipeline powering RoadSide-Devloper.
          </p>
        </div>

        {/* Steps Selector Horizontal Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PIPELINE_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => handleStepClick(idx)}
                style={
                  isActive
                    ? {
                        borderColor: `${theme.primaryColor}80`,
                        boxShadow: `0 8px 25px -4px ${theme.primaryColor}33`,
                      }
                    : {}
                }
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-slate-900 border-2'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs font-mono font-bold"
                    style={{ color: isActive ? theme.primaryColor : '#64748b' }}
                  >
                    PHASE {step.stepNumber}
                  </span>
                  {getStepIcon(idx)}
                </div>
                <div className={`text-xs sm:text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span 
                  className="text-xs font-mono px-2.5 py-1 rounded-lg border font-bold"
                  style={{
                    backgroundColor: `${theme.primaryColor}15`,
                    borderColor: `${theme.primaryColor}40`,
                    color: theme.primaryColor,
                  }}
                >
                  PHASE {currentStep.stepNumber} OF 04
                </span>
                <span className="text-slate-300 text-xs font-mono">
                  {currentStep.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              {/* Deliverables */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Phase Deliverables & Benchmarks:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-200">
                      <Check className="w-4 h-4 shrink-0" style={{ color: theme.primaryColor }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Stack */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Tools & Production Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side interactive button & Mascot Callout */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/90 border border-white/10 space-y-4">
              <div 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.primaryColor }}
              >
                <Rocket className="w-4 h-4" />
                <span>Publishing Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every app deployed by RoadSide-Devloper comes with full store publishing assistance: passing Apple Review, Google 20-tester quotas, privacy policies, and release signing.
              </p>

              <button
                onClick={() => {
                  playPopSound();
                  setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-white/10 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-white/20"
              >
                <span>Explore Next Phase ({PIPELINE_STEPS[(activeStep + 1) % PIPELINE_STEPS.length].stepNumber})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
