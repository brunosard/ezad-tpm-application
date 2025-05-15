'use client';

/**
 * Data for the metrics chart comparing before/after metrics
 */
export const metricsData = {
  leadTime: {
    before: 14, // days
    after: 3.5, // days
    label: 'Lead Time (Days)',
    improvement: '75% faster'
  },
  deploymentFrequency: {
    before: 2, // per month
    after: 8, // per month
    label: 'Deployment Frequency (Monthly)',
    improvement: '4× more frequent'
  }
};

/**
 * Draws a bar chart on a canvas element
 * @param {HTMLCanvasElement} canvas - Canvas element to draw on
 * @param {Object} data - Chart data
 */
export function drawMetricsChart(canvas, data) {
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Set dimensions
  const barWidth = width / 6;
  const maxValue = Math.max(
    data.leadTime.before,
    data.leadTime.after,
    data.deploymentFrequency.before,
    data.deploymentFrequency.after
  ) * 1.2; // Add 20% headroom
  
  const scale = height / maxValue;
  const gap = 40;
  
  // Colors
  const beforeColor = 'rgba(71, 85, 105, 0.8)';
  const afterColor = 'rgba(14, 165, 233, 0.9)';
  
  // Draw Lead Time bars
  drawBar(ctx, gap, height, data.leadTime.before * scale, barWidth, beforeColor, 'Before');
  drawBar(ctx, gap * 2 + barWidth, height, data.leadTime.after * scale, barWidth, afterColor, 'After');
  
  // Draw label
  ctx.fillStyle = '#0f172a';
  ctx.font = '12px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Lead Time', (gap * 1.5 + barWidth), height - 10);
  
  // Draw Deployment Frequency bars
  const start2 = width / 2 + gap;
  drawBar(ctx, start2, height, data.deploymentFrequency.before * scale, barWidth, beforeColor, 'Before');
  drawBar(ctx, start2 + gap + barWidth, height, data.deploymentFrequency.after * scale, barWidth, afterColor, 'After');
  
  // Draw label
  ctx.fillText('Deployment Frequency', start2 + (gap + barWidth) / 2 + barWidth / 2, height - 10);
  
  // Draw legend
  const legendY = 20;
  ctx.fillStyle = beforeColor;
  ctx.fillRect(width - 150, legendY, 20, 10);
  ctx.fillStyle = '#0f172a';
  ctx.textAlign = 'left';
  ctx.fillText('Before', width - 120, legendY + 10);
  
  ctx.fillStyle = afterColor;
  ctx.fillRect(width - 150, legendY + 20, 20, 10);
  ctx.fillStyle = '#0f172a';
  ctx.fillText('After', width - 120, legendY + 30);
}

function drawBar(ctx, x, canvasHeight, barHeight, barWidth, color, label) {
  const y = canvasHeight - barHeight - 30; // Space for label
  
  // Create gradient
  const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, color.replace('0.8', '0.6').replace('0.9', '0.7'));
  
  // Draw bar
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(x, y, barWidth, barHeight, [5]);
  ctx.fill();
  
  // Draw value on top of bar
  ctx.fillStyle = '#0f172a';
  ctx.font = '12px Inter, sans-serif';
  ctx.textAlign = 'center';
  const value = Math.round((canvasHeight - y - 30) / (canvasHeight - 30) * 100) / 100;
  ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
}
