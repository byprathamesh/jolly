export type RootTabParamList = {
  Home: undefined;
  Wardrobe: undefined;
  'AI Try-On': undefined;
  Swap: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  Onboarding: undefined;
};

export type FeatureStackParamList = {
  // AI Try-On Feature
  AITryOnHome: undefined;
  AITryOnCamera: undefined;
  AITryOnResults: {
    imageUri: string;
    outfitId: string;
  };
  
  // Wardrobe Feature
  WardrobeHome: undefined;
  WardrobeAdd: undefined;
  WardrobeDetail: {
    itemId: string;
  };
  
  // Swap Feature
  SwapFeed: undefined;
  SwapDetail: {
    postId: string;
  };
  SwapCreate: undefined;
  
  // Social Feature
  SocialProfile: {
    userId: string;
  };
  SocialPost: {
    postId: string;
  };
}; 