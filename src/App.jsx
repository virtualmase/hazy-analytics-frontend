import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Heatmap from './components/Heatmap';
import { cn } from './lib/utils';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDomain, setCurrentDomain] = useState('example.com');

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-cosmic" style={{ left: '10%', top: '20%' }}></div>
          <div className="particle particle-nebula" style={{ left: '80%', top: '60%' }}></div>
          <div className="particle particle-stellar" style={{ left: '50%', top: '80%' }}></div>
          <div className="particle particle-cosmic" style={{ left: '20%', top: '70%' }}></div>
          <div className="particle particle-nebula" style={{ left: '70%', top: '30%' }}></div>
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
              <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar 
                  isOpen={sidebarOpen} 
                  onClose={() => setSidebarOpen(false)}
                  currentDomain={currentDomain}
                  onDomainChange={setCurrentDomain}
                />

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Header 
                    onMenuClick={() => setSidebarOpen(true)}
                    currentDomain={currentDomain}
                  />
                  
                  <main className="flex-1 overflow-y-auto p-6">
                    <Dashboard 
                      domain={currentDomain}
                      onDomainChange={setCurrentDomain}
                    />
                  </main>
                </div>
              </div>
            } />
            <Route path="/heatmaps" element={<Heatmap domain={currentDomain} />} />
            <Route path="/funnels" element={<div>Funnels (Coming Soon)</div>} />
            <Route path="/ab-testing" element={<div>A/B Testing (Coming Soon)</div>} />
            <Route path="/settings" element={<div>Settings (Coming Soon)</div>} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App; 