import React, { useState, useEffect } from 'react';

export default function Incrementale() {
  const [counter, setCounter] = useState(0);
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCount => prevCount + 1);}, 1000); // Intervallo di 1 secondo
    return () => clearInterval(intervalId);
  }, []);
  return <div>{counter}</div>;
}