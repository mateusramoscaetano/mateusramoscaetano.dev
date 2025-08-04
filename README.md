# 🚀 Portfolio Profissional - Mateus Ramos Caetano

Um portfólio profissional moderno e responsivo desenvolvido com Next.js 15, TypeScript e Tailwind CSS v4, seguindo o design system inspirado no estilo do Nikita Khvatov.

## ✨ Características

- **Design Moderno**: Interface minimalista e elegante com tema escuro
- **Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Construído com Next.js 15 e otimizações de performance
- **Acessibilidade**: Seguindo padrões WCAG 2.1
- **SEO Otimizado**: Meta tags e estrutura semântica
- **TypeScript**: Tipagem forte em todo o projeto
- **Tailwind CSS v4**: Estilização moderna e customizável

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações suaves

### Arquitetura
- **SOLID Principles** - Princípios de design de software
- **Component-Based** - Arquitetura baseada em componentes
- **Single Responsibility** - Cada componente tem uma única responsabilidade

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── ui/                # Componentes base reutilizáveis
│   │   ├── Button/        # Botões
│   │   ├── Card/          # Cards
│   │   ├── Badge/         # Badges/Tags
│   │   └── Container/     # Container
│   ├── layout/            # Componentes de layout
│   │   ├── Header/        # Cabeçalho
│   │   └── Footer/        # Rodapé
│   └── sections/          # Seções da página
│       ├── Hero/          # Seção hero
│       ├── About/         # Sobre mim
│       ├── Experience/    # Experiência
│       ├── Projects/      # Projetos
│       └── Contact/       # Contato
├── lib/
│   ├── types.ts           # Tipos TypeScript
│   ├── constants.ts       # Dados da aplicação
│   └── utils.ts           # Funções utilitárias
└── data/                  # Dados estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/mateusramoscaetano/portfolio.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Design System

### Paleta de Cores
- **Backgrounds**: `bg-gray-950`, `bg-gray-900`, `bg-gray-800`
- **Textos**: `text-white`, `text-gray-100`, `text-gray-400`
- **Acentos**: `bg-violet-500`, `bg-blue-500`, `bg-pink-500`
- **Bordas**: `border-gray-700`, `border-gray-600`

### Tipografia
- **Principal**: Fira Code (monospace) para elementos técnicos
- **Secundária**: Inter (sans-serif) para textos gerais
- **Escala**: `text-6xl` (hero), `text-4xl` (seções), `text-2xl` (subsecções)

### Componentes
- Cards com `rounded-2xl` e hover effects sutis
- Botões circulares com ícones e transições suaves
- Grid responsivo com `gap-6` e `gap-8`
- Tags de tecnologia com `rounded-full` e `bg-gray-800`

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Layout Responsivo
- Grid de 1 coluna no mobile, 2-3 colunas no desktop
- Navigation hamburger no mobile
- Cards stack verticalmente no mobile
- Textos e espaçamentos adaptáveis

## ⚡ Performance e SEO

### Otimizações
- Lazy loading para imagens
- Componentes otimizados com React.memo
- Bundle splitting automático do Next.js
- Metadata dinâmica para SEO
- Sitemap e robots.txt

### Acessibilidade
- Contraste adequado (WCAG 2.1)
- Navegação por teclado
- Alt text em imagens
- Semantic HTML
- ARIA labels apropriados

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📝 Personalização

### Dados do Portfolio
Edite o arquivo `lib/constants.ts` para personalizar:
- Informações pessoais
- Experiência profissional
- Projetos
- Habilidades técnicas

### Estilos
Modifique `app/globals.css` para customizar:
- Cores do tema
- Tipografia
- Componentes base

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte completo
- **Railway**: Deploy simples

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de submeter um pull request.

## 📞 Contato

- **Email**: mateus@example.com
- **LinkedIn**: [mateusramoscaetano](https://linkedin.com/in/mateusramoscaetano)
- **GitHub**: [mateusramoscaetano](https://github.com/mateusramoscaetano)

---

Feito com ❤️ usando Next.js e Tailwind CSS
