import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardTeacher } from "components/Card";
import iconPrev from "assets/imageHome/prev-icon.svg";
import iconNext from "assets/imageHome/next-icon.svg";
import avatarTeacher from "assets/imageHome/Avatar-Teacher1.svg";
import avatarTeacher1 from "assets/imgDashboard/avatar-teacher4.jpeg";
import avatarTeacher2 from "assets/imgDashboard/avatar-teacher1.svg";
import avatarTeacher3 from "assets/imgDashboard/avatar-teacher2.svg";
import avatarTeacher4 from "assets/imgDashboard/avatar-teacher3.svg";

const CarouselTeacher = () => {
  const carouselData = [
    {
      avatarTeacher: avatarTeacher,
      teacherName: "John",
      review:
        "“I love teaching because it’s so satisfying when you see that little light bulb go off plus my co-workers are great.”",
    },
    {
      avatarTeacher: avatarTeacher1,
      teacherName: "John",
      review:
        "“I love teaching because it’s so satisfying when you see that little light bulb go off plus my co-workers are great.”",
    },
    {
      avatarTeacher: avatarTeacher2,
      teacherName: "John",
      review:
        "“I love teaching because it’s so satisfying when you see that little light bulb go off plus my co-workers are great.”",
    },
    {
      avatarTeacher: avatarTeacher3,
      teacherName: "John",
      review:
        "“I love teaching because it’s so satisfying when you see that little light bulb go off plus my co-workers are great.”",
    },
    {
      avatarTeacher: avatarTeacher4,
      teacherName: "John",
      review:
        "“I love teaching because it’s so satisfying when you see that little light bulb go off plus my co-workers are great.”",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the time interval (in milliseconds) between slides
    prevArrow: <CustomPrevArrow />, // Sử dụng mũi tên tùy chỉnh cho button previous
    nextArrow: <CustomNextArrow />, // Sử dụng mũi tên tùy chỉnh cho button next
  };

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <CardTeacher key={index} {...item} />
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

export default CarouselTeacher;
