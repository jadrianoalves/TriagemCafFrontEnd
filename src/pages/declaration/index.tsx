import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, InputGroup, Navbar, Row, Tab, Table, Tabs } from 'react-bootstrap'
import { CPFInput } from '../../shareds/components/forms/MaskedInputs'
import { PageLayout } from '../../shareds/layouts/PageLayout'
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs'
import ReactInputMask from 'react-input-mask';
import { getValue } from '@testing-library/user-event/dist/utils';
import icon from '../../assets/caf_icon.png'

import produtoslist from '../../assets/products'
import Declarante from './declarante'
import Ufpa from './ufpa'
import Membros from './membros'
import Rendas from './rendas'
import HomeMessage from './message'



type Produto = {
    "id": number
    "origin": string
    "type": string
    "category": string
    "product": string
    "free": number
}

type ItemDeRenda = {

    "produto": Produto
    "owner": string
    "value": number

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


var meusProdutos: ItemDeRenda[] = [];



const Declaration: React.FC = () => {

    const [itemRenda, setItemRenda] = useState<ItemDeRenda[]>([

        {
            produto: {
                id: 0,
                origin: "",
                type: "",
                category: "",
                product: "",
                free: 0
            },
            owner: "",
            value: 0
        }])

    const [produtoKey, setProdutoKey] = useState("")
    const [contador, setContador] = useState(0)


    const handleProducts = (produto: Produto) => {
        let itemRenda = {
            produto: produto,
            owner: "UFPA",
            value: +valueProduct
        }

        meusProdutos.push(itemRenda)
        setItemRenda(meusProdutos)
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

    const [owner, setOwner] = useState("")


    const [coordenadasGSM, setCoordenadasGSM] = useState<CoordenadasGSM>({
        s: { graus: 0, minutos: 0, segundos: 0 },
        o: { graus: 0, minutos: 0, segundos: 0 }
    })

    const [coordenadasGeo, setCoordenadasGeo] = useState<CoordenadasGeo>({
        latitude: 0,
        longitude: 0
    })

    const [rendaForaDoEstabelecimentoComDesconto, setRendaForaDoEstabelecimentoComDesconto] = useState(0)

    const [rendaForaDoEstabelecimentoSocial, setRendaForaDoEstabelecimentoSocial] = useState(0)




    useEffect(() => {

        const rendaFora = meusProdutos.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural")
        const rendaIsenta = meusProdutos.filter((p) => p.produto.free == 1)
        const rendaForaTributavel = meusProdutos.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural" && p.produto.free == 0)
        const rendaForaNaoTributavel = meusProdutos.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural" && p.produto.free == 1)
        setRendaTotal(meusProdutos.reduce((total, item) => total + item.value, 0))
        setRendaForaDoEstabelecimento(rendaFora.reduce((total, item) => total + item.value, 0))
        setRendaForaDoEstabelecimentoComDesconto(rendaForaTributavel.reduce((total, item) => total + item.value, 0))
        setRendaForaDoEstabelecimentoSocial(rendaForaNaoTributavel.reduce((total, item) => total + item.value, 0))

    }, [contador])


    const converterCoordenadas = (gsm: CoordenadasGSM) => {

        const longitude = gsm.o.graus + (gsm.o.minutos / 60) + (gsm.o.segundos / 3600)
        const latitude = gsm.s.graus + (gsm.s.minutos / 60) + (gsm.s.segundos / 3600)

        setCoordenadasGeo({ latitude: latitude, longitude: longitude })

    }

    const [key, setKey] = useState('home');


    return (
        <>
            <Navbar bg="success" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Triagem CAF
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>

                <Row>
                    <Col>
                        <h4 className="display-3">Declaração de Renda CAF</h4>
                    </Col>
                </Row>



                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <HomeMessage />
                    </Tab>
                    <Tab eventKey="declarant" title="Declarante">
                        <Declarante />
                    </Tab>
                    <Tab eventKey="ufpa" title="UFPA" >
                        <Ufpa />
                    </Tab>
                    <Tab eventKey="membros" title="Membros" >
                        <Membros />

                    </Tab>
                    <Tab eventKey="renda" title="Renda" >
                        <Rendas />

                    </Tab>
                </Tabs>




            </Container>








        </>
    )

}

export default Declaration