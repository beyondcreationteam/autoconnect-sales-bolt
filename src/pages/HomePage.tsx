import { Hero } from '../components/Hero';
import { WhatIs } from '../components/WhatIs';
import { Features } from '../components/Features';
import { Lifecycle } from '../components/Lifecycle';
import { Comparison } from '../components/Comparison';
import { Stats } from '../components/Stats';
import { Partners } from '../components/Partners';
import { CustomersCTA } from '../components/CustomersCTA';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhatIs />
      <Features />
      <Lifecycle />
      <Comparison />
      <Stats />
      <Partners />
      <CustomersCTA />
      <Contact />
    </>
  );
}
