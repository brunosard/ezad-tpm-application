'use client';

import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook for managing dark mode
 * @returns {[boolean, function]} - Dark mode state and toggle function
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  // Apply the dark mode class when the state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
