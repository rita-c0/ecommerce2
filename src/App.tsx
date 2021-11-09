import * as React from "react";
import "./App.css";
import styled from "styled-components";
import Plp from "./pages/Plp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
            <Switch>
              <Route path="/dettaglio/:id" component={Detail} />
              <Route path="/" component={Plp} />
            </Switch>
          </Container>
        </Router>
      </header>
    </div>
  );
};

export default App;
