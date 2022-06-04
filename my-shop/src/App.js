import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/> 
      <Cards/>
    </div>
  );
}

export default App;
