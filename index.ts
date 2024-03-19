import fs from 'fs';

import merge from 'lodash-es/merge';
import twDefaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss/types/config';

import tokens from '@eduzz/ui-tokens';

import { hexToRgbVar } from './utils/hextToRgb';

type BrandColor = keyof typeof tokens.brands;
const defaultColor = {
  primary: `var(--eduzz-theme-primary, ${tokens.brands.eduzz.primary.pure})`,
  secondary: `var(--eduzz-theme-secondary, ${tokens.brands.eduzz.secondary.pure})`
};

function writeCssThemeFile() {
  const cssThemeDefinition = `
  :root {
    --eduzz-ui-layout-background-color-1: ${hexToRgbVar(tokens.base.light.background[1])};
    --eduzz-ui-layout-background-color-2: ${hexToRgbVar(tokens.base.light.background[2])};
    --eduzz-ui-layout-background-color-3: ${hexToRgbVar(tokens.base.light.background[3])};
    --eduzz-ui-layout-background-color-4: ${hexToRgbVar(tokens.base.light.background[4])};

    --eduzz-ui-layout-outline-color-1: ${hexToRgbVar(tokens.base.light.outline[1])};
    --eduzz-ui-layout-outline-color-2: ${hexToRgbVar(tokens.base.light.outline[2])};
    --eduzz-ui-layout-outline-color-3: ${hexToRgbVar(tokens.base.light.outline[3])};

    --eduzz-ui-layout-content-color-1: ${hexToRgbVar(tokens.base.light.content[1])};
    --eduzz-ui-layout-content-color-2: ${hexToRgbVar(tokens.base.light.content[2])};
    --eduzz-ui-layout-content-color-3: ${hexToRgbVar(tokens.base.light.content[3])};
    --eduzz-ui-layout-content-color-4: ${hexToRgbVar(tokens.base.light.content[4])};
    --eduzz-ui-layout-content-color-5: ${hexToRgbVar(tokens.base.light.content[5])};
    --eduzz-ui-layout-content-color-6: ${hexToRgbVar(tokens.base.light.content[6])};
  }

  body[data-eduzz-theme="dark"] {
    --eduzz-ui-layout-background-color-1: ${hexToRgbVar(tokens.base.dark.background[1])};
    --eduzz-ui-layout-background-color-2: ${hexToRgbVar(tokens.base.dark.background[2])};
    --eduzz-ui-layout-background-color-3: ${hexToRgbVar(tokens.base.dark.background[3])};
    --eduzz-ui-layout-background-color-4: ${hexToRgbVar(tokens.base.dark.background[4])};

    --eduzz-ui-layout-outline-color-1: ${hexToRgbVar(tokens.base.dark.outline[1])};
    --eduzz-ui-layout-outline-color-2: ${hexToRgbVar(tokens.base.dark.outline[2])};
    --eduzz-ui-layout-outline-color-3: ${hexToRgbVar(tokens.base.dark.outline[3])};

    --eduzz-ui-layout-content-color-1: ${hexToRgbVar(tokens.base.dark.content[1])};
    --eduzz-ui-layout-content-color-2: ${hexToRgbVar(tokens.base.dark.content[2])};
    --eduzz-ui-layout-content-color-3: ${hexToRgbVar(tokens.base.dark.content[3])};
    --eduzz-ui-layout-content-color-4: ${hexToRgbVar(tokens.base.dark.content[4])};
    --eduzz-ui-layout-content-color-5: ${hexToRgbVar(tokens.base.dark.content[5])};
    --eduzz-ui-layout-content-color-6: ${hexToRgbVar(tokens.base.dark.content[6])};
  }`;

  fs.writeFileSync(`${__dirname}/style.css`, cssThemeDefinition);
}

export const defaultTheme: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', 'body[data-eduzz-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [tokens.font.family.base, ...twDefaultTheme.fontFamily.sans]
      },
      colors: {
        'belt-white': tokens.belt.background.white,
        'belt-red': tokens.belt.background.red,
        'belt-orange': tokens.belt.background.orange,
        'belt-green': tokens.belt.background.green,
        'belt-black': tokens.belt.background.black,
        'belt-golden': tokens.belt.background.golden,
        'belt-white-foreground': tokens.belt.foreground.white,
        'belt-red-foreground': tokens.belt.foreground.red,
        'belt-orange-foreground': tokens.belt.foreground.orange,
        'belt-green-foreground': tokens.belt.foreground.green,
        'belt-black-foreground': tokens.belt.foreground.black,
        'belt-golden-foreground': tokens.belt.foreground.golden,
        'background': {
          1: 'rgb(var(--eduzz-ui-layout-background-color-1) / <alpha-value>)',
          2: 'rgb(var(--eduzz-ui-layout-background-color-2) / <alpha-value>)',
          3: 'rgb(var(--eduzz-ui-layout-background-color-3) / <alpha-value>)',
          4: 'rgb(var(--eduzz-ui-layout-background-color-4) / <alpha-value>)'
        },
        'outline': {
          1: 'rgb(var(--eduzz-ui-layout-outline-color-1) / <alpha-value>)',
          2: 'rgb(var(--eduzz-ui-layout-outline-color-2) / <alpha-value>)',
          3: 'rgb(var(--eduzz-ui-layout-outline-color-3) / <alpha-value>)'
        },
        'content': {
          1: 'rgb(var(--eduzz-ui-layout-content-color-1) / <alpha-value>)',
          2: 'rgb(var(--eduzz-ui-layout-content-color-2) / <alpha-value>)',
          3: 'rgb(var(--eduzz-ui-layout-content-color-3) / <alpha-value>)',
          4: 'rgb(var(--eduzz-ui-layout-content-color-4) / <alpha-value>)',
          5: 'rgb(var(--eduzz-ui-layout-content-color-5) / <alpha-value>)',
          6: 'rgb(var(--eduzz-ui-layout-content-color-6) / <alpha-value>)'
        }
      },
      screens: {
        'sm': tokens.breakpoints.sm,
        'md': tokens.breakpoints.md,
        'lg': tokens.breakpoints.lg,
        'xl': tokens.breakpoints.xl,
        '2xl': tokens.breakpoints.xxl
      },
      fontSize: {
        'xs': tokens.font.size.xxxs,
        'sm': tokens.font.size.xxs,
        'base': tokens.font.size.xs,
        'xl': tokens.font.size.sm,
        '2xl': tokens.font.size.md,
        '3xl': tokens.font.size.lg,
        '4xl': tokens.font.size.xl
      }
    }
  }
};

export default function createTheme(
  config?: Partial<Config> & {
    primaryColor?: BrandColor | `#${string}`;
    primaryColorDark?: `#${string}`;
  }
) {
  const { primaryColor, primaryColorDark, ...override } = config ?? {};

  const colors = resolveColor(primaryColor);
  const darkColors = resolveColor(primaryColorDark);

  return merge(
    defaultTheme,
    {
      theme: {
        extend: {
          colors: {
            'primary': colors.primary,
            'secondary': colors.secondary,
            'primary-dark': darkColors.primary,
            'secondary-dark': darkColors.secondary
          }
        }
      }
    } as Partial<Config>,
    override
  );
}

function resolveColor(color?: BrandColor | `#${string}`) {
  if (!color) {
    return defaultColor;
  }

  if (color.startsWith('#')) {
    return {
      primary: color,
      secondary: defaultColor.secondary
    };
  }

  const brandColor = color as BrandColor;

  return {
    primary: tokens.brands[brandColor]?.primary.pure ?? defaultColor.primary,
    secondary: tokens.brands[brandColor]?.secondary.pure ?? defaultColor.secondary
  };
}

writeCssThemeFile();
