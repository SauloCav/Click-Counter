import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>You've pressed the button {count} time(s)</Text>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClickCounter;
