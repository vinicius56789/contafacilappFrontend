import React, {useState} from 'react';
import { KeyboardAvoidingView, TextInput, Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';
import { propsStack } from '../../../routes/stack/Models';

export default function LoginPage() {
    const navigation = useNavigation<propsStack>();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [infoLogin, setInfoLogin] = useState({})

    const checkLogin = async () => {
        try {
            const {data} = await axios.post('http://192.168.1.2:8085/contafacilapp/client/login', {
                email: email,
                password: senha
            })
            setInfoLogin(data)
            console.log(infoLogin)
            navigation.navigate("bottom", {userId : infoLogin.content.clientId, userName: infoLogin.content.name})
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <KeyboardAvoidingView style={styles.backgroundTela}>
                
                <View style={styles.containerCorpo}>
                    <View style={styles.containerLogo}>
                        <Image
                            source={require('./logo.png')} 
                            resizeMode='cover'
                        />
                    </View>
                    <Text style={styles.login}>FAÇA LOGIN</Text>
                    <TextInput
                        style={styles.texto}
                        placeholder='E-mail'
                        autoCorrect={false}
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Senha'
                        autoCorrect={false}
                        onChangeText={text => setSenha(text)}
                        secureTextEntry={true}
                    />
                    
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => checkLogin()}
                    >
                        <Text style={styles.textoBotao}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.navigate('cadastro')} style={styles.cadastre} >Não possui conta? Cadastre-se</Text>
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
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 35
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
