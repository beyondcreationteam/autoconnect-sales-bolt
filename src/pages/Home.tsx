import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion} from 'framer-motion';
import customerSatisfaction from '../assets/Homepage/customer_satisfaction.jpg';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  BarChart3,
  Users,
  Clock,
  Award,
  Play,
  Star,
  Building2,
  Wrench,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Database,
  Languages,
  Car,
  ChevronDown
} from 'lucide-react';

{/* =========================
    SECTION — Plug & Play Integrations (In-View Theme Switch)
    ========================= */}
const PlugPlayIntegrations: React.FC = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, margin: '-10% 0px -10% 0px' });
  const reduce = useReducedMotion();

  const integrations: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    blurb: string;
  }[] = [
    {
      title: 'DMS/ERP',
      icon: Database,
      blurb:
        'AutoConnect syncs vehicles, service, parts, pricing, and customer data in real time with leading DMS/ERP systems like Keyloop and SAP—no rip-and-replace.',
    },
    {
      title: 'CRM',
      icon: Users,
      blurb:
        'Unified IDs and bi-directional sync with your CRM to align marketing, sales, and service touchpoints across the lifecycle.',
    },
    {
      title: 'Payments',
      icon: CreditCard,
      blurb:
        'Card, COD, installments, and invoices with VAT fields—secure processing and reconciled payouts.',
    },
    {
      title: 'OEM APIs',
      icon: Car,
      blurb:
        'Connect to OEM data sources for specs, campaigns, and warranty to keep sales and aftersales consistent and up to date.',
    },
    {
      title: 'CDP/Analytics',
      icon: BarChart3,
      blurb:
        'Push cohorts and events to your CDP and BI tools for advanced journey analytics and personalization.',
    },
    {
      title: 'Telematics',
      icon: Globe,
      blurb:
        'Ingest vehicle signals to power proactive service reminders, predictive maintenance, and upsell opportunities.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-20 transition-colors duration-700 ${inView ? 'bg-black' : 'bg-gray-50'}`}
    >
      {/* subtle edge scrims for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${inView ? 'text-white' : 'text-gray-900'}`}>
            Plug &amp; Play Integrations
          </h2>
          <p className={`text-lg mt-2 ${inView ? 'text-gray-300' : 'text-gray-600'}`}>
            No rip-and-replace. Connect with your DMS, CRM, payments, and data stack.
          </p>
        </div>

        {/* Larger cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item, idx) => {
            const CardIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : idx * 0.05 }}
                className="relative"
              >
                <div className="relative h-56 sm:h-64 lg:h-72 perspective-[1200px]">
                  {/* flipper */}
                  <div
                    className={`group relative h-full w-full ${reduce ? '' : 'transition-transform duration-500'} [transform-style:preserve-3d] focus-within:outline-none focus-within:ring-2 ${
                      inView
                        ? 'focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black'
                        : 'focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-white'
                    } ${reduce ? '' : 'hover:[transform:rotateY(180deg)] focus-within:[transform:rotateY(180deg)]'}`}
                    tabIndex={0}
                    aria-label={`${item.title} integration card (flip for details)`}
                  >
                    {/* front */}
                    <div
                      className={`absolute inset-0 rounded-2xl border ${
                        inView ? 'bg-black border-gray-700' : 'bg-white border-gray-200'
                      } shadow-sm p-6 flex flex-col items-center justify-center gap-4 [backface-visibility:hidden]`}
                    >
                      <div
                        className={`h-14 w-14 rounded-xl flex items-center justify-center ${
                          inView ? 'bg-white/10' : 'bg-blue-50'
                        }`}
                      >
                        <CardIcon className={`${inView ? 'text-white' : 'text-blue-600'} h-7 w-7`} />
                      </div>
                      <h3 className={`text-xl font-semibold text-center ${inView ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm text-center ${inView ? 'text-gray-300' : 'text-gray-600'}`}>
                        Hover or focus to learn more
                      </p>
                    </div>

                    {/* back */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] ${
                        inView
                          ? 'bg-gray-900 text-white border border-gray-700'
                          : 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border border-blue-700/40'
                      }`}
                    >
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm leading-relaxed opacity-95">{item.blurb}</p>

                      {/* focus helper for keyboard users */}
                      <button
                        className="sr-only"
                        aria-hidden="true"
                        tabIndex={-1}
                        type="button"
                      >
                        details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  // Content (existing)
  const stats = [
    { value: '98%', label: 'Customer Satisfaction', icon: Award },
    { value: '60%', label: 'Faster Deployment', icon: Clock },
    { value: '250+', label: 'Active Dealerships', icon: Users },
    { value: '35%', label: 'Revenue Increase', icon: BarChart3 }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Go live in 90 days with zero disruption to existing systems'
    },
    {
      icon: Shield,
      title: 'GCC Compliant',
      description: 'Built-in compliance with regional data protection and automotive regulations'
    },
    {
      icon: Globe,
      title: 'Arabic-First UX',
      description: 'Native Arabic interface with RTL design and cultural optimization'
    }
  ];

  // Content (added)
  const trustLogos = [
  ];

  const journey = [
    { title: 'Lead', desc: 'Capture from web, social, and showroom.', icon: MessageSquare },
    { title: 'Sale', desc: 'Configurator, finance, e-sign, delivery.', icon: Car },
    { title: 'Service', desc: 'Booking, status, parts, secure payments.', icon: Wrench },
    { title: 'Loyalty', desc: 'Personalized offers & retention loops.', icon: Star }
  ];

  const capabilities = [
    { title: 'Sales Hub', desc: 'Omnichannel lead → order with real-time pricing & inventory.', icon: Building2 },
    { title: 'Aftersales Hub', desc: 'Digital service journeys with reminders & status tracking.', icon: Wrench },
    { title: 'Payments', desc: 'COD, cards, installments, invoices with VAT fields.', icon: CreditCard },
    { title: 'Analytics', desc: 'Journey analytics & cohort insights with dashboards.', icon: BarChart3 },
  ];

  const integrations = [
    { title: 'DMS/ERP', icon: Database },
    { title: 'CRM', icon: Users },
    { title: 'Payments', icon: CreditCard },
    { title: 'OEM APIs', icon: Car },
    { title: 'CDP/Analytics', icon: BarChart3 },
    { title: 'Telematics', icon: Globe },
  ];

  const compliance = [
    { title: 'PDPL & GCC', desc: 'Data privacy & residency options', icon: ShieldCheck },
    { title: 'Arabic / RTL', desc: 'Native localization & UX patterns', icon: Languages },
    { title: 'Security', desc: 'RBAC, audit logs, encryption', icon: Shield },
  ];

  const outcomes = [
    { kpi: '+35%', label: 'Upsell in 90 days', detail: 'Accessory & service bundle conversion increased.' },
    { kpi: '98%', label: 'Service CSAT', detail: 'Transparent status & reminders raised satisfaction.' },
  ];

  const testimonials = [
    { quote: 'AutoConnect transformed our customer experience across 45 dealerships. The Arabic UX and seamless DMS integration made deployment effortless.', name: 'Regional CX Director', org: 'BMW Middle East' },
    { quote: 'The WhatsApp integration and automated service reminders have revolutionized how we connect with customers. Our retention rates have never been higher.', name: 'Customer Experience Manager', org: 'Mohamed Yousuf Naghi Motors Co.' },
  ];

  const faqs = [
    { q: 'Do we need to replace our DMS?', a: 'No. AutoConnect integrates via APIs and adapters, so you keep your stack.' },
    { q: 'How fast can we launch?', a: 'Typical pilot in 90 days with a focused scope and existing integrations.' },
    { q: 'Is it compliant with PDPL?', a: 'Yes. Data handling and retention policies align to PDPL with residency options.' },
  ];

  return (
    <div className="overflow-hidden">

      {/* =========================
          SECTION 1 — Hero (existing)
          ========================= */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  MENA-Born, Global-Grade
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Automotive CX
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                The first CX orchestration platform designed for MENA automotive markets. 
                Seamless DMS integration, Arabic UX, and zero-disruption deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <img 
                  src={customerSatisfaction}
    alt="Customer satisfaction dashboard"
    className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Customer Journey Analytics</h3>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service Satisfaction</span>
                      <span className="font-medium">98.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 2 — Trust Strip (added)
          ========================= */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustLogos.map((l) => (
              <div key={l.name} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-600 text-sm">{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3 — Stats (existing)
          ========================= */}
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4 — Lifecycle Journey (added)
          ========================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Lead → Sale → Service → Loyalty</h2>
            <p className="text-lg text-gray-600 mt-2">
              One platform to unify customer touchpoints and lift revenue at each step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {journey.map((step, i) => (
              <div key={step.title} className="bg-white border rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{i + 1}. {step.title}</h3>
                </div>
                <p className="text-gray-600 mt-3">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 5 — Platform Capabilities (added)
          ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to scale</h2>
              <p className="text-gray-600 text-lg mt-3">
                Sales & aftersales in one place—built for MENA operations and GCC regulations.
              </p>
              <ul className="mt-6 space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap.title} className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center">
                      <cap.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{cap.title}</p>
                      <p className="text-gray-600 text-sm">{cap.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Customer Journey Analytics</h3>
                <span className="text-xs text-gray-500">Live</span>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Test-Drive to Sale</span>
                    <span className="font-medium text-gray-900">42%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 w-2/5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Service Booking Conversion</span>
                    <span className="font-medium text-gray-900">63%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  PDPL-safe anonymized cohorts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 6 — Plug & Play Integrations
          ========================= */}
      <PlugPlayIntegrations />

      {/* =========================
          SECTION 6 — Integrations (added)
          ========================= 
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Plug & Play Integrations</h2>
            <p className="text-gray-600 text-lg mt-2">
              No rip-and-replace. Connect with your DMS, CRM, payments, and data stack.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {integrations.map((i) => (
              <div key={i.title} className="bg-white border rounded-lg px-3 py-4 text-center">
                <i.icon className="h-5 w-5 mx-auto text-blue-600 mb-2" />
                <span className="text-sm text-gray-700">{i.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* =========================
          SECTION 7 — Compliance & Localization (added)
          ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {compliance.map((c) => (
              <div key={c.title} className="border rounded-xl p-6 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                </div>
                <p className="text-gray-600 mt-3">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 8 — Features (existing)
          ========================= */}
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for MENA Automotive Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed with regional needs in mind - from Arabic UX to GCC compliance, 
              seamless DMS integration to rapid deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 9 — Outcomes / Case Highlights (added)
          ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proven Outcomes</h2>
            <p className="text-gray-600 text-lg mt-2">Measured impact across sales and aftersales.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="border rounded-xl p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{o.label}</h3>
                  <span className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium">
                    {o.kpi}
                  </span>
                </div>
                <p className="text-gray-600 mt-3">{o.detail}</p>
                <Link to="/customers" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 mt-3 text-sm font-semibold">
                  Read case studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* =========================
    SECTION — Customer Logos (marquee motion)
    ========================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Leading Automotive Brands</h2>
      <p className="text-gray-600 mt-2">Across OEMs and top dealership groups in MENA</p>
    </div>

    {/** helper data inside the section for quick drop-in */}
    {(() => {
      const logos = [
        { name: 'BMW', src: 'src/assets/customer_logos/BMW.png' },
        { name: 'Hyundai', src: 'src/assets/customer_logos/hyundai.svg.svg' },
        { name: 'Ford', src: 'src/assets/customer_logos/ford.svg.png' },
        { name: 'Toyota', src: 'src/assets/customer_logos/toyota.svg' },
        { name: 'Lexus', src: 'src/assets/customer_logos/Lexus.png' },
        { name: 'Nissan', src: 'src/assets/customer_logos/nissan.svg' },
        { name: 'Kia', src: '/img/logos/kia.svg' },
        { name: 'Mercedes-Benz', src: 'src/assets/customer_logos/Mercedes-Benz.png' },
        { name: 'Audi', src: '/img/logos/audi.svg' },
      ];

      // Duplicate to create a seamless loop
      const loop = [...logos, ...logos];

      const Row = ({ reverse = false }) => (
        <div className="relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex items-center gap-10 will-change-transform"
            initial={{ x: reverse ? '-50%' : '0%' }}
            animate={{ x: reverse ? '0%' : '-50%' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            {loop.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="shrink-0 flex items-center justify-center h-16 w-40 rounded-xl bg-gray-50 border hover:shadow transition"
                aria-label={`${brand.name} logo`}
                title={brand.name}
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  className="max-h-8 opacity-70 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      );

      return (
        <div className="space-y-6">
          <Row />
          <Row reverse />
        </div>
      );
    })()}
  </div>
</section>

      {/* =========================
          SECTION 10 — Testimonials (added)
          ========================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What customers say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <div className="flex items-center gap-2 text-yellow-500 mb-3">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>
                <p className="text-gray-800 italic">"{t.quote}"</p>
                <p className="text-gray-600 mt-3 text-sm">— {t.name}, {t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 11 — FAQ (added)
          ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">FAQs</h2>
          <div className="mt-8 divide-y rounded-xl border bg-gray-50">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-gray-700 mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 12 — CTA (existing)
          ========================= */}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 250+ dealerships across MENA already delivering exceptional automotive experiences.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
