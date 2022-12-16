import React, { createContext, ReactNode, useState } from 'react'
import { ItemDeRenda, DeclarationContextType, UFPAMember, UFPADeclarant, Land } from '../../@types/IDeclaration'

export const DeclarationContext = createContext<DeclarationContextType | null>(null)



interface Props {
    children?: ReactNode
}

export const DeclarationProvider: React.FC<Props> = ({ children }) => {
    const [itensDeRenda, setIntensDeRenda] = useState<ItemDeRenda[]>([
        {
            member: "",
            product: {
                id: 0,
                origin: "",
                type: "",
                category: "",
                product: "",
                free: 0,
            },
            value: 0
        }
    ])

    const [declarant, setDeclarant] = useState<UFPADeclarant>({
        name: "",
        gender: "",
        cpf: "",
        rg: "",
        rgEmiter: "",
        placeAddress: "",
        numberAddress: "",
        districtAddress: "",
        cityAddress: "",
        stateAddress: ""

    })

    const [ ufpa, setUfpa ] = useState<Land>({
        name: "",
    area: 0,
    address: "",
    districtAddress: "",
    cityAddress: "",
    stateAdress: "",
    latitude: "",
    longitude: "",
    })

    const selectedProducts: ItemDeRenda[] = []

    const members: UFPAMember[] = []

    return (
        <DeclarationContext.Provider value={{
            declarant, setDeclarant, members, selectedProducts, itensDeRenda, setIntensDeRenda, ufpa, setUfpa
        }}>
            {children}
        </DeclarationContext.Provider>
    )
}


export default DeclarationProvider