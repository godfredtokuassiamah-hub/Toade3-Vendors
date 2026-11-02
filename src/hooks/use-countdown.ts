import { useEffect, useState } from 'react';

/** Seconds-based countdown. `start(n)` (re)starts it; `remaining` hits 0 when done. */
export function useCountdown() {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setTimeout(() => setRemaining((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [remaining]);

  return { remaining, start: setRemaining };
}
