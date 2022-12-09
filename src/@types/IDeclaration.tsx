import { ReactNode } from "react"

export interface TriagemCAF extends Props{
    id: number
    declarante: Declarante
    membros: Membro[]
    rendas: ItemDeRenda[]
    propriedades: Propriedade[]
    criadoEm: Date
    
}


interface Props{
    children?: ReactNode
  }

export type Propriedade = {
    nome: string
    area: string
    endereco: Endereco
    coordenadas: CoordenadasGSM
    principal: number

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


export type CoordenadasGSM = {
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

export type CoordenadasGeo = {
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
    membro: string
    produto: Produto
    valor: number

}

export type DeclarationContextType = {
    Produtos: ItemDeRenda[],
    membros: Membro[],
    itensDeRenda: ItemDeRenda[],
    setIntensDeRenda: React.Dispatch<React.SetStateAction<ItemDeRenda[]>>

}

export type Produto = {
    id: number
    origin: string
    type: string
    category: string
    product: string
    free: number
}





