import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

const stages = [
  {
    number: '01',
    title: 'Lead & Awareness',
    description: 'Online inquiries, test drive bookings, campaigns tracking',
  },
  {
    number: '02',
    title: 'Vehicle Discovery',
    description: 'PIPs, compare trims, browse inventory',
  },
  {
    number: '03',
    title: 'Purchase & Delivery',
    description: 'Reserve/Buy, finance, e-sign, track delivery, online payment',
  },
  {
    number: '04',
    title: 'Service & Aftersales',
    description: 'Service booking, approve quotes, service tracker, online payment',
  },
  {
    number: '05',
    title: 'Engagement',
    description: 'Personalized offers, reminders, rewards',
  },
  {
    number: '06',
    title: 'Customer Retention & Loyalty',
    description: 'VOC, real-time dashboards, segmentation, journey analytics',
  },
];

export function Lifecycle() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (isVisible && activeIndex < stages.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, activeIndex]);

  return (
    <section id="lifecycle" className="py-20 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            From First Click to <span className="text-brand-orange">Lifelong Loyalty</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AutoConnect connects every moment of the customer lifecycle - turning every interaction
            into growth.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div
            className={`relative w-full max-w-4xl transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="/screenshot_2025-12-18_at_1.44.33_pm.png"
              alt="Customer Lifecycle Journey - From Lead & Awareness through Vehicle Discovery, Purchase & Delivery, Service & Aftersales, Engagement, to Customer Retention & Loyalty"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className={`border rounded-xl p-6 transition-all duration-500 ${
                activeIndex >= index
                  ? 'border-brand-orange bg-brand-orange/5'
                  : 'border-gray-200 bg-gray-50'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span
                  className={`text-3xl font-normal transition-colors duration-500 ${
                    activeIndex >= index ? 'text-brand-orange' : 'text-gray-400'
                  }`}
                >
                  {stage.number}
                </span>
                <h3 className="text-lg font-normal text-brand-black">{stage.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

