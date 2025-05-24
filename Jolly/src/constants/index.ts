export { ROUTES } from './routes';

export const APP_CONFIG = {
  APP_NAME: 'Jolly',
  VERSION: '1.0.0',
  API_TIMEOUT: 10000,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_FORMATS: ['jpg', 'jpeg', 'png', 'webp'],
} as const;

export const STORAGE_KEYS = {
  USER_TOKEN: '@jolly/user_token',
  USER_PROFILE: '@jolly/user_profile',
  WARDROBE_CACHE: '@jolly/wardrobe_cache',
  THEME_PREFERENCE: '@jolly/theme_preference',
} as const; 