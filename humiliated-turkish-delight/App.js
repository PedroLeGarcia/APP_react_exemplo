import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Aula reposição Sabado - Montagem de APP</Text>

      <Text style={[styles.p, styles.text1]}>A POO se baseia na criação de classes, que são modelos ou estruturas que definem os atributos (variáveis) e métodos (funções) que um objeto específico pode ter. Um objeto é uma instância de uma classe, ou seja, uma representação concreta dos dados e comportamentos definidos pela classe.</Text>

      <Text style={[styles.p, styles.text2]}>Abstração é o processo de simplificar complexidades, criando modelos que representam objetos do mundo real. Na POO, você cria classes e objetos que representam entidades do mundo real, mas simplifica essas entidades para incluir apenas os atributos e métodos relevantes para o problema que está sendo resolvido. Isso ajuda a criar um nível de abstração que torna o código mais compreensível e reutilizável.</Text>

      <Text style={[styles.p, styles.text3]}>Herança é um mecanismo que permite criar uma nova classe com base em uma classe existente, herdando seus atributos e métodos. Isso promove a reutilização de código e a organização hierárquica de classes. O polimorfismo permite que objetos de diferentes classes sejam tratados de maneira uniforme, desde que compartilhem uma interface comum. Isso facilita a flexibilidade e a extensibilidade do código.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  h2: {
    fontSize: 20,
    color: 'black',
    margin: 10,
    textAlign: 'center',
  },  
  p: {
    fontSize: 14,
    margin: 5,
    textAlign: 'justify',
  },
  text1: {
      color: 'red',
  },
  text2: {
      color: 'green',
  },  
  text3: {
      color: 'purple',
  },  
});

export default App;