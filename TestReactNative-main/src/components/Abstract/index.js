import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdText = () => {
    return (
        <View>
            <Text style={[styles.paragraph, styles.red]}>Abstração: é o conceito de simplificar complexidades e focar apenas nos aspectos mais relevantes de um objeto. Ela envolve a criação de classes e objetos que representam entidades do mundo real, capturando apenas os detalhes essenciais e ocultando os detalhes irrelevantes. Em outras palavras, a abstração permite que você modele objetos de forma a destacar apenas as características e comportamentos significativos, tornando mais fácil entender e manipular esses objetos em seu código.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'justify',
    },
    red: {
        color: 'red',
    },
});

export default ThirdText;
