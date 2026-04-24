import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'en' },
  }),
}));

import App from './App';

describe('App', () => {
  it('renders the main navigation and hero section', () => {
    render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(document.querySelector('#home')).toBeInTheDocument();
  });

  it('locks and unlocks body scroll when mobile menu toggles', () => {
    render(<App />);

    const menuToggle = screen.getByRole('button', { name: /open navigation menu/i });
    fireEvent.click(menuToggle);

    expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.click(screen.getByRole('button', { name: /close navigation menu/i }));
    expect(document.body.style.overflow).toBe('unset');
  });
});
