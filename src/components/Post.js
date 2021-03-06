import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';
import InputComentario from './InputComentario';
import Likes from './Likes';
import Comentario from './Comentario'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

// type Props = {};
export default class Post extends Component {
    exibeLegenda(foto) {
        if (foto.comentario === '')
            return;

        return <Comentario usuario={foto.loginUsuario}
            texto={foto.comentario} />
    }

    render() {
        const { foto, likeCallback, comentarioCallback } = this.props;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }}
                    style={styles.foto} />

                <View style={styles.rodape}>
                    <Likes foto={foto} likeCallback={likeCallback} />
                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario =>
                        <Comentario key={comentario.id}
                            usuario={comentario.login} texto={comentario.texto} />
                    )}

                    <InputComentario idFoto={foto.id}
                        comentarioCallback={comentarioCallback} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width: width,
        height: height
    },
    rodape: {
        margin: 10
    }
});