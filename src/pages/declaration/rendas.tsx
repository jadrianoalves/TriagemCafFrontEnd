import { useState, useEffect, useContext } from "react"
import { Form, Row, Col, Button, Table } from "react-bootstrap"
import { BsFillPlusCircleFill, BsFillTrashFill } from "react-icons/bs"
import Products from "../../assets/products"
import { ItemDeRenda, DeclarationContextType } from "../../@types/IDeclaration"
import { DeclarationContext } from "../../shareds/contexts/declarationContext"



const Rendas = () => {

  
   const {  Produtos } = useContext(DeclarationContext) as DeclarationContextType
           

    const [produtoKey, setProdutoKey] = useState("")
    const [contador, setContador] = useState(0)
    const [rendaForaDoEstabelecimentoComDesconto, setRendaForaDoEstabelecimentoComDesconto] = useState(0)
    const [rendaForaDoEstabelecimentoSocial, setRendaForaDoEstabelecimentoSocial] = useState(0)
    const [rendaTotal, setRendaTotal] = useState(0)
    const [rendaForaDoEstabelecimento, setRendaForaDoEstabelecimento] = useState(0)
    const [rendaIsenta, setRendaIsenta] = useState(0)
    const [valueProduct, setValueProduct] = useState("")
    const [owner, setOwner] = useState("")


    const handleProducts = (itemDeRenda: ItemDeRenda) => {
        
        Produtos.push(itemDeRenda)
        setContador(contador + 1)
        setProdutoKey("")
        setValueProduct("")
        console.log(Produtos)
    }

    const definirValor = (index: number, value: string) => {
        Produtos?.map(()=>{})
    }

    

    useEffect(() => {
       console.log(Produtos)
        const rendaFora = Produtos?.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural")
        const rendaIsenta = Produtos?.filter((p) => p.produto.free == 1)
        const rendaForaTributavel = Produtos?.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural" && p.produto.free == 0)
        const rendaForaNaoTributavel = Produtos?.filter((p) => p.produto.origin == "Renda Fora do Estabelecimento Rural" && p.produto.free == 1)
        setRendaTotal(Produtos?.reduce((total, item) => total + item.valor, 0))
        setRendaForaDoEstabelecimento(rendaFora?.reduce((total, item) => total + item.valor, 0))
        setRendaForaDoEstabelecimentoComDesconto(rendaForaTributavel?.reduce((total, item) => total + item.valor, 0))
        setRendaForaDoEstabelecimentoSocial(rendaForaNaoTributavel?.reduce((total, item) => total + item.valor, 0))

    }, [contador])


    const excluirRenda = (index: number) => {
        Produtos.splice(index,1)
        setContador(contador+1)
    }


    return (
        <>
            <Row>
                <Col xs="12" md="6">
                    <Button variant="outline-primary">Informar composição da renda</Button>{' '}
                </Col>
            </Row>

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
                                    : Products?.filter((p) => p.product.includes(produtoKey)).slice(0, 9)
                                        .map((p, index) =>
                                            <tr key={index}>
                                                <td>{p.product}</td>
                                                <td>{p.category}</td>
                                                <td>{p.type}</td>
                                                <td>{p.origin}</td>

                                                <td> <BsFillPlusCircleFill onClick={() => handleProducts(
                                                    {produto: p,
                                                        membro: "ufpa",
                                                        valor: +valueProduct
                                                    }
                                                    )} /> </td>
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
                                    Produtos?.map((p, index) =>
                                        <tr key={index}>
                                            <td>{p.produto.product}</td>
                                            <td>{p.produto.category}</td>
                                            <td>{p.produto.type}</td>
                                            <td>{p.produto.origin}</td>
                                            <td>{p.valor}</td>
                                            <td><BsFillTrashFill onClick={() => excluirRenda(index)} /></td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Form.Group>
        </>
    )
}
export default Rendas






