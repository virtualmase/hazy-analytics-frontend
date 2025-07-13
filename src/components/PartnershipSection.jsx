import React from 'react';
import PartnershipBadge from './PartnershipBadge';

const PartnershipSection = () => {
  const partnerships = [
    'gsoc',
    'base', 
    'clarity',
    'ens',
    'cloudflare',
    'framework',
    'core'
  ];

  return (
    <section className="py-16 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies and integrated with the platforms you already use
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          {partnerships.map((type) => (
            <PartnershipBadge key={type} type={type} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Seamlessly integrates with your existing tech stack
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 