import React, { createContext, ReactNode, useState } from 'react'
import { ItemDeRenda, DeclarationContextType, Membro } from '../../@types/IDeclaration'

export const DeclarationContext = createContext<DeclarationContextType | null>(null)



interface Props{
    children?: ReactNode
  }

export const DeclarationProvider: React.FC<Props> = ({children}) => {
    const [ itensDeRenda, setIntensDeRenda ] = useState<ItemDeRenda[]>([
        {
            membro: "",
            produto: { 
                id: 0,
                origin: "",
                type: "",
                category: "",
                product: "",
                free: 0,
            },
            valor: 0
        }
    ])

    const Produtos: ItemDeRenda[] = []
    
    const membros: Membro[] = []

    return (
        <DeclarationContext.Provider value = {{
            membros, Produtos, itensDeRenda, setIntensDeRenda
        }}>
            { children }
        </DeclarationContext.Provider>
    )
}


export default DeclarationProvider