import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClothingItem {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'shoes' | 'accessories' | 'outerwear';
  brand?: string;
  color: string;
  size: string;
  imageUrl: string;
  price?: number;
  purchaseDate?: string;
  tags: string[];
  isFavorite: boolean;
}

interface WardrobeState {
  items: ClothingItem[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: WardrobeState = {
  items: [],
  categories: ['tops', 'bottoms', 'shoes', 'accessories', 'outerwear'],
  isLoading: false,
  error: null,
};

export const wardrobeSlice = createSlice({
  name: 'wardrobe',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<ClothingItem[]>) => {
      state.items = action.payload;
      state.error = null;
    },
    addItem: (state, action: PayloadAction<ClothingItem>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<ClothingItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.isFavorite = !item.isFavorite;
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setLoading,
  setItems,
  addItem,
  updateItem,
  removeItem,
  toggleFavorite,
  setError,
} = wardrobeSlice.actions; 