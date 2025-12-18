import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  Target,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Users,
  Award,
  Zap,
} from 'lucide-react';

export function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection isLoaded={isLoaded} />
      <MissionVisionSection />
      <ValuesSection />
      <StatsSection />
      <OfficesSection />
      <CTASection />
    </>
  );
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-brand-black overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p
            className={`text-brand-orange font-normal tracking-[0.2em] text-sm mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ABOUT US
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            Transforming Automotive
            <br />
            <span className="text-brand-orange">Customer Experiences</span>
          </h1>
          <p
            className={`text-lg text-gray-400 mb-8 max-w-xl transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AutoConnect Digital is on a mission to revolutionize how automotive
            businesses connect with their customers throughout the entire ownership
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`bg-brand-light p-10 rounded-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-2xl font-normal text-brand-black mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower automotive businesses with technology that creates seamless,
              connected customer experiences - from the first click to lifelong loyalty.
              We believe every interaction should be effortless, personalized, and
              memorable.
            </p>
          </div>

          <div
            className={`bg-brand-black p-10 rounded-2xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-2xl font-normal text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the global standard for automotive customer experience platforms,
              enabling every dealership and OEM to deliver world-class digital experiences
              that drive growth, loyalty, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const values = [
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Everything we build starts with the customer experience in mind.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push boundaries to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We succeed when our clients succeed - true partnership drives us.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our <span className="text-brand-orange">Values</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-white p-8 rounded-2xl shadow-sm text-center transition-all duration-700 hover:shadow-lg group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange transition-colors">
                <value.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-normal text-brand-black mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const stats = [
    { value: '50+', label: 'Dealerships' },
    { value: '10+', label: 'OEM Partners' },
    { value: '500K+', label: 'Customers Served' },
    { value: '5', label: 'Countries' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-normal text-brand-orange mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const offices = [
    {
      city: 'Cairo',
      country: 'Egypt',
      address: '95D Al-Marghany St., Heliopolis, Cairo, Egypt',
      phone: '+20 100 1255800',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE',
      phone: '+971 50 653 1235',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our <span className="text-brand-orange">Offices</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Serving the automotive industry across the Middle East and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className={`bg-brand-light p-8 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-normal text-brand-black mb-6">
                {office.city}, {office.country}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{office.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-brand-black rounded-2xl p-8 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-brand-orange" />
            <a
              href="mailto:contact@autoconnect.digital"
              className="text-white hover:text-brand-orange transition-colors"
            >
              contact@autoconnect.digital
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-brand-orange" />
            <a
              href="https://autoconnect.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-orange transition-colors"
            >
              autoconnect.digital
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-brand-orange" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Partner with Us?
        </h2>
        <p
          className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Let's discuss how AutoConnect can transform your customer experience.
        </p>
        <Link
          to="/request-demo"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-normal rounded-lg hover:bg-gray-100 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Request Demo <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
