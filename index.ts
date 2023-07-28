import merge from 'lodash-es/merge';
import twDefaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss/types/config';

import tokens from '@eduzz/ui-tokens';

type BrandColor = keyof typeof tokens.brands;
const defaultColor = {
  primary: `var(--eduzz-theme-primary, ${tokens.brands.eduzz.primary.pure})`,
  secondary: `var(--eduzz-theme-secondary, ${tokens.brands.eduzz.secondary.pure})`
};

export const defaultTheme: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', 'body.eduzz-ui-dark-theme'],
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
        'belt-golden-foreground': tokens.belt.foreground.golden
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
