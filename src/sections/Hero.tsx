import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-garden.jpg"
          alt="Suzhou classical garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[850px] mx-auto px-6 text-center text-white">
        <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out text-xs uppercase tracking-[0.3em] text-white/70 mb-6">
          Boutique Travel Atelier
        </p>
        <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
          Curated Journeys Through China
        </h1>
        <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 text-base md:text-lg text-white/85 max-w-[600px] mx-auto mb-10 leading-relaxed">
          Curated journeys for discerning travelers seeking culture, comfort, and meaningful connections across China and beyond.
        </p>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-black px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300 group"
          >
            Start Planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
          <Link
            to="/experiences"
            className="inline-flex items-center justify-center gap-2.5 border border-white/50 text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Explore Experiences
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
