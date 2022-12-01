import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopAppBar from '../components/TopAppBar';


type PageLayoutProps = {
    children: JSX.Element[] | JSX.Element
}

export const PageLayout: React.FC<PageLayoutProps> = ( { children } ) =>{

    return (
      <>
      <Row>
        <Col><TopAppBar /></Col>
      </Row>
      <Container>
      <Row >
        <Col center>
        
        { children }
        </Col>
      </Row>
    </Container>
      </>
      
       
    );
}

