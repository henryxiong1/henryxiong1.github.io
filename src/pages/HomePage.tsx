import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import ExperiencesSection from '../sections/ExperiencesSection';
import PastCasesSection from '../sections/PastCasesSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ExperiencesSection />
      <PastCasesSection />
      <ContactSection />
    </main>
  );
}
