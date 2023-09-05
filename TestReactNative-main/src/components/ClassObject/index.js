import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstText = () => {
    return (
        <View>
            <Text style={[styles.paragraph, styles.blueText]}>Classes e Objetos: classes são modelos ou protótipos que definem a estrutura e o comportamento de objetos. Elas servem como um plano ou blueprint para criar objetos. As classes especificam quais atributos um objeto pode ter e quais métodos ele pode executar. Objetos, por outro lado, são instâncias concretas das classes. Eles representam entidades do mundo real com características específicas definidas pela classe. Os objetos têm seus próprios valores para os atributos da classe e podem invocar os métodos definidos na classe para realizar ações relacionadas a esses objetos.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'justify',
    },
    blueText: {
        color: 'purple',
    },
});

export default FirstText;