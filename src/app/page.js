'use client';
// Forçando atualização completa - 2025-05-15
import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const qrCodeRef = useRef(null);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Apply dark mode class when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);
  
  // Check for saved preference on load
  useEffect(() => {
    // Check for dark mode preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);
  
  // Generate QR Code on component mount
  useEffect(() => {
    if (qrCodeRef.current) {
      // Usando LinkedIn como URL de destino para o QR Code
      const linkedInUrl = `https://www.linkedin.com/in/brunosardinha/`;
      
      QRCode.toCanvas(
        qrCodeRef.current,
        linkedInUrl,
        {
          width: 192,
          margin: 2,
          color: {
            dark: darkMode ? '#e2e8f0' : '#0f172a',  // Dark foreground
            light: darkMode ? '#1e293b' : '#f8fafc'  // Light background
          }
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );
    }
  }, [qrCodeRef, darkMode]);

  return (
    <main>
      {/* Header/Navigation */}
      <header>
        <nav className="navbar-modern">
          <div className="container flex items-center justify-between">
            <a href="#" className="text-2xl font-bold gradient-text">
              Bruno <span className="text-primary-500">Sardinha</span>
            </a>

            {/* Desktop Navigation */}
            <div className="desktop-nav hidden md:flex items-center gap-6">
              <a href="#about" className="nav-link">About Me</a>
              <a href="#metrics" className="nav-link">PM Expertise</a>
              <a href="#contact" className="nav-link">Why Hire Me</a>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`theme-toggle ${!darkMode ? 'light' : ''}`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <span className="sun" aria-hidden="true">☀️</span>
                <span className="moon" aria-hidden="true">🌙</span>
                <span className="sr-only">
                  {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                </span>
              </button>
              
              <button
                className="hamburger"
                aria-label="Open menu"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-bg-primary dark:bg-gray-900">
        <div className="shape-blob one"></div>
        <div className="shape-circle one"></div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Technology leader & Product Manager with
                <span className="gradient-text"> 18+ years</span> experience
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 mb-8 max-w-2xl animate-fade-in animation-delay-200">
                Delivering end‑to‑end digital products with a hands-on approach. Expert in defining product vision, driving Agile
                discovery/prototyping, and bridging business strategy with engineering execution—including coding when needed.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12 animate-fade-in animation-delay-400">
                <a href="#" className="btn-primary flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Watch the video
                </a>
                
                <a href="#" className="btn-outline">
                  Download CV (PDF)
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end animate-fade-in animation-delay-600">
              <div className="qr-code-container neumorphic-card p-4 text-center">
                <div className="mb-3">
                  <canvas 
                    ref={qrCodeRef} 
                    className="w-48 h-48 mx-auto rounded-lg"
                    aria-label="QR Code para a página de contratação"
                  ></canvas>
                </div>
                <p className="font-medium text-sm text-text-secondary dark:text-gray-300">
                  Scan to connect on LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 min-h-screen flex items-center relative">
        <div className="shape-blob two"></div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="profile-image-container relative">
                <div className="profile-circle-bg absolute inset-0 rounded-full" aria-hidden="true"></div>
                <div className="relative z-10 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-soft-xl w-64 h-64 mx-auto">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C4D03AQGSCHLcnM-oJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1647873116517?e=1752710400&v=beta&t=MQcPxkQlpMWAOumTCu30MhcigopU-0NN5FuFjvV-fMU" 
                    alt="Bruno Sardinha - Senior Product Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-6">
                As a Tech Product Manager, I bridge the gap between business vision and technical execution. I lead product discovery 
                sessions, translate complex business needs into clear technical requirements, and collaborate closely with engineering 
                teams to implement innovative solutions that deliver measurable value.
              </p>
              
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-6">
                My daily responsibilities include managing product roadmaps, prioritizing features based on data insights, conducting 
                user research, and overseeing technical implementation details. With a strong technical background, I can effectively 
                communicate with developers about APIs, architecture, security standards, and performance optimizations.
              </p>
              
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-6">
                What sets me apart is my truly hands-on approach—I'm not afraid to roll up my sleeves and get directly involved in coding 
                when needed. I believe in leading by example and contributing wherever I can add value. I'm passionate about staying 
                current with emerging technologies and regularly experiment with new frameworks and tools to understand their potential 
                applications. This technical fluency enables me to bridge communication gaps and make more informed product decisions.
              </p>
              
              <p className="text-lg text-text-secondary dark:text-gray-300 mb-8">
                At GFT Technologies, I've applied these skills to achieve significant results: 70% reduction in manual claims processing 
                through ML systems, 24× faster deployment cycles (from 2 hours to 5 minutes), and 75% reduction in fraudulent claims 
                through data-driven detection systems. I excel at leading Agile teams to build technically sound, user-focused products.
              </p>
              
              <div className="highlights-container space-y-4">
                <div className="highlight-item animate-fade-in-right">
                  <div className="flex items-center gap-4 bg-bg-secondary dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                    <div className="highlight-icon flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-medium">Product Discovery & Strategy</p>
                  </div>
                </div>
                
                <div className="highlight-item animate-fade-in-right" style={{animationDelay: '200ms'}}>
                  <div className="flex items-center gap-4 bg-bg-secondary dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                    <div className="highlight-icon flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-medium">Technical Roadmap Planning</p>
                  </div>
                </div>
                
                <div className="highlight-item animate-fade-in-right" style={{animationDelay: '400ms'}}>
                  <div className="flex items-center gap-4 bg-bg-secondary dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                    <div className="highlight-icon flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-medium">Agile Team Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Product Management Expertise Section */}
      <section id="metrics" className="py-20 bg-bg-secondary dark:bg-gray-900 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product <span className="gradient-text">Management Expertise</span>
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300 max-w-3xl mx-auto">
              My approach to product management combines strategic vision, stakeholder alignment, and a
              deep understanding of user needs to deliver exceptional products that solve real problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Strategy */}
            <div className="card-modern p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-primary-500/10 rounded-full"></div>
              
              <h3 className="text-xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
                  Product Discovery & Strategy
                </span>
              </h3>
              
              <p className="text-text-secondary dark:text-gray-300 mb-6">
                Led product strategy for multiple projects across different industries, including defining business models
                and product vision. Conducted thorough persona definition and market research to identify target audiences
                and their specific needs, wants, and pain points.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <span className="text-sm text-text-tertiary mb-2 block">Key Skills & Strengths:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Business Model Definition</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Persona Creation</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Product Vision</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-text-tertiary mb-1 block">Impact & Results:</span>
                  <p className="text-primary-600 dark:text-primary-400 font-bold">Created targeted solutions that directly addressed user needs, resulting in 70% efficiency improvements</p>
                </div>
              </div>
            </div>
            
            {/* Agile Product Ownership */}
            <div className="card-modern p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-primary-500/10 rounded-full"></div>
              
              <h3 className="text-xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
                  Agile Product Ownership
                </span>
              </h3>
              
              <p className="text-text-secondary dark:text-gray-300 mb-6">
                Served as Product Owner for a management system for a multinational in the education sector.
                Led stakeholder meetings to gather requirements, prioritized backlog, built roadmaps, and
                planned and facilitated sprints to ensure timely delivery of business value.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <span className="text-sm text-text-tertiary mb-2 block">Key Skills & Strengths:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Backlog Prioritization</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Sprint Facilitation</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Stakeholder Management</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-text-tertiary mb-1 block">Impact & Results:</span>
                  <p className="text-primary-600 dark:text-primary-400 font-bold">Successfully delivered an educational management system meeting all key stakeholder requirements</p>
                </div>
              </div>
            </div>
            
            {/* Digital Marketing & Growth */}
            <div className="card-modern p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-primary-500/10 rounded-full"></div>
              
              <h3 className="text-xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
                  Digital Marketing & Growth
                </span>
              </h3>
              
              <p className="text-text-secondary dark:text-gray-300 mb-6">
                Led comprehensive digital marketing initiatives including brand creation, creative design,
                and paid advertising campaigns. Managed Google Ads and Facebook Ads strategies that drove
                measurable business growth while optimizing ROI and user acquisition costs.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <span className="text-sm text-text-tertiary mb-2 block">Key Skills & Strengths:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Brand Creation</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Landing Page Optimization</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Paid Advertising</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-text-tertiary mb-1 block">Impact & Results:</span>
                  <p className="text-primary-600 dark:text-primary-400 font-bold">Doubled digital engagement metrics and created cohesive brand identities across multiple channels</p>
                </div>
              </div>
            </div>
            
            {/* UX Prototyping & Team Leadership */}
            <div className="card-modern p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-primary-500/10 rounded-full"></div>
              
              <h3 className="text-xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
                  UX Prototyping & Team Leadership
                </span>
              </h3>
              
              <p className="text-text-secondary dark:text-gray-300 mb-6">
                Created high-fidelity prototypes in Figma with detailed specifications, estimates, and timelines. 
                Led multidisciplinary teams through product development while managing technical activities in Jira 
                and ensuring collaboration across design, development, and business stakeholders.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <span className="text-sm text-text-tertiary mb-2 block">Key Skills & Strengths:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Figma Prototyping</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Team Management</span>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">Technical Specifications</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-text-tertiary mb-1 block">Impact & Results:</span>
                  <p className="text-primary-600 dark:text-primary-400 font-bold">Successfully managed development of a complex system for a multinational educational company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Hire Me Section */}
      <section id="contact" className="py-20 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Hire <span className="gradient-text">Bruno Sardinha</span>
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300 max-w-3xl mx-auto">
              Discover how my Product Management experience can bring significant results to EZ-AD.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Why Hire Me */}
            <div className="card-modern p-8">
              <h3 className="font-bold text-xl mb-4">How I Can Add Value to EZ-AD</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Product Discovery Expertise</h4>
                    <p className="text-text-secondary dark:text-gray-300">
                      My experience leading Product Discovery processes will help EZ-AD identify the most pressing customer needs and prioritize features that generate the greatest business impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Bridge Between Business & Technology</h4>
                    <p className="text-text-secondary dark:text-gray-300">
                      With my ability to translate business objectives into clear technical requirements, I can help EZ-AD align its business and development teams, accelerating the delivery of value to customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Data-Driven Decision Making</h4>
                    <p className="text-text-secondary dark:text-gray-300">
                      My product management approach is grounded in data analysis and metrics. I can establish effective measurement frameworks to help EZ-AD evaluate the success of its products and identify areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a href="https://www.linkedin.com/in/brunosardinha/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-secondary dark:bg-gray-900 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold gradient-text">
                Bruno <span className="text-primary-500">Sardinha</span>
              </a>
              <p className="text-text-secondary dark:text-gray-400 mt-2">
                Building products that make a difference
              </p>
            </div>
            
            <div className="flex gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="https://www.linkedin.com/in/brunosardinha/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">LinkedIn</a></li>
                  <li><a href="https://github.com/brunosard" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 dark:text-gray-400 transition">GitHub</a></li>
                </ul>
              </div>
              

            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
            <div className="text-center mb-6">
              <h4 className="text-sm font-semibold mb-3">About This Website</h4>
              <p className="text-xs text-text-tertiary dark:text-gray-500 max-w-2xl mx-auto">
                Built with Next.js 15.3.2, TailwindCSS v4.1.6, and React. This site was developed in just 2 hours with{" "}
                <a href="https://windsurf.io" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition">Windsurf</a> — 
                specifically created for my application to the Product Manager position at EZ-AD. It demonstrates both my technical
                understanding and the power of modern AI-assisted development tools. The site utilizes responsive design, 
                dark mode support, and optimized animations for a smooth user experience.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-text-tertiary dark:text-gray-500">
                © 2025 Bruno Sardinha. All rights reserved.
              </p>
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <span className="text-xs text-text-tertiary dark:text-gray-500">Made with</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span className="text-xs text-text-tertiary dark:text-gray-500">and Windsurf by Bruno Sardinha | <a href="https://github.com/brunosard/ezad-tpm-application/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition">View on GitHub</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
