import { Card, Button } from "react-bootstrap"

const HomeMessage = () => {
    return (
        <Card style={{ width: '100%' }}>
            
            <Card.Body>
                <Card.Title>Aviso</Card.Title>
                
                <Card.Text>
                    Este não é um aplicativo oficial do Governo Federal.
                </Card.Text>
               
            </Card.Body>
        </Card>
    )
}

export default HomeMessage