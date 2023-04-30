import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { propsNavigationStack, propsStack } from '../../../routes/stack/Models';

export default function BoxSx() {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RouteProp<propsNavigationStack, "bottom">>()
    
    return( <View style={styles.container}>
            
            <Image
                source={require('./logo.png')} 
                style={styles.logo}
                resizeMode='cover'
            />
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Bem vindo, {params?.params?.userName}</Text>
            <TouchableOpacity style={styles.boxContas} onPress={() => navigation.navigate("contas", {id: params?.params?.userId, userName: params.params.userName})}>
                <Text style={{marginTop: 5, fontSize: 45, fontWeight: 'bold'}}>Contas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxDivida} onPress={() => navigation.navigate("divida", {id: params?.params?.userId, userName: params.params.userName})}>
                <Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 18}}>Dívida</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxEvento} onPress={() => navigation.navigate("evento", {id: params?.params?.userId, userName: params.params.userName})}>
                <Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 18}}>Evento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxRenda} onPress={() => navigation.navigate("mensal", {id: params?.params?.userId, userName: params.params.userName})}>
                <Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 18}}>Renda Mensal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxRenda} onPress={() => navigation.navigate("extra", {id: params?.params?.userId, userName: params.params.userName})}>
                <Text style={{marginTop: 25, fontWeight: 'bold', fontSize: 18}}>Renda Extra</Text>
            </TouchableOpacity>
            
        </View>  
  )
}

const styles = StyleSheet.create({
    container: {
      height: 300,
      width: 400,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      alignItems: 'flex-start',
      marginBottom: 100,
      marginTop: 80
    },
    logo: {
        width: 370,
        height: 180,
        marginBottom: 20,
    },
    boxContas:{
        width: "87%",
        minHeight: 80,
        margin: 5,
        backgroundColor: "#2196F3", 
        borderRadius: 10, 
        alignItems: 'center'
    },
    boxDivida:{
        width: "40%",
        minHeight: 80,
        margin: 8,
        borderRadius: 10, 
        alignItems: 'center',
        backgroundColor: "#F44336"
    },
    boxEvento:{
        width: "40%",
        minHeight: 80,
        margin: 8,
        borderRadius: 10, 
        alignItems: 'center',
        backgroundColor: "#FFEB3B"
    },
    boxRenda:{
        width: "40%",
        minHeight: 80,
        margin: 8,
        borderRadius: 10, 
        alignItems: 'center',
        backgroundColor: "#4CAF50"
    },
  })