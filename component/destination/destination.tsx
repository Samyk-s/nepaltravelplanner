'use client';


import React from 'react';
import Image from 'next/image';

type Destination = {
  id: number;
  src: string;
  alt: string;
};

const destinations: Destination[] = [
  { id: 1, src: '/kathmandudurbar.jpg', alt: 'Kathmandu Durbar Square' },
  { id: 2, src: '/pokharalake.jpg', alt: 'Pokhara Lake' },
  { id: 3, src: '/everest.jpg', alt: 'Everest' },
  { id: 4, src: '/bhaktapur.jpg', alt: 'Bhaktapur' },
  { id: 5, src: '/chitwan.jpg', alt: 'Chitwan National Park' },
  { id: 6, src: '/lumbini.jpg', alt: 'Lumbini' },
  { id: 7, src: '/annapurna.jpg', alt: 'Annapurna Range' },
  { id: 8, src: '/pashupatinath.jpg', alt: 'Pashupatinath Temple' },
  { id: 9, src: '/nagarkot.jpg', alt: 'Nagarkot Sunrise' },
  { id: 10, src: '/mustang.jpg', alt: 'Mustang' },
  { id: 11, src: '/rara.jpg', alt: 'Rara Lake' },
  { id: 12, src: '/swayambhu.jpg', alt: 'Swayambhunath Stupa' },
];

const DestinationsGrid: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
        }}
      >
        {destinations.map((destination) => (
          <div
            key={destination.id}
            style={{
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
        ))}
      </div>
    </div>
  );
};

export default DestinationsGrid;
