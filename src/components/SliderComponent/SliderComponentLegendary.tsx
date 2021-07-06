import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
interface Props {
  header: any;
  rightArrow: any;
  leftArrow: any;
  cards?: Array<any>;
  background: any;
}

const SliderComponentLegendary: React.FC<Props> = ({
  background,
  cards,
  header,
  rightArrow,
  leftArrow,
}) => {
  const NextArrow = (onClick: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightArrow} alt="" className="right-direction" />
      </div>
    );
  };

  const PrevArrow = (onClick: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} alt="" className="left-direction" />
      </div>
    );
  };
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "120vh",
          minHeight: "mxa-content",
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: "-.5vh",
          marginBottom: "-.5vh",
        }}
        className="md:px-16 px-10 pt-20 "
      >
        <img src={header} alt="banner1" className="header-img" />
        <Slider className="slider-component" {...settings}>
          {cards?.map((i, indx) => (
            <div className="" key={indx}>
              <img src={i} alt="SilverCard" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponentLegendary;
