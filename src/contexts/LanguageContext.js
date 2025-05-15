'use client';

import { createContext, useState, useContext, useEffect, useMemo } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  pt: { code: 'pt', name: 'Português', flag: '🇧🇷' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' }
};

export function LanguageProvider({ children }) {
  // Usar 'en' como valor padrão inicial para evitar renderização no servidor com valor diferente do cliente
  const [language, setLanguage] = useState('en');
  
  // Efeito para executar apenas no cliente
  useEffect(() => {
    // Envolver em try/catch para evitar erros caso o localStorage não esteja disponível
    try {
      // Tenta recuperar o idioma das preferências do usuário no localStorage
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        // Detecta o idioma do navegador como fallback
        const browserLanguage = navigator.language.split('-')[0];
        if (Object.keys(languages).includes(browserLanguage)) {
          setLanguage(browserLanguage);
        }
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Função para mudar idioma memoizada
  const changeLanguage = useMemo(() => (lang) => {
    if (Object.keys(languages).includes(lang)) {
      setLanguage(lang);
      try {
        localStorage.setItem('language', lang);
      } catch (error) {
        console.error('Error saving language to localStorage:', error);
      }
    }
  }, []);

  // Memoize o valor do contexto para evitar renderizações desnecessárias
  const contextValue = useMemo(() => {
    return { language, changeLanguage };
  }, [language, changeLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Em vez de lançar um erro, retornamos um valor padrão se estiver fora do Provider
  if (!context) {
    // Somente para log, não lançamos o erro
    console.warn('useLanguage was called outside of the LanguageProvider');
    
    // Retornamos um valor padrão que não interrompe a renderização
    return {
      language: 'en',
      changeLanguage: () => console.warn('Cannot change language outside of LanguageProvider')
    };
  }
  return context;
}
