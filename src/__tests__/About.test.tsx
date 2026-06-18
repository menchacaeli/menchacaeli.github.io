import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../components/sections/About';

describe('About', () => {
  it('renders section heading text', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders all passion tags', () => {
    render(<About />);
    expect(screen.getByText('Street Art')).toBeInTheDocument();
    expect(screen.getByText('Hip-Hop')).toBeInTheDocument();
    expect(screen.getByText('Three.js')).toBeInTheDocument();
  });

  it('renders location line', () => {
    render(<About />);
    expect(screen.getByText(/Based in New Mexico/)).toBeInTheDocument();
  });
});
