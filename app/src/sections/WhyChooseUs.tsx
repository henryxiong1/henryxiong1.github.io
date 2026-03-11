import { useEffect, useRef } from 'react';
import { PenTool, Landmark, Hotel, Headphones, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'Bespoke Itineraries',
    description: 'Every journey is crafted from scratch around your interests, timeline, and travel style. No templates, no shortcuts.',
  },
  {
    icon: Landmark,
    title: 'Cultural Access',
    description: 'Exclusive experiences and meaningful connections with local heritage, from royal sites to hidden gems.',
  },
  {
    icon: Hotel,
    title: 'Premium Stays',
    description: 'Handpicked boutique hotels, heritage properties, and luxury resorts with character and authenticity.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge',
    description: 'Round-the-clock support throughout your journey. We are always here when you need us.',
  },
  {
    icon: Shield,
    title: 'Travel Security',
    description: 'Comprehensive insurance, professional guides, and meticulous safety protocols for peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Signature Touches',
    description: 'From Michelin dining reservations to private ceremonies, we add those special moments that elevate your journey.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-stone-50">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
            Why Travel Yay
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-3xl md:text-4xl font-light text-black mb-4">
            Thoughtful Travel, Distinctly Curated
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-base text-gray-500 max-w-[550px] mx-auto leading-relaxed">
            We combine deep local knowledge with genuine care to create journeys that resonate long after you return home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out"
              style={{ transitionDelay: `${(index + 2) * 80}ms` }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-base font-medium text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
