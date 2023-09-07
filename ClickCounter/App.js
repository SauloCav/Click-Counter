import React from 'react';
import { View } from 'react-native';
import ClickCounter from './Components/ClickCounterComponent';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ClickCounter />
    </View>
  );
};

export default App;