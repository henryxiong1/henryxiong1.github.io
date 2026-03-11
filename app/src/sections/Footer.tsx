import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Travel Yay" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-medium text-lg">Travel Yay</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[320px] mb-6">
              A boutique travel atelier curating exceptional journeys for discerning travelers across China and beyond.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@travelyay.com" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/past-cases" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Past Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Get in Touch
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-400">hello@travelyay.com</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">WeChat: TravelYay</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Travel Yay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
