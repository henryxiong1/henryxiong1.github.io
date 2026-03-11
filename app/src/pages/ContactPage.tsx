import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Phone, Check, Clock, MapPin } from 'lucide-react';

const travelInterests = [
  'Cultural & Heritage',
  'Nature & Landscapes',
  'Culinary & Food',
  'Wellness & Spirituality',
  'Photography',
  'Family Travel',
  'Business & MICE',
  'Not sure yet',
];

export default function ContactPage() {
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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 md:py-16 px-6 bg-stone-50">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out text-xs uppercase tracking-[0.25em] text-gray-400 mb-4 block">
            Get in Touch
          </span>
          <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100 text-4xl md:text-5xl font-light text-black mb-6">
            Begin Your Journey
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-150 text-lg text-gray-500 leading-relaxed">
            Tell us your travel dates, interests, and preferred pace. We will respond within 24 hours with a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section ref={sectionRef} className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left - Contact Methods */}
            <div className="lg:col-span-1">
              <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-black mb-4">Contact Us</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Reach out through any channel you prefer. We are here to answer your questions and start planning your perfect journey.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">Email</p>
                      <p className="text-sm text-gray-500">hello@travelyay.com</p>
                      <p className="text-xs text-gray-400 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">WeChat</p>
                      <p className="text-sm text-gray-500">TravelYayConcierge</p>
                      <p className="text-xs text-gray-400 mt-1">For quick questions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">WhatsApp</p>
                      <p className="text-sm text-gray-500">+86 138 0000 0000</p>
                      <p className="text-xs text-gray-400 mt-1">Available 9am-6pm CST</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-black mb-1">Our Offices</p>
                      <p>Macau • Zhuhai • Shanghai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-2">
              <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 ease-out delay-100">
                {isSubmitted ? (
                  <div className="bg-stone-50 p-12 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-light text-black mb-3">Thank You</h3>
                    <p className="text-gray-500 mb-2">
                      We have received your inquiry and will be in touch within 24 hours.
                    </p>
                    <p className="text-sm text-gray-400">
                      In the meantime, feel free to reach out via WeChat or WhatsApp for quick questions.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-stone-50 p-8 md:p-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Country */}
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-sm font-medium text-black">
                          Country of Residence
                        </Label>
                        <Input
                          id="country"
                          placeholder="e.g., United States"
                          className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-11"
                        />
                      </div>

                      {/* Travel Dates */}
                      <div className="space-y-2">
                        <Label htmlFor="dates" className="text-sm font-medium text-black">
                          Preferred Travel Dates
                        </Label>
                        <Input
                          id="dates"
                          placeholder="e.g., March 2025"
                          className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-11"
                        />
                      </div>
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
                        <option value="">Select your primary interest</option>
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
                        placeholder="Tell us about your dream journey—destinations, group size, special occasions, must-sees, and any specific requests..."
                        rows={5}
                        required
                        className="bg-white border-0 text-sm placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-gray-300"
                      />
                    </div>

                    {/* Optional Contact Methods */}
                    <div className="pt-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Optional Contact Methods</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="whatsapp" className="text-sm text-gray-500">
                            WhatsApp Number
                          </Label>
                          <Input
                            id="whatsapp"
                            placeholder="+1 234 567 8900"
                            className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="wechat" className="text-sm text-gray-500">
                            WeChat ID
                          </Label>
                          <Input
                            id="wechat"
                            placeholder="Your WeChat ID"
                            className="bg-white border-0 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 h-10"
                          />
                        </div>
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

                    <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" />
                      We typically respond within 24 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
