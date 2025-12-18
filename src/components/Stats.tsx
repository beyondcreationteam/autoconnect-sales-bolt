import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

export function Stats() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="stats" className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Let's Steer Your <span className="text-brand-orange">Customer Experience</span>
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Launch a unified, consistent, multilingual customer journey leveraging the systems you
            already use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StatCard
            value={60}
            suffix="%"
            description="of potential car buyers under 45 prefer to purchase their vehicles online, indicating the growing importance of digital CX."
            source="McKinsey"
            isVisible={isVisible}
            delay={200}
          />
          <StatCard
            value={71}
            suffix="%"
            description="of consumers reported they would increase annual spending on aftersales if the experience improved."
            source="Accenture"
            isVisible={isVisible}
            delay={400}
          />
          <StatCard
            prefix="$"
            value={20}
            suffix="-70M"
            description="can be gained annually in additional revenue by Dealers who improve CX."
            source="Capgemini"
            isVisible={isVisible}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  source: string;
  isVisible: boolean;
  delay: number;
}

function StatCard({ value, prefix = '', suffix = '', description, source, isVisible, delay }: StatCardProps) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    delay,
    isVisible,
  });

  return (
    <div
      className={`bg-brand-dark rounded-2xl p-8 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl lg:text-6xl font-normal text-brand-orange mb-4">
        {prefix}{count}{suffix}
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-brand-orange font-extralight">{source}</p>
    </div>
  );
}
