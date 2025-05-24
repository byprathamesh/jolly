export const fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  light: 'System',
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  '6xl': 48,
} as const;

export const lineHeights = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 32,
  '2xl': 36,
  '3xl': 40,
  '4xl': 44,
  '5xl': 48,
  '6xl': 60,
} as const;

export const textStyles = {
  h1: {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['4xl'],
    fontFamily: fonts.bold,
  },
  h2: {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['3xl'],
    fontFamily: fonts.bold,
  },
  h3: {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['2xl'],
    fontFamily: fonts.bold,
  },
  h4: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontFamily: fonts.medium,
  },
  body: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.base,
    fontFamily: fonts.regular,
  },
  bodyLarge: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontFamily: fonts.regular,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontFamily: fonts.regular,
  },
  caption: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontFamily: fonts.regular,
  },
  button: {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.base,
    fontFamily: fonts.medium,
  },
} as const; 