import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function head() {
    return (
            <Container fluid className="custom-container">
                <Row className="custom-row">
                    <Col className="custom-col" xl={3} > 
                    <div className='prueba'>
                    <FontAwesomeIcon icon={("youtube")} style={{color: "#ffffff",}} />
                    </div>
                    </Col>
                    <Col className="custom-col" xl={6} > 2</Col>
                    <Col className="custom-col" xl={3} > 1</Col>
                </Row>
            </Container>
    );
}

export default head;