import { Users, Award, TrendingUp, BarChart3 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

const metrics = [
  {
    icon: Users,
    value: 250,
    suffix: '+',
    label: 'Active Customers',
    description: 'Automotive businesses trust AutoConnect',
  },
  {
    icon: Award,
    value: 96,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Average satisfaction rating across all clients',
  },
  {
    icon: TrendingUp,
    value: 35,
    suffix: '%',
    label: 'Average ROI',
    description: 'Revenue increase within first year',
  },
  {
    icon: BarChart3,
    value: 60,
    suffix: '%',
    label: 'Faster Deployment',
    description: 'Compared to traditional CX solutions',
  },
];

export function CustomerMetrics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Proven <span className="text-brand-orange">Results</span>
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Numbers that showcase our impact on automotive customer experience
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

function MetricCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  isVisible,
  delay,
}: MetricCardProps) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    delay,
    isVisible,
  });

  return (
    <div
      className={`bg-brand-dark rounded-2xl p-6 lg:p-8 text-center transition-all duration-700 hover:bg-brand-gray group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-brand-orange/10 rounded-xl mb-4 group-hover:bg-brand-orange/20 transition-colors">
        <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-brand-orange" />
      </div>
      <div className="text-4xl lg:text-5xl font-normal text-brand-orange mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg font-normal text-white mb-1">{label}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
