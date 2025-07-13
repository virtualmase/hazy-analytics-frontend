import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqs = [
    {
      question: "How does Hazy Analytics ensure user privacy?",
      answer: "Hazy Analytics is built with privacy-first principles. We don't use cookies, don't collect personal data, and don't track individual users. All data is aggregated and anonymized, making us GDPR and CCPA compliant by design."
    },
    {
      question: "What makes Hazy different from Google Analytics?",
      answer: "Unlike Google Analytics, Hazy doesn't require cookie consent banners, doesn't collect personal data, and provides real-time insights without compromising user privacy. Our lightweight tracking script (36KB) also won't slow down your website."
    },
    {
      question: "Can I self-host Hazy Analytics?",
      answer: "Yes! Hazy Analytics is designed to be self-hosted, giving you complete control over your data. You can deploy it on your own servers, cloud infrastructure, or use our managed hosting options."
    },
    {
      question: "What kind of insights can I get from Hazy?",
      answer: "Hazy provides comprehensive analytics including page views, visitor behavior, heatmaps, conversion funnels, A/B testing results, and real-time dashboards. All insights are designed to help you make data-driven decisions while respecting user privacy."
    },
    {
      question: "How easy is it to integrate Hazy into my website?",
      answer: "Integration is simple - just add one line of JavaScript to your website. Our tracking script is lightweight and won't impact your site's performance. We also provide SDKs for popular frameworks like React, Vue, and Angular."
    },
    {
      question: "Do you offer support and documentation?",
      answer: "Yes! We provide comprehensive documentation, video tutorials, and support through email and chat. Enterprise customers get dedicated account management and priority support with SLA guarantees."
    },
    {
      question: "Can Hazy handle high-traffic websites?",
      answer: "Absolutely. Hazy is built to scale from small blogs to enterprise applications with millions of page views. Our architecture ensures fast performance and reliable data collection regardless of traffic volume."
    },
    {
      question: "What data retention policies does Hazy have?",
      answer: "You have complete control over data retention. You can set custom retention periods, automatically delete old data, or export data for long-term storage. We don't keep data longer than you specify."
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-xl text-muted-foreground">
            Advice and answers from our team
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/10 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openItems.has(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent/10 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 