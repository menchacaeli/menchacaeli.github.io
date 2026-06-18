import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useInView } from '../hooks/useInView';
import { useMousePosition } from '../hooks/useMousePosition';

describe('useScrollProgress', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 800 });
  });

  it('returns scrolled: false initially', () => {
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current.scrolled).toBe(false);
  });

  it('returns scrolled: true after scrolling past 80% of viewport height', () => {
    const { result } = renderHook(() => useScrollProgress());
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 700 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.scrolled).toBe(true);
  });
});

describe('useInView', () => {
  it('returns inView: false initially', () => {
    const { result } = renderHook(() => useInView());
    expect(result.current.inView).toBe(false);
  });

  it('exposes a ref', () => {
    const { result } = renderHook(() => useInView());
    expect(result.current.ref).toBeDefined();
  });
});

describe('useMousePosition', () => {
  it('returns a ref with initial x: 0, y: 0', () => {
    const { result } = renderHook(() => useMousePosition());
    expect(result.current.current).toEqual({ x: 0, y: 0 });
  });

  it('updates position on mousemove', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1000 });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 800 });
    const { result } = renderHook(() => useMousePosition());
    act(() => {
      window.dispatchEvent(new MouseEvent('mousemove', { clientX: 1000, clientY: 0 }));
    });
    expect(result.current.current.x).toBeCloseTo(1);
    expect(result.current.current.y).toBeCloseTo(1);
  });
});
