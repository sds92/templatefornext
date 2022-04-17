import { useState, useEffect } from 'react';

export default function useScroll(el) {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    el && typeof el === 'object' ? el.getBoundingClientRect() : 0
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState('');

  const listener = (e) => {
    setBodyOffset(
      el && typeof el == 'object' ? el.getBoundingClientRect() : 0
    );
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return [
    scrollY,
    scrollX,
    scrollDirection
  ];
}
