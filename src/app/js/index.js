import { useState, useEffect, useRef } from "react";

export function useCountUp(target, duration) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    function step() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}
