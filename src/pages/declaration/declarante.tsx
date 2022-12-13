import { useState } from "react"
import { Form, Row, Col, InputGroup } from "react-bootstrap"
import ReactInputMask from "react-input-mask"
import { City } from "../../@types/IDeclaration"
import Cities from '../../assets/cities'
import States from "../../assets/states"


const Declarant = () => {

    const [addressCities, setAddressCities] = useState<City[]>([{ id: "", name: "", state: "" }])

    const handleCities = (state: string) => {
        const cidadesOfSelectedState = Cities.filter((citie) => citie.state == state)
        setAddressCities(cidadesOfSelectedState)
    }


    return (
        <>
            <Row>
                <Col xs="12">
                    <Form.Label>Dados Pessoais</Form.Label>
                </Col>
                <Col xs="12" md="10">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Nome do declarante" />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option >Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Form.Select>
                </Col>

                <Col xs="12" md="2">
                    <Form.Group>
                        <ReactInputMask mask="999.999.999-99" className='form-control mb-3' placeholder='CPF' />
                    </Form.Group>
                </Col>

                <Col xs="12" md="2">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="RG" />
                    </Form.Group>
                </Col>

                <Col xs="12" md="3">
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Emissão</InputGroup.Text>
                        <Form.Control type="Date" />
                    </InputGroup>
                </Col>

                <Col xs="12" md="3">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>UF Orgão Emissão</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </Form.Select>
                </Col>
                <Col xs="12" md="2">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Emissor</option>
                        <option value="SSP">SSP</option>
                        <option value="SSDC">SSDC</option>
                    </Form.Select>
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
                        <Form.Control type="text" placeholder="Endereço" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Número" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Bairro" />
                    </Form.Group>

                </Col>

                <Col>
                    <Form.Select aria-label="Default select example" className="mb-3" onChange={(e) => handleCities(e.target.value)}>
                        <option>Uf</option>
                        {States.map((state, index) =>
                            <option value={state.id} key={index}>{state.name}</option>
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
        </>
    )
}

export default Declarant