export interface SocialUser {
  id: string;
  username: string;
  displayName: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  email: string;
  followers: number;
  following: number;
  postsCount: number;
  isVerified: boolean;
  isPrivate: boolean;
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
    pinterest?: string;
    website?: string;
  };
  interests: string[];
  location?: string;
  joinedAt: string;
}

export interface SocialPost {
  id: string;
  userId: string;
  user: SocialUser;
  title?: string;
  description?: string;
  images: string[];
  tags: string[];
  category: PostCategory;
  style: StyleTag[];
  occasion: string[];
  season: string[];
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
  isFollowing: boolean;
  visibility: 'public' | 'private' | 'followers';
  createdAt: string;
  updatedAt: string;
}

export type PostCategory = 
  | 'outfit' 
  | 'inspiration' 
  | 'haul' 
  | 'review' 
  | 'styling-tip' 
  | 'diy' 
  | 'before-after';

export type StyleTag = 
  | 'minimalist' 
  | 'boho' 
  | 'streetwear' 
  | 'vintage' 
  | 'preppy' 
  | 'gothic' 
  | 'sporty' 
  | 'formal' 
  | 'casual' 
  | 'trendy';

export interface SocialComment {
  id: string;
  postId: string;
  userId: string;
  user: SocialUser;
  content: string;
  likes: number;
  isLiked: boolean;
  parentId?: string; // For nested replies
  replies?: SocialComment[];
  createdAt: string;
}

export interface SocialBoard {
  id: string;
  userId: string;
  name: string;
  description?: string;
  coverImage?: string;
  posts: string[]; // Array of post IDs
  isPublic: boolean;
  followers: number;
  createdAt: string;
  updatedAt: string;
}

export interface SocialFeed {
  posts: SocialPost[];
  hasMore: boolean;
  isLoading: boolean;
  refreshing: boolean;
  lastUpdated: string;
}

export interface SocialNotification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'save';
  message: string;
  relatedUser: SocialUser;
  relatedPost?: SocialPost;
  isRead: boolean;
  createdAt: string;
}

export interface SocialState {
  currentUser: SocialUser | null;
  feed: SocialFeed;
  discoverFeed: SocialFeed;
  userPosts: SocialPost[];
  savedPosts: SocialPost[];
  boards: SocialBoard[];
  followers: SocialUser[];
  following: SocialUser[];
  notifications: SocialNotification[];
  isLoading: boolean;
  error: string | null;
} 