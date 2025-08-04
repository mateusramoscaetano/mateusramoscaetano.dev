# Sistema de Internacionalização (i18n)

Este projeto implementa um sistema simples e eficiente de internacionalização para suportar português (pt) e inglês (en).

## Estrutura

### Arquivos Principais

- `lib/translations.ts` - Dicionário de traduções
- `lib/hooks/useLanguage.ts` - Hook personalizado para gerenciar idioma
- `lib/contexts/LanguageContext.tsx` - Contexto React para compartilhar estado do idioma

### Como Funciona

1. **LanguageProvider**: Envolve toda a aplicação no `app/layout.tsx`
2. **useLanguageContext**: Hook usado nos componentes para acessar traduções
3. **localStorage**: Persiste a preferência de idioma do usuário

## Uso nos Componentes

### Exemplo Básico

```tsx
import { useLanguageContext } from "../../../lib/contexts/LanguageContext";

const MyComponent: React.FC = () => {
  const { translations, language, changeLanguage } = useLanguageContext();

  return (
    <div>
      <h1>{translations.hero.title}</h1>
      <button onClick={() => changeLanguage("en")}>Switch to English</button>
    </div>
  );
};
```

### Acessando Traduções

```tsx
// Acesso direto
{
  translations.hero.greeting;
}

// Usando função t() para chaves aninhadas
{
  t("hero.greeting");
}
```

## Adicionando Novas Traduções

### 1. Atualizar Interface

```tsx
// lib/translations.ts
export interface Translations {
  // ... outras seções
  newSection: {
    title: string;
    description: string;
  };
}
```

### 2. Adicionar Traduções

```tsx
export const translations: Record<Language, Translations> = {
  pt: {
    // ... outras traduções
    newSection: {
      title: "Título em Português",
      description: "Descrição em português",
    },
  },
  en: {
    // ... outras traduções
    newSection: {
      title: "Title in English",
      description: "Description in English",
    },
  },
};
```

### 3. Usar no Componente

```tsx
const { translations } = useLanguageContext();

return (
  <div>
    <h2>{translations.newSection.title}</h2>
    <p>{translations.newSection.description}</p>
  </div>
);
```

### Exemplo com Dados Traduzidos

```tsx
// Usando dados de experiência traduzidos
{
  translations.experience.data.map((exp) => (
    <div key={exp.id}>
      <h3>{exp.company}</h3>
      <p>{exp.position}</p>
      <p>{exp.description}</p>
    </div>
  ));
}

// Usando dados de projetos traduzidos
{
  translations.projects.data.map((project) => (
    <div key={project.id}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  ));
}
```

## Funcionalidades

### ✅ Implementado

- [x] Alternância entre PT/EN
- [x] Persistência no localStorage
- [x] Contexto React para estado global
- [x] Traduções para todos os componentes principais
- [x] Interface TypeScript para type safety

### 🔄 Traduções Disponíveis

- **Hero**: greeting, name, title, subtitle, experience, cta, downloadCV
- **About**: title, bio, technologies, more
- **Experience**: title, present, description, companies, yearsExperience, technologies, data (experiências profissionais)
- **Projects**: title, viewProject, viewCode, description, all, featured, interested, contact, highlight, data (projetos)
- **Contact**: title, subtitle, name, email, message, send, contactInfo, contactDescription, phone, location, socialMedia, sendMessage, namePlaceholder, emailPlaceholder, messagePlaceholder
- **Navigation**: about, experience, projects, contact

## Vantagens desta Implementação

1. **Simplicidade**: Sem dependências externas
2. **Performance**: Traduções carregadas uma vez
3. **Type Safety**: TypeScript garante consistência
4. **Manutenibilidade**: Fácil de adicionar novos idiomas
5. **UX**: Persistência da preferência do usuário
6. **Dados Centralizados**: Experiência e projetos traduzidos automaticamente

## Próximos Passos

Para adicionar mais idiomas:

1. Adicionar novo código de idioma no tipo `Language`
2. Implementar traduções no objeto `translations`
3. Atualizar interface `Translations` se necessário

```tsx
export type Language = "pt" | "en" | "es"; // Adicionar espanhol

export const translations: Record<Language, Translations> = {
  pt: {
    /* ... */
  },
  en: {
    /* ... */
  },
  es: {
    /* ... */
  }, // Novas traduções
};
```
