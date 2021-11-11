import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plp from "./pages/Plp";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";
import {Product} from "./data/data"

const App: React.FC = () => {
const [product, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch(
    "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
  )
    .then((res) => res.json())
    .then((data) => setProducts(data));
});

  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/dettaglio/:id">
            <Detail product={product} />
          </Route>
          <Route path="/">
            <Plp product={product} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
