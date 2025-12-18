import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute left-[-5%] top-[30%] w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <rect
            x="20"
            y="20"
            width="160"
            height="160"
            rx="50"
            stroke="#333"
            strokeWidth="3"
            fill="none"
          />
          <rect
            x="55"
            y="55"
            width="90"
            height="90"
            rx="28"
            stroke="#2a2a2a"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <svg
          className="absolute left-[5%] bottom-[15%] w-[500px] h-[200px] opacity-40"
          viewBox="0 0 300 100"
          fill="none"
        >
          <line x1="0" y1="50" x2="280" y2="50" stroke="#333" strokeWidth="1" />
          <line x1="20" y1="70" x2="260" y2="70" stroke="#333" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute right-4 lg:right-12 top-0 bottom-0 flex items-center justify-center pointer-events-none">
        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col items-start" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            <span
              className="text-gray-500 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold italic tracking-wider"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', transform: 'rotate(180deg)' }}
            >
              auto
            </span>
            <span
              className="text-gray-500 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold italic tracking-wider mt-2"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', transform: 'rotate(180deg)' }}
            >
              connect
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <p
            className={`text-brand-orange font-semibold tracking-[0.2em] text-sm lg:text-base mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SEAMLESS. SCALABLE. INTEGRATED.
          </p>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.15] mb-8 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            The CX Platform Connecting
            <br />
            Every Moment in the
            <br />
            Customer Lifecycle.
          </h1>

          <p
            className={`text-base sm:text-lg text-gray-400 mb-0 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            From Sales to Loyalty - without
            <br />
            Rip & Replace.
          </p>
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
        <p
          className={`text-sm transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Trusted by leading</span>
          <br />
          <span className="text-brand-orange">OEMs & dealerships.</span>
        </p>
      </div>

      <a
        href="#what-is"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-all duration-700 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
