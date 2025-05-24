import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { wardrobeSlice } from './slices/wardrobeSlice';
import { socialSlice } from './slices/socialSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    wardrobe: wardrobeSlice.reducer,
    social: socialSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 