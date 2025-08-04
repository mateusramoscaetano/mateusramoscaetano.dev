'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../translations';

interface LanguageContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => any;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const languageData = useLanguage();

  const { language, changeLanguage, t, translations } = languageData

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: (key: string) => t(key as any),
        translations
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}; 