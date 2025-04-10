'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        opacity: 0,
        transform: 'translateY(100px)',
        height: '200px',
        width: '100%',
        background: 'skyblue',
        margin: '150vh 0', // push it down so you can scroll to it
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
      }}
    >
      👋 Hello, I animate on scroll!
    </div>
  );
};

export default ScrollBox;
