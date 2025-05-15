import QRCode from 'qrcode';

interface QROptions {
  color?: {
    dark?: string;
    light?: string;
  };
  width?: number;
  margin?: number;
}

/**
 * Generate a QR code as an SVG string
 * @param text - The text/URL to encode in the QR code
 * @param options - Options for customizing the QR code
 * @returns A Promise that resolves to an SVG string
 */
export async function generateQrCode(
  text: string, 
  options: QROptions = {}
): Promise<string> {
  const defaultOptions = {
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
    width: 200,
    margin: 1,
    ...options
  };

  try {
    return await QRCode.toString(text, {
      type: 'svg',
      color: defaultOptions.color,
      width: defaultOptions.width,
      margin: defaultOptions.margin,
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

/**
 * Generate a QR code as a data URL (for use in <img> tags)
 * @param text - The text/URL to encode in the QR code
 * @param options - Options for customizing the QR code
 * @returns A Promise that resolves to a data URL string
 */
export async function generateQrCodeDataUrl(
  text: string,
  options: QROptions = {}
): Promise<string> {
  const defaultOptions = {
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
    width: 200,
    margin: 1,
    ...options
  };

  try {
    return await QRCode.toDataURL(text, {
      color: defaultOptions.color,
      width: defaultOptions.width,
      margin: defaultOptions.margin,
    });
  } catch (error) {
    console.error('Error generating QR code data URL:', error);
    throw new Error('Failed to generate QR code data URL');
  }
}
