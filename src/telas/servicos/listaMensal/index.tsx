import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { propsNavigationStack, propsStack } from '../../../routes/stack/Models';
import axios from 'axios';

export default function ListaMensal(){

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "mensal">>()

    const [total, setTotal] = useState(0)
    const [identify, setIdentify] = useState('')

    const mensal = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/monthlyIncome/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            setTotal(data.content[0].salary)
            setIdentify(data.content[0].monthlyIncomeId)
        })
    }

    useEffect(() => {
        axios.post('http://192.168.1.2:8085/contafacilapp/monthlyIncome/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            if(data.content[0] == undefined){
                cadastro()
            } else {
                setTotal(data.content[0].salary)
                setIdentify(data.content[0].monthlyIncomeId)
            }
        })
    }, [])

    
    const cadastro = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/monthlyIncome/insert', {
            clientId : params.params.id,
            salary: '0',
            ticket: '0',
            month: '05',
            year: '2023'
        }).then(({data}) => { 
            mensal()
        })
    }

    const zero = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/monthlyIncome/update', {
            salary : '0',
            ticket: '0',
            monthlyIncomeId: identify
        }).then(({data}) => { 
            setTotal(0)
        })
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.total}>
                    <Text style={{marginTop: 5, fontSize: 30, fontWeight: 'bold', color: 'green'}}>R$ {total}</Text>
            </View>

            <View style={styles.quadrado}>
                <View style={styles.quadro}>
                    <Text style={{marginTop: 30, fontSize: 16, fontWeight: 'bold', color: 'black'}} onPress={() => mensal()}>Renda Mensal</Text>
                    <Text style={{marginTop: 30, fontSize: 40, fontWeight: 'bold', color: 'black'}}>R$ {total}</Text>
                </View>
        
                <View style={styles.containerButtons}>            
                    <TouchableOpacity style={styles.alterar} onPress={() => navigation.navigate('alteraMensal', {userId: params.params.id, userName: params.params.userName, id: identify})}>
                        <Text style={styles.alterarTexto}>ALTERAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.excluir} onPress={() => zero()}>
                        <Text style={styles.excluirTexto}>ZERAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    total:{
        alignItems:'center',
        marginTop: 80,
        marginBottom: 100
    },
    container:{
        flex: 1,
        alignItems: 'center',
        
    },
    quadrado:{
        alignItems:'center',
        borderWidth: 1,
        width: '80%',
        borderRadius: 5,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'grey',
    },
    quadro:{
        alignItems: 'center',
        marginBottom: 30
    },
    containerButtons:{
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    alterar:{
        alignItems: 'center',
        backgroundColor: '#1554F6',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        height: 40,
        width: 80
    },
    alterarTexto:{
        color: 'white'
    },
    excluir:{
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        marginLeft: 50,
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        width: 80,
        marginBottom: 30
    },
    excluirTexto:{
        color: 'white'
    }
})