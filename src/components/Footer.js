'use client';

/**
 * Footer component with social links and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-secondary dark:bg-gray-900 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              Bruno<span className="text-primary-500">PM</span>
            </a>
            <p className="text-text-secondary dark:text-gray-400 mt-2">
              Building products that make a difference
            </p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">Twitter</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">Download CV</a></li>
                <li><a href="#contact" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">Contact</a></li>
                <li><a href="#cases" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">Case Studies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-text-tertiary dark:text-gray-500">
              © {currentYear} Bruno Sardinha. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-tertiary hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400">
                Privacy Policy
              </a>
              <a href="#" className="text-text-tertiary hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400">
                Terms of Service
              </a>
              <a href="#" className="text-text-tertiary hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
