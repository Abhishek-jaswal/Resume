'use client';

import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-6 text-sm text-gray-400 font-mono bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded shadow">
      {time}
    </div>
  );
}
