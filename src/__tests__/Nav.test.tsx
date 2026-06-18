import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from '../components/ui/Nav';

describe('Nav', () => {
  it('renders the EM monogram', () => {
    render(<Nav />);
    expect(screen.getByText('EM')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });
});
