import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Twitter } from 'lucide-react';
import Logo from '../assets/autoconnect-logo-white.png'; // logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center h-10 shrink-0 max-w-[285px] overflow-hidden">
    <img
      src={Logo}
      alt="AutoConnect Logo"
      className="h-8 md:h-9 lg:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              MENA-born, global-grade CX orchestration platform for automotive excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/platform" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/customers" className="hover:text-white transition-colors">Customers</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Regional Offices */}
          <div>
            <h3 className="font-semibold mb-4">Regional Offices</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium text-white">Dubai, UAE</span>
                </div>
                <p className="text-sm">DMCC Business Centre, AG Tower, Dubai</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium text-white">Cairo, Egypt</span>
                </div>
                <p className="text-sm">95D, El-Marghany St., Heliopolis, Cairo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AutoConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
