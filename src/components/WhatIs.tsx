import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Link2, Users, Building2, Store, CarFront } from 'lucide-react';

export function WhatIs() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const painPoints = [
    {
      icon: Link2,
      title: 'Fragmented Journeys',
      description: 'Between sales and after-sales',
    },
    {
      icon: Users,
      title: 'Manual Processes',
      description: 'That drain efficiency and customer satisfaction',
    },
    {
      icon: Building2,
      title: 'Rigid Platforms',
      description: "That can't keep up with customer expectations",
    },
  ];

  return (
    <section id="what-is" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              What is <span className="text-brand-orange">AutoConnect</span>?
            </h2>
            <p
              className={`text-lg text-gray-600 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AutoConnect is the customer experience orchestration layer that unifies sales and
              aftersales into one seamless, brand-compliant journey, without replacing your existing
              systems.
            </p>
            <p
              className={`text-lg text-gray-600 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              It integrates with your DMS, CRM, and other systems to deliver a connected,
              digital-first experience that drives sales, customer retention, and lifetime customer
              value.
            </p>
            <div
              className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-brand-light rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-brand-orange" />
                </div>
                <span className="text-lg font-extralight text-brand-black">OEMs</span>
              </div>
              <div className="bg-brand-light rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CarFront className="w-6 h-6 text-brand-orange" />
                </div>
                <span className="text-lg font-extralight text-brand-black">Dealership</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <img
              src="/screenshot_2025-12-16_at_6.31.37_pm.png"
              alt="Person using phone near car"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h3
            className={`text-2xl sm:text-3xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transform your Customer Experience,
            <br />
            <span className="text-brand-orange">Not your Infrastructure</span>
          </h3>
          <p
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Today's customers expect every interaction with your brand to be connected and
            effortless. But most dealers still struggle with:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={`bg-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <point.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-normal text-brand-black mb-2">{point.title}</h4>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
