import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

const cases = [
  {
    image: '/journey-greatwall.jpg',
    title: 'Imperial China Discovery',
    location: 'Beijing • Xi\'an • Shanghai',
    duration: '10 Days',
    groupSize: 'Family of 4',
    highlight: 'Private after-hours access to the Forbidden City',
  },
  {
    image: '/journey-tea.jpg',
    title: 'Tea & Tradition Retreat',
    location: 'Hangzhou • Suzhou',
    duration: '7 Days',
    groupSize: 'Couple',
    highlight: 'Tea ceremony with a master in Longjing village',
  },
  {
    image: '/journey-guilin.jpg',
    title: 'Li River Photography Journey',
    location: 'Guilin • Yangshuo',
    duration: '5 Days',
    groupSize: 'Solo Traveler',
    highlight: 'Sunrise shoot with cormorant fishermen',
  },
];

export default function PastCasesSection() {
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
              Travel Moments
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-3xl md:text-4xl font-light text-black">
              Previous Journeys
            </h2>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 mt-4 md:mt-0">
            <Link
              to="/past-cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
            >
              View All Cases
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="space-y-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out group"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <Link to="/past-cases">
                <div className="bg-white overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image */}
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-medium text-black mb-3 group-hover:text-gray-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {item.groupSize}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Highlight:</span> {item.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
