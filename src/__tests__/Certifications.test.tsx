import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Certifications } from '../components/sections/Certifications';

describe('Certifications', () => {
  it('renders the section heading', () => {
    render(<Certifications />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders the Vue cert', () => {
    render(<Certifications />);
    expect(screen.getByText('Vue.js Developer Certification')).toBeInTheDocument();
    expect(screen.getByText('Vue School')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });
});
