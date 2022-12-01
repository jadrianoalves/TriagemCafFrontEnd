import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, InputGroup, Navbar, Row, Table } from 'react-bootstrap'
import { CPFInput } from '../../shareds/components/forms/MaskedInputs'
import { PageLayout } from '../../shareds/layouts/PageLayout'
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs'
import ReactInputMask from 'react-input-mask';
import { getValue } from '@testing-library/user-event/dist/utils';


import produtoslist from '../../assets/produtos'



type Produto = {
    "id": number
    "owner": string
    "origin": string
    "type": string
    "category": string
    "product": string
    "value": number
    "free": number
}


type CoordenadasGSM = {
    s: {
        "graus": number
        "minutos": number
        "segundos": number
    }

    o: {
        "graus": number
        "minutos": number
        "segundos": number
    }

}

type CoordenadasGeo = {
    "latitude": number
    "longitude": number
}


var meusProdutos: Produto[] = [];



const Declaration: React.FC = () => {

    const [produtos, setProdutos] = useState<Produto[]>([{
        id: 0,
        origin: "",
        owner: "",
        type: "",
        category: "",
        product: "",
        value: 0,
        free: 0
    }])

    const [produtoKey, setProdutoKey] = useState("")
    const [contador, setContador] = useState(0)


    const handleProducts = (produto: Produto) => {
        produto.value = +valueProduct
        meusProdutos.push(produto)
        setProdutos(meusProdutos)
        setContador(contador + 1)
        setProdutoKey("")
        setValueProduct("")
        console.log(meusProdutos)
    }

    const definirValor = (index: number, value: string) => {



    }

    const [rendaTotal, setRendaTotal] = useState(0)

    const [rendaForaDoEstabelecimento, setRendaForaDoEstabelecimento] = useState(0)

    const [rendaIsenta, setRendaIsenta] = useState(0)

    const [valueProduct, setValueProduct] = useState("")



    const [coordenadasGSM, setCoordenadasGSM] = useState<CoordenadasGSM>({
        s:{graus: 0, minutos: 0, segundos: 0},
        o: {graus: 0, minutos: 0,segundos: 0}
    })

    const [coordenadasGeo, setCoordenadasGeo] = useState<CoordenadasGeo>({
        latitude:0,
        longitude:0
    })




    useEffect(() => {
        setRendaTotal(meusProdutos.reduce((total, item) => total + item.value, 0))
        const rendaFora = meusProdutos.filter((p) => p.origin == "Renda Fora do Estabelecimento Rural")
        setRendaForaDoEstabelecimento(rendaFora.reduce((total, item) => total + item.value, 0))

    }, [contador])


    const converterCoordenadas = (gsm: CoordenadasGSM)=>{
        
        const longitude = gsm.o.graus + (gsm.o.minutos / 60) + (gsm.o.segundos / 3600)
        const latitude = gsm.s.graus + (gsm.s.minutos / 60) + (gsm.s.segundos / 3600)
        
        setCoordenadasGeo({latitude: latitude, longitude: longitude})

    }




    return (
        <>
            <Navbar bg="success" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Triagem CAF
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <h1 className="display-3">Declaração de Renda CAF</h1>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs="12">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Nome do declarante" />
                            </Form.Group>
                        </Col>
                        <Col xs md="3">
                            <Form.Select aria-label="Default select example" >
                                <option>Sexo</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                            </Form.Select>
                        </Col>

                        <Col xs="12" md="3">
                            <Form.Group>
                                <ReactInputMask mask="999.999.999-99" className='form-control mb-3' placeholder='CPF' />
                            </Form.Group>
                        </Col>
                        <Col xs="12" md="3">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="RG" />
                            </Form.Group>
                        </Col>
                        <Col xs="12" md="3">
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Emissão</InputGroup.Text>
                                <Form.Control type="Date" />
                            </InputGroup>
                        </Col>

                        <Col xs="12" md="2">
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
                        <Col xs="12" md="4">
                            <Form.Select aria-label="Default select example" className="mb-3">
                                <option>Emissor</option>
                                <option value="1">SSP</option>
                                <option value="2">SSDC</option>
                            </Form.Select>
                        </Col>

                    </Row>

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

                    </Row>
                    <Row>
                        <Col xs="12" md="6">
                            <Button variant="outline-primary">Informar composição da renda</Button>{' '}
                        </Col>
                    </Row>
                </Form>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="number" placeholder="valor" onChange={(e) => setValueProduct(e.target.value)} value={valueProduct}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Form.Group className="mb-3" controlId="productFindKey">
                                <Form.Control type="text" placeholder="Digite parte do nome do produto" value={produtoKey} onChange={(e) => setProdutoKey(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Categoria</th>
                                        <th>Tipo</th>
                                        <th>Origem</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(produtoKey == "") ?
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>

                                        </tr>
                                        : produtoslist.filter((p) => p.product.includes(produtoKey)).slice(0, 9)
                                            .map((p, index) =>
                                                <tr key={index}>
                                                    <td>{p.product}</td>
                                                    <td>{p.category}</td>
                                                    <td>{p.type}</td>
                                                    <td>{p.origin}</td>

                                                    <td> <BsFillPlusCircleFill onClick={() => handleProducts(p)} /> </td>
                                                </tr>)}


                                </tbody>
                            </Table>


                        </Col>



                    </Row>
                    <Row>
                        <Col>
                            Total de Renda da UFPA: {rendaTotal}
                            Total de Renda Fora do Estabelecimento: {rendaForaDoEstabelecimento}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Produtos Selecionados </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>


                            <Table striped bordered hover size="sm">

                                <thead>

                                    <tr>
                                        <th>Produto</th>
                                        <th>Categoria</th>
                                        <th>Tipo</th>
                                        <th>Origem</th>
                                        <th>Valor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        produtos.map((p, index) =>
                                            <tr key={index}>
                                                <td>{p.product}</td>
                                                <td>{p.category}</td>
                                                <td>{p.type}</td>
                                                <td>{p.origin}</td>
                                                <td>{p.value}</td>
                                                <td><BsFillTrashFill onClick={() => definirValor(index, valueProduct)} /></td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Form.Group>
            </Container>
        </>
    )

}

export default Declaration