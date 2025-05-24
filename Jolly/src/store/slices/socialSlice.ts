import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string;
  tags: string[];
  likes: number;
  isLiked: boolean;
  createdAt: string;
}

interface UserProfile {
  id: string;
  username: string;
  avatar?: string;
  followers: number;
  following: number;
  posts: Post[];
}

interface SocialState {
  feed: Post[];
  userProfile: UserProfile | null;
  discoveredProfiles: UserProfile[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SocialState = {
  feed: [],
  userProfile: null,
  discoveredProfiles: [],
  isLoading: false,
  error: null,
};

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFeed: (state, action: PayloadAction<Post[]>) => {
      state.feed = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.feed.unshift(action.payload);
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const post = state.feed.find(p => p.id === action.payload);
      if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
      }
    },
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setLoading,
  setFeed,
  addPost,
  toggleLike,
  setUserProfile,
  setError,
} = socialSlice.actions; 