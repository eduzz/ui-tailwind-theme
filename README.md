# Eduzz UI: Tailwind Theme

[![version](https://img.shields.io/npm/v/@eduzz/ui-tailwind-theme)](https://www.npmjs.com/package/@eduzz/ui-tailwind-theme)
[![size](https://img.shields.io/bundlephobia/min/@eduzz/ui-tailwind-theme)](https://www.npmjs.com/package/@eduzz/ui-tailwind-theme)

Aplica os Tokens de UI da Eduzz no Tailwind.

## Instalação

```bash
yarn add @eduzz/ui-tailwind-theme
```

## Uso

```js
// tailwind.config.js
import createTheme from '@eduzz/ui-tailwind-theme';

export default createTheme({
  primaryColor: 'eduzz', // Não obrigatório, default var(--eduzz-theme-primary, ${tokens.brands.eduzz.primary.pure})
  primaryColorDark: 'eduzz', // Não obrigatório, default var(--eduzz-theme-primary, ${tokens.brands.eduzz.primary.pure})
  ///...sua configuração do tailwind, tudo poderá ser sobrescrito.
  // Não se preocupe com objectos complexos que ele fará merge de tudo
});
```