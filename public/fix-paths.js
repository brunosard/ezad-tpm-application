// Script para corrigir os caminhos dos recursos estáticos
document.addEventListener('DOMContentLoaded', function() {
  // Corrige links de script
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (script.src.includes('_next')) {
      const newSrc = script.src.replace(/^.*\/_next\//, './_next/');
      script.src = newSrc;
    }
  });
  
  // Corrige links de estilo
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    if (link.href.includes('_next')) {
      const newHref = link.href.replace(/^.*\/_next\//, './_next/');
      link.href = newHref;
    }
  });
});
