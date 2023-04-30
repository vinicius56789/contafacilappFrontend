import React from 'react'

import { StatusBar, View } from 'react-native'
import { BottomTab } from './bottom'

//const servicos = [
//    {
//        serviceName: "Serviço 1",
//        descricao: "description 1"
//    },
//    {
//        serviceName: "Serviço 2",
//        descricao: "description 2"
//    },
//    {
//        serviceName: "Serviço 3",
//        descricao: "description 3"
//    }
//]

export default function Servicos() {
    return <View style={{flex:1}}>
                <StatusBar/>
                
                <BottomTab/>
            </View> 
}