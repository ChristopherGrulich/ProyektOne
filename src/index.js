import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./css/style.css";

function App() {
  return (
    <div id="container">
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
