'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Case study card component with hover reveal effect
 */
export default function CaseCard({ title, description, image, metrics, tags }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card-modern relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex="0"
    >
      <div className="card-image-container">
        <Image 
          src={image} 
          alt={title}
          width={600}
          height={400}
          className={`card-image transition-all duration-500 ${isHovered ? 'scale-110 blur-sm' : ''}`}
        />
      </div>
      
      {/* Overlay that appears on hover */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/70 to-primary-950/90 p-6 flex flex-col justify-end transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        
        <div className="overflow-hidden">
          <p className={`text-white/90 mb-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {description}
          </p>
          
          {metrics && (
            <div className={`metrics-grid grid grid-cols-2 gap-4 mb-4 transition-all duration-500 delay-100 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="metric-item">
                  <span className="text-primary-300 text-sm">{key}</span>
                  <div className="text-white font-bold text-xl">{value}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-500 delay-200 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {tags?.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-800/60 text-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
