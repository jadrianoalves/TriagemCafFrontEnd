import { useContext, useEffect, useState } from "react"
import { Form, Row, Col, Button, Table, ListGroup } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { DeclarationContextType } from "../../@types/IDeclaration"
import { DeclarationContext } from "../../shareds/contexts/declarationContext"
import { Membro } from "../../@types/IDeclaration"

const Membros = () => {

    const { membros } = useContext(DeclarationContext) as DeclarationContextType
    const [ memberName, setMemberName ] = useState("")
    const [ memberRelationship, setMemberRelationship ] = useState("")
    const [ updateScreen, setUpdateScreen ] = useState(0)
    
    const handleMembers = ()=>{
        const membro: Membro = {
            name:"",
            relationship:""
        }
        membro.name = memberName
        membro.relationship = memberRelationship
        membros.push(membro)
        setUpdateScreen(updateScreen  + 1) 
        console.log(membros)
    }

   
    const excluirMembros = (index: number)=>{
        membros.splice(index, 1)
        setUpdateScreen(updateScreen  + 1) 
        console.log(membros)
    }

    return (
        <Row>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="nome" value={memberName} onChange={(e)=>setMemberName(e.target.value)}/>
                </Col>
            </Row>
            <Row>
            <Col xs="12" md="4">
                            <Form.Select aria-label="Default select example" className="mb-3" onChange={(e)=>setMemberRelationship(e.target.value)}>
                                <option>Parentesco</option>
                                <option value="Filho/Filha">Filho/Filha</option>
                                <option value="Pai/Mãe">Pai/Mãe</option>
                            </Form.Select>
                        </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-primary" onClick={()=>handleMembers()}>Adicionar</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <ListGroup>
                    {membros.map((membro, index)=>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start" key={index}>{membro.name} ({membro.relationship})<BsFillTrashFill onClick={(index)=>excluirMembros(+index)}/></ListGroup.Item>              
                    )}
      
      
    </ListGroup>
                </Col>
            </Row>
        </Row>
    )
}

export default Membros