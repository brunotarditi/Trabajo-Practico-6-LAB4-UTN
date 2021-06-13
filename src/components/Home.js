import React, { Component } from 'react';
import Rutas from "./Rutas";
import { Alert, Container, Row, Col, Button  } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
            <Rutas></Rutas>
            <Container className="mt-2">
              <Row>
                <Col>
                  <Alert variant="info">
                    <Alert.Heading>Bienvenido a Musical Hendrix</Alert.Heading>
                    <p>
                      Musical Hendrix es una tienda de instrumentos musicales con ya
                      más de 15 años de experiencia. Tenemos el conocimiento y la
                      capacidad como para informarte acerca de las mejores
                      elecciones para tu compra musical.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Descubrí todos nuestros productos <Button size="sm" href="/productos" variant="outline-info">Aquí</Button >{' '}
                    </p>
                    
                  </Alert>
                </Col>
              </Row>
            </Container>
          </>
        );
    }
}

export default Home;