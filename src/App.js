import React from "react";
import Courusel from "./component/Carousel/carousel";
import Header1 from "./component/Header copy/Header";


// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  return (
    <div className="app-wrapper">
    <Header1 />
    <Courusel />
    </div>
);
}

export default App;
