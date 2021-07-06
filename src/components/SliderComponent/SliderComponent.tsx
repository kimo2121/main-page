import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
interface Props {
  headerImg: any;
  rightArrow: any;
  leftArrow: any;
  cardImgs?: Array<any>;
  background: any;
}

const SliderComponent: React.FC<Props> = ({
  cardImgs,
  headerImg,
  rightArrow,
  leftArrow,
  background,
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
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="md:px-16 px-10 pt-20 ">
        <img src={headerImg} alt="banner1" className="header-img" />
        <Slider className="slider-component" {...settings}>
          {cardImgs?.map((i, indx) => (
            <div className="each-slide" key={indx}>
              <img src={i} alt="SilverCard" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
