import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact> {/* exact serve para avisar ao Routes que o caminho deve ser exatamente o que foi descrito em path, para não sobescrever sub-caminhos */}
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
