'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef, useCallback } from 'react';

// Importações estáticas para evitar carregamento dinâmico que pode causar problemas
import enTranslations from '@/translations/en';
import ptTranslations from '@/translations/pt';
import esTranslations from '@/translations/es';

const translationMap = {
  en: enTranslations,
  pt: ptTranslations,
  es: esTranslations
};

export function useTranslation() {
  // Capturar qualquer erro que possa ocorrer ao acessar o contexto de idioma
  let languageValue = 'en';
  try {
    const { language } = useLanguage();
    languageValue = language;
  } catch (error) {
    console.warn('Error accessing language context:', error);
    // Fallback para inglês se não conseguir acessar o contexto
  }
  
  const [isLoading, setIsLoading] = useState(false);
  const translationsRef = useRef(translationMap.en); // Default to English

  // Carrega as traduções imediatamente do objeto pré-carregado
  useEffect(() => {
    try {
      // Usa a referência estática em vez de carregamento dinâmico
      if (translationMap[languageValue]) {
        translationsRef.current = translationMap[languageValue];
      } else {
        console.warn(`No translations found for ${languageValue}, fallback to English`);
        translationsRef.current = translationMap.en;
      }
    } catch (error) {
      console.error(`Error setting translations for ${languageValue}:`, error);
      translationsRef.current = translationMap.en;
    }
  }, [languageValue]);

  // Função de tradução memoizada para melhor performance
  const t = useCallback((key) => {
    if (!key) return '';
    // Usa a referência para acessar traduções atuais
    const translation = translationsRef.current[key];
    return translation || key; // Fallback para a chave se tradução não existir
  }, []);

  return { t, isLoading };
}
