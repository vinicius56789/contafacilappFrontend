import React, { useState, useEffect } from 'react'
import { FlatList, Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons'; 
import { propsNavigationStack, propsStack } from '../../../routes/stack/Models';
import axios from 'axios';


export default function ListEventos(){

    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "evento">>()

    const [infoEventos, setInfoEventos] = useState({})

    const eventos = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/event/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            setInfoEventos(data);
        })
    }

    useEffect(() => {
        axios.post('http://192.168.1.2:8085/contafacilapp/event/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            setInfoEventos(data);
        })
    }, [])

    return(
        <SafeAreaView >
            <View style={styles.mais}>
                <TouchableOpacity onPress={() => navigation.navigate("cadastraEvento", {userId: params.params.id, userName: params.params.userName})}>
                    <Ionicons name="add" size={24} color="blue" />
                </TouchableOpacity>
            </View>

            <View style={styles.eventos}>
                <Text style={{fontSize: 20}} onPress={() => eventos()} >LISTA DE EVENTOS</Text>
            </View>

            <FlatList
                style={styles.lista}
                data={infoEventos.content}
                keyExtractor={item => item.eventId}
                renderItem={({item}) => 
                
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("detalheEvento", {id: item.eventId, userId: params.params.id, userName: params.params.userName})}>
                        
                        <View style={styles.nome}>
                            <Text style={styles.texto}>{item.name}</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.texto}></Text>
                        </View>
                    </TouchableOpacity>
                }
                scrollEnabled = {true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mais:{
        marginTop: 50,
        width: '90%',
        height: 30,
        alignItems: 'flex-end',
        alignContent: 'center'
    },
    eventos:{
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
    },
    total:{
        alignItems:'center',
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    nome:{
        minHeight: 30,
        width: "40%",
        alignItems: 'flex-start',
        backgroundColor: "white",
        marginTop: 15,
        borderBottomWidth: 3,
        borderColor: 'grey',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopWidth: 1,
        borderLeftWidth: 1
    },
    valor:{
        minHeight: 30,
        width: "40%",
        backgroundColor: "white",
        alignContent: 'center',
        alignItems: 'flex-end',
        marginTop: 15,
        borderBottomWidth: 3,
        borderColor: 'grey',
        borderRightWidth: 3,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5,
        borderTopWidth: 1
    },
    texto:{
        margin: 10,
        padding: 10,
        fontWeight: 'bold'
    },
    lista:{
        marginBottom: 50
    }
})