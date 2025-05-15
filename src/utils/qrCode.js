'use client';

import QRCode from 'qrcode';

/**
 * Generates a QR code as data URL
 * @param {string} text - Text to encode in the QR code
 * @param {Object} options - QRCode generation options
 * @returns {Promise<string>} - Data URL of the generated QR code
 */
export async function generateQRCode(text, options = {}) {
  try {
    const defaultOptions = {
      width: 200,
      margin: 1,
      color: {
        dark: '#0ea5e9',  // Primary color
        light: '#ffffff', // Background
      },
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    const dataUrl = await QRCode.toDataURL(text, mergedOptions);
    return dataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
