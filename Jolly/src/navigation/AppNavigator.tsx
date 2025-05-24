import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import { HomeScreen } from '../screens/HomeScreen';
import { WardrobeScreen } from '../screens/WardrobeScreen';
import { AITryOnScreen } from '../screens/AITryOnScreen';
import { SwapScreen } from '../screens/SwapScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

// Import types
import { RootTabParamList, RootStackParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2A2A2A',
          borderTopColor: '#404040',
        },
        tabBarActiveTintColor: '#FF5CA7',
        tabBarInactiveTintColor: '#8A8A8A',
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: () => null, // Add icon later
        }}
      />
      <Tab.Screen 
        name="Wardrobe" 
        component={WardrobeScreen}
        options={{
          tabBarIcon: () => null, // Add icon later
        }}
      />
      <Tab.Screen 
        name="AI Try-On" 
        component={AITryOnScreen}
        options={{
          tabBarIcon: () => null, // Add icon later
        }}
      />
      <Tab.Screen 
        name="Swap" 
        component={SwapScreen}
        options={{
          tabBarIcon: () => null, // Add icon later
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: () => null, // Add icon later
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}; 