import React, { Component } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

class Tarjeta extends Component {
    render() {
      const imagenUrl = "http://localhost:8080/upload/files/" + this.props.imagen;
      if (this.props.costoEnvio === "G") {
        this.costo = (
          <span className="gratis">
            <img
              src={"http://localhost:8080/upload/files/camion.png"}
              alt="envio gratis"
            ></img>
            Envío gratis a todo el País
          </span>
        );
      } else {
        this.costo = (
          <span className="costoEnvio">
            Costo de envío al interior de Argentina: ${this.props.costoEnvio}
          </span>
        );
      }
        return (
            <>
            <Container className="d-flex justify-content-center my-4">
                <Card style={{ width: "50rem" }}>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <a href={`detalleProducto/${this.props.id}`}>
                        <Card.Img
                          className="maxImg"
                          src={
                            imagenUrl
                          }
                        />
                      </a>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{this.props.instrumento}</Card.Title>
                        <Card.Subtitle>${this.props.precio}</Card.Subtitle>
                        <Card.Text>{this.costo}</Card.Text>
                        <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
            </Container>
          </>
        );
    }
}

export default Tarjeta;