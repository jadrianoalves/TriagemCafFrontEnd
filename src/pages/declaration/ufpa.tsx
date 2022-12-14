import { useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import { CoordenadasGSM, CoordenadasGeo } from "../../@types/IDeclaration"





const Ufpa = () => {

    const [coordinates, setCoordinates] = useState({
        s: {
            graus: 0,
            minutos: 0,
            segundos: 0,
        },
    
        o: {
            graus: 0,
            minutos: 0,
            segundos: 0,
        }
    })
    
    const [coordinatesGeo, setCoordinatesGeo] = useState({
        latitude: 0,
        longitude: 0
    })
    
    
    function converterCoordenadas(c: CoordenadasGSM): CoordenadasGeo {
        const o = c.o.graus + (c.o.minutos / 60) + (c.o.segundos / 3600)
        const s = c.s.graus + (c.s.minutos / 60) + (c.s.segundos / 3600)
        
        

        return { latitude: -s.toFixed(10), longitude: -o.toFixed(10) }
    }
    
    const handleCoordinates = (c: CoordenadasGSM) => {
        setCoordinatesGeo(converterCoordenadas(c))
    
    }

    const [sGraus, setSGraus] = useState(0)
    const [sMinutos, setSMinutos] = useState(0)
    const [sSegundos, setSSegundos] = useState(0)


    const [oGraus, setOGraus] = useState(0)
    const [oMinutos, setOMinutos] = useState(0)
    const [oSegundos, setOSegundos] = useState(0)


    function converterEmDecimal(number: string): number{
          return parseFloat(number.replace(",","."))
    }

    return (

        <>
            <Row>
                <Col xs="12" md="10">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Endereço" />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="nº" />
                    </Form.Group>
                </Col>
                <Col xs="12" md="5">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Bairro" />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione a UF</option>
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
                <Col xs="12" md="5">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione o município</option>
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

                <Col xs="12">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Endereço da UFPA</Form.Label>
                        <Form.Control type="text" placeholder="Endereço" />
                    </Form.Group>
                </Col>

                <Col xs="12" md="4">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Bairro" />
                    </Form.Group>
                </Col>

                <Col xs="12" md="2">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione a UF</option>
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
                <Col xs="12" md="6">
                    <Form.Select aria-label="Default select example" className="mb-3">
                        <option>Selecione o município</option>
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

                <Col xs="6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Latitude (S)</Form.Label>
                        <div className="d-flex flex-row">
                            <Form.Control type="text" placeholder="g"  onChange={(e) => setSGraus(+e.target.value)} />
                            <Form.Control type="text" placeholder="m"  onChange={(e) => setSMinutos(converterEmDecimal(e.target.value))} />
                            <Form.Control type="text" placeholder="s"  onChange={(e) => setSSegundos(converterEmDecimal(e.target.value))} />
                        </div>
                    </Form.Group>
                </Col>
                <Col xs="6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Longiude (O)</Form.Label>
                        <div className="d-flex flex-row">
                            <Form.Control type="text" placeholder="g"  onChange={(e) => setOGraus(+e.target.value)} />
                            <Form.Control type="text" placeholder="m"  onChange={(e) => setOMinutos(converterEmDecimal(e.target.value))} />
                            <Form.Control type="text" placeholder="s"  onChange={(e) => setOSegundos(converterEmDecimal(e.target.value))} />
                        </div>

                    </Form.Group>
                </Col>
                <Row>
                    <Col>
                        <Col>
                            <Button variant="outline-primary" onClick={(e) => handleCoordinates(
                                {
                                    o: {
                                        graus: oGraus,
                                        minutos: oMinutos,
                                        segundos: oSegundos

                                    }, s: {
                                        graus: sGraus,
                                        minutos: sMinutos,
                                        segundos: sSegundos
                                    }
                                }
                            )}>Adicionar</Button>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>Coordenadas: {coordinatesGeo.latitude}, {coordinatesGeo.longitude}</span>
                    </Col>
                </Row>

            </Row>
        </>

    )
}

export default Ufpa