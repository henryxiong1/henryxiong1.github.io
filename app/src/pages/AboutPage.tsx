import { useEffect, useRef } from 'react';
import { PenTool, Landmark, Hotel, Award, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: PenTool,
    title: 'Bespoke Design',
    description: 'Every itinerary crafted from scratch around your unique vision.',
  },
  {
    icon: Landmark,
    title: 'Cultural Depth',
    description: 'Access to heritage sites and authentic local experiences.',
  },
  {
    icon: Hotel,
    title: 'Refined Comfort',
    description: 'Handpicked stays that balance luxury with local character.',
  },
];

const stats = [
  { number: '20+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Travelers' },
  { number: '50+', label: 'Destinations' },
  { number: '24/7', label: 'Concierge Support' },
];

export default function AboutPage() {
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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 md:py-16 px-6 bg-stone-50">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
            About Us
          </span>
          <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-4xl md:text-5xl font-light text-black mb-6">
            A Boutique Travel Atelier
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-lg text-gray-500 leading-relaxed">
            Where decades of expertise meet personalized craftsmanship
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out">
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Travel Yay is the refined expression of Macau Youth Travel Group and Zhuhai Youth International Travel Service—bringing together decades of expertise in curating exceptional journeys for travelers worldwide.
                </p>
                <p>
                  As a subsidiary brand, we combine the resources and stability of an established travel group with the personalized attention of a boutique atelier. This unique positioning allows us to offer both depth of experience and flexibility in crafting your perfect journey.
                </p>
                <p>
                  Our name "旅鸭" (Travel Duck) embodies our philosophy: like ducks that navigate both water and land with ease, we guide travelers seamlessly through diverse cultures and landscapes.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100">
              <h2 className="text-2xl md:text-3xl font-light text-black mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We believe travel should be transformative—not transactional. Every journey we design is an opportunity to connect deeply with a destination's culture, history, and people.
                </p>
                <p>
                  Our team of experienced travel designers works closely with you to understand your interests, preferences, and travel style. We then craft an itinerary that balances must-see highlights with hidden gems, structured activities with free time, and comfort with authentic experiences.
                </p>
                <p>
                  From the moment you inquire to your return home, we are with you every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-100 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-light text-black mb-1">{stat.number}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-300">
            <h2 className="text-2xl md:text-3xl font-light text-black mb-10 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="text-base font-medium text-black mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="py-16 md:py-20 px-6 bg-stone-50">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
            Our Heritage
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-2xl md:text-3xl font-light text-black mb-6">
            Backed by Experience
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Travel Yay operates under the umbrella of Macau Youth Travel Group and Zhuhai Youth International Travel Service—established travel organizations with over two decades of experience in inbound, outbound, and domestic tourism.
            </p>
            <p>
              This heritage gives us access to an extensive network of local partners, preferred rates at premium properties, and the operational expertise to handle complex itineraries with ease.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award className="w-4 h-4" />
              <span>Licensed Tour Operator</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Professional Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Global Network</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
