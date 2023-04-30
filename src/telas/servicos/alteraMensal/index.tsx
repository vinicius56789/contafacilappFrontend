import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { propsStack, propsNavigationStack } from '../../../routes/stack/Models';

export default function AlteraMensal(){

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "alteraMensal">>()

    const [salary, setSalary] = useState('')
    const [ticket, setTicket] = useState('')

    const altera = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/monthlyIncome/update', {
            salary : salary,
            ticket: ticket,
            monthlyIncomeId: params.params.id
        }).then(({data}) => { 
            navigation.navigate('bottom', {userId: params.params.userId, userName: params.params.userName})
        })
    }

    return(
        <KeyboardAvoidingView style={styles.backgroundTela}>

            <View style={styles.containerCorpo}>

            <Text style={styles.login}>ATUALIZAR RENDA MENSAL</Text>

            <TextInput
                style={styles.texto}
                placeholder='Salário'
                autoCorrect={true}
                onChangeText={text => setSalary(text)}
            />

            <TextInput
                style={styles.texto}
                placeholder='Ticket'
                autoCorrect={true}
                onChangeText={text => setTicket(text)}
            />

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => altera()}
            >
                <Text style={styles.textoBotao}>ATUALIZAR</Text>
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
    containerCorpo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
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
    login:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})