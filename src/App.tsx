import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plp from "./pages/Plp";
import Detail from "./components/Detail";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dettaglio/:id" component={Detail} />
          <Route path="/" component={Plp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
