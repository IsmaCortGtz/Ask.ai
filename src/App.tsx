import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import HomePage from '@/pages/Home';
import theme from '@/constants/theme';
import DownloadsPage from './pages/Downloads';
import ChatPage from './pages/Chat';
import T2extSpeechPage from './pages/T2extSpeech';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Features"
      screenOptions={{
        animation: 'shift',
        tabBarActiveTintColor: theme.accentColor,
        sceneStyle: {
          backgroundColor: theme.BackgroundColor,
        },
        tabBarStyle: {
          backgroundColor: theme.primarySurface,
          borderTopWidth: 1,
          borderColor: theme.borderColor,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
        },
        headerStyle: {
          backgroundColor: theme.BackgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: theme.accentColor,
        },
        headerTitleStyle: {
          color: theme.primaryText,
          fontSize: 34,
          fontWeight: 'bold',
          paddingBottom: 4,
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Features"
        component={HomePage}
        options={{
          title: 'AI Features',
          tabBarLabel: 'Features',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => <MaterialDesignIcons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadsPage}
        options={{
          title: 'AI Downloads',
          tabBarLabel: 'Downloads',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => <MaterialDesignIcons name="download" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="(tabs)"
      screenOptions={{
        animation: 'slide_from_bottom',
        headerStyle: {
          backgroundColor: theme.BackgroundColor,
        },
        headerTitleStyle: {
          color: theme.primaryText,
        },
        headerTintColor: theme.primaryText,
      }}
    >
      <Stack.Screen name="(tabs)" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Chat"
        component={ChatPage}
        options={{
          title: 'Chat',
          contentStyle: {
            borderTopWidth: 1,
            borderTopColor: theme.accentColor,
            backgroundColor: theme.accentColor,
          },
        }}
      />
      <Stack.Screen
        name="Text2Speech"
        component={T2extSpeechPage}
        options={{
          title: 'Text2Speech',
          contentStyle: {
            borderTopWidth: 1,
            borderTopColor: theme.accentColor,
            backgroundColor: theme.accentColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
