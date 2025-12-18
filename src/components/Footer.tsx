import { LogoInline } from './Logo';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const footerLinks = [
  { label: 'What is AutoConnect', href: '#what-is' },
  { label: 'Features', href: '#features' },
  { label: 'Lifecycle', href: '#lifecycle' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <LogoInline variant="light" />
            </div>
            <p className="font-extralight text-gray-400 text-sm mb-6 max-w-sm">
              The CX Platform Connecting Every Moment in the Customer Lifecycle.
            </p>
            <p className="text-brand-orange text-sm font-extralight mb-6">
              SEAMLESS. SCALABLE. INTEGRATED.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-block px-6 py-3 bg-brand-orange text-white text-sm font-normal rounded-lg hover:bg-orange-600 transition-colors"
            >
              Request Demo
            </button>
          </div>

          <div>
            <h4 className="font-normal mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-normal mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                >
                  Request a Demo
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@autoconnect.digital"
                  className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                >
                  contact@autoconnect.digital
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-normal mb-4">Cairo Office</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="font-extralight text-gray-400 text-sm">
                    95D Al-Marghany St., Heliopolis, Cairo, Egypt
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <a
                    href="tel:+201001255800"
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    +20 100 1255800
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-normal mb-4">Dubai Office</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="font-extralight text-gray-400 text-sm">
                    IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <a
                    href="tel:+971506531235"
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    +971 50 653 1235
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-extralight text-gray-400 text-sm">
              {currentYear} AutoConnect Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img src="parallel.png" alt="parallel" width={100} height={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
