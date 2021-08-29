import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DemoSlider = () => {
  const settings = {
    className: "slider center variable-width",

    infinite: true,

    slidesToShow: 1,

    slidesToScroll: 1,

    variableWidth: true,
  };
  const array = [100, 200, 75, 300, 225, 175];

  return (
    <div>
      <Slider {...settings}>
        {array.map((item, index) => (
          <div
            style={{
              width: array[index],
              background: "red",
              padding: 20,
            }}
          >
            <p>{array[index]}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DemoSlider;
