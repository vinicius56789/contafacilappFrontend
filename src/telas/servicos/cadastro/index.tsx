import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import React, { useState } from 'react'
import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { propsStack } from '../../../routes/stack/Models';

export default function Cadastro() {

    const navigation = useNavigation<propsStack>();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [occupation, setOccupation] = useState('')
    const [password, setPassword] = useState('')

    const cadastro = async () => {
        try {
            const {data} = await axios.post('http://192.168.1.2:8085/contafacilapp/client/insert', {
                name: name,
                email: email,
                age: age,
                occupation: occupation,
                password: password
            })
            navigation.navigate("login")
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <KeyboardAvoidingView style={styles.backgroundTela}>

                <View style={styles.containerCorpo}>
                    
                    <Text style={styles.login}>CADASTRE-SE</Text>
                    
                    <TextInput
                        style={styles.texto}
                        placeholder='Nome'
                        autoCorrect={true}
                        onChangeText={text => setName(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Email'
                        autoCorrect={true}
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Idade'
                        autoCorrect={true}
                        onChangeText={text => setAge(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Ocupação'
                        autoCorrect={true}
                        onChangeText={text => setOccupation(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Senha'
                        autoCorrect={true}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => cadastro()}
                    >
                        <Text style={styles.textoBotao}>CADASTRAR</Text>
                    </TouchableOpacity>
                    
                </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    backgroundTela:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    containerLogo:{
        justifyContent: 'center'
    },
    containerCorpo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    texto:{
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        
    },
    botao:{
        backgroundColor: '#1554F6',
        width: '40%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    textoBotao:{
        color: '#FFF',
        fontSize: 18
    },
    cadastre:{
        marginTop: 10,
        color: '#1554F6'
    },
    login:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});