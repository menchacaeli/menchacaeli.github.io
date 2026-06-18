import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from '../components/sections/Contact';

describe('Contact', () => {
  it('renders the headline', () => {
    render(<Contact />);
    expect(screen.getByText("Let's build something.")).toBeInTheDocument();
  });

  it('renders Email Me CTA linking to email', () => {
    render(<Contact />);
    const link = screen.getByRole('link', { name: 'Email Me' });
    expect(link).toHaveAttribute('href', 'mailto:menchacaeli@gmail.com');
  });

  it('renders GitHub CTA', () => {
    render(<Contact />);
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('href', 'https://github.com/menchacaeli');
  });
});
