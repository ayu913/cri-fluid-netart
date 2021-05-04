import React from "react"
import './App.css';
import Award from "./section/Award";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Service from "./section/Service";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Award/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
