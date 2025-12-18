import { Quote, Star, Building2, Car, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "AutoConnect transformed how we engage with customers across the entire buying journey. The integration with our existing systems was seamless, and the results speak for themselves.",
    author: "Ahmed Al-Rashid",
    position: "Director of Customer Experience",
    company: "BMW Middle East",
    logo: 'bmw',
    category: "OEM",
    categoryIcon: Car,
    results: [
      { label: "Customer Satisfaction", value: "+45%" },
      { label: "Response Time", value: "60% faster" },
      { label: "First Year ROI", value: "250%" },
    ],
  },
  {
    quote: "Managing multiple brands across our dealership network was a nightmare until we found AutoConnect. Now we have a unified view of every customer interaction.",
    author: "Sarah Mohammad",
    position: "Group CX Manager",
    company: "Mohamed Yousuf Naghi Motors",
    logo: 'naghi',
    category: "Dealership",
    categoryIcon: Building2,
    results: [
      { label: "Customer Retention", value: "89%" },
      { label: "Lead Conversion", value: "3x" },
      { label: "Service Bookings", value: "+40%" },
    ],
  },
  {
    quote: "The AI-powered sentiment analysis helps us identify and address customer concerns before they escalate. Our NPS has never been higher.",
    author: "Khalid bin Zayed",
    position: "Head of Aftersales",
    company: "Mansour Automotive",
    logo: 'mansour',
    category: "Service",
    categoryIcon: Wrench,
    results: [
      { label: "Churn Reduction", value: "32%" },
      { label: "Satisfaction Score", value: "94%" },
      { label: "NPS Score", value: "8.7" },
    ],
  },
];

function BMWLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 10 L50 50 L10 50" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 50 L90 50 L50 90" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 10 A40 40 0 0 1 90 50 L50 50 Z" fill="#0066B1"/>
      <path d="M50 90 A40 40 0 0 1 10 50 L50 50 Z" fill="#0066B1"/>
      <text x="50" y="8" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">B</text>
      <text x="92" y="54" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">M</text>
      <text x="50" y="98" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">W</text>
    </svg>
  );
}

function NaghiLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
          <span className="text-xs font-normal">MYN</span>
        </div>
      </div>
      <span className="text-[10px] font-normal tracking-tight mt-1 leading-tight text-center">
        Mohamed Yousuf<br/>Naghi Motors
      </span>
    </div>
  );
}

function MansourLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <div className="w-10 h-10 border-2 border-current flex items-center justify-center">
          <span className="text-lg font-normal">M</span>
        </div>
      </div>
      <span className="text-[10px] font-normal tracking-wide mt-1">MANSOUR AUTOMOTIVE</span>
    </div>
  );
}

function CompanyLogo({ logo, className }: { logo: string; className?: string }) {
  switch (logo) {
    case 'bmw':
      return <BMWLogo className={className} />;
    case 'naghi':
      return <NaghiLogo className={className} />;
    case 'mansour':
      return <MansourLogo className={className} />;
    default:
      return null;
  }
}

export function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What Our <span className="text-brand-orange">Customers</span> Say
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Hear from automotive leaders who have transformed their customer experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              {...testimonial}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
  category: string;
  categoryIcon: typeof Car;
  results: { label: string; value: string }[];
  isVisible: boolean;
  delay: number;
}

function TestimonialCard({
  quote,
  author,
  position,
  company,
  logo,
  category,
  categoryIcon: CategoryIcon,
  results,
  isVisible,
  delay,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-gray-50 rounded-2xl p-6 lg:p-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <Quote className="w-10 h-10 text-brand-orange/30" />
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-normal rounded-full">
          <CategoryIcon className="w-3.5 h-3.5" />
          {category}
        </span>
      </div>

      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">"{quote}"</p>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-sm">
            <CompanyLogo logo={logo} className="w-full h-full text-brand-black" />
          </div>
          <div>
            <div className="font-normal text-brand-black">{author}</div>
            <div className="text-sm text-gray-500">{position}</div>
            <div className="text-sm text-brand-orange font-extralight">{company}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
          <span className="text-sm font-normal text-brand-black">Key Results</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {results.map((result) => (
            <div key={result.label} className="text-center">
              <div className="text-lg font-normal text-brand-orange">{result.value}</div>
              <div className="text-[10px] text-gray-500 leading-tight">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
