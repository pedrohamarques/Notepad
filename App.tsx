import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/tab.routes';

export default function App() {
  return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
  );
}
