'use client';

import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

/**
 * Accessibility toggle button for high contrast mode
 */
export default function AccessibilityButton() {
  const [highContrast, setHighContrast] = useLocalStorage('highContrast', false);
  
  // Apply high contrast mode
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);
  
  // Register Alt+A keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setHighContrast(!highContrast);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [highContrast, setHighContrast]);
  
  return (
    <button
      onClick={() => setHighContrast(!highContrast)}
      className="accessibility-button"
      aria-label={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
      title={`${highContrast ? 'Disable' : 'Enable'} high contrast (Alt+A)`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="accessibility-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16h.01"></path>
        <path d="M12 8v4"></path>
      </svg>
      <span className="sr-only">
        {highContrast ? 'Disable high contrast' : 'Enable high contrast'}
      </span>
    </button>
  );
}
