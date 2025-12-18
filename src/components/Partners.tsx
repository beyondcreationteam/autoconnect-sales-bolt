import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const partners = [
  {
    name: 'Hyundai',
    logo: '/logos/hyundai.webp',
  },
  {
    name: 'Ford',
    logo: '/logos/ford.png',
  },
  {
    name: 'Lexus',
    logo: '/logos/lexus.png',
  },
  {
    name: 'Lincoln',
    logo: '/logos/lincoln.png',
  },
  {
    name: 'Opel',
    logo: '/logos/opel.png',
  },
  {
    name: 'Peugeot',
    logo: '/logos/peugeot.png',
  },
  {
    name: 'MG',
    logo: '/logos/mg.png',
  },
  {
    name: 'Chevrolet',
    logo: '/logos/chevrolet.png',
  },
];

export function Partners() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl sm:text-3xl font-normal text-brand-black mb-2 transition-all duration-700 ${
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
                className="h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
