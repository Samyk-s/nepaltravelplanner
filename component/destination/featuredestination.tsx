'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Destination = {
  id: number;
  src: string;
  alt: string;
};

const destinations: Destination[] = [
  { id: 3, src: '/everest.jpg', alt: 'Everest' },
  { id: 4, src: '/bhaktapur.jpg', alt: 'Bhaktapur' },
  { id: 5, src: '/chitwan.jpg', alt: 'Chitwan National Park' },
  { id: 7, src: '/annapurna.jpg', alt: 'Annapurna Range' },
  { id: 9, src: '/nagarkot.jpg', alt: 'Nagarkot Sunrise' },
  { id: 10, src: '/mustang.jpg', alt: 'Mustang' },
  { id: 11, src: '/rara.jpg', alt: 'Rara Lake' },
];

const FeatureDestinationsGrid: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.5; // Slower speed for smoother transition

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;

    if (!scrollContainer || !scrollContent) return;

    let scrollPosition = 0;
    let requestId: number;

    const animateScroll = () => {
      if (!scrollContainer || !scrollContent || isHovered) {
        return;
      }

      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled all items
      const containerWidth = scrollContainer.clientWidth;
      const contentWidth = scrollContent.scrollWidth / 3; // Since we have 3 clones
      
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }

      requestId = requestAnimationFrame(animateScroll);
      animationRef.current = requestId;
    };

    // Start the animation
    requestId = requestAnimationFrame(animateScroll);
    animationRef.current = requestId;

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [isHovered]);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          color: '#1a202c',
        }}
      >
        Destinations
      </h2>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#4a5568',
        }}
      >
        Explore the beautiful places of Nepal
      </p>

      {/* Fade effect containers */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '250px',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 2,
      }}>
        <div style={{
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }} />
        <div style={{
          width: '100px',
          height: '100%',
          background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }} />
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '16px',
          padding: '10px 0',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          position: 'relative',
        }}
      >
        {/* Hide scrollbar for Chrome/Safari */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div
          ref={scrollContentRef}
          style={{
            display: 'flex',
            gap: '16px',
            padding: '0 50px', // Add padding for fade effect
          }}
        >
          {/* Original items */}
          {destinations.map((destination) => (
            <DestinationCard key={`original-${destination.id}`} destination={destination} />
          ))}
          
          {/* Cloned items for seamless looping */}
          {destinations.map((destination) => (
            <DestinationCard key={`clone-${destination.id}`} destination={destination} />
          ))}
          {destinations.map((destination) => (
            <DestinationCard key={`clone2-${destination.id}`} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <div
      style={{
        flex: '0 0 auto',
        width: 'calc(25% - 12px)',
        minWidth: '250px',
        maxWidth: '300px',
        scrollSnapAlign: 'start',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1)')
      }
    >
      <Image
        src={destination.src}
        alt={destination.alt}
        width={400}
        height={200}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          padding: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
        }}
      >
        <p
          style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          {destination.alt}
        </p>
      </div>
    </div>
  );
};

export default FeatureDestinationsGrid;