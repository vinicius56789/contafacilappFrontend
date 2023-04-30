import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { propsStack, propsNavigationStack } from '../../../routes/stack/Models';

export default function CadastraConta() {

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "cadastraConta">>()

    const [infoContas, setInfoContas] = useState({})
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [dueDate, setDueDate] = useState('')

    const cadastro = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/bill/insert', {
            categoryId: '1',
            clientId : params.params.userId,
            constant: true,
            description: description,
            dueDate: dueDate,
            month: '05',
            paid: 'S',
            paidMonth: '05',
            reminder: 'N',
            title: title,
            value: value,
            year: '2023'
        }).then(({data}) => { 
            setInfoContas(data);
            navigation.navigate('bottom', {userId: params.params.userId, userName: params.params.userName})
        })
    }

    return(
    
        <KeyboardAvoidingView style={styles.backgroundTela}>

                <View style={styles.containerCorpo}>
                    
                    <Text style={styles.login}>CADASTRO DE CONTA</Text>
                    <TextInput
                        style={styles.texto}
                        placeholder='Título'
                        autoCorrect={true}
                        onChangeText={text => setTitle(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Descrição'
                        autoCorrect={true}
                        onChangeText={text => setDescription(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Valor'
                        autoCorrect={true}
                        onChangeText={text => setValue(text)}
                    />

                    <TextInput
                        style={styles.texto}
                        placeholder='Data de Vencimento'
                        autoCorrect={true}
                        onChangeText={text => setDueDate(text)}
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
