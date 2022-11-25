import React, { createContext, ReactNode, useContext, useState } from 'react'
import { IDeclaration, DeclarationType } from '../../types/IDeclaration'

export const DeclarationContext = createContext({})

export default DeclarationContext





  interface Props{
    children?: ReactNode
  }
  

  export const DeclarationProvider: React.FC<Props> = ({children})=>{

    const [ declaration, setDeclaration ] = useState<IDeclaration>({
        id: 0,
        name: '',
        gender: '',
        cpf: '',
        rg: '',
        expeditor: '',
        uf: '',
        address: '',
        ufpaAddress: '',
        members: [],
        incomes: [],
        createdAt: new Date()
      })
      
    return(
        <DeclarationContext.Provider 
            value={{
                declaration, 
                setDeclaration
                }}>
            {children}
        </DeclarationContext.Provider>
    )
    
  }


