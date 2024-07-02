import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Gpt3,
  Header,
} from "./Containers/index";
import { CTA, Brand, Navbar } from "./components/index";
import "./App.css";
const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Gpt3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
