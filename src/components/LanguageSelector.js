'use client';

import { languages } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  // Versão simplificada sem hooks para teste
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-200 rounded">
      {Object.values(languages).map((lang) => (
        <button
          key={lang.code}
          className="flex items-center justify-center p-2 bg-white rounded shadow-sm"
          title={lang.name}
        >
          <span className="text-lg font-bold">{lang.flag} {lang.code.toUpperCase()}</span>
        </button>
      ))}
      <span className="text-sm font-bold text-red-500">IDIOMAS</span>
    </div>
  );
}
