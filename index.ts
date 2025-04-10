import merge from 'lodash-es/merge';
import { type Config as TailwindConfig } from 'tailwindcss';
import twDefaultTheme from 'tailwindcss/defaultTheme';

import tokens from '@eduzz/ui-tokens';

import { hexToRgbVar } from './utils/hextToRgb';

type BrandColor = keyof typeof tokens.brands;
const defaultColor = {
  primary: `var(--eduzz-theme-primary, ${tokens.brands.eduzz.primary.pure})`,
  secondary: `var(--eduzz-theme-secondary, ${tokens.brands.eduzz.secondary.pure})`
};

export const defaultTheme = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', 'body[data-eduzz-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [tokens.font.family.base, ...twDefaultTheme.fontFamily.sans]
      },
      variables: {
        'DEFAULT': {
          surface: {
            subtle: hexToRgbVar(tokens.base.light.surface.subtle),
            default: hexToRgbVar(tokens.base.light.surface.default),
            disabled: hexToRgbVar(tokens.base.light.surface.disabled)
          },
          outline: {
            default: hexToRgbVar(tokens.base.light.outline.default),
            disabled: hexToRgbVar(tokens.base.light.outline.disabled),
            darker: hexToRgbVar(tokens.base.light.outline.darker)
          },
          content: {
            title: hexToRgbVar(tokens.base.light.content.title),
            body: hexToRgbVar(tokens.base.light.content.body),
            subtitle: hexToRgbVar(tokens.base.light.content.subtitle),
            caption: hexToRgbVar(tokens.base.light.content.caption),
            negative: hexToRgbVar(tokens.base.light.content.negative),
            disabled: hexToRgbVar(tokens.base.light.content.disabled)
          }
        },
        'body[data-eduzz-theme="dark"]': {
          surface: {
            subtle: hexToRgbVar(tokens.base.dark.surface.subtle),
            default: hexToRgbVar(tokens.base.dark.surface.default),
            disabled: hexToRgbVar(tokens.base.dark.surface.disabled)
          },
          outline: {
            default: hexToRgbVar(tokens.base.dark.outline.default),
            disabled: hexToRgbVar(tokens.base.dark.outline.disabled),
            darker: hexToRgbVar(tokens.base.dark.outline.darker)
          },
          content: {
            title: hexToRgbVar(tokens.base.dark.content.title),
            body: hexToRgbVar(tokens.base.dark.content.body),
            subtitle: hexToRgbVar(tokens.base.dark.content.subtitle),
            caption: hexToRgbVar(tokens.base.dark.content.caption),
            negative: hexToRgbVar(tokens.base.dark.content.negative),
            disabled: hexToRgbVar(tokens.base.dark.content.disabled)
          }
        }
      },
      colors: {
        'red': {
          100: tokens.antd.red[100],
          200: tokens.antd.red[200],
          300: tokens.antd.red[300],
          400: tokens.antd.red[400],
          500: tokens.antd.red[500],
          600: tokens.antd.red[600],
          700: tokens.antd.red[700],
          800: tokens.antd.red[800],
          900: tokens.antd.red[900],
          950: tokens.antd.red[950]
        },
        'green': {
          100: tokens.antd.green[100],
          200: tokens.antd.green[200],
          300: tokens.antd.green[300],
          400: tokens.antd.green[400],
          500: tokens.antd.green[500],
          600: tokens.antd.green[600],
          700: tokens.antd.green[700],
          800: tokens.antd.green[800],
          900: tokens.antd.green[900],
          950: tokens.antd.green[950]
        },
        'blue': {
          100: tokens.antd.blue[100],
          200: tokens.antd.blue[200],
          300: tokens.antd.blue[300],
          400: tokens.antd.blue[400],
          500: tokens.antd.blue[500],
          600: tokens.antd.blue[600],
          700: tokens.antd.blue[700],
          800: tokens.antd.blue[800],
          900: tokens.antd.blue[900],
          950: tokens.antd.blue[950]
        },
        'orange': {
          100: tokens.antd.orange[100],
          200: tokens.antd.orange[200],
          300: tokens.antd.orange[300],
          400: tokens.antd.orange[400],
          500: tokens.antd.orange[500],
          600: tokens.antd.orange[600],
          700: tokens.antd.orange[700],
          800: tokens.antd.orange[800],
          900: tokens.antd.orange[900],
          950: tokens.antd.orange[950]
        },
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
        'surface': {
          subtle: 'rgb(var(--eduzz-ui-layout-surface-subtle) / <alpha-value>)',
          default: 'rgb(var(--eduzz-ui-layout-surface-default) / <alpha-value>)',
          disabled: 'rgb(var(--eduzz-ui-layout-surface-disabled) / <alpha-value>)'
        },
        'outline': {
          default: 'rgb(var(--eduzz-ui-layout-outline-default) / <alpha-value>)',
          disabled: 'rgb(var(--eduzz-ui-layout-outline-disabled) / <alpha-value>)',
          darker: 'rgb(var(--eduzz-ui-layout-outline-darker) / <alpha-value>)'
        },
        'content': {
          title: 'rgb(var(--eduzz-ui-layout-content-title) / <alpha-value>)',
          body: 'rgb(var(--eduzz-ui-layout-content-body) / <alpha-value>)',
          subtitle: 'rgb(var(--eduzz-ui-layout-content-subtitle) / <alpha-value>)',
          caption: 'rgb(var(--eduzz-ui-layout-content-caption) / <alpha-value>)',
          negative: 'rgb(var(--eduzz-ui-layout-content-negative) / <alpha-value>)',
          disabled: 'rgb(var(--eduzz-ui-layout-content-disabled) / <alpha-value>)'
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
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@mertasan/tailwindcss-variables')({ variablePrefix: '--eduzz-ui-layout' })]
};

export default function createTheme(
  config?: Partial<TailwindConfig> & {
    primaryColor?: BrandColor | `#${string}`;
    primaryColorDark?: `#${string}`;
  }
): TailwindConfig {
  const { primaryColor, primaryColorDark, ...override } = config!;

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
    } as Partial<TailwindConfig>,
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
