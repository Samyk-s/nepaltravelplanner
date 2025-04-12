"use client";

import { Carousel } from "flowbite-react";
import { HeroCardComp } from "../Herocard/Herocard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image"; // Import Next.js Image for optimization

export function HeroComp() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Animate the active card
  const animateCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
  };

  // Animate the first slide initially
  useEffect(() => {
    animateCard(0);
  }, []);

  return (
    <div className="h-[80vh] sm:h-[90vh] xl:h-screen">
      <Carousel
        onSlideChange={(index) => animateCard(index)} // Animate on slide change
        slideInterval={5000}
      >
        {[1, 2, 4, 5].map((num, idx) => (
          <div
            key={idx}
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            {/* Replace <img> with <Image /> for automatic optimizations */}
            <Image
              src={`/banner${num}.jpg`}
              alt={`Banner ${num}`}
              layout="fill" // Make the image cover the container
              objectFit="cover" // Ensure the image covers the space properly
              className="object-cover w-full h-full"
              priority // Load this image priority to help with LCP
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(-70deg, rgba(0,0,0,0.6) 50%, transparent 50%)",
              }}
            >
              {/* Animated HeroCardComp */}
              <div
                ref={(el) => {
                  // Update the ref array, no return needed
                  if (el) cardRefs.current[idx] = el;
                }}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-[100px] opacity-0"
              >
                <HeroCardComp />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
