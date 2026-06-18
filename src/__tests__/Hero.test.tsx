import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../components/hero/Hero';

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) =>
    <div data-testid="r3f-canvas">{children}</div>,
  useFrame: vi.fn(),
}));

vi.mock('@react-three/drei', () => ({
  Text3D: ({ children }: { children: React.ReactNode }) =>
    <mesh>{children}</mesh>,
  Center: ({ children }: { children: React.ReactNode }) =>
    <group>{children}</group>,
}));

describe('Hero', () => {
  it('renders the availability text', () => {
    render(<Hero />);
    expect(screen.getByText('Available for freelance work')).toBeInTheDocument();
  });

  it('renders the scroll cue', () => {
    render(<Hero />);
    expect(screen.getByText('scroll')).toBeInTheDocument();
  });
});
