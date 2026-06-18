import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

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

describe('App', () => {
  it('renders the Nav', () => {
    render(<App />);
    expect(screen.getByText('EM')).toBeInTheDocument();
  });

  it('renders all section headings', () => {
    render(<App />);
    expect(screen.getByText('Selected Work')).toBeInTheDocument();
    expect(screen.getByText('What I build with')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText("Let's build something.")).toBeInTheDocument();
  });
});
