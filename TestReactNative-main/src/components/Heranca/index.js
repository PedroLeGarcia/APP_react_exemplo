import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondText = () => {
    return (
        <View>
            <Text style={[styles.paragraph, styles.green]}>Herança: é um mecanismo que permite que uma classe herde propriedades e métodos de outra classe. Isso significa que você pode criar uma nova classe com base em uma classe existente, aproveitando suas características e comportamentos, e, ao mesmo tempo, estender ou especializar a nova classe adicionando ou modificando suas próprias características e comportamentos. A herança promove a reutilização de código e ajuda a criar hierarquias de classes, onde classes filhas herdam características de classes pai, criando uma relação de "é-um" entre elas. Isso facilita a modelagem de sistemas complexos e a manutenção do código.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'justify',
    },
    green: {
        color: 'green',
    },
})

export default SecondText;
