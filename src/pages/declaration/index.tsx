import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, InputGroup, Navbar, Row, Table } from 'react-bootstrap'
import { CPFInput } from '../../shareds/components/forms/MaskedInputs'
import { PageLayout } from '../../shareds/layouts/PageLayout'

import ReactInputMask from 'react-input-mask';
import { getValue } from '@testing-library/user-event/dist/utils';
import { PlusCircle } from 'react-bootstrap-icons';



type Produto = {
    "origem": string
    "tipo": string
    "categoria": string
    "produto": string
}

const arrayProdutos: Produto[] = [
    {
        origem: "Renda do estabelecimento",
        tipo: "lavoura temporaria",
        categoria: "graos",
        produto: "feijão"
    },

    {
        origem: "Renda do estabelecimento",
        tipo: "lavoura temporaria",
        categoria: "graos",
        produto: "milho"
    },

    {
        origem: "Renda do estabelecimento",
        tipo: "lavoura temporaria",
        categoria: "graos",
        produto: "fava"
    },
    {
        origem: "Renda do estabelecimento",
        tipo: "lavoura temporaria",
        categoria: "tubérculos",
        produto: "batata"
    },

]





var meusProdutos: Produto[] = [];



const Declaration: React.FC = () => {

    const [produtos, setProdutos ] = useState<Produto[]>([{origem: "",
    tipo: "",
    categoria: "",
    produto: ""}])
    const [produtoKey, setProdutoKey] = useState("")


    function handleProducts(produto: Produto){
        meusProdutos.push(produto)
        setProdutos(meusProdutos)
        console.log(meusProdutos)
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

                <Row>
                    <Col xs="12">
                        <Form.Group className="mb-3" controlId="productFindKey">
                            <Form.Control type="text" placeholder="Digite o nome do produto" value={produtoKey} onChange={(e) => setProdutoKey(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <ul>
                            {(produtoKey == "") ? <li></li> : arrayProdutos.filter((p) => p.produto.startsWith(produtoKey)).map((p) => <li>{p.produto}</li>)}
                        </ul>
                    </Col>

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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </tr> 
                                    :arrayProdutos.filter((p) => p.produto.startsWith(produtoKey))
                                    .map((p) => 
                                    <tr>
                                        <td>{p.produto}</td>
                                        <td>{p.categoria}</td>
                                        <td>{p.tipo}</td>
                                        <td>{p.origem}</td>
                                        <td> <PlusCircle onClick={()=>handleProducts(p)}/> </td>
                                </tr>)}


                            </tbody>
                        </Table>


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
        </tr>
      </thead>
      <tbody>
        {
            produtos.map((p)=>
                <tr>
                    <td>{p.produto}</td>
                    <td>{p.categoria}</td>
                    <td>{p.tipo}</td>
                    <td>{p.origem}</td>
                </tr>
            )
        }
        
      </tbody>
    </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default Declaration