import './globals.css';
import './components.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata = {
  title: 'Bruno Sardinha | Senior Product Manager',
  description: 'Portfolio of Bruno Sardinha, a Senior Product Manager specialized in data-driven products and ML applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <div className="sr-only focus:not-sr-only focus:absolute focus:z-[9999]">
            <a href="#main" className="skip-link">Skip to main content</a>
          </div>
          <div id="main">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
