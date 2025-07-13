import React from 'react';

const PartnershipBadge = ({ type = 'gsoc', className = '' }) => {
  const badges = {
    gsoc: {
      logo: '/gsoc-logo.svg',
      alt: 'Google Summer of Code',
      title: 'Google Summer of Code Participant',
      description: 'Contributing to open source through Google Summer of Code'
    },
    base: {
      logo: '/base.4d619abc.svg',
      alt: 'Base',
      title: 'Built on Base',
      description: 'Powered by Base blockchain infrastructure'
    },
    clarity: {
      logo: '/Clarity-Logo.svg',
      alt: 'Clarity',
      title: 'Clarity Integration',
      description: 'Seamless Clarity analytics integration'
    },
    ens: {
      logo: '/ens.1da418d8.svg',
      alt: 'ENS',
      title: 'ENS Verified',
      description: 'ENS domain verification enabled'
    },
    cloudflare: {
      logo: '/cloud.svg',
      alt: 'Cloudflare',
      title: 'Cloudflare Partner',
      description: 'Optimized with Cloudflare infrastructure'
    },
    framework: {
      logo: '/framework.svg',
      alt: 'Framework',
      title: 'Framework Compatible',
      description: 'Built for modern web frameworks'
    },
    core: {
      logo: '/core.svg',
      alt: 'Core',
      title: 'Core Technology',
      description: 'Powered by core web technologies'
    }
  };

  const badge = badges[type];

  if (!badge) {
    return null;
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 bg-card border border-border/50 rounded-lg hover:bg-accent/10 transition-colors ${className}`}>
      <img 
        src={badge.logo} 
        alt={badge.alt}
        className="h-6 w-auto"
        title={badge.title}
      />
      <div className="text-xs text-muted-foreground">
        {badge.description}
      </div>
    </div>
  );
};

export default PartnershipBadge; 