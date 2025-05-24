import { colors, type ColorKey } from './colors';
import { fonts, fontSizes, lineHeights, textStyles } from './typography';
import { spacing, borderRadius, shadows } from './spacing';

export { colors, type ColorKey } from './colors';
export { fonts, fontSizes, lineHeights, textStyles } from './typography';
export { spacing, borderRadius, shadows } from './spacing';

export const theme = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  textStyles,
  spacing,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme; 