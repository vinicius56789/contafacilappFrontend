import {NativeStackNavigationProp} from "@react-navigation/native-stack"

export type propsNavigationStack = {
    login: undefined
    cadastro: undefined
    bottom: {
        userId: string,
        userName: string
    }
    Inicial: {
        userId: string,
        userName: string
    }
    settings: undefined
    Voltar: undefined
    contas: {
        id: string,
        userName: string
    }
    divida: {
        id: string,
        userName: string
    }
    evento: {
        id: string,
        userName: string
    }
    mensal: {
        id: string,
        userName: string
    }
    extra: {
        id: string,
        userName: string
    }
    detalheConta: {
        id: string,
        userId: string,
        userName: string
    }
    detalheDivida: {
        id: string,
        userId: string,
        userName: string
    }
    detalheEvento: {
        id: string,
        userId: string,
        userName: string
    }
    detalheExtra: {
        id: string,
        userId: string,
        userName: string
    }
    cadastraConta: {
        userId: string,
        userName: string
    }
    cadastraDivida: {
        userId: string,
        userName: string
    }
    cadastraEvento: {
        userId: string,
        userName: string
    }
    cadastraExtra: {
        userId: string,
        userName: string
    }
    alteraConta: {
        userId: string,
        userName: string,
        id: string
    }
    alteraDivida: {
        userId: string,
        userName: string,
        id: string
    }
    alteraEvento: {
        userId: string,
        userName: string,
        id: string
    }
    alteraMensal: {
        userId: string,
        userName: string,
        id: string
    }
    alteraExtra: {
        userId: string,
        userName: string,
        id: string
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>