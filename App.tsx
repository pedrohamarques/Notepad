import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppRoutes } from './src/routes/tab.routes';

export default function App() {
  return (
        <GestureHandlerRootView>
    <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
