import { useContext, useEffect, useState } from "react"
import { Form, Row, Col, Button, Table, ListGroup } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { DeclarationContextType } from "../../@types/IDeclaration"
import { DeclarationContext } from "../../shareds/contexts/declarationContext"
import { UFPAMember } from "../../@types/IDeclaration"

const Membros = () => {

    const { members } = useContext(DeclarationContext) as DeclarationContextType
    const [memberName, setMemberName] = useState("")
    const [memberRelationship, setMemberRelationship] = useState("")
    const [updateScreen, setUpdateScreen] = useState(0)

    const handleMembers = () => {
        const membro: UFPAMember = {
            name: "",
            relationship: ""
        }
        membro.name = memberName
        membro.relationship = memberRelationship
        members.push(membro)
        setUpdateScreen(updateScreen + 1)
        console.log(members)
    }


    const excluirMembros = (index: number) => {
        members.splice(index, 1)
        setUpdateScreen(updateScreen + 1)
        console.log(members)
    }

    return (
        <Row>
            <Row>
                <Col xs="12" md="8">
                    <Form.Control type="text" placeholder="nome" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
                </Col>

                <Col xs="12" md="4">
                    <Form.Select aria-label="Default select example" className="mb-3" onChange={(e) => setMemberRelationship(e.target.value)}>
                        <option value="">Parentesco com o declarante</option>
                        <option value="2">Cônjuje ou companheiro(a)</option>
                        <option value="3">Filho(a)</option>
                        <option value="4">Enteado(a)</option>
                        <option value="5">Não parente</option>
                        <option value="6">Irmão ou Irmã</option>
                        <option value="8">Neto(a) ou bisneto(a)</option>
                        <option value="9">Outro parente</option>
                        <option value="10">Pai ou mãe</option>
                        <option value="11">Sogro(a)</option>
                        <option value="12">Genro ou nora</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-primary" onClick={() => handleMembers()}>Adicionar</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {members.length>0 ? 
                    <h3>Membros da UFPA</h3>: ""    
                    }
                        {members.map((membro, index) =>
                            <ListGroup.Item className="d-flex justify-content-between align-items-start" key={index}>{membro.name} ({membro.relationship})<BsFillTrashFill onClick={(index) => excluirMembros(+index)} /></ListGroup.Item>
                        )}


                    </ListGroup>
                </Col>
            </Row>
        </Row>
    )
}

export default Membros




