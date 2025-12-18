import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  Building2,
  Store,
  ArrowRight,
  Check,
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  Headphones,
} from 'lucide-react';

export function SolutionsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection isLoaded={isLoaded} />
      <OEMSection />
      <DealershipSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-black overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p
            className={`text-brand-orange font-normal tracking-[0.2em] text-sm mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SOLUTIONS
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            Tailored Solutions for
            <br />
            <span className="text-brand-orange">Every Business</span>
          </h1>
          <p
            className={`text-lg text-gray-400 mb-8 max-w-xl transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Whether you're an OEM looking for brand-wide consistency or a dealership
            seeking operational excellence, AutoConnect adapts to your needs.
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#oems"
              className="px-8 py-4 bg-brand-orange text-white font-normal rounded-lg hover:bg-orange-600 transition-colors"
            >
              For OEMs
            </a>
            <a
              href="#dealerships"
              className="px-8 py-4 border border-gray-600 text-white font-normal rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              For Dealerships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OEMSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const benefits = [
    {
      icon: Globe,
      title: 'Brand Consistency',
      description: 'Ensure every customer touchpoint reflects your brand standards across all dealerships.',
    },
    {
      icon: BarChart3,
      title: 'Unified Analytics',
      description: 'Gain real-time visibility into customer journeys and dealer performance network-wide.',
    },
    {
      icon: Shield,
      title: 'Compliance Control',
      description: 'Maintain regulatory compliance and data governance across your entire network.',
    },
  ];

  const features = [
    'Network-wide CX standardization',
    'Centralized customer data platform',
    'Multi-market deployment support',
    'White-label customization',
    'Performance benchmarking tools',
    'API access for custom integrations',
  ];

  return (
    <section id="oems" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Building2 className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-orange font-normal">For OEMs</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-normal text-brand-black mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Transform Your Dealer Network into a
              <span className="text-brand-orange"> Unified Experience</span>
            </h2>
            <p
              className={`text-gray-600 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AutoConnect gives OEMs the tools to orchestrate customer experiences
              across their entire dealer network while respecting local operations.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 text-gray-700 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 80 + 300}ms` }}
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-brand-light p-6 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-normal text-brand-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DealershipSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const benefits = [
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Automate manual processes and reduce administrative overhead.',
    },
    {
      icon: Users,
      title: 'Customer Retention',
      description: 'Build lasting relationships with personalized experiences.',
    },
    {
      icon: Headphones,
      title: 'Service Excellence',
      description: 'Deliver seamless aftersales experiences that drive loyalty.',
    },
  ];

  const features = [
    'Digital showroom experience',
    'Automated lead management',
    'Service booking & tracking',
    'Customer self-service portal',
    'Real-time DMS integration',
    'Performance dashboards',
  ];

  return (
    <section id="dealerships" className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-brand-dark p-6 rounded-xl border border-gray-800 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-normal text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Store className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-orange font-normal">For Dealerships</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-normal text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Empower Your Team to Deliver
              <span className="text-brand-orange"> Exceptional Experiences</span>
            </h2>
            <p
              className={`text-gray-400 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AutoConnect streamlines operations and enhances customer engagement,
              helping dealerships compete in the digital age.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 text-gray-300 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 80 + 300}ms` }}
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const useCases = [
    {
      title: 'Digital Retailing',
      description: 'Enable customers to browse, configure, and purchase vehicles online with seamless dealer handoff.',
      stats: '40% faster sales cycle',
    },
    {
      title: 'Service Excellence',
      description: 'Transform aftersales with online booking, real-time updates, and digital payment options.',
      stats: '35% increase in retention',
    },
    {
      title: 'Lead Management',
      description: 'Capture, nurture, and convert leads with automated workflows and personalized follow-ups.',
      stats: '25% higher conversion',
    },
    {
      title: 'Customer Loyalty',
      description: 'Build lasting relationships with personalized offers, reminders, and rewards programs.',
      stats: '50% more repeat business',
    },
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Real-World <span className="text-brand-orange">Use Cases</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            See how AutoConnect delivers measurable results across the customer lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-normal text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <div className="inline-block px-4 py-2 bg-brand-orange/10 rounded-full">
                <span className="text-brand-orange font-normal text-sm">{useCase.stats}</span>
              </div>
            </div>
          ))}
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
          Find the Right Solution for Your Business
        </h2>
        <p
          className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Let's discuss how AutoConnect can address your specific challenges.
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
