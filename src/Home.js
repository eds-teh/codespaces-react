import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import ocean from './img/ocean.jpg';

export const Home = () => (
    <>
    <Slider/>
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dev Blog</Card.Title>
                        <Card.Text>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                   
                </Card>
            </Col>

            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dev Blog</Card.Title>
                        <Card.Text>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                   
                </Card>
            </Col>

            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={ocean} />
                    <Card.Body>
                        <Card.Title>Web Dev Blog</Card.Title>
                        <Card.Text>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                   
                </Card>
            </Col>
        </Row>
    </Container>
    <Jumbotron />
    <Container style={{ marginBottom: '30px'}}>
        <Row>
            <Col md={8}>
                <img src={ocean} height={400} />
            </Col>
            <Col md={4}>
                <h2>Web Developer Blog</h2>
                <p>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                </p>
            </Col>
        </Row>
    </Container>

    </>
)