// src/components/BonusConfetti.jsx
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function BonusConfetti({ trigger }) {
  const { width, height } = useWindowSize();
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsExploding(true);
      const timeout = setTimeout(() => setIsExploding(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return isExploding ? <Confetti width={width} height={height} /> : null;
}