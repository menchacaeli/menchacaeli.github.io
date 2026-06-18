import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Work } from '../components/sections/Work';

describe('Work', () => {
  it('renders the section heading', () => {
    render(<Work />);
    expect(screen.getByText('Selected Work')).toBeInTheDocument();
  });

  it('renders all 6 project cards', () => {
    render(<Work />);
    expect(screen.getByText('hops')).toBeInTheDocument();
    expect(screen.getByText('em-ui-design-system')).toBeInTheDocument();
    expect(screen.getByText('sensor-plug-threejs-app')).toBeInTheDocument();
  });

  it('each card has a GitHub link', () => {
    render(<Work />);
    const links = screen.getAllByText('View on GitHub →');
    expect(links).toHaveLength(6);
  });
});
