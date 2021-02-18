import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Detail" component={Detail} />
    </BrowserRouter>
  );
};

export default App;
