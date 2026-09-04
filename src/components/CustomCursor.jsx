import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyber-cyan z-50 pointer-events-none transition-opacity duration-200 shadow-[0_0_10px_#00f2fe] hidden md:block ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-cyan/40 z-50 pointer-events-none transition-opacity duration-200 hidden md:block ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
