import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  // O assetPrefix causa problemas com next/font, então vamos usar uma solução manual
  // para corrigir os caminhos após o build
  // Desativa a geração de imagens otimizadas, permitindo exportação estática
  images: {
    unoptimized: true
  },
  // Desativa verificação de ESLint durante build
  eslint: {
    ignoreDuringBuilds: true
  },
  // Usar rotas com trailing slash para compatibilidade em servidores estáticos
  trailingSlash: true,
  // Desativa o uso de React StrictMode em produção
  reactStrictMode: false
};

export default nextConfig;
