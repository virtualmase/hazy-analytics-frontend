import React from 'react';
import { Menu, Bell, Settings, User } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Header = ({ onMenuClick, currentDomain }) => {
  return (
    <header className="bg-card/50 backdrop-blur-md border-b border-border/50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText={false} />
              <div>
                <h2 className="text-lg font-semibold hazy-text">Hazy Analytics</h2>
                <p className="text-sm text-muted-foreground">
                  Attribution Intelligence Beyond Cosmic Scale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Domain selector */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <select 
              value={currentDomain}
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-sm appearance-none cursor-pointer hover:border-primary/50 transition-colors"
            >
              <option value="example.com">example.com</option>
              <option value="mysite.com">mysite.com</option>
              <option value="test.com">test.com</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          {/* User menu */}
          <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 