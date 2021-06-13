import React, { Component } from "react";
import Rutas from "./Rutas";
import axios from "axios";
import Tarjeta from "./Tarjeta";
class Productos extends Component {
  state = {
    instrumentos: [],
  };
  componentDidMount() {
    this.getAllInstrumentos();
  }

  async getAllInstrumentos() {
    await axios.get("http://localhost:8080/instrumento").then((res) => {
      console.log(res.data);
      this.setState({ instrumentos: res.data });
    });
  }

  render() {
    const instrumentoTarjeta = this.state.instrumentos.map((instrumento, i) => {
      return (
        <Tarjeta
          key={instrumento.id}
          id={instrumento.id}
          instrumento={instrumento.instrumento}
          marca={instrumento.marca}
          modelo={instrumento.modelo}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          descripcion={instrumento.descripcion}
        ></Tarjeta>
      );
    });
    return (
      <>
        <Rutas></Rutas>
        {instrumentoTarjeta}

      </>
    );
  }
}
export default Productos;
