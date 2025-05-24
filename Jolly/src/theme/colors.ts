export const colors = {
  // Primary colors
  background: '#181818',
  accent: '#FF5CA7',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textTertiary: '#8A8A8A',
  
  // UI colors
  surface: '#2A2A2A',
  surfaceElevated: '#3A3A3A',
  border: '#404040',
  borderActive: '#FF5CA7',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  
  // Gradient colors
  gradientStart: '#FF5CA7',
  gradientEnd: '#FF8CC8',
  
  // Social colors
  pinterest: '#E60023',
  instagram: '#E4405F',
  tiktok: '#000000',
} as const;

export type ColorKey = keyof typeof colors; 