import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Check, X } from 'lucide-react';

const salesComparison = [
  {
    aspect: 'Customer Experience',
    traditional: 'Waiting times, limited info.',
    digital: 'Seamless, self-service, transparent, guided by smart tools, convenient.',
  },
  {
    aspect: 'Access',
    traditional: 'Business hours only.',
    digital: '24/7 web & app access.',
  },
  {
    aspect: 'Lead Response',
    traditional: 'Dependent on sales-rep availability.',
    digital: 'Instant via CRM workflows.',
  },
  {
    aspect: 'Sales Process',
    traditional: 'Manual, in-person, paper-heavy.',
    digital: 'Digitized, guided, paperless workflows.',
  },
  {
    aspect: 'Discovery & Configuration',
    traditional: 'Brochures and in-store guidance.',
    digital: 'Build & price, comparisons, saved configs.',
  },
  {
    aspect: 'Test-Drive Booking',
    traditional: 'Online requests; manual scheduling.',
    digital: 'Online slot selection & confirmations.',
  },
  {
    aspect: 'Inventory Visibility',
    traditional: 'Onsite display only.',
    digital: 'Real-time stock/inventory updates.',
  },
  {
    aspect: 'Vehicle Reservation',
    traditional: 'In-store reservation, paper receipts.',
    digital: 'Reserve online with deposit.',
  },
  {
    aspect: 'Financing & Insurance',
    traditional: 'Paper forms; slow turnaround.',
    digital: 'Instant offers; online applications; real-time decisions.',
  },
  {
    aspect: 'Documents & e-Signature',
    traditional: 'Signatures; multiple visits.',
    digital: 'Contracts handled online.',
  },
  {
    aspect: 'Payments',
    traditional: 'In-store payment only.',
    digital: 'Cards, wallets, split payments, transfers.',
  },
  {
    aspect: 'Order Status',
    traditional: 'Customer calls for updates.',
    digital: 'Real-time tracking & notifications.',
  },
  {
    aspect: 'Feedback & Follow-Up',
    traditional: 'Ad-hoc outreach.',
    digital: 'Surveys, NPS, targeted offers.',
  },
];

const aftersalesComparison = [
  {
    aspect: 'Customer Experience',
    traditional: 'Long waiting times, limited visibility.',
    digital: 'Self-service portal: track status, approve quotes, rate service.',
  },
  {
    aspect: 'Booking & Scheduling',
    traditional: 'Phone calls, limited hours, manual scheduling.',
    digital: '24/7 online & mobile booking; instant confirmations.',
  },
  {
    aspect: 'Check-in & Transparency',
    traditional: 'Unsure about costs until counter, long waits, limited visibility.',
    digital: 'Upfront service menus, digital quotations and approvals, live tracking.',
  },
  {
    aspect: 'Approvals & Communication',
    traditional: 'Manual reminders, missed follow-ups.',
    digital: 'Automated notifications via SMS & app, one-click quote approvals.',
  },
  {
    aspect: 'Payment & Invoicing',
    traditional: 'In-person payments.',
    digital: 'Digital invoices & receipts; online payments.',
  },
  {
    aspect: 'Contactless Check-In & Check-Out',
    traditional: 'Paper tickets, counter queues.',
    digital: 'QR gate pass, license-plate recognition.',
  },
  {
    aspect: 'Handover & Home Delivery',
    traditional: 'Status via phone calls; on-site paperwork.',
    digital: 'Ready-for-pickup alerts, e-receipts, optional home delivery.',
  },
  {
    aspect: 'Post-Service Follow-Up',
    traditional: 'Irregular follow-ups, no closed loop.',
    digital: 'NPS survey, case management for issues.',
  },
  {
    aspect: 'Extended Service Coverage',
    traditional: 'Desk-side pitches, low uptake.',
    digital: 'Automated plans offering, online purchase.',
  },
  {
    aspect: 'Engagement & Retention',
    traditional: 'Customers drift to independents after warranty.',
    digital: 'Integrated loyalty, rewards, and personalized offers.',
  },
];

export function Comparison() {
  const [activeTab, setActiveTab] = useState<'sales' | 'aftersales'>('sales');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const data = activeTab === 'sales' ? salesComparison : aftersalesComparison;
  const title = activeTab === 'sales' ? 'Shaping Buyer Experience' : 'Service Without Boundaries';
  const subtitle =
    activeTab === 'sales'
      ? 'Modern Car Buyers Want More than Bricks and Mortar. Delivering a seamless digital journey is your competitive edge.'
      : 'Shift from reactive repairs to proactive care - anticipating customer needs before they arise.';

  return (
    <section id="comparison" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Digital vs <span className="text-brand-orange">Traditional</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            See how AutoConnect transforms both sales and aftersales experiences.
          </p>
        </div>

        <div
          className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('sales')}
              className={`px-6 py-3 rounded-lg font-extralight transition-all ${
                activeTab === 'sales'
                  ? 'bg-brand-orange text-white'
                  : 'text-gray-600 hover:text-brand-orange'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveTab('aftersales')}
              className={`px-6 py-3 rounded-lg font-extralight transition-all ${
                activeTab === 'aftersales'
                  ? 'bg-brand-orange text-white'
                  : 'text-gray-600 hover:text-brand-orange'
              }`}
            >
              Aftersales
            </button>
          </div>
        </div>

        <div
          className={`text-center mb-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-normal text-brand-black mb-2">{title}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="hidden md:grid md:grid-cols-3 bg-brand-black text-white">
            <div className="p-4 font-normal">Aspect</div>
            <div className="p-4 font-normal text-center">Traditional</div>
            <div className="p-4 font-normal text-center bg-brand-orange">AutoConnect Digital</div>
          </div>

          {data.map((row, index) => (
            <div
              key={row.aspect}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 5) * 50}ms` }}
            >
              <div className="hidden md:grid md:grid-cols-3 border-b border-gray-100 last:border-b-0">
                <div className="p-4 md:p-6 bg-gray-50 font-extralight text-brand-black">
                  {row.aspect}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-gray-600 text-center">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{row.traditional}</span>
                </div>
                <div
                  className={`p-4 md:p-6 flex items-center justify-center gap-2 bg-brand-orange/5 text-gray-800 text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 50}ms` }}
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="font-extralight">{row.digital}</span>
                </div>
              </div>

              <div className="md:hidden flex border-b border-gray-100 last:border-b-0">
                <div className="w-[35%] p-3 bg-gray-50 font-extralight text-brand-black text-sm flex items-center border-r border-gray-100">
                  {row.aspect}
                </div>
                <div className="w-[65%] flex flex-col">
                  <div className="p-3 flex items-start gap-2 text-gray-600 text-sm border-b border-gray-50">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-normal text-gray-400 uppercase tracking-wide block mb-0.5">Traditional</span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-start gap-2 bg-brand-orange/5 text-gray-800 text-sm">
                    <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-normal text-brand-orange uppercase tracking-wide block mb-0.5">AutoConnect</span>
                      <span className="font-extralight">{row.digital}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
