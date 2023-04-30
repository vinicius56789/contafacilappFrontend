import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { propsNavigationStack, propsStack } from "../../../routes/stack/Models";
import axios from "axios";

export default function DetalheEvento(){

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, 'detalheEvento'>>()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [excluir, setExcluir] = useState({})

    useEffect(() => {
        axios.post('http://192.168.1.2:8085/contafacilapp/event/details', {
               eventId : params.params.id
           }).then(({data}) => { 
               setDescription(data.content.description)
               setName(data.content.name)
           })
       }
   , [])

   const exclusao = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/event/delete', {
            eventId : params.params.id
        }).then(({data}) => { 
            setExcluir(data)
            navigation.navigate('bottom', {userId: params?.params?.userId, userName: params.params.userName})
        })
    }
    
    return(
        <SafeAreaView>

            <View style={styles.mais}>
                <Text style={{fontSize: 20}}>EVENTO</Text>
            </View>
            <View style={styles.detalhe}>
                <Text style={{fontSize: 20}}>DETALHES</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.nome}>
                    <Text>Nome</Text>
                </View>

                <View style={styles.valor}>
                    <Text> {name} </Text>  
                </View>

            </View>

            <View style={styles.container}>
                <View style={styles.nome}>
                    <Text>Descrição</Text>
                </View>

                <View style={styles.valor}>
                    <Text> {description} </Text>  
                </View>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.alterar} onPress={() => navigation.navigate('alteraEvento', {userId: params.params.userId, userName: params.params.userName, id: params.params.id})}>
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
        borderTopWidth: 1,
        
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