import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plp from "./pages/Plp";
import Detail from "./pages/Pdp";
import { useEffect, useState } from "react";
import { Product } from "./data/data";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchFunc = () => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          element.image = `https://picsum.photos/350/350?random=${element.UPC}`;
          element.variants.forEach((el) => {
            let randomn = Math.round(Math.random() * 100 + 1).toString();
            el.image = `https://picsum.photos/350/350?random=${randomn}`;
          });
        });
        setProducts(data);
      });
  };
  
  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dettaglio/:id">
            <Detail products={products} />
          </Route>
          <Route path="/">
            <Plp products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
