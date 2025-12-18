import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { submitDemoRequest } from '../lib/supabase';

export function ContactUs() {
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
      // Send email via local Node script
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_email: 'mostafa@beyond-creation.net',
          ...formState,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Log to Supabase (Backup)
      await submitDemoRequest({
        ...formState,
        source: 'homepage-contact',
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
    } catch (err) {
      console.error('Submission error:', err);
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

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Go Digital? <span className="text-brand-orange">Let's Talk.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-brand-black mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-extralight text-gray-700 mb-2">First Name *</label>
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
                      <label className="block text-sm font-extralight text-gray-700 mb-2">Last Name *</label>
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
                    <label className="block text-sm font-extralight text-gray-700 mb-2">Business Email *</label>
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
                    <label className="block text-sm font-extralight text-gray-700 mb-2">Phone Number</label>
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
                      <label className="block text-sm font-extralight text-gray-700 mb-2">Company Name *</label>
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
                      <label className="block text-sm font-extralight text-gray-700 mb-2">Job Title</label>
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
                      <label className="block text-sm font-extralight text-gray-700 mb-2">Business Type *</label>
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
                      <label className="block text-sm font-extralight text-gray-700 mb-2">Number of Dealerships</label>
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
                    <label className="block text-sm font-extralight text-gray-700 mb-2">Primary CX Challenges</label>
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
                    <label className="block text-sm font-extralight text-gray-700 mb-2">Implementation Timeline</label>
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
                    <label className="block text-sm font-extralight text-gray-700 mb-2">Additional Information</label>
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
                      'Sending...'
                    ) : (
                      <>
                        Request Demo <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-normal text-brand-black mb-6">Cairo Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-600">95D Al-Marghany St., Heliopolis, Cairo, Egypt</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href="tel:+201001255800" className="text-gray-600 hover:text-brand-orange transition-colors">
                    +20 100 1255800
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-normal text-brand-black mb-6">Dubai Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-600">IFZA Business Park, Dubai Silicon Oasis, Dubai, UAE</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href="tel:+971506531235" className="text-gray-600 hover:text-brand-orange transition-colors">
                    +971 50 653 1235
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href="mailto:contact@autoconnect.digital" className="text-white hover:text-brand-orange transition-colors">
                    contact@autoconnect.digital
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
