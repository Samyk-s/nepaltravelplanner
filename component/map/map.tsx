'use client'; // Ensure this is a client-side rendered component

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MyMaps = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // If user location is not loaded, show loading message
  if (!userLocation) {
    return <div>Loading map...</div>;
  }

  // Create a component that sets the center of the map using useMap hook
  const MapCenter = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    map.setView(position, 14); // Update the map center dynamically
    return null;
  };

  return (
    <div style={{ height: '50vh' }}>
      <MapContainer
        style={{ height: '100%' }}
        zoom={14}
        scrollWheelZoom={false}
      >
        {/* Add MapCenter component to set the map center dynamically */}
        <MapCenter position={userLocation} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={userLocation}>
          <Popup>
            You are here! <br /> This is your current location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMaps;
