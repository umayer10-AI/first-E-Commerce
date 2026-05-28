'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Mouse position coordinates motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics configuration for a smooth delayed following effect
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Event listener assignments for interactive tags
    const assignListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, select, input, [role="button"], .project-card, .interactive-hover'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    assignListeners();
    // Run an interval to hook listeners to dynamic elements (e.g. navigation, new products loaded)
    const interval = setInterval(assignListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearInterval(interval);
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <motion.div
      className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        width: hovered ? 48 : 8,
        height: hovered ? 48 : 8,
        backgroundColor: hovered ? '#90e0ef' : '#006875',
        mixBlendMode: hovered ? 'difference' : 'normal',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250 }}
    />
  );
}
