'use client';

/**
 * Registers global keyboard shortcuts
 * @param {Object} shortcuts - Object mapping key codes to handler functions
 * @returns {function} - Cleanup function to remove event listeners
 */
export function registerKeyboardShortcuts(shortcuts) {
  const handleKeyDown = (event) => {
    // Skip if user is typing in an input field
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) {
      return;
    }

    // Check for Alt+A for accessibility mode
    if (event.altKey && event.key === 'a') {
      if (shortcuts['alt+a']) {
        event.preventDefault();
        shortcuts['alt+a']();
      }
      return;
    }

    // Check regular shortcuts
    if (shortcuts[event.key]) {
      shortcuts[event.key]();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // Return cleanup function
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}
