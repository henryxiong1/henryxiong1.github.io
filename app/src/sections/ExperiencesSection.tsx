import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    image: '/temple-meditation.jpg',
    title: 'Royal Heritage',
    subtitle: 'Historical & Cultural',
    description: 'Explore imperial sites like Yuanyou Palace, where Ming dynasty architecture meets living Daoist traditions.',
  },
  {
    image: '/journey-tea.jpg',
    title: 'The Art of Tea',
    subtitle: 'Cultural Immersion',
    description: 'Tea ceremonies, plantation visits, and the philosophy behind every pour in Hangzhou and Fujian.',
  },
  {
    image: '/journey-greatwall.jpg',
    title: 'The Legacy of Ink',
    subtitle: 'Arts & Crafts',
    description: 'Calligraphy masters, traditional arts, and the enduring craft of Chinese writing in Suzhou and Anhui.',
  },
  {
    image: '/journey-guilin.jpg',
    title: 'Sacred Landscapes',
    subtitle: 'Nature & Wellness',
    description: 'Meditative mountains, serene rivers, and spiritual sites from Guilin to Emei Shan.',
  },
];

export default function ExperiencesSection() {
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
              Experiences
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-3xl md:text-4xl font-light text-black">
              Journeys We Craft
            </h2>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 mt-4 md:mt-0">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
            >
              View All Experiences
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out group cursor-pointer"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <Link to="/experiences">
                {/* Image */}
                <div className="relative overflow-hidden mb-4 aspect-[16/10]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{exp.subtitle}</span>
                  <h3 className="text-lg font-medium text-black mt-1 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
