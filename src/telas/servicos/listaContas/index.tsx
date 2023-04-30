import React, { useEffect, useState } from 'react'
import { FlatList, Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons';
import { propsNavigationStack, propsStack } from '../../../routes/stack/Models'; 
import axios from 'axios';

var tot = 0

export default function ListaContas(){
    
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "contas">>()

    const [total, setTotal] = useState(0)
    const [infoContas, setInfoContas] = useState({})

    const contas = async () => {
        await axios.post('http://192.168.1.2:8085/contafacilapp/bill/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            setInfoContas(data);
            setTotal(tot)
            data.content.forEach(element => {
                tot = tot + parseFloat(element.value)
            });
            setTotal(tot)
            tot = 0
        })
    }

    useEffect(() => {
        axios.post('http://192.168.1.2:8085/contafacilapp/bill/list', {
            clientId : params.params.id
        }).then(({data}) => { 
            setInfoContas(data);
            setTotal(tot)
            data.content.forEach(element => {
                tot = tot + parseFloat(element.value)
            });
            setTotal(tot)
            tot = 0
        })
    }, [])

    return(
        <SafeAreaView >
            
            <View style={styles.mais}>
                <TouchableOpacity onPress={() => navigation.navigate('cadastraConta', {userId: params.params.id, userName: params.params.userName})}>
                    <Ionicons name="add" size={24} color="blue" />
                </TouchableOpacity>
            </View>
            <View style={styles.total}>
                <Text style={{marginTop: 5, fontSize: 30, fontWeight: 'bold', color: 'red'}}>R$ {total}</Text>
            </View>
            <View style={styles.eventos}>
                <Text style={{fontSize: 20}} onPress={() => contas()}>LISTA DE CONTAS</Text>
            </View>
            
            <FlatList
                style={styles.lista}
                data={infoContas.content}
                keyExtractor={item => item.billId}
                renderItem={({item}) => 
                
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detalheConta', {id: item.billId, userId: params.params.id, userName: params.params.userName})}>
                        
                        <View style={styles.nome}>
                            <Text style={styles.texto}>{item.title}</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.texto}>{item.value}</Text>
                        </View>
                    </TouchableOpacity>
                }
                scrollEnabled = {true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    eventos:{
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
    },
    mais:{
        marginTop: 50,
        width: '90%',
        height: 30,
        alignItems: 'flex-end',
        alignContent: 'center'
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