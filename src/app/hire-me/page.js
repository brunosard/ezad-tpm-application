'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Special hire-me page for QR code redirects
 */
export default function HireMePage() {
  // Animation effect when page loads
  useEffect(() => {
    const content = document.querySelector('.hire-me-content');
    if (content) {
      content.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 flex items-center justify-center p-6">
      <div className="hire-me-content max-w-3xl card-modern p-8 md:p-12 opacity-0">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Work Together</span>?
          </h1>
          <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300">
            Thank you for scanning my QR code! I'm excited to potentially collaborate with you.
            Let me know what project you have in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neumorphic-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              About Me
            </h2>
            <p className="mb-4">
              I'm a Senior Product Manager specialized in data-driven products. 
              With over 10 years of experience, I help teams ship high-quality products faster.
            </p>
            <a 
              href="/resume.pdf" 
              download
              className="btn-outline w-full text-center"
            >
              Download CV
            </a>
          </div>
          
          <div className="neumorphic-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contact Me
            </h2>
            <p className="mb-4">
              Let's discuss how I can help with your project. Send me an email or schedule a call directly.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:bruno@example.com"
                className="btn-primary w-full text-center"
              >
                Email Me
              </a>
              <a 
                href="https://calendly.com/brunopme/30min"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-border-animated w-full text-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
