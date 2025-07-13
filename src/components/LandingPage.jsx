import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Users, Shield, Zap, BarChart3, MousePointer, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import Navigation from './Navigation';
import PartnershipBadge from './PartnershipBadge';
import PartnershipSection from './PartnershipSection';

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Shield,
      title: "Privacy-First Analytics",
      description: "No cookies, no personal data collection. GDPR/CCPA compliant from day one.",
      benefits: ["Zero personal data collection", "GDPR/CCPA compliant", "Self-hosted control"]
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Get instant visibility into user behavior with live dashboards and alerts.",
      benefits: ["Live visitor tracking", "Instant notifications", "Real-time dashboards"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Go beyond basic metrics with heatmaps, funnels, and A/B testing capabilities.",
      benefits: ["Click & scroll heatmaps", "Conversion funnels", "A/B split testing"]
    }
  ];

  const testimonials = [
    {
      quote: "Hazy Analytics transformed how we understand our users. The privacy-first approach gives us confidence while delivering powerful insights.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow"
    },
    {
      quote: "We've seen a 40% improvement in conversion rates since implementing Hazy's funnel analysis. The insights are game-changing.",
      author: "Marcus Rodriguez",
      role: "Growth Lead",
      company: "ScaleUp"
    },
    {
      quote: "Finally, an analytics platform that respects user privacy while providing the data we need to make informed decisions.",
      author: "Emily Watson",
      role: "CTO",
      company: "PrivacyFirst"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10,000 pageviews/month",
        "Basic analytics dashboard",
        "Heatmap tracking",
        "Email support",
        "Self-hosted deployment"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 pageviews/month",
        "Advanced analytics & funnels",
        "A/B testing capabilities",
        "Priority support",
        "Custom integrations",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited pageviews",
        "Custom data retention",
        "Dedicated support",
        "Advanced security",
        "Custom integrations",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 1,000+ companies
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 hazy-text">
              Attribution Intelligence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Beyond Cosmic Scale
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Privacy-first analytics platform that gives you powerful insights without compromising user trust. 
              Track, analyze, and optimize with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1,254 happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <PartnershipBadge type="gsoc" />
              <PartnershipBadge type="base" />
              <PartnershipBadge type="clarity" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to understand your users</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From basic page views to advanced conversion funnels, Hazy provides the insights you need 
              to make data-driven decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of companies already growing with Hazy Analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, fair pricing for your team</h2>
            <p className="text-xl text-muted-foreground">
              Choose the better option for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={cn(
                "bg-card p-8 rounded-xl border",
                tier.popular 
                  ? "border-primary ring-2 ring-primary/20 relative" 
                  : "border-border/50"
              )}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={cn(
                  "w-full py-3 rounded-lg font-semibold transition-colors",
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-accent/10 text-foreground hover:bg-accent/20"
                )}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies already growing with Hazy Analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Analytics Curve</h2>
          <p className="text-muted-foreground mb-8">
            Join our newsletter for exclusive insights and updates on the latest analytics trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 