import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Phone, Check, ArrowRight } from 'lucide-react';

const travelInterests = [
  'Cultural & Heritage',
  'Nature & Landscapes',
  'Culinary & Food',
  'Wellness & Spirituality',
  'Photography',
  'Family Travel',
  'Not sure yet',
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
              Get in Touch
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-3xl md:text-4xl font-light text-black mb-4">
              Begin Your Journey
            </h2>
            <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-base text-gray-500 leading-relaxed mb-8">
              Tell us your travel dates, interests, and preferred pace. We will respond within 24 hours with a personalized consultation.
            </p>

            {/* Contact Methods */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Email</p>
                  <p className="text-sm text-gray-500">hello@travelyay.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">WeChat</p>
                  <p className="text-sm text-gray-500">TravelYayConcierge</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">WhatsApp</p>
                  <p className="text-sm text-gray-500">+86 138 0000 0000</p>
                </div>
              </div>
            </div>

            {/* CTA to full contact page */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-300 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
              >
                View All Contact Options
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-200">
            {isSubmitted ? (
              <div className="bg-stone-50 p-10 text-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-black mb-2">Thank You</h3>
                <p className="text-sm text-gray-500">
                  We have received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-stone-50 p-8 space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-black">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-11"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-black">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-11"
                  />
                </div>

                {/* Travel Interest */}
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-sm font-medium text-black">
                    Travel Interest
                  </Label>
                  <select
                    id="interest"
                    className="w-full bg-white border-0 text-sm text-gray-600 rounded-md h-11 px-3 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  >
                    <option value="">Select your interest</option>
                    {travelInterests.map((interest) => (
                      <option key={interest} value={interest.toLowerCase().replace(/\s+/g, '-')}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-black">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dream journey—destinations, dates, group size, and any special requests..."
                    rows={4}
                    required
                    className="bg-white border-0 text-sm placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-gray-300"
                  />
                </div>

                {/* Optional Contact Methods */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm text-gray-500">
                      WhatsApp (Optional)
                    </Label>
                    <Input
                      id="whatsapp"
                      placeholder="+1 234 567 8900"
                      className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wechat" className="text-sm text-gray-500">
                      WeChat ID (Optional)
                    </Label>
                    <Input
                      id="wechat"
                      placeholder="Your WeChat ID"
                      className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-10"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 h-12 text-sm font-medium tracking-wide transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
