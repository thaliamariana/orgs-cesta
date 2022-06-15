import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/texto';
import Botao from '../../../componentes/botao';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>

        <Botao>{ botao }</Botao>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})