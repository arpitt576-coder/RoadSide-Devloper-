/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDeviceSimulator } from './components/InteractiveDeviceSimulator';
import { PublishedAppsGrid } from './components/PublishedAppsGrid';
import { PublishingPipeline } from './components/PublishingPipeline';
import { RoadsideMascotGallery } from './components/RoadsideMascotGallery';
import { TechHighway } from './components/TechHighway';
import { Footer } from './components/Footer';
import { AppEstimatorModal } from './components/AppEstimatorModal';
import { AppDetailModal } from './components/AppDetailModal';
import { PublishedApp } from './types';

function MainApp() {
  const { theme } = useTheme();
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedAppForModal, setSelectedAppForModal] = useState<PublishedApp | null>(null);

  const handleOpenSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreApps = () => {
    const el = document.getElementById('apps');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSimulatorForApp = (appId: string) => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme.bgGradient} text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-500`}>
      
      {/* Top Navbar with Theme Switcher */}
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        activeSection="hero"
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3D Hero Section */}
        <Hero
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onExploreApps={handleExploreApps}
          onTrySimulator={handleOpenSimulator}
        />

        {/* 3D Interactive Device Simulator */}
        <InteractiveDeviceSimulator
          onSelectAppForDetails={(app) => setSelectedAppForModal(app)}
        />

        {/* Published Apps Grid with 3D Tilt Cards */}
        <PublishedAppsGrid
          onSelectApp={(app) => setSelectedAppForModal(app)}
        />

        {/* How Arpit Builds & Publishes Apps Pipeline */}
        <PublishingPipeline />

        {/* RoadSide-Devloper Cartoon Mascots & 3D Lab Diorama */}
        <RoadsideMascotGallery />

        {/* The Tech Highway */}
        <TechHighway />
      </main>

      {/* Footer */}
      <Footer onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Modals */}
      <AppEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      <AppDetailModal
        app={selectedAppForModal}
        onClose={() => setSelectedAppForModal(null)}
        onOpenSimulatorForApp={handleOpenSimulatorForApp}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
