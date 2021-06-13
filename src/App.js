import './assets/css/App.css';
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Productos from "./components/Productos";
import FormAdd from "./components/FormAdd";
import DondeEstamos from "./components/DondeEstamos";
import DetalleProducto from "./components/DetalleProducto";
import FormEdit from "./components/FormEdit";
function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/dondeEstamos" component={DondeEstamos}></Route>
        <Route path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto}></Route>
        <Route path="/formAdd" component={FormAdd}></Route>
        <Route path="/formEdit/:id" component={FormEdit}></Route>
      </Switch>
  );
}

export default App;
