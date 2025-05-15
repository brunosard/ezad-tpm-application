'use client';

import { useDarkMode } from '@/hooks/useDarkMode';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Theme toggle component for switching between light and dark modes
 */
export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();
  const { t } = useTranslation();

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className={`theme-toggle ${!darkMode ? 'light' : ''}`}
      aria-label={darkMode ? t('theme.light') : t('theme.dark')}
    >
      <span className="sun" aria-hidden="true">☀️</span>
      <span className="moon" aria-hidden="true">🌙</span>
      <span className="sr-only">
        {darkMode ? t('theme.light') : t('theme.dark')}
      </span>
    </button>
  );
}
