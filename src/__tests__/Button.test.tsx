import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/Button';

describe('Button', () => {
  it('renders as a link when href is provided', () => {
    render(<Button href="https://example.com">Click</Button>);
    const el = screen.getByRole('link', { name: 'Click' });
    expect(el).toHaveAttribute('href', 'https://example.com');
    expect(el).toHaveAttribute('target', '_blank');
  });

  it('renders as a button when no href', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });
});
