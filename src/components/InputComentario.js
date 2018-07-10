import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

// type Props = {};
export default class InputComentario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorComentario: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Adicione um comentário..."
                    underlineColorAndroid='transparent'
                    ref={input => this.inputComentario = input}
                    onChangeText={text => this.setState({ valorComentario: text })} />

                <TouchableOpacity onPress={() => {
                    this.props.comentarioCallback(this.props.idFoto, 
                        this.state.valorComentario, this.inputComentario);
                    this.setState({valorComentario: ''})
                }}>
                    <Image style={styles.icone}
                        source={require('../../resources/img/send.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    input: {
        flex: 1,
        height: 40,
    },
    icone: {
        width: 30,
        height: 30
    }
})
