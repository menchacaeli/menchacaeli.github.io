import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skills } from '../components/sections/Skills';

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />);
    expect(screen.getByText('What I build with')).toBeInTheDocument();
  });

  it('renders both skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Tooling & Backend')).toBeInTheDocument();
  });

  it('renders skill tags', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Three.js / R3F')).toBeInTheDocument();
    expect(screen.getByText('Node.js / Express')).toBeInTheDocument();
  });
});
