import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

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
