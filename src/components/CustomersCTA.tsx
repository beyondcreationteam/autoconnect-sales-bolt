import { ArrowRight, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function CustomersCTA() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-20 lg:py-24 bg-brand-orange" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Over 250 automotive businesses across the Middle East trust AutoConnect
            to deliver exceptional customer experiences. Ready to be next?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-normal rounded-xl hover:bg-gray-100 transition-colors group"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
