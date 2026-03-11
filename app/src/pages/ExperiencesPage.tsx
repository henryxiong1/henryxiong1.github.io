import { useEffect, useRef } from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';

const experiences = [
  {
    image: '/temple-meditation.jpg',
    title: 'Royal Heritage & Daoist Culture',
    subtitle: 'Yuanyou Palace Experience',
    duration: '2-3 Days',
    groupSize: '2-8 people',
    description: 'Explore the magnificent Yuanyou Palace, a Ming dynasty royal Daoist complex commissioned by Emperor Jiajing in 1540. Experience traditional ceremonies, learn about Daoist philosophy, and discover the connection between imperial heritage and spiritual practice.',
    highlights: [
      'Private guided tour of Yuanyou Palace',
      'Daoist meditation session',
      'Traditional tea ceremony',
      'Meet with local Daoist practitioners',
    ],
  },
  {
    image: '/journey-tea.jpg',
    title: 'The Art of Tea',
    subtitle: 'Hangzhou & Fujian',
    duration: '5-7 Days',
    groupSize: '2-6 people',
    description: 'Journey through China\'s most renowned tea regions. Walk through centuries-old tea terraces, participate in traditional tea ceremonies with local masters, and understand the philosophy behind every pour.',
    highlights: [
      'Longjing tea plantation visit',
      'Tea ceremony with a master',
      'Tea tasting workshop',
      'Bamboo forest meditation',
    ],
  },
  {
    image: '/journey-greatwall.jpg',
    title: 'The Legacy of Ink',
    subtitle: 'Suzhou & Anhui',
    duration: '4-6 Days',
    groupSize: '2-8 people',
    description: 'Discover the enduring art of Chinese calligraphy and traditional arts. Learn from master calligraphers, visit ancient studios, and create your own piece of art to take home.',
    highlights: [
      'Calligraphy lesson with a master',
      'Visit to ancient studios',
      'Ink stone crafting demonstration',
      'Create your own artwork',
    ],
  },
  {
    image: '/journey-guilin.jpg',
    title: 'Sacred Landscapes',
    subtitle: 'Guilin & Yangshuo',
    duration: '4-5 Days',
    groupSize: '2-10 people',
    description: 'Cruise the legendary Li River through dramatic karst peaks, witness the ancient art of cormorant fishing, and find tranquility in landscapes that have inspired poets and painters for millennia.',
    highlights: [
      'Li River cruise at sunrise',
      'Cormorant fishing demonstration',
      'Rice terrace hiking',
      'Village homestay experience',
    ],
  },
  {
    image: '/hero-garden.jpg',
    title: 'Classical Gardens & Water Towns',
    subtitle: 'Suzhou & Zhouzhuang',
    duration: '3-4 Days',
    groupSize: '2-6 people',
    description: 'Wander through UNESCO-listed classical gardens and ancient water towns. Experience the refined aesthetics of traditional Chinese landscape design and the slow pace of life along the canals.',
    highlights: [
      'Private garden tours',
      'Canal boat ride',
      'Traditional craft workshops',
      'Local cuisine experience',
    ],
  },
  {
    image: '/temple-meditation.jpg',
    title: 'Culinary Journey',
    subtitle: 'Chengdu & Chongqing',
    duration: '5-7 Days',
    groupSize: '2-8 people',
    description: 'Explore the bold flavors of Sichuan cuisine. From market tours to cooking classes, from street food to Michelin dining, experience the full spectrum of one of China\'s most celebrated culinary traditions.',
    highlights: [
      'Sichuan cooking class',
      'Spice market tour',
      'Hot pot experience',
      'Tea house culture',
    ],
  },
];

export default function ExperiencesPage() {
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
            Experiences
          </span>
          <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-4xl md:text-5xl font-light text-black mb-6">
            Journeys We Craft
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-lg text-gray-500 leading-relaxed">
            Each experience can be a standalone journey or woven into a larger itinerary. All can be customized to your preferences.
          </p>
        </div>
      </section>

      {/* Experiences List */}
      <section ref={sectionRef} className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out group"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className={`aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{exp.subtitle}</span>
                  <h2 className="text-2xl md:text-3xl font-light text-black mt-2 mb-4">{exp.title}</h2>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {exp.groupSize}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-gray-300 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300 group/btn">
                    Inquire About This Experience
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-stone-50">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-2xl md:text-3xl font-light text-black mb-4">
            Have Something Else in Mind?
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-gray-500 mb-8">
            We specialize in bespoke journeys. Share your vision with us and we will craft something uniquely yours.
          </p>
          <a
            href="/contact"
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 inline-flex items-center gap-2.5 bg-black text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            Start Planning
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
