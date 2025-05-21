import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '@/App';
import theme from '@/constants/theme';
import DownloadsProvider from './hooks/downloads/Provider';
import ToastManager from 'toastify-react-native';


export default function RootLayout() {
  return (
    <NavigationContainer>
      <DownloadsProvider>
        <StatusBar backgroundColor={theme.BackgroundColor} barStyle={'light-content'} animated />
        <App />
        <ToastManager />
      </DownloadsProvider>
    </NavigationContainer>
  );
}
