import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FirstText from './src/components/ClassObject/'
import SecondText from './src/components/Heranca';
import ThirdText from './src/components/Abstract';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aula reposição Sabado - Montagem de APP</Text>
      <FirstText />
      <SecondText />
      <ThirdText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#323232',
  },
  title: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 20,
    textAlign: 'center',
  },  
});

export default App;