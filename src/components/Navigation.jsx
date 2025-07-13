import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'Product',
      href: '#',
      dropdown: true,
      items: [
        { name: 'Features', href: '/features', description: 'Everything you need to understand your users' },
        { name: 'Pricing', href: '/pricing', description: 'Simple, fair pricing for your team' },
        { name: 'Integrations', href: '/integrations', description: 'Connect with your favorite tools' },
        { name: 'API', href: '/api', description: 'Build custom analytics solutions' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' }
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProductOpen(!isProductOpen)}
                      className={cn(
                        "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        isProductOpen && "rotate-180"
                      )} />
                    </button>

                    {isProductOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border/50 rounded-xl shadow-lg p-4">
                        <div className="grid gap-3">
                          {item.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-accent/10 transition-colors"
                              onClick={() => setIsProductOpen(false)}
                            >
                              <div className="font-medium text-foreground">{dropdownItem.name}</div>
                              <div className="text-sm text-muted-foreground">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductOpen(!isProductOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground"
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          isProductOpen && "rotate-180"
                        )} />
                      </button>
                      {isProductOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Link
                  to="/dashboard"
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/dashboard"
                  className="block py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 