'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAPInitializer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // You can add more global GSAP setup here if needed
  }, []);

  return null; // no UI
};

export default GSAPInitializer;
