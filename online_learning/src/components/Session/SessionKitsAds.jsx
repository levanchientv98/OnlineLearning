import styled from "styled-components";

import iconImpact from "assets/imageHome/icon-impact.svg";
import iconInspiration from "assets/imageHome/iconInspiration.svg";
import iconEmpathy from "assets/imageHome/iconEmpathy.svg";
import iconVariety from "assets/imageHome/iconVariety.svg";
import iconFlexibility from "assets/imageHome/iconFlexibility.svg";
import iconEm from "assets/imageHome/iconEm.svg";
import imageAds1 from "assets/imageHome/image-ads1.png";
import imageAds2 from "assets/imageHome/image-ads2.jpg";
import { Button } from "components/Button";
import iconPlay from "assets/imageHome/Polygon-2.svg";
import { CarouselInfoVideo } from "components/Carouse";
import { React, useState } from "react";
import iconSearch from "assets/imageHome/icon-content4-1.svg";
import iconChoose from "assets/imageHome/icon-content4-2.svg";
import iconSchedule from "assets/imageHome/icon-content4-3.svg";
import iconAttend from "assets/imageHome/icon-content4-4.svg";
import iconFeedback from "assets/imageHome/icon-content4-5.svg";
import { Link } from "react-router-dom";
import TopDrawer from "components/TopDrawer/TopDrawer";

const SessionAds = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  display: flex;
  flex-direction: column;

  .sessionAds-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 140px;
    box-sizing: border-box;
  }
  .session-content1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0em;
      text-align: center;
      color: #5f6368;
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: center;
      color: #0c4ca3;
    }

    .group-icon {
      display: flex;
      padding-left: 97px;
      flex-direction: column;
      gap: 71px;
      width: 100%;
      justify-content: space-between;

      .item-ads {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
      }

      .icon-content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 34px;

        .group-icon1 {
          position: relative;
        }

        .background-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 84px;
          height: 84px;
          border-radius: 23px;
          background-color: #f96e6e;
          position: absolute;
          top: 9px;
          left: 9px;
        }

        .content-ads {
          display: flex;
          flex-direction: column;
          gap: 40px;
          h2 {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-size: 30px;
            font-weight: 600;
            line-height: 73px;
            text-align: left;
            color: #5f6368;
          }
          p {
            margin: 0;
            width: 365px;
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-weight: 300;
            line-height: 41px;
            text-align: left;
            color: #2e2c2c;
          }
        }
      }
    }
  }

  .session-content2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 302px;

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: #5f6368;
    }

    .group-content1 {
      display: flex;
      padding-left: 80px;
      gap: 80px;
      align-items: center;

      .image-style2 {
        box-shadow: -1px 42px 100px -1px rgba(165, 237, 208, 0.5);
        -webkit-box-shadow: -1px 42px 100px -1px rgba(165, 237, 208, 0.5);
        -moz-box-shadow: -1px 42px 100px -1px rgba(165, 237, 208, 0.5);
        border-radius: 50px;
      }

      p {
        width: 600px;
        font-family: "Poppins", sans-serif;
        font-size: 30px;
        font-weight: 400;
        line-height: 73px;
        color: #2e2c2c;
        text-align: left;
        margin: 0;
      }

      .btn-group {
        padding-top: 137px;
        display: flex;
        flex-direction: row;
        gap: 40px;

        span {
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          font-weight: 600;
        }
        .btn-hover:hover {
          background-color: #0c4ca3;
        }
      }

      .btn-play {
        display: flex;
        gap: 15px;
        justify-content: center;

        Button {
          box-shadow: 0 0 2px 2px rgba(52, 188, 173, 0.25);
        }

        img {
          justify-items: center;
          vertical-align: middle;
          margin-left: 10px;
        }
        button:hover {
          background-color: #0c4ca3;
          img {
            filter: invert(100%) sepia(43%) saturate(2860%) hue-rotate(184deg)
              brightness(126%) contrast(98%);
          }
        }
      }
    }
  }

  .session-content3 {
    width: 100%;
    display: flex;
    flex-direction: column;

    .content3-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        color: #0c4ca3;
      }

      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        color: #5f6368;
      }
    }

    .custom-prev-arrow:hover,
    .custom-next-arrow:hover {
      filter: invert(62%) sepia(98%) saturate(307%) hue-rotate(124deg)
        brightness(85%) contrast(85%);
    }

    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
    .slick-prev {
      left: 5%;
      top: 50%;
    }
    .slick-next {
      left: 95%;
      top: 50%;
    }
  }

  .session-content4 {
    width: 100%;
    height: 1139px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 59px;
    padding-top: 177px;
    gap: 180px;
    background-color: #f3f9fb;

    h2 {
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0em;
      color: #5f6368;
    }

    .content4 {
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .item-content4 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
      }

      p {
        width: 224px;
        font-family: "Poppins", sans-serif;
        font-size: 19px;
        font-weight: 500;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: center;
        color: #7d7979;
      }
    }

    span {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0em;
    }
  }
`;

const SessionKitsAds = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <SessionAds>
      <div className="sessionAds-layout">
        <div className="session-content1">
          <h2>Why choose KITS tutor?</h2>
          <p>We don’t just teach, we provide....</p>
          <div className="group-icon">
            <div className="item-ads">
              <div className="icon-content">
                <img src={iconImpact} alt="iconImpact" />
                <div className="content-ads">
                  <h2>Impact</h2>
                  <p>Highly effective tutoring at affordable prices.</p>
                </div>
              </div>
              <div className="icon-content">
                <img src={iconVariety} alt="iconVariety" />
                <div className="content-ads">
                  <h2>Variety</h2>
                  <p>
                    Authentic well qualified tutors who like helping others
                    learn
                  </p>
                </div>
              </div>
            </div>
            <div className="item-ads">
              <div className="icon-content">
                <img src={iconInspiration} alt="iconInspiration" />
                <div className="content-ads">
                  <h2>Inspiration</h2>
                  <p>
                    Tutors who inform, inspire and motivate their students to
                    perform at their best.
                  </p>
                </div>
              </div>
              <div className="icon-content">
                <img src={iconFlexibility} alt="iconFlexibility" />
                <div className="content-ads">
                  <h2>Flexibility</h2>
                  <p>
                    Responsive tutors who accomodate your needs at your
                    convenience
                  </p>
                </div>
              </div>
            </div>
            <div className="item-ads">
              <div className="icon-content">
                <div className="group-icon1">
                  <img src={iconEmpathy} alt="iconEmpathy" />
                  <div className="background-icon">
                    {" "}
                    <img src={iconEm} alt="iconEmpathy2" />
                  </div>
                </div>
                <div className="content-ads">
                  <h2>Empathy</h2>
                  <p>
                    Tutors who deliver learning in ways that students can easily
                    grasp content
                  </p>
                </div>
              </div>
              <div className="image-style1">
                <img src={imageAds1} alt="imageAds1" />
              </div>
            </div>
          </div>
        </div>
        <div className="session-content2">
          <h2>Transform your life through education</h2>
          <div className="group-content1">
            <img src={imageAds2} alt="imageAds2" className="image-style2" />
            <div className="content-right">
              <p>
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives
              </p>
              <div className="btn-group">
                <Link to="tutor-login">
                  <Button
                    className="btn-hover"
                    width="208px"
                    height="84px"
                    bgColor="#FE7243"
                    textColor="#fff"
                    borderRadius="40px"
                  >
                    <span> Join them</span>
                  </Button>
                </Link>
                <div className="btn-play">
                  <Button
                    width="84px"
                    height="84px"
                    bgColor="#FFF"
                    textColor="#000000"
                    borderRadius="50%"
                    onClick={handleDrawerToggle}
                  >
                    <img src={iconPlay} alt="icon-play" />
                  </Button>
                  <TopDrawer open={drawerOpen} onClose={handleDrawerToggle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="session-content3">
          <div className="content3-title">
            <h3>Happy stories.</h3>
            <h2>Hear it from people that trust us.</h2>
          </div>
          <div>
            <CarouselInfoVideo></CarouselInfoVideo>
          </div>
        </div>
      </div>
      <div className="session-content4">
        <h2>Ready to get started with VeritEd?</h2>
        <div className="content4">
          <div className="item-content4">
            <img src={iconSearch} alt="iconSearch" />
            <p>Search for your subject of interest</p>
          </div>
          <div className="item-content4">
            <img src={iconChoose} alt="iconChoose" />
            <p>Search for your subject of interest</p>
          </div>
          <div className="item-content4">
            <img src={iconSchedule} alt="iconSchedule" />
            <p>Search for your subject of interest</p>
          </div>
          <div className="item-content4">
            <img src={iconAttend} alt="iconAttend" />
            <p>Search for your subject of interest</p>
          </div>
          <div className="item-content4">
            <img src={iconFeedback} alt="iconFeedback" />
            <p>Search for your subject of interest</p>
          </div>
        </div>
        <Link to="student-login">
          <Button
            width="208px"
            height="84px"
            bgColor="#FE7243"
            textColor="#fff"
            borderRadius="40px"
          >
            <span>Join For Free</span>
          </Button>
        </Link>
      </div>
    </SessionAds>
  );
};

export default SessionKitsAds;
