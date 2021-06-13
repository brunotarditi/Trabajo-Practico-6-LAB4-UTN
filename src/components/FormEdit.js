import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import Rutas from "./Rutas";
class FormEdit extends Component {
  state = {
    id: "",
    instrumento: "",
    marca: "",
    modelo: "",
    imagen: "",
    precio: "",
    costoEnvio: "",
    cantidadVendida: "",
    descripcion: "",
    file: null,
    formData: File,
  };

  componentDidMount() {
    this.getInstrumentoPorId(this.props.match.params.id);
  }
  async getInstrumentoPorId(id) {
    await axios.get("http://localhost:8080/instrumento/" + id).then((res) => {
      this.setState({
        id: res.data.id,
        instrumento: res.data.instrumento,
        marca: res.data.marca,
        modelo: res.data.modelo,
        imagen: res.data.imagen,
        precio: res.data.precio,
        costoEnvio: res.data.costoEnvio,
        cantidadVendida: res.data.cantidadVendida,
        descripcion: res.data.descripcion,
      });
      console.log(res.data)
    });
    const imgUrl = "http://localhost:8080/upload/files/" + this.state.imagen;
    this.setState({file: imgUrl})
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeFile = (event) => {
    this.setState({ imagen: event.target.files[0].name });
    this.setState({ formData: event.target.files[0] });
    this.setState({ file: URL.createObjectURL(event.target.files[0]) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        "http://localhost:8080/instrumento/" + this.state.id,
        this.state
      )
      .then((res) => {
        const file = new FormData();
        file.append("file", this.state.formData);
        axios.post("http://localhost:8080/upload", file).then((res) => {
          console.log(res)
        })
        window.location.href = "/productos";
      });
  };

  render() {
    return (
      <>
        <Rutas></Rutas>
        <Container className="d-flex justify-content-center mt-4">
          <Row className="shadow-lg p-3 mb-5 rounded form">
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupInstrumento">
                  <Form.Label>Instrumento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Instrumento"
                    name="instrumento"
                    onChange={this.handleChange}
                    value={this.state.instrumento}
                    required
                  />
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formGroupMarca">
                      <Form.Label>Marca</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Marca"
                        name="marca"
                        onChange={this.handleChange}
                        value={this.state.marca}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupModelo">
                      <Form.Label>Modelo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Modelo"
                        name="modelo"
                        onChange={this.handleChange}
                        value={this.state.modelo}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group controlId="formGroupCosto">
                  <Form.Label>Costo envío</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Costo envío"
                    name="costoEnvio"
                    onChange={this.handleChange}
                    value={this.state.costoEnvio}
                    required
                  />
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formGroupPrecio">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Precio"
                        name="precio"
                        onChange={this.handleChange}
                        value={this.state.precio}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGroupCantidad">
                      <Form.Label>Cantidad vendida</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Cantidad"
                        name="cantidadVendida"
                        onChange={this.handleChange}
                        value={this.state.cantidadVendida}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group>
                  <Form.File
                    id="formControlFile"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    name="file"
                    onChange={this.handleChangeFile}
                    required
                    />
                </Form.Group>
                <Image
                  src={this.state.file}
                  rounded
                  fluid
                  className="prevImg"
                />
                <Form.Group controlId="formControlDescripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    onChange={this.handleChange}
                    value={this.state.descripcion}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Añadir
                </Button>
                <Button
                  href={`../detalleProducto/${this.state.id}`}
                  className="btn btn-info m-2"
                >
                  Volver
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default FormEdit;
