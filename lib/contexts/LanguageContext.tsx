'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageContextType, Language } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const languageData = useLanguage();

  const { language, changeLanguage, t, translations } = languageData

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
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