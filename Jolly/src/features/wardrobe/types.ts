export interface WardrobeItem {
  id: string;
  name: string;
  category: ClothingCategory;
  subcategory?: string;
  brand?: string;
  color: string;
  size: string;
  price?: number;
  purchaseDate?: string;
  images: string[];
  tags: string[];
  isFavorite: boolean;
  timesWorn: number;
  lastWorn?: string;
  season: Season[];
  occasion: Occasion[];
  careInstructions?: string;
  notes?: string;
  condition: 'new' | 'excellent' | 'good' | 'fair' | 'poor';
  createdAt: string;
  updatedAt: string;
}

export type ClothingCategory = 
  | 'tops' 
  | 'bottoms' 
  | 'dresses' 
  | 'outerwear' 
  | 'shoes' 
  | 'accessories' 
  | 'undergarments' 
  | 'sleepwear' 
  | 'activewear';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export type Occasion = 
  | 'casual' 
  | 'work' 
  | 'formal' 
  | 'party' 
  | 'date' 
  | 'workout' 
  | 'sleep' 
  | 'beach' 
  | 'travel';

export interface WardrobeOutfit {
  id: string;
  name: string;
  description?: string;
  items: string[]; // Array of WardrobeItem IDs
  occasion: Occasion[];
  season: Season[];
  isFavorite: boolean;
  timesWorn: number;
  lastWorn?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WardrobeStats {
  totalItems: number;
  totalValue: number;
  categoryBreakdown: Record<ClothingCategory, number>;
  mostWornItem: WardrobeItem | null;
  leastWornItems: WardrobeItem[];
  averageWearCount: number;
  totalOutfits: number;
}

export interface WardrobeFilter {
  category?: ClothingCategory;
  season?: Season[];
  occasion?: Occasion[];
  color?: string;
  brand?: string;
  isFavorite?: boolean;
  minPrice?: number;
  maxPrice?: number;
  condition?: WardrobeItem['condition'];
}

export interface WardrobeState {
  items: WardrobeItem[];
  outfits: WardrobeOutfit[];
  stats: WardrobeStats | null;
  filters: WardrobeFilter;
  selectedCategory: ClothingCategory | 'all';
  isLoading: boolean;
  error: string | null;
} 