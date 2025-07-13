import React, { useState, useEffect } from 'react';
import { MousePointer, Eye, TrendingUp, Download, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const Heatmap = ({ domain }) => {
  const [activeTab, setActiveTab] = useState('clicks');
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(true);

  // Mock heatmap data
  const mockHeatmapData = {
    clicks: [
      { x: 100, y: 150, intensity: 85, element: 'Sign Up Button' },
      { x: 300, y: 200, intensity: 92, element: 'Pricing Card' },
      { x: 500, y: 180, intensity: 78, element: 'Demo Link' },
      { x: 200, y: 300, intensity: 65, element: 'Feature Card' },
      { x: 400, y: 350, intensity: 45, element: 'Footer Link' },
    ],
    scroll: [
      { y: 100, intensity: 95 },
      { y: 200, intensity: 88 },
      { y: 300, intensity: 75 },
      { y: 400, intensity: 60 },
      { y: 500, intensity: 45 },
      { y: 600, intensity: 30 },
    ]
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'clicks', name: 'Click Heatmap', icon: MousePointer },
    { id: 'scroll', name: 'Scroll Depth', icon: Eye },
    { id: 'movement', name: 'Mouse Movement', icon: TrendingUp }
  ];

  const timeRanges = [
    { value: '1d', label: 'Last 24 hours' },
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold hazy-text">Heatmaps</h1>
          <p className="text-muted-foreground">
            Visualize user interactions and behavior patterns
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-card rounded-xl border border-border/50 p-6">
        {activeTab === 'clicks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Click Heatmap</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>High activity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Medium activity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Low activity</span>
                </div>
              </div>
            </div>
            
            {/* Mock heatmap visualization */}
            <div className="relative bg-gray-100 rounded-lg h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 opacity-50"></div>
              
              {/* Mock website layout */}
              <div className="absolute top-4 left-4 right-4 h-16 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-8 left-8 right-8 h-8 bg-gray-300 rounded"></div>
              
              <div className="absolute top-32 left-4 right-4 h-32 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-40 left-8 right-8 h-20 bg-gray-300 rounded"></div>
              
              <div className="absolute top-180 left-4 right-4 h-48 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-200 left-8 right-8 h-32 bg-gray-300 rounded"></div>
              
              {/* Heatmap points */}
              {mockHeatmapData.clicks.map((point, index) => (
                <div
                  key={index}
                  className="absolute w-4 h-4 rounded-full cursor-pointer transition-all hover:scale-150"
                  style={{
                    left: point.x,
                    top: point.y,
                    backgroundColor: `rgba(255, 0, 0, ${point.intensity / 100})`,
                    boxShadow: `0 0 20px rgba(255, 0, 0, ${point.intensity / 100})`
                  }}
                  title={`${point.element}: ${point.intensity}% intensity`}
                />
              ))}
            </div>
            
            {/* Click insights */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Total clicks</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Highest intensity</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Hot spots</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scroll' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Scroll Depth Analysis</h3>
              <div className="text-sm text-muted-foreground">
                Shows how far users scroll on your pages
              </div>
            </div>
            
            {/* Scroll depth visualization */}
            <div className="relative bg-gray-100 rounded-lg h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 opacity-50"></div>
              
              {/* Scroll depth bars */}
              <div className="absolute right-4 top-4 bottom-4 w-8 flex flex-col justify-between">
                {mockHeatmapData.scroll.map((depth, index) => (
                  <div
                    key={index}
                    className="bg-primary rounded"
                    style={{
                      height: `${depth.intensity}%`,
                      opacity: depth.intensity / 100
                    }}
                    title={`${depth.y}px: ${depth.intensity}% of users`}
                  />
                ))}
              </div>
              
              {/* Page content mock */}
              <div className="absolute top-4 left-4 right-16 h-16 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-32 left-4 right-16 h-32 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-96 left-4 right-16 h-48 bg-white rounded-lg shadow-sm"></div>
              <div className="absolute top-176 left-4 right-16 h-64 bg-white rounded-lg shadow-sm"></div>
            </div>
            
            {/* Scroll insights */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">75%</div>
                <div className="text-sm text-muted-foreground">Average scroll depth</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Peak engagement</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">600px</div>
                <div className="text-sm text-muted-foreground">Deepest scroll</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'movement' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Mouse Movement Tracking</h3>
              <div className="text-sm text-muted-foreground">
                Coming soon - Track mouse movement patterns
              </div>
            </div>
            
            <div className="flex items-center justify-center h-64 bg-accent/10 rounded-lg">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Mouse movement tracking will be available soon</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Heatmap; 