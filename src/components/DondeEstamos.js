import React, { Component } from 'react';
import Rutas from "./Rutas";
class DondeEstamos extends Component {
    render() {
        return (
            <>
            <Rutas></Rutas>
            <iframe
              title="mapa"
              className="mt-3 d-block mx-auto"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin,%20Ciudad%20de%20Mendoza+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </>
        );
    }
}

export default DondeEstamos;