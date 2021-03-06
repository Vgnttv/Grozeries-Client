import React, { Component } from "react";
import Routing from "./Routing";
import "./App.css";
import FooterPage from "./Components/Footer/footerPage";

import Navigation from "./Components/Navigation/navigationBar";

class App extends Component {
  render() {
    return (
      <div className="main" style={{ height: "100%" }}>
        <nav>
          <Navigation />
        </nav>
        <main style={{ marginTop: 60 }}>
          <Routing />
        </main>
        <FooterPage className="mt-auto" />
      </div>
    );
  }
}

export default App;
