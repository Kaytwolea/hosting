import React, { useEffect } from "react";
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about'
import Pricing from './components/pricing'
import Testimonial from "./components/testimonial";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default App;