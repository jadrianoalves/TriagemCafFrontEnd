import { ReactNode } from "react"

export interface TriagemCAF extends Props{
    id: number
    declarante: UFPADeclarant
    membros: UFPAMember[]
    rendas: ItemDeRenda[]
    propriedades: Propriedade[]
    criadoEm: Date
    
}


interface Props{
    children?: ReactNode
  }

export type Propriedade = {
    name: string
    area: string
    endereco: Address
    coordenadas: CoordenadasGSM
    principal: number

}

export type Resumo = {
    rendaTotaldaUFPA: number
    rendaDoEstabelecimento: number
    rendaForaDoEsabelecimento: number
    rendaIsenta: number
}

export type UFPADeclarant = {
    name: string
    gender: string
    cpf: string
    rg: string
    rgEmiter: string
    placeAddress: string
    numberAddress: string
    districtAddress: string
    cityAddress: string
    stateAddress: string
}

export type Address = {
    place: string
    number: string
    district: string
    city: City
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


export type City = {
    id: string
    name: string
    state: string
}

export type Cpf = {
    number: string
}

export type Rg = {
    number: string
    expeditor: string
    state: string
}

export type UFPAMember = {
    name: string
    relationship: string
}

export type ItemDeRenda = {
    member: string
    product: Product
    value: number

}

export type DeclarationContextType = {
    selectedProducts: ItemDeRenda[],
    members: UFPAMember[],
    declarant:UFPADeclarant,
    setDeclarant: React.Dispatch<React.SetStateAction<UFPADeclarant>>
    itensDeRenda: ItemDeRenda[],
    setIntensDeRenda: React.Dispatch<React.SetStateAction<ItemDeRenda[]>>

}

export type Product = {
    id: number
    origin: string
    type: string
    category: string
    product: string
    free: number
}





