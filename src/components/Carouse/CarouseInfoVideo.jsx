import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardInfoVideo } from "components/Card";
import iconPrev from "assets/imageHome/prev-icon.svg";
import iconNext from "assets/imageHome/next-icon.svg";

const CarouselInfoVideo = () => {
  const carouselData = [
    {
      urlVideo: "https://www.youtube.com/embed/CS6OePXY2YM",
    },
    {
      urlVideo: "https://www.youtube.com/embed/qKMaTSUwTyI",
    },
    {
      urlVideo: "https://www.youtube.com/embed/lBuj1zoij6Y",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Sử dụng mũi tên tùy chỉnh cho button previous
    nextArrow: <CustomNextArrow />, // Sử dụng mũi tên tùy chỉnh cho button next
  };

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <CardInfoVideo key={index} {...item} />
      ))}
    </Slider>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="custom-prev-arrow slick-arrow slick-prev"
      onClick={onClick}
    >
      <img src={iconPrev} alt="Icon-prev" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="custom-next-arrow slick-arrow slick-next"
      onClick={onClick}
    >
      <img src={iconNext} alt="Icon-next" />
    </button>
  );
};

export default CarouselInfoVideo;
