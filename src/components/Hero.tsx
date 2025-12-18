import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden" style={{background: 'url(/bg.png) center no-repeat', backgroundColor: 'black'}}>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full">
        <div className="">
          <p
            className={`text-brand-orange font-normal tracking-[0.2em] text-sm lg:text-base mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            SEAMLESS. SCALABLE. INTEGRATED.
          </p>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.15] mb-8 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The CX Platform Connecting
            <br />
            Every Moment in the Customer Lifecycle.
          </h1>

          <p
            className={`text-base sm:text-lg text-gray-400 font-extralight mb-0 transition-all duration-700 delay-200 ${
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
          className={`text-sm font-extralight transition-all duration-700 delay-400 ${
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
