import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  ShoppingCart,
  CreditCard,
  Wrench,
  Workflow,
  Package,
  UserCircle,
  Plug,
  ArrowRight,
  Check,
} from 'lucide-react';

const allFeatures = [
  {
    id: 'shopping-engine',
    icon: ShoppingCart,
    title: 'Product Shopping Engine',
    subtitle: 'Real-time discovery, configuration, and booking powered by live DMS sync.',
    description: 'Give your customers a premium digital showroom experience with real-time inventory, detailed specifications, and seamless booking capabilities.',
    capabilities: [
      'Vehicle data, configurator, and specs comparison',
      'Real-time inventory sync with your DMS',
      'Certified Pre-Owned showcase and sales',
      'Test drive scheduling and management',
      'Lead capture and qualification',
      'Multi-location inventory search',
    ],
  },
  {
    id: 'financing',
    icon: CreditCard,
    title: 'Fast & Flexible Financing',
    subtitle: 'Give customers a seamless buying experience from application to approval.',
    description: 'Streamline the financing process with digital applications, instant pre-approvals, and seamless integration with your financing partners.',
    capabilities: [
      'Instant offers powered by configurable engine',
      'Digital credit applications and document uploads',
      'Real-time status tracking for customers',
      'Direct connection with financing teams',
      'Multiple financing partner integrations',
      'Automated approval workflows',
    ],
  },
  {
    id: 'aftersales',
    icon: Wrench,
    title: 'After-Sales Experience',
    subtitle: 'Deliver convenience and service excellence at every touchpoint.',
    description: 'Transform your service department with digital booking, real-time updates, and convenient payment options that keep customers coming back.',
    capabilities: [
      'Effortless service booking with real-time availability',
      'Pickup & delivery coordination',
      'Live service tracking and updates',
      'One-click invoice approvals',
      'Complete vehicle history access',
      'Digital payment processing',
    ],
  },
  {
    id: 'workflow',
    icon: Workflow,
    title: 'Workflow Automation',
    subtitle: 'Automate processes so your teams can focus on what matters most.',
    description: 'Eliminate manual tasks and ensure nothing falls through the cracks with intelligent workflow automation across departments.',
    capabilities: [
      'Digital approvals, notifications, and SLAs',
      'Cross-department synchronization',
      'Customizable triggers and escalations',
      'Admin panel for full control',
      'Performance monitoring and reporting',
      'Integration with existing processes',
    ],
  },
  {
    id: 'order-management',
    icon: Package,
    title: 'Unified Order Management',
    subtitle: 'Give customers a smooth, flexible path from build to buy.',
    description: 'Manage the entire order lifecycle from initial configuration through delivery with complete visibility for both staff and customers.',
    capabilities: [
      'End-to-end flow from config to order',
      'Multiple buying paths supported',
      'Flexible payment options',
      'Real-time order tracking',
      'Delivery scheduling and updates',
      'Document management',
    ],
  },
  {
    id: 'customer-profile',
    icon: UserCircle,
    title: 'Unified Customer Profile',
    subtitle: 'One login for the entire ownership experience.',
    description: 'Give customers a single dashboard to manage their entire relationship with your brand, from purchases to service to communications.',
    capabilities: [
      'Single dashboard for all activities',
      'Complete order and service history',
      'Document storage and access',
      'Personalized offers and alerts',
      'Real-time notifications',
      'Preference management',
    ],
  },
  {
    id: 'api',
    icon: Plug,
    title: 'API Extensibility',
    subtitle: 'Easily connect AutoConnect with the systems you already use.',
    description: 'Built with an API-first architecture, AutoConnect integrates seamlessly with your existing technology stack and future innovations.',
    capabilities: [
      'Works with DMS, CRM, and payment gateways',
      'Compatible with SAP, Keyloop, Salesforce',
      'Secure, scalable API design',
      'Webhook support for real-time events',
      'Comprehensive documentation',
      'Developer sandbox environment',
    ],
  },
];

export function FeaturesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection isLoaded={isLoaded} />
      <FeaturesGrid />
      <CTASection />
    </>
  );
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-brand-black overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`text-brand-orange font-semibold tracking-[0.2em] text-sm mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            FEATURES
          </p>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            Everything You Need to
            <br />
            <span className="text-brand-orange">Delight Customers</span>
          </h1>
          <p
            className={`text-lg text-gray-400 mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Comprehensive tools to manage every aspect of the customer journey,
            from discovery to delivery to lifetime loyalty.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {allFeatures.map((feature, index) => (
            <FeatureSection key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureSectionProps {
  feature: typeof allFeatures[0];
  index: number;
}

function FeatureSection({ feature, index }: FeatureSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div
      id={feature.id}
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className={isEven ? '' : 'lg:order-2'}>
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center">
            <feature.icon className="w-7 h-7 text-brand-orange" />
          </div>
          <span className="text-5xl font-bold text-brand-orange/20">
            0{index + 1}
          </span>
        </div>
        <h2
          className={`text-3xl sm:text-4xl font-bold text-brand-black mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {feature.title}
        </h2>
        <p
          className={`text-xl text-gray-600 mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {feature.subtitle}
        </p>
        <p
          className={`text-gray-600 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {feature.description}
        </p>
      </div>

      <div className={isEven ? '' : 'lg:order-1'}>
        <div
          className={`bg-brand-light rounded-2xl p-8 transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`
          }`}
        >
          <h3 className="font-semibold text-brand-black mb-6">Key Capabilities</h3>
          <ul className="space-y-4">
            {feature.capabilities.map((capability, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${i * 80 + 300}ms` }}
              >
                <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-brand-orange" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          See These Features in Action
        </h2>
        <p
          className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Request a personalized demo to explore how AutoConnect can transform your business.
        </p>
        <Link
          to="/request-demo"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Request Demo <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
