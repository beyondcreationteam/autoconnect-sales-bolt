import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoInline } from './Logo';

const navLinks = [
  { label: 'What is AutoConnect', href: '#what-is' },
  { label: 'Features', href: '#features' },
  { label: 'Lifecycle', href: '#lifecycle' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <LogoInline variant="light" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Request Demo
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-dark border-t border-gray-800">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block px-4 py-3 text-left text-gray-300 hover:text-brand-orange hover:bg-brand-gray/50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="block w-full text-center px-5 py-2.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
