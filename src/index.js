import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootNav from './navigation';
function App() {
  return (
    <SafeAreaProvider>
      <RootNav />
    </SafeAreaProvider>
  );
}

export default App;
