import Home from "./pages-containers/Home/Home";
import Cobrancas from "./pages-containers/Cobrancas/Cobrancas";
import CriarCobrancas from "./pages-containers/CriarCobrancas/CriarCobrancas";
import ConfiraEmail from "./components/ConfiraEmail/ConfiraEmail";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.css";

function App() {
  // const { params } = useRouteMatch();
  // const { id } = params;

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/" render={() => <Home />} /> */}
          {/* <Route exact path="/" component={Home} /> */}

          <Route path="/cobrancas">
            <Cobrancas />
          </Route>

          {/* <Route path="/cobrancas/editar/:id">
            <EditarCobrancas />
          </Route> */}

          <Route path="/cobrancas/criar">
            <CriarCobrancas />
          </Route>

          <Route path="/confirmacao-email">
            <ConfiraEmail />
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* <ConfiraEmail /> */}
        {/* <Cobrancas /> */}
        <CriarCobrancas />
      </div>

      {/* <main>
        <Login />
        <Cadastro />
      </main> */}
    </BrowserRouter>
  );
}

export default App;
