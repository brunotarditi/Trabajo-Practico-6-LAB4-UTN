import React, { Component } from "react";
import Rutas from "./Rutas";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import swal from "sweetalert";
class DetalleProducto extends Component {
  state = {
    instrumento: {
      imagen: "",
    },
  };

  componentDidMount() {
    this.getInstrumentoPorId(this.props.match.params.id);
  }

  async getInstrumentoPorId(id) {
    await axios.get("http://localhost:8080/instrumento/" + id).then((res) => {
      console.log(res.data);
      this.setState({ instrumento: res.data });
    });
  }

  deleteInstrumento = (id, e) => {
    swal({
      title: "Eliminar",
      text: "¿Estás seguro que deseas eliminar este instrumento?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((resSwal) => {
      if (resSwal) {
        axios.delete("http://localhost:8080/instrumento/" + id).then((res) => {
          console.log(res.data);
        });
        swal({
          text: "El instrumento se ha eliminado con éxito",
          icon: "success",
          timer: "3000",
        }).then(() => {
          window.location.href = "/productos";
        });
      }
    });
  };
  render() {
    const instrumentoEncontrado = this.state.instrumento;
    const imagenUrl =
      "http://localhost:8080/upload/files/" + instrumentoEncontrado.imagen;
    if (instrumentoEncontrado.costoEnvio === "G") {
      this.costo = (
        <span className="gratis">
          <img
            src={"http://localhost:8080/upload/files/camion.png"}
            alt="envio gratis"
          ></img>
          Envío gratis
        </span>
      );
    } else {
      this.costo = (
        <span className="costoEnvio">
          Costo de envío al interior de Argentina: $
          {instrumentoEncontrado.costoEnvio}
        </span>
      );
    }
    return (
      <>
        <Rutas></Rutas>
        <Container className="mt-4">
          <Row>
            <Col>
              <img
                className="d-block mx-auto sizeImg"
                src={imagenUrl}
                alt="imagen-producto"
              ></img>
              <p className="title">Descripción: </p>
              <p className="descripcion">{instrumentoEncontrado.descripcion}</p>
            </Col>
            <Col lg="0">
              <div className="verticalLine d-none d-lg-block"></div>
            </Col>
            <Col lg="4">
              <Row>
                <Col>
                  <span>{instrumentoEncontrado.cantidadVendida} vendidos</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="instrumento">
                    {instrumentoEncontrado.instrumento}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="precio">$ {instrumentoEncontrado.precio}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="title">
                    Marca: {instrumentoEncontrado.marca}
                  </span>
                  <br />
                  <span className="title">
                    Modelo: {instrumentoEncontrado.modelo}
                  </span>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <span>Costo de envío: </span>
                  <br />
                  <span>{this.costo}</span>
                </Col>
              </Row>
              <Row className="mt-5 pt-5">
                <Col>
                  <Button size="sm" href="/productos" variant="outline-info">
                    Agregar al carrito
                  </Button>{" "}
                </Col>
              </Row>
            </Col>
            <Col lg="1">
              <div className="verticalLine d-none d-md-block"></div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button size="sm" href="/productos" className="btn btn-info m-2">
                Volver
              </Button>
              <Button
                size="sm"
                href={`../formEdit/${instrumentoEncontrado.id}`}
                className="btn btn-secondary m-2"
              >
                Editar
              </Button>
              <Button
                size="sm"
                className="btn btn-danger m-2"
                onClick={(e) =>
                  this.deleteInstrumento(instrumentoEncontrado.id, e)
                }
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DetalleProducto;
