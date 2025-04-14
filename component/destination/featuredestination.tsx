"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Destination = {
  id: number;
  src: string;
  alt: string;
};

const destinations: Destination[] = [
  { id: 3, src: "/everest.jpg", alt: "Everest" },
  { id: 4, src: "/bhaktapur.jpg", alt: "Bhaktapur" },
  { id: 5, src: "/chitwan.jpg", alt: "Chitwan National Park" },
  { id: 7, src: "/annapurna.jpg", alt: "Annapurna Range" },
  { id: 9, src: "/nagarkot.jpg", alt: "Nagarkot Sunrise" },
  { id: 10, src: "/mustang.jpg", alt: "Mustang" },
  { id: 11, src: "/rara.jpg", alt: "Rara Lake" },
];

const FeatureDestinationsGrid: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode
  const destinationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    destinationRefs.current.forEach((destination, index) => {
      if (destination) {
        gsap.fromTo(
          destination,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: destination,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Detect the user's system preference for dark mode (optional)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addListener(updateTheme);
    updateTheme(); // Check the current theme on mount

    return () => mediaQuery.removeListener(updateTheme); // Clean up the listener
  }, []);

  return (
    <div
      style={{
        padding: "20px 20px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          background: "linear-gradient(to right, #9b59b6, #f06292, #f44336)", // gradient colors
          WebkitBackgroundClip: "text", // to apply the gradient to text
          color: "transparent", // make the text color transparent to see the gradient
        }}
      >
        Featured Destinations
      </h2>

      {/* Fade overlays */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "250px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "100%",
            background:
              "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: "10px",
          top: "calc(50% + 20px)",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: isDarkMode ? "#000" : "#fff", // Dark mode background
          border: "none",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDarkMode ? "#fff" : "#000", // Change icon color based on dark mode
        }}
        aria-label="Scroll Left"
      >
        <FaChevronLeft size={18} />
      </button>

      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: "10px",
          top: "calc(50% + 20px)",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: isDarkMode ? "#000" : "#fff", // Dark mode background
          border: "none",
          padding: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDarkMode ? "#fff" : "#000", // Change icon color based on dark mode
        }}
        aria-label="Scroll Right"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          padding: "20px 0",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          position: "relative",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          style={{
            display: "flex",
            gap: "16px",
            padding: "0 50px",
          }}
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={`original-${destination.id}`}
              destination={destination}
              ref={(el) => {
                destinationRefs.current[index] = el;
              }}
            />
          ))}
          {destinations.map((destination, index) => (
            <DestinationCard
              key={`clone-${destination.id}`}
              destination={destination}
              ref={(el) => {
                destinationRefs.current[index + destinations.length] = el;
              }}
            />
          ))}
          {destinations.map((destination, index) => (
            <DestinationCard
              key={`clone2-${destination.id}`}
              destination={destination}
              ref={(el) => {
                destinationRefs.current[index + 2 * destinations.length] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationCard = React.forwardRef<
  HTMLDivElement,
  { destination: Destination }
>(({ destination }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        flex: "0 0 auto",
        width: "calc(25% - 12px)",
        minWidth: "250px",
        maxWidth: "300px",
        scrollSnapAlign: "start",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")
      }
    >
      <Image
        src={destination.src}
        alt={destination.alt}
        width={400}
        height={200}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          padding: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {destination.alt}
        </p>
      </div>
    </div>
  );
});

DestinationCard.displayName = "DestinationCard";

export default FeatureDestinationsGrid;
