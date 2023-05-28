import React from "react";

import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT,
  Header,
} from "./containers";
import { Navbar, CTA, Brand } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
