import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
