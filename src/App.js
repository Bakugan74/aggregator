import React from "react";
import Courusel from "./component/Carousel/carousel";
import Header1 from "./component/Header/Header";
// import DoctorCard from "./component/DoctorCard/DoctorCard";
import Articles from "./component/articles/Articles"


// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  return (
    <div className="app-wrapper">
    <Header1 />
    <Courusel />
    {/* <DoctorCard name = "ABJ"/> */}
    <Articles />
    </div>
);
}

export default App;
