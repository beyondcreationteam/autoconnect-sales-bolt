import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  Layers,
  Zap,
  Shield,
  RefreshCw,
  Database,
  Cloud,
  ArrowRight,
  Check,
  Plug,
} from 'lucide-react';

export function PlatformPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection isLoaded={isLoaded} />
      <HowItWorksSection />
      <ArchitectureSection />
      <IntegrationsSection />
      <CTASection />
    </>
  );
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-black overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p
            className={`text-brand-orange font-normal tracking-[0.2em] text-sm mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            THE PLATFORM
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            One Platform.
            <br />
            <span className="text-brand-orange">Complete Control.</span>
          </h1>
          <p
            className={`text-lg text-gray-400 mb-8 max-w-xl transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AutoConnect orchestrates your entire customer experience - from first
            inquiry to lifelong loyalty - without replacing your existing systems.
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/request-demo"
              className="px-8 py-4 bg-brand-orange text-white font-normal rounded-lg hover:bg-orange-600 transition-colors"
            >
              Request Demo
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 border border-gray-600 text-white font-normal rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const steps = [
    {
      icon: Layers,
      title: 'Integration Layer',
      description:
        'Connect seamlessly with your existing DMS, CRM, and enterprise systems without disruption.',
    },
    {
      icon: Zap,
      title: 'Orchestration Engine',
      description:
        'Automate workflows, trigger actions, and ensure every customer touchpoint is connected.',
    },
    {
      icon: Shield,
      title: 'Experience Delivery',
      description:
        'Deliver personalized, brand-compliant experiences across all digital channels.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            How <span className="text-brand-orange">AutoConnect</span> Works
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A modern architecture designed to enhance, not replace, your technology
            investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`text-center p-8 rounded-2xl bg-brand-light transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-brand-orange" />
              </div>
              <div className="text-4xl font-normal text-brand-orange/20 mb-4">
                0{index + 1}
              </div>
              <h3 className="text-xl font-normal text-brand-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    'Real-time data synchronization',
    'Event-driven architecture',
    'Multi-tenant scalability',
    'Enterprise-grade security',
    'API-first design',
    'Cloud-native deployment',
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-normal text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Built for <span className="text-brand-orange">Enterprise Scale</span>
            </h2>
            <p
              className={`text-gray-400 mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AutoConnect is designed from the ground up to handle the demands of
              large-scale automotive operations, with the flexibility to adapt to
              your unique requirements.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 text-gray-300 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-brand-dark rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[Database, Cloud, RefreshCw].map((Icon, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-brand-gray rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-brand-orange" />
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[85, 92, 78].map((width, i) => (
                  <div key={i} className="h-3 bg-brand-gray rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-orange rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${width}%` : '0%' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const integrations = [
    { name: 'SAP', category: 'ERP' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Keyloop', category: 'DMS' },
    { name: 'CDK', category: 'DMS' },
    { name: 'Reynolds', category: 'DMS' },
    { name: 'Microsoft Dynamics', category: 'CRM' },
  ];

  return (
    <section id="integrations" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Seamless <span className="text-brand-orange">Integrations</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Connect with the systems you already use. No rip and replace required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <Plug className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-normal text-brand-black">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-4">
            Don't see your system? We support custom integrations.
          </p>
          <Link
            to="/request-demo"
            className="inline-flex items-center gap-2 text-brand-orange font-normal hover:gap-3 transition-all"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
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
          Ready to Transform Your Customer Experience?
        </h2>
        <p
          className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          See how AutoConnect can unify your sales and aftersales journey.
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
