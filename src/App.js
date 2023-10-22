import React from "react";
import Courusel from "./component/Carousel/carousel";
import Header from "./component/Header/Header";

// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  return (
    <div className="app-wrapper">
    <Header />
    <Courusel />
    </div>
);
}

export default App;
