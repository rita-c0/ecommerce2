import * as React from "react";
import "./App.css";
import styled from "styled-components";
import Plp from "./pages/Plp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Routes>
              <Route path="/dettaglio/:id" element={<Detail />} />
              <Route path="/" element={<Plp />} />
            </Routes>
          </Container>
        </Router>
      </header>
    </div>
  );
};

export default App;
