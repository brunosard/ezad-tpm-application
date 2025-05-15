'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting keyboard key presses
 * @param {string} targetKey - Key to listen for
 * @returns {boolean} - Whether the key is currently pressed
 */
export function useKeyPress(targetKey) {
  // State to track whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // Add event listeners
  useEffect(() => {
    // Handler for key down events
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    // Handler for key up events
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    // Add event listeners
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}
