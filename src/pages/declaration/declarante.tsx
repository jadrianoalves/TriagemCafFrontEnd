import { useCallback, useContext, useState } from "react"
import { Form, Row, Col, InputGroup } from "react-bootstrap"
import ReactInputMask from "react-input-mask"
import { City, DeclarationContextType, UFPADeclarant } from "../../@types/IDeclaration"
import Cities from '../../assets/cities'
import States from "../../assets/states"
import { DeclarationContext } from "../../shareds/contexts/declarationContext"


const Declarant = () => {

    const { declarant, setDeclarant } = useContext(DeclarationContext) as DeclarationContextType

    const [addressCities, setAddressCities] = useState<City[]>([{ id: 0, name: "", state: "" }])

    const handleCities = (state: string) => {
        const cidadesOfSelectedState = Cities.filter((citie) => citie.state == state)
        setAddressCities(cidadesOfSelectedState)
        setDeclarant({
            ...declarant,
            stateAddress: state
        })
    }
   
    

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(declarant)
    },[declarant])

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs="12">
                    <Form.Label>Dados Pessoais</Form.Label>
                </Col>
                <Col xs="12" md="10">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Nome do declarante" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                name: event.currentTarget?.value || ""
                            })
                        }/>
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Select aria-label="Default select example" className="mb-3" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                gender: event.currentTarget?.value || ""
                            })
                        }>
                        <option >Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Form.Select>
                </Col>

                <Col xs="12" md="2">
                    <Form.Group>
                        <ReactInputMask mask="999.999.999-99" className='form-control mb-3' placeholder='CPF' onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                cpf: event.currentTarget?.value || ""
                            })
                        }/>
                    </Form.Group>
                </Col>

                <Col xs="12" md="2">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="RG" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                rg: event.currentTarget?.value || ""
                            })
                        } />
                    </Form.Group>
                </Col>

                <Col xs="12" md="3">
                    <InputGroup className="mb-3">
                        <Form.Control type="text" placeholder="Emissor RG"  onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                rgEmiter: event.currentTarget?.value || ""
                            })
                        } />
                    </InputGroup>
                </Col>
                
                

            </Row>
            <Row>
                <Col xs="12">
                    <Form.Label>Endereço de residência</Form.Label>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Endereço" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                placeAddress: event.currentTarget?.value || ""
                            })
                        }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Número" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                numberAddress: event.currentTarget?.value || ""
                            })
                        }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Bairro" onChange={
                            (event) => 
                            setDeclarant({
                                ...declarant,
                                districtAddress: event.currentTarget?.value || ""
                            })
                        }/>
                    </Form.Group>

                </Col>

                <Col>
                    <Form.Select aria-label="Default select example" className="mb-3" onChange={(e) => handleCities(e.target.value)}>
                        <option>Uf</option>
                        {States.map((state, index) =>
                            <option value={state.shortening} key={index}>{state.name}</option>
                        )}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example" className="mb-3">
                        {
                            addressCities.map((cidade, index) =>
                                <option value={cidade.name} key={index}>{cidade.name}</option>
                            )

                        }
                    </Form.Select>
                </Col>

            </Row>
            <Row>
                <Col>
                <Form.Control type="submit" placeholder="enviar" />
                </Col>
            </Row>
        </Form>

    )
}

export default Declarant