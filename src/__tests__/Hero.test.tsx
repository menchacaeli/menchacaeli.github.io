import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../components/hero/Hero';

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
