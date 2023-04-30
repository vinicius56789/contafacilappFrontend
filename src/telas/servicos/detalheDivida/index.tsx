import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { propsNavigationStack, propsStack } from "../../../routes/stack/Models";
import axios from "axios";

export default function DetalheDivida(){

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, 'detalheDivida'>>()

    const [value, setValue] = useState('')
    const [interest, setInterest] = useState('')

    const [excluir, setExcluir] = useState({})

    useEffect(() => {
         axios.post('http://192.168.1.2:8085/contafacilapp/debt/details', {
                debtId : params.params.id
            }).then(({data}) => { 
                setValue(data.content.value)
                setInterest(data.content.monthlyInterest)
            })
        }
    , [])

    const exclusao = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/debt/delete', {
            debtId : params.params.id
        }).then(({data}) => { 
            setExcluir(data)
            navigation.navigate('bottom', {userId: params?.params?.userId, userName: params.params.userName})
        })
    }
    
    return(
        <SafeAreaView>
            <View style={styles.mais}>
                <Text style={{fontSize: 20}}>DÍVIDA</Text>
            </View>
            <View style={styles.detalhe}>
                <Text style={{fontSize: 20}}>DETALHES</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.nome}>
                    <Text>Valor</Text>
                </View>

                <View style={styles.valor}>
                    <Text> {value} </Text>  
                </View>

            </View>

            <View style={styles.container}>
                <View style={styles.nome}>
                    <Text>Juros a.m</Text>
                </View>

                <View style={styles.valor}>
                    <Text> {interest} </Text>  
                </View>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.alterar} onPress={() => navigation.navigate('alteraDivida', {userId: params.params.userId, userName: params.params.userName, id: params.params.id})}>
                    <Text style={styles.alterarTexto}>ALTERAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.excluir} onPress={() => exclusao()}>
                    <Text style={styles.excluirTexto}>EXCLUIR</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mais:{
        marginTop: 90,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
    },
    detalhe:{
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    container:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    nome:{
        minHeight: 30,
        width: "40%",
        alignItems: 'flex-start',
        backgroundColor: "white",
        padding: 20,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    valor:{
        minHeight: 30,
        width: "40%",
        backgroundColor: "white",
        alignItems: 'flex-end',
        padding: 20,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
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
        height: 40
        
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
        height: 40
    },
    excluirTexto:{
        color: 'white'
    }
})