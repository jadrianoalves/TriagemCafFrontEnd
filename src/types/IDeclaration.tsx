import { ReactNode } from "react"

export interface TriagemCAF extends Props{
    id: number
    declarante: Declarante
    membros: Membro[]
    rendas: ItemDeRenda[]
    propriedade: {}
    resumo: Resumo
    criadoEm: Date
    
}


interface Props{
    children?: ReactNode
  }

export type Propriedade = {

}

export type Resumo = {
    rendaTotaldaUFPA: number
    rendaDoEstabelecimento: number
    rendaForaDoEsabelecimento: number
    rendaIsenta: number
}

export type Declarante = {
    nome: string
    sexo: string
    cpf: Cpf
    rg: Rg
}

export type Endereco = {
    logradouro: string
    numero: string
    bairro: string
    cidade: Cidade
}


type CoordenadasGSM = {
    s: {
        "graus": number
        "minutos": number
        "segundos": number
    }

    o: {
        "graus": number
        "minutos": number
        "segundos": number
    }

}

type CoordenadasGeo = {
    "latitude": number
    "longitude": number
}


export type Cidade = {
    id: number
    name: string
    uf: string
}

export type Cpf = {
    numero: string
}

export type Rg = {
    numero: string
    orgao: string
    uf: string
}

export type Membro = {
    name: string
    relationship: string
}

export type ItemDeRenda = {
    memberName: string
    product: Produto
    value: number

}

type Produto = {
    "id": number
    "origin": string
    "type": string
    "category": string
    "product": string
    "free": number
}





