export interface OutfitItem {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'shoes' | 'accessory';
  imageUrl: string;
  brand?: string;
  color: string;
  size: string;
}

export interface TryOnResult {
  id: string;
  userImageUrl: string;
  outfitItems: OutfitItem[];
  resultImageUrl: string;
  confidence: number;
  timestamp: string;
}

export interface AITryOnState {
  isProcessing: boolean;
  currentResult: TryOnResult | null;
  history: TryOnResult[];
  error: string | null;
}

export interface OutfitRecommendation {
  id: string;
  name: string;
  items: OutfitItem[];
  occasion: string;
  confidence: number;
  styleMatch: number;
} 