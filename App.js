import React from "react";
import reviews from "./data";
import Testimonial from "./Componant/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col justify-center w-[100vw] h-[100vh] items-center bg-gray-200 ">
      <div className="text-center ">
        <p className="text-4xl font-bold">Our Testimonials</p>

        <div className="bg-violet-400 h-[4px] 2-[1/5] mt-1 "></div>
      </div>

      
      <Testimonial reviews={reviews} />
    </div>
  );
};

export default App;
