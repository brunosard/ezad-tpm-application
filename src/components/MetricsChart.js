'use client';

import { useEffect, useRef } from 'react';
import { drawMetricsChart, metricsData } from '@/utils/chartData';

/**
 * Canvas-based metrics chart component
 */
export default function MetricsChart() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions with proper scaling for retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // Draw the chart
    drawMetricsChart(canvas, metricsData);
    
    // Redraw on window resize
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      drawMetricsChart(canvas, metricsData);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="metrics-chart-container w-full h-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-soft-md">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        aria-label="Chart comparing Lead Time and Deployment Frequency before and after improvements"
      ></canvas>
      
      {/* Accessible data table for screen readers */}
      <div className="sr-only">
        <table>
          <caption>Performance Metrics Comparison</caption>
          <thead>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Before</th>
              <th scope="col">After</th>
              <th scope="col">Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{metricsData.leadTime.label}</th>
              <td>{metricsData.leadTime.before}</td>
              <td>{metricsData.leadTime.after}</td>
              <td>{metricsData.leadTime.improvement}</td>
            </tr>
            <tr>
              <th scope="row">{metricsData.deploymentFrequency.label}</th>
              <td>{metricsData.deploymentFrequency.before}</td>
              <td>{metricsData.deploymentFrequency.after}</td>
              <td>{metricsData.deploymentFrequency.improvement}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
