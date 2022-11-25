export interface IDeclaration {
    id: number
    name: string
    gender: string
    cpf: string
    rg: string
    expeditor: string
    uf: string
    address: string
    ufpaAddress: string
    members: IMember[]
    incomes: Iincome[]
    createdAt: Date
    children?: JSX.Element[] | JSX.Element 
}


export type IMember = {
    name: string
}

export type Iincome = {
    member: IMember
    type: string
    value: number

}

export type DeclarationType = {
    Declarations: IDeclaration[]
   // saveDeclaration: (declaration: IDeclaration) => void
    //updateDeclaration: (id: number) => void
}

