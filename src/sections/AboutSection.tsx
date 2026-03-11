import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
              Who We Are
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-3xl md:text-4xl font-light text-black mb-6">
              A Boutique Travel Atelier
            </h2>
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Travel Yay is the refined expression of Macau Youth Travel Group and Zhuhai Youth International Travel Service—bringing decades of expertise in curating exceptional journeys for travelers worldwide.
              </p>
              <p>
                We specialize in bespoke travel experiences that go beyond the ordinary. From royal heritage sites to hidden local gems, we craft journeys that connect you deeply with the culture, history, and soul of each destination.
              </p>
              <p>
                Our approach is personal, meticulous, and thoughtful. Every itinerary is designed around you—your interests, your pace, your vision of the perfect journey.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-300 mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/temple-meditation.jpg"
                alt="Travel experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
