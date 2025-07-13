import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, BarChart3, MousePointer, TrendingUp, Settings, Code, Users, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = ({ isOpen, onClose, currentDomain, onDomainChange }) => {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: BarChart3,
      description: 'Overview and metrics'
    },
    {
      name: 'Heatmaps',
      href: '/heatmaps',
      icon: MousePointer,
      description: 'Click and scroll tracking'
    },
    {
      name: 'Funnels',
      href: '/funnels',
      icon: TrendingUp,
      description: 'Conversion funnels'
    },
    {
      name: 'A/B Testing',
      href: '/ab-testing',
      icon: Activity,
      description: 'Split testing tools'
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      description: 'Account and preferences'
    }
  ];

  const SidebarItem = ({ item }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        to={item.href}
        className={cn(
          "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
          "hover:bg-accent/10 hover:text-accent-foreground",
          isActive 
            ? "bg-primary/20 text-primary border border-primary/30" 
            : "text-muted-foreground"
        )}
        onClick={() => onClose()}
      >
        <Icon className={cn(
          "w-5 h-5 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
        )} />
        <div className="flex-1">
          <div className="font-medium">{item.name}</div>
          <div className="text-xs opacity-70">{item.description}</div>
        </div>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border",
        "transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:static lg:inset-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
            <div>
              <h1 className="text-xl font-bold hazy-text">Hazy Analytics</h1>
              <p className="text-xs text-sidebar-foreground/70 mt-1">
                Enterprise Analytics Platform
              </p>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Domain selector */}
          <div className="p-4 border-b border-sidebar-border">
            <label className="text-xs font-medium text-sidebar-foreground/70 mb-2 block">
              Current Site
            </label>
            <select 
              value={currentDomain}
              onChange={(e) => onDomainChange(e.target.value)}
              className="w-full bg-sidebar-accent border border-sidebar-border rounded-lg px-3 py-2 text-sm text-sidebar-foreground"
            >
              <option value="example.com">example.com</option>
              <option value="mysite.com">mysite.com</option>
              <option value="test.com">test.com</option>
            </select>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="space-y-3">
              {/* Tracking code snippet */}
              <div className="bg-sidebar-accent rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-sidebar-foreground/70" />
                  <span className="text-xs font-medium text-sidebar-foreground/70">
                    Tracking Code
                  </span>
                </div>
                <code className="text-xs text-sidebar-foreground/80 block">
                  {`<script defer src="/tracker.js" data-domain="${currentDomain}"></script>`}
                </code>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-sidebar-accent rounded-lg p-2">
                  <div className="text-sidebar-foreground/70">Today</div>
                  <div className="font-medium text-sidebar-foreground">1,234</div>
                </div>
                <div className="bg-sidebar-accent rounded-lg p-2">
                  <div className="text-sidebar-foreground/70">This Week</div>
                  <div className="font-medium text-sidebar-foreground">8,567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 