import React from "react";
import Image_Carousel from "./Image_Carousel";

import building from "../images/building.jpg";



function Event_card(props) {
    
    return (
    <>
      {props.details.map((data, index) => (
       
          <div key={index} class="body-eee">
            <div class="event-title">
              <data value="">{data.date}</data>
              <Image_Carousel images={data.images} />
              <div class="ml-0 md:ml-10">
                <h2 class="font-semibold text-xl text-center">
                  {data.title}
                </h2>
                <br />
                <p>
                  {data.details}
                </p>
              </div>
            </div>
          </div>

      ))}
    </>
  );
}

export default Event_card;
