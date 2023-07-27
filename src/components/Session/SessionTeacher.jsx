// import { CardTeacher } from "components/Card";
import styled from "styled-components";

import avatarTeacher from "assets/imageHome/Avatar-Teacher2.svg";
import { CarouselTeacher } from "components/Carouse";
import backgroundBlue from "assets/imageHome/back-ground-blue.svg";
import { Button } from "components/Button";
import { Link } from "react-router-dom";

const SessionTeacherInfo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  width: 100%;
  background-color: #fff;
  .session-layout {
    display: flex;
    flex-direction: column;
    padding: 0 140px;

    h2 {
      font-family: "Poppins", sans-serif;
      color: #5f6368;
      font-size: 40px;
      font-weight: 700;
    }

    .custom-prev-arrow,
    .custom-next-arrow {
      background-color: transparent; /* Bỏ nền */
      color: #ff0000; /* Tô màu cho mũi tên */
      border: none; /* Bỏ viền nút */
      font-size: 16px;
      cursor: pointer;
    }

    .custom-prev-arrow:hover,
    .custom-next-arrow:hover {
      filter: invert(62%) sepia(98%) saturate(307%) hue-rotate(124deg)
        brightness(85%) contrast(85%);
    }
  }
  .slick-dots {
    display: none !important;
  }

  .slick-prev:before {
    display: none;
  }

  .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: -4%;
    top: 30%;
  }
  .slick-next {
    left: 96%;
    top: 30%;
  }
  .title-intructor {
    display: flex;
    height: 843px;
    justify-content: space-between;
    padding-top: 150px;
  }

  .group-img {
    width: 50%;
    height: 843px;
    position: relative;

    .image1 {
      position: absolute;
      width: 80%;
      top: -6px;
      left: 0;
      z-index: 1;
    }
    .image2 {
      position: absolute;
      width: 818px;
      height: 650px;
      z-index: 0;
      top: 193px;
      left: -30px;
    }
  }
  .become-intructor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 632px;

    h2 {
      font-family: "Poppins", sans-serif;
      line-height: 60px;
      font-size: 40px;
      font-weight: 700;
      color: #5f6368;
    }
    p {
      font-family: "Poppins", sans-serif;
      color: #2e2c2c;
      font-size: 30px;
      font-weight: 400;
      line-height: 72.75px;
      text-align: justify;
    }

    span {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
    }
  }
  .banner-info {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 154px 0 140px;
    width: 100%;
    height: 248px;
    background-color: #0c4ca3;

    .flex-item {
      display: flex;
      align-items: center;
      gap: 30px;

      p:first-child {
        font-size: 44px;
        font-weight: 500;
        line-height: 89px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        margin: 0;
      }

      p:last-child {
        width: 140px;
        font-family: "Poppins", sans-serif;
        font-size: 26px;
        font-weight: 500;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        margin: 0;
      }
    }
  }
  .btn-hover:hover {
    background-color: #0c4ca3;
  }
`;

const SessionTeacher = () => {
  return (
    <SessionTeacherInfo>
      <div className="session-layout">
        {" "}
        <h2>Get to know your tutors</h2>
        <CarouselTeacher></CarouselTeacher>
        <div className="title-intructor">
          <div className="group-img">
            <img src={avatarTeacher} alt="imageTeacher" className="image1" />
            <img src={backgroundBlue} alt="background" className="image2" />
          </div>
          <div className="become-intructor">
            <h2>Become an Instructor</h2>
            <p>
              Instructors from around the world teach millions of students on
              Verited. We provide the tools and skills to teach what you love.
            </p>
            <Link to="student-login">
              <Button
                className="btn-hover"
                width="320px"
                height="84px"
                bgColor="#FE7243"
                textColor="#fff"
                borderRadius="40px"
              >
                <span>Start teaching now</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="banner-info">
        <div className="flex-item">
          <p>10,000+</p>
          <p>TUTORED SUBJECTS</p>
        </div>
        <div className="flex-item">
          <p>24</p>
          <p>HOURS PER DAY</p>
        </div>
        <div className="flex-item">
          <p>7</p>
          <p>DAYS A WEEK</p>
        </div>
        <div className="flex-item">
          <p>100%</p>
          <p> COLLEGE EDUCATED</p>
        </div>
      </div>
    </SessionTeacherInfo>
  );
};

export default SessionTeacher;
