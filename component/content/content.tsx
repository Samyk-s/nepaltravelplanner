"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContentComp() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Text animation (fade and slide up)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Trigger when the text enters the viewport
        },
      }
    );

    // Image animations (fade and scale in)
    imageRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: index * 0.2, // Stagger each image a little bit
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%", // Trigger when image enters the viewport
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div
          ref={textRef}
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-300 dark:via-pink-400 dark:to-red-400">
            We didn’t reinvent the wheel
          </h2>

          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            ref={(el) => {
              // Update the ref array but don't return anything
              imageRefs.current[0] = el;
            }}
            className="w-full rounded-lg"
            src="/bannerb1.jpg" // Update path to be relative (recommended in Next.js)
            alt="office content 1"
            width={1200} // Specify width
            height={600} // Specify height
            priority // Optional: Use if the image is critical for page load
          />
          <Image
  ref={(el) => {
    // Update the ref array but don't return anything
    imageRefs.current[1] = el;
  }}
  className="mt-4 w-full lg:mt-10 rounded-lg"
  src="/bannerb2.jpg" // Update path to be relative (recommended in Next.js)
  alt="office content 2"
  width={1200} // Specify width
  height={600} // Specify height
  priority // Optional: Use if the image is critical for page load
/>
        </div>
      </div>
    </section>
  );
}
