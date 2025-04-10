// app/components/DayCard.tsx (or wherever you prefer)

"use client"; // Required if using in Next.js App Router with client components

import { useState, useEffect } from "react";

const DayCard: React.FC = () => {
  const [day, setDay] = useState<string>(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(new Date().toLocaleDateString("en-US", { weekday: "long" }));
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-3 shadow-lg h-10 rounded-lg">
      <h1 className="text-lg font-semibold text-gray-500">{day}</h1>
    </div>
  );
};

export default DayCard;
