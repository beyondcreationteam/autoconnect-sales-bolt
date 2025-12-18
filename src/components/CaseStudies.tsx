import { Building2, Store, CheckCircle2, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const caseStudies = [
  {
    title: "Multi-Brand CX Transformation",
    company: "Mohamed Yousuf Naghi Motors Co.",
    categoryIcon: Building2,
    category: "Dealership Group",
    image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { value: "96%", label: "Satisfaction" },
      { value: "90 days", label: "Deployment" },
      { value: "250%", label: "ROI" },
    ],
    challenges: [
      "Inconsistent customer experience across 8 brands",
      "Complex multi-DMS integration requirements",
      "Arabic language and RTL support needed",
    ],
    solutions: [
      "Unified omnichannel platform for all brands",
      "Arabic-first UX with full RTL optimization",
      "Seamless integration with 5 different DMS systems",
    ],
  },
  {
    title: "Service Excellence Through Automation",
    company: "Mansour Automotive",
    categoryIcon: Store,
    category: "Service Center",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { value: "+45%", label: "Efficiency" },
      { value: "94%", label: "Satisfaction" },
      { value: "70%", label: "Automation" },
    ],
    challenges: [
      "Manual service scheduling causing delays",
      "Inconsistent customer communication",
      "Limited visibility into customer sentiment",
    ],
    solutions: [
      "Automated service booking with smart scheduling",
      "WhatsApp-integrated service updates",
      "AI-powered sentiment analysis dashboard",
    ],
  },
];

export function CaseStudies() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Success Stories in <span className="text-brand-orange">Detail</span>
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Deep dives into how AutoConnect delivers transformative results
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.company}
              {...study}
              isReversed={index % 2 === 1}
              isVisible={isVisible}
              delay={index * 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CaseStudyCardProps {
  title: string;
  company: string;
  categoryIcon: typeof Building2;
  category: string;
  image: string;
  metrics: { value: string; label: string }[];
  challenges: string[];
  solutions: string[];
  isReversed: boolean;
  isVisible: boolean;
  delay: number;
}

function CaseStudyCard({
  title,
  company,
  categoryIcon: CategoryIcon,
  category,
  image,
  metrics,
  challenges,
  solutions,
  isReversed,
  isVisible,
  delay,
}: CaseStudyCardProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={company}
            className="w-full h-64 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-normal text-brand-orange">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/20 text-brand-orange text-sm font-extralight rounded-full">
            <CategoryIcon className="w-4 h-4" />
            {category}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-normal text-white mb-2">{title}</h3>
        <p className="text-brand-orange font-extralight mb-6">{company}</p>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-sm font-normal text-gray-400 uppercase tracking-wider mb-3">
              Challenges
            </h4>
            <ul className="space-y-2">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal text-gray-400 uppercase tracking-wider mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-brand-orange font-normal hover:gap-3 transition-all group"
        >
          Read Full Case Study
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
