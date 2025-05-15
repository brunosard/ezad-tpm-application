import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Product Manager Sênior | Portfólio Profissional",
  description: "Portfólio profissional de Product Manager Sênior especializado em desenvolvimento de produtos digitais com foco em resultados mensuráveis.",
  keywords: ["product manager", "gerente de produto", "portfolio", "product management", "digital products"],
  authors: [{ name: "Bruno Sardinha" }],
  creator: "Bruno Sardinha",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Product Manager Sênior | Portfólio Profissional",
    description: "Portfólio profissional de Product Manager Sênior especializado em desenvolvimento de produtos digitais com foco em resultados mensuráveis.",
    siteName: "Bruno Sardinha - PM Sênior",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
