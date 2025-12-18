import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const partners = [
  {
    name: 'Hyundai',
    logo: 'https://www.carlogos.org/car-logos/hyundai-logo-2011-download.png',
  },
  {
    name: 'Ford',
    logo: 'https://www.carlogos.org/car-logos/ford-logo-2017-download.png',
  },
  {
    name: 'Lexus',
    logo: 'https://www.carlogos.org/car-logos/lexus-logo-1988-download.png',
  },
  {
    name: 'Lincoln',
    logo: 'https://www.carlogos.org/car-logos/lincoln-logo-2019-download.png',
  },
  {
    name: 'Opel',
    logo: 'https://www.carlogos.org/car-logos/opel-logo-2009-download.png',
  },
  {
    name: 'Peugeot',
    logo: 'https://www.carlogos.org/car-logos/peugeot-logo-2010-download.png',
  },
  {
    name: 'MG',
    logo: 'https://www.carlogos.org/car-logos/mg-logo-download.png',
  },
  {
    name: 'Chevrolet',
    logo: 'https://www.carlogos.org/car-logos/chevrolet-logo-2013-download.png',
  },
];

export function Partners() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-brand-black mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Trusted by our <span className="text-brand-orange">Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center p-6 bg-gray-50 rounded-xl transition-all duration-500 hover:shadow-lg hover:bg-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
