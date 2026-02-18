'use client';

import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-[72px] right-5 z-40 text-xs text-gray-600 font-mono bg-[#0a0d18]/80 backdrop-blur border border-white/[0.06] px-3 py-1.5 rounded-lg">
      🕐 {time}
    </div>
  );
}