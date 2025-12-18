import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  {
    number: '01',
    title: 'PRODUCT SHOPPING ENGINE',
    subtitle: 'Real-time discovery, configuration, and booking powered by live DMS sync.',
    bullets: [
      'Vehicle Data: Features vehicle data, configurator, and specs comparison.',
      'Real-Time Inventory Sync: Automatic updates from your DMS.',
      'Certified Pre-Owned: Showcase and sell used vehicles online.',
    ],
  },
  {
    number: '02',
    title: 'FAST & FLEXIBLE FINANCING JOURNEY',
    subtitle: 'Give customers a seamless buying experience from application to approval.',
    bullets: [
      'Instant offers powered by a configurable financing engine.',
      'Fully digital: Credit applications, document uploads, status tracking.',
      'Connect directly with financing teams for real-time reviews and approvals.',
    ],
  },
  {
    number: '03',
    title: 'AFTER-SALES EXPERIENCE',
    subtitle: 'Deliver convenience and service excellence.',
    bullets: [
      'Effortless Service Booking with real-time availability.',
      'Convenience: Pickup & delivery, service tracking, one-click invoice approvals.',
      'All-in-One Service Hub: Access vehicle history and make digital payments.',
    ],
  },
  {
    number: '04',
    title: 'WORKFLOW AUTOMATION',
    subtitle: 'Automate processes so your teams can focus on what matters most.',
    bullets: [
      'Digital Workflows for approvals, notifications, and SLAs in one system.',
      'Cross-Department Sync: Keep sales, delivery, and support aligned.',
      'Full Control: Manage workflows, triggers, and escalations via admin panel.',
    ],
  },
  {
    number: '05',
    title: 'UNIFIED ORDER MANAGEMENT',
    subtitle: 'Give customers a smooth, flexible path from build to buy.',
    bullets: [
      'Seamless End-to-End Flow: From vehicle configuration to confirmed order.',
      'Multiple Buying Paths: Direct purchase, reservation, or quotation.',
      'Flexible Payments: Cards, split payments, bank transfers, and more.',
    ],
  },
  {
    number: '06',
    title: 'UNIFIED CUSTOMER PROFILE',
    subtitle: 'Give your customers one login for their entire ownership experience.',
    bullets: [
      'Single Dashboard to access orders, payments, documents, and service requests.',
      'Track every step from purchase to delivery with complete visibility.',
      'Personalized offers, alerts, and real-time notifications.',
    ],
  },
  {
    number: '07',
    title: 'API EXTENSIBILITY',
    subtitle: 'Easily connect AutoConnect with the systems you already use.',
    bullets: [
      'Plug & Play: Works seamlessly with DMS, CRM, and payment gateways.',
      'Enterprise-Ready: Compatible with SAP, Keyloop, Salesforce, and more.',
      'Future-Proof: Secure, scalable APIs designed to grow with your business.',
    ],
  },
];

export function Features() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="features" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Core Features of <span className="text-brand-orange">AutoConnect</span>
          </h2>
          <p
            className={`text-lg font-extralight text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Make every customer interaction faster, clearer, and connected.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
  isVisible: boolean;
}

function FeatureCard({ feature, index, isVisible }: FeatureCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`bg-white rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[30%] flex items-center justify-center py-2 lg:py-0">
          <span className="text-5xl lg:text-6xl font-normal text-brand-orange/30">
            {feature.number}
          </span>
        </div>

        <div className="lg:w-[70%]">
          <h3 className="text-lg lg:text-xl font-normal text-brand-black mb-2 tracking-wide">{feature.title}</h3>
          <p className="font-extralight text-gray-600 mb-4">{feature.subtitle}</p>
          <ul className="space-y-3">
            {feature.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-extralight text-gray-600">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
