import { useEffect, useRef } from 'react';
import { Calendar, Users, MapPin, Quote } from 'lucide-react';

const cases = [
  {
    image: '/journey-greatwall.jpg',
    title: 'Imperial China Discovery',
    location: 'Beijing • Xi\'an • Shanghai',
    duration: '10 Days',
    groupSize: 'Family of 4',
    season: 'Spring 2024',
    highlight: 'Private after-hours access to the Forbidden City',
    description: 'A multi-generational family journey through China\'s imperial heartlands. From the Great Wall at sunrise to the Terracotta Warriors, every moment was crafted to engage travelers of all ages.',
    testimonial: {
      text: 'Travel Yay created an itinerary that kept our teenagers engaged while giving us parents the cultural depth we craved. The private access to the Forbidden City was unforgettable.',
      author: 'Sarah M., United States',
    },
  },
  {
    image: '/journey-tea.jpg',
    title: 'Tea & Tradition Retreat',
    location: 'Hangzhou • Suzhou',
    duration: '7 Days',
    groupSize: 'Couple',
    season: 'Autumn 2024',
    highlight: 'Tea ceremony with a master in Longjing village',
    description: 'An intimate journey for two through China\'s tea heartland. Days spent learning from tea masters, evenings enjoying private garden dinners, and mornings waking to misty mountain views.',
    testimonial: {
      text: 'Every detail was perfect—from the boutique hotels to the private tea ceremony. It felt like we were experiencing the real China, not the tourist version.',
      author: 'James & Emma L., United Kingdom',
    },
  },
  {
    image: '/journey-guilin.jpg',
    title: 'Li River Photography Journey',
    location: 'Guilin • Yangshuo',
    duration: '5 Days',
    groupSize: 'Solo Traveler',
    season: 'Winter 2024',
    highlight: 'Sunrise shoot with cormorant fishermen',
    description: 'A photographer\'s dream journey through the karst landscapes of Guilin. Early mornings capturing the golden light on the Li River, afternoons exploring ancient villages.',
    testimonial: {
      text: 'As a professional photographer, I am picky about locations and timing. Travel Yay understood exactly what I needed and delivered beyond expectations.',
      author: 'Michael T., Australia',
    },
  },
  {
    image: '/hero-garden.jpg',
    title: 'Suzhou Gardens & Silk Road',
    location: 'Suzhou • Hangzhou',
    duration: '6 Days',
    groupSize: 'Group of 6 friends',
    season: 'Spring 2024',
    highlight: 'Private silk workshop visit',
    description: 'A friends\' reunion journey through the cultural heart of Jiangnan. Classical gardens, silk workshops, canal boat rides, and memorable dinners in historic courtyard restaurants.',
    testimonial: {
      text: 'We have traveled together for years, but this trip was special. The balance of activities and downtime was perfect, and the restaurants they chose were incredible.',
      author: 'The Chen Group, Singapore',
    },
  },
  {
    image: '/temple-meditation.jpg',
    title: 'Daoist Wellness Retreat',
    location: 'Zhongxiang • Wudang Mountain',
    duration: '8 Days',
    groupSize: 'Solo Traveler',
    season: 'Summer 2024',
    highlight: 'Meditation session at Yuanyou Palace',
    description: 'A wellness-focused journey combining Daoist philosophy, traditional Chinese medicine consultations, tai chi lessons, and mountain meditation retreats.',
    testimonial: {
      text: 'This journey changed my perspective on wellness. The combination of physical practice, philosophical learning, and natural beauty was transformative.',
      author: 'Anna K., Germany',
    },
  },
  {
    image: '/journey-greatwall.jpg',
    title: 'Culinary Expedition',
    location: 'Chengdu • Chongqing',
    duration: '7 Days',
    groupSize: 'Couple',
    season: 'Autumn 2024',
    highlight: 'Private Sichuan cooking class',
    description: 'A deep dive into Sichuan cuisine for food enthusiasts. Market tours, cooking classes with local chefs, hot pot experiences, and visits to tea houses and spice markets.',
    testimonial: {
      text: 'We came for the food, but left with so much more. The cooking class was hands-down the best travel experience we have ever had.',
      author: 'David & Lisa R., Canada',
    },
  },
];

export default function PastCasesPage() {
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
            Travel Moments
          </span>
          <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-4xl md:text-5xl font-light text-black mb-6">
            Previous Journeys
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-lg text-gray-500 leading-relaxed">
            Stories from travelers we have had the privilege to guide. Each journey is unique, crafted around individual dreams and desires.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section ref={sectionRef} className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out group"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {item.groupSize}
                      </span>
                    </div>

                    <h2 className="text-xl font-medium text-black mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{item.season}</p>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>

                    <div className="bg-stone-50 p-4 mb-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Highlight</p>
                      <p className="text-sm text-gray-700">{item.highlight}</p>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-start gap-2">
                        <Quote className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 italic leading-relaxed mb-2">{item.testimonial.text}</p>
                          <p className="text-xs text-gray-400">— {item.testimonial.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 bg-stone-50">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-2xl md:text-3xl font-light text-black mb-4">
            Create Your Own Story
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-gray-500 mb-8">
            Every journey begins with a conversation. Share your vision with us.
          </p>
          <a
            href="/contact"
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 inline-flex items-center gap-2.5 bg-black text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300"
          >
            Start Planning Your Journey
          </a>
        </div>
      </section>
    </div>
  );
}
