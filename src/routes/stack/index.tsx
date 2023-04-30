import React from 'react';
import LoginPage from '../../telas/servicos/login';
import { BottomTab } from '../../telas/servicos/bottom';
import { Home } from '../../pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaContas from '../../telas/servicos/listaContas';
import ListDividas from '../../telas/servicos/listaDividas';
import ListExtras from '../../telas/servicos/listaExtras';
import ListEventos from '../../telas/servicos/listaEventos';
import DetalheConta from '../../telas/servicos/detalheConta';
import { propsNavigationStack } from './Models';
import DetalheDivida from '../../telas/servicos/detalheDivida';
import DetalheEvento from '../../telas/servicos/detalheEvento';
import DetalheExtra from '../../telas/servicos/detalheExtra';
import CadastraConta from '../../telas/servicos/cadastraConta';
import CadastraDivida from '../../telas/servicos/cadastraDivida';
import CadastraEvento from '../../telas/servicos/cadastraEvento';
import CadastraExtra from '../../telas/servicos/cadastraExtra';
import AlteraConta from '../../telas/servicos/alteraConta';
import AlteraDivida from '../../telas/servicos/alteraDivida';
import AlteraEvento from '../../telas/servicos/alteraEvento';
import AlteraExtra from '../../telas/servicos/alteraExtra';
import ListaMensal from '../../telas/servicos/listaMensal';
import AlteraMensal from '../../telas/servicos/alteraMensal';
import BoxSx from '../../telas/servicos/initial';
import Cadastro from '../../telas/servicos/cadastro';

const { Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator 
            initialRouteName='login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name='login'
                component={LoginPage}
            />

            <Screen
                name='cadastro'
                component={Cadastro}
            />

            <Screen 
                name='bottom'
                component={BoxSx} 
            />

            <Screen 
                name='contas'
                component={ListaContas}
            />

            <Screen
                name = 'cadastraConta'
                component = {CadastraConta}
            />

            <Screen
                name = 'detalheConta'
                component={DetalheConta}
            />

            <Screen
                name = 'alteraConta'
                component={AlteraConta}
            />

            <Screen
                name='divida'
                component={ListDividas}
            />

            <Screen
                name = 'cadastraDivida'
                component={CadastraDivida}
            />

            <Screen
                name = 'detalheDivida'
                component={DetalheDivida}
            />

            <Screen
                name = 'alteraDivida'
                component={AlteraDivida}
            />
            
            <Screen 
                name='evento' 
                component={ListEventos}
            />

            <Screen
                name='cadastraEvento'
                component={CadastraEvento}
            />

            <Screen
                name = 'detalheEvento'
                component={DetalheEvento}
            />

            <Screen
                name='alteraEvento'
                component={AlteraEvento}
            />
            
            <Screen 
                name='mensal' 
                component={ListaMensal}
            />

            <Screen
                name = 'alteraMensal'
                component = {AlteraMensal}
            />
            
            <Screen 
                name='extra' 
                component={ListExtras}
            />

            <Screen
                name = 'cadastraExtra'
                component={CadastraExtra}
            />

            <Screen
                name = 'detalheExtra'
                component={DetalheExtra}
            />

            <Screen
                name='alteraExtra'
                component={AlteraExtra}
            />

        </Navigator>
    )
}