// src/LenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return null;
}
