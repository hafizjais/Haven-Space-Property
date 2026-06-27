import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Home } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-cream-50 pt-16 pb-8 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                Haven<span className="font-sans font-light text-terracotta-400">Space</span>
              </span>
            </Link>
            <p className="text-sm text-sage-200 leading-relaxed font-light">
              Premium rental rooms in Johor Bahru. We provide comfortable, fully-furnished living spaces designed for UTM students and working professionals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-sage-200">
              <li>
                <Link to="/" className="hover:text-terracotta-400 transition-colors font-light">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-terracotta-400 transition-colors font-light">Browse Rooms</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-terracotta-400 transition-colors font-light">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-400 transition-colors font-light">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Locations */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide">Our Properties</h3>
            <ul className="space-y-2 text-sm text-sage-200 font-light">
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400 flex-shrink-0" />
                <span>Kangkar Pulai (HS 1)</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400 flex-shrink-0" />
                <span>Pulai Utama (HS 2, HS 4)</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400 flex-shrink-0" />
                <span>Pulai Flora (HS 3)</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400 flex-shrink-0" />
                <span>Villa Krystal (HS 5, HS 6)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide">Get In Touch</h3>
            <ul className="space-y-3.5 text-sm text-sage-200 font-light">
              <li className="flex items-start space-x-3">
                <Phone className="w-4.5 h-4.5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+60138968430" className="hover:text-terracotta-400 transition-colors">
                  +60 13-896 8430
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4.5 h-4.5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@havenspace.com" className="hover:text-terracotta-400 transition-colors">
                  info@havenspace.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                <span>Taman Universiti & Kangkar Pulai, Johor Bahru, Johor, Malaysia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-sage-800 flex flex-col md:flex-row justify-between items-center text-xs text-sage-300 font-light">
          <p>© {currentYear} Haven Space Property. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
