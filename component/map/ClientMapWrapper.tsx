'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component with SSR disabled
const MyMaps = dynamic(() => import('./map'), {
  ssr: false,
});

const ClientMapWrapper = () => {
  return <MyMaps />;
};

export default ClientMapWrapper;
