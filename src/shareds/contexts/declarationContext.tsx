import React, { createContext, ReactNode, useContext, useState } from 'react'
import { TriagemCAF } from '../../types/IDeclaration'

export const DeclarationContext = createContext({})

export default DeclarationContext


interface Props{
  children?: ReactNode
}

  export const DeclarationProvider: React.FC<Props> = ({children})=>{



    const [ declaration, setDeclaration ] = useState<TriagemCAF>({
      id: 0,
      declarante: {
        nome: "",
        sexo: "",
        cpf: {
          numero: ""
        },
        rg: {
          numero: "",
          orgao: "",
          uf: ""
        }
      },
      membros: [],
      rendas: [],
      resumo: {
        rendaTotaldaUFPA: 0,
        rendaDoEstabelecimento: 0,
        rendaForaDoEsabelecimento: 0,
        rendaIsenta: 0
      },
      criadoEm: new Date()
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


