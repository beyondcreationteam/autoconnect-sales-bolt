import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { submitDemoRequest } from '../lib/supabase';
import {
  Send,
  Check,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Users,
  Zap,
  Shield,
} from 'lucide-react';

export function RequestDemoPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection isLoaded={isLoaded} />
      <FormSection />
      <BenefitsSection />
    </>
  );
}

function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section className="relative bg-brand-black overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className={`text-brand-orange font-normal tracking-[0.2em] text-sm mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            REQUEST A DEMO
          </p>
          <h1
            className={`text-4xl sm:text-5xl text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            See AutoConnect
            <br />
            <span className="text-brand-orange">in Action</span>
          </h1>
          <p
            className={`text-lg text-gray-400 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Schedule a personalized demo and discover how we can transform your
            customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    job_title: '',
    business_type: '',
    dealerships: '',
    challenges: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitDemoRequest({
        ...formState,
        source: 'demo-page',
      });
      setIsSubmitted(true);
      setFormState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        job_title: '',
        business_type: '',
        dealerships: '',
        challenges: '',
        timeline: '',
        message: '',
      });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-brand-light" ref={ref}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-normal text-brand-black mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-gray-600 mb-8">
              We've received your demo request. A member of our team will contact you
              within 24 hours to schedule your personalized demonstration.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Clock className="w-5 h-5" />
              <span>Expected response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-normal text-brand-black mb-6">
                Schedule Your Demo
              </h2>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formState.first_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formState.last_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-extralight text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-extralight text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    value={formState.job_title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="business_type"
                    value={formState.business_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  >
                    <option value="">Select Type</option>
                    <option value="oem">OEM/Manufacturer</option>
                    <option value="dealership">Dealership Group</option>
                    <option value="service-center">Service Center</option>
                    <option value="independent">Independent Dealer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-extralight text-gray-700 mb-2">
                    Number of Dealerships
                  </label>
                  <select
                    name="dealerships"
                    value={formState.dealerships}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                  >
                    <option value="">Select Range</option>
                    <option value="1-5">1-5</option>
                    <option value="6-25">6-25</option>
                    <option value="26-100">26-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-extralight text-gray-700 mb-2">
                  Primary CX Challenges
                </label>
                <select
                  name="challenges"
                  value={formState.challenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                >
                  <option value="">Select Primary Challenge</option>
                  <option value="lead-conversion">Lead Conversion</option>
                  <option value="service-communication">Service Communication</option>
                  <option value="customer-retention">Customer Retention</option>
                  <option value="arabic-support">Arabic Language Support</option>
                  <option value="system-integration">System Integration</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-extralight text-gray-700 mb-2">
                  Implementation Timeline
                </label>
                <select
                  name="timeline"
                  value={formState.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                >
                  <option value="">Select Timeline</option>
                  <option value="immediate">Immediate (within 30 days)</option>
                  <option value="short-term">Short-term (1-3 months)</option>
                  <option value="medium-term">Medium-term (3-6 months)</option>
                  <option value="long-term">Long-term (6+ months)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-extralight text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your specific needs, current systems, or any questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-normal rounded-lg hover:bg-orange-600 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Request Demo <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div>
              <h3 className="text-xl font-normal text-brand-black mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  'Personalized walkthrough of key features',
                  'Discussion of your specific use cases',
                  'Q&A with our product experts',
                  'Custom implementation roadmap',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-normal text-brand-black mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href="mailto:contact@autoconnect.digital"
                    className="text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    contact@autoconnect.digital
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href="https://autoconnect.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    autoconnect.digital
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="text-xl font-normal text-white mb-6">Our Offices</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-extralight">Cairo, Egypt</p>
                    <p className="text-gray-400 text-sm">
                      95D Al-Marghany St., Heliopolis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-extralight">Dubai, UAE</p>
                    <p className="text-gray-400 text-sm">
                      IFZA Business Park, Dubai Silicon Oasis
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a
                    href="tel:+201001255800"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    +20 100 1255800
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Implementation',
      description: 'Get up and running in weeks, not months.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Expert team to guide you every step of the way.',
    },
    {
      icon: Zap,
      title: 'Immediate Impact',
      description: 'See results from day one with our proven platform.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protecting your data.',
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="font-normal text-brand-black mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
