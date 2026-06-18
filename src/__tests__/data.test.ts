import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { certifications } from '../data/certifications';

describe('projects data', () => {
  it('has 6 entries', () => {
    expect(projects).toHaveLength(6);
  });

  it('each project has required fields', () => {
    projects.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.language).toBeTruthy();
      expect(p.url).toMatch(/^https:\/\/github\.com\//);
    });
  });
});

describe('skills data', () => {
  it('has 2 categories', () => {
    expect(skills).toHaveLength(2);
  });

  it('each category has a name and at least 4 skills', () => {
    skills.forEach((s) => {
      expect(s.category).toBeTruthy();
      expect(s.skills.length).toBeGreaterThanOrEqual(4);
    });
  });
});

describe('certifications data', () => {
  it('has at least 1 entry', () => {
    expect(certifications.length).toBeGreaterThanOrEqual(1);
  });

  it('each cert has required fields', () => {
    certifications.forEach((c) => {
      expect(c.name).toBeTruthy();
      expect(c.issuer).toBeTruthy();
      expect(c.date).toBeTruthy();
    });
  });
});
