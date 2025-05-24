export interface SwapPost {
  id: string;
  userId: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  category: 'GRWM' | 'outfit' | 'haul' | 'review';
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SwapUser {
  id: string;
  username: string;
  displayName: string;
  avatar?: string;
  followers: number;
  following: number;
  isFollowing: boolean;
  isVerified: boolean;
}

export interface SwapComment {
  id: string;
  postId: string;
  userId: string;
  user: SwapUser;
  content: string;
  likes: number;
  isLiked: boolean;
  createdAt: string;
}

export interface AffiliateLink {
  id: string;
  postId: string;
  productName: string;
  productUrl: string;
  price: number;
  currency: string;
  retailer: string;
  imageUrl?: string;
  isAvailable: boolean;
}

export interface SwapFeed {
  posts: SwapPost[];
  hasMore: boolean;
  isLoading: boolean;
  refreshing: boolean;
}

export interface SwapState {
  feed: SwapFeed;
  currentPost: SwapPost | null;
  comments: SwapComment[];
  affiliateLinks: AffiliateLink[];
  savedPosts: string[];
  isLoading: boolean;
  error: string | null;
} 