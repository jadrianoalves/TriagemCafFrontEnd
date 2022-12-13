import React, { createContext, ReactNode, useState } from 'react'
import { ItemDeRenda, DeclarationContextType, UFPAMember, UFPADeclarant } from '../../@types/IDeclaration'

export const DeclarationContext = createContext<DeclarationContextType | null>(null)



interface Props{
    children?: ReactNode
  }

export const DeclarationProvider: React.FC<Props> = ({children}) => {
    const [ itensDeRenda, setIntensDeRenda ] = useState<ItemDeRenda[]>([
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

    const declarant: UFPADeclarant = {
        name: "",
        gender: "",
        cpf:{number:""},
        rg: {number:"",
             expeditor: "" ,
             state: ""
            },
        address: {
            place: "",
            number: "",
            district: "",
            city:{id:"",name:"",state:""}
        }
    }

    const selectedProducts: ItemDeRenda[] = []
    
    const members: UFPAMember[] = []

    return (
        <DeclarationContext.Provider value = {{
            declarant, members, selectedProducts, itensDeRenda, setIntensDeRenda
        }}>
            { children }
        </DeclarationContext.Provider>
    )
}


export default DeclarationProvider