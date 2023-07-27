import styled from "styled-components";
import banner1 from "assets/imageHome/banner1.png";
import lineBanner from "assets/imageHome/Line-10.svg";
import { Button } from "components/Button";
import iconPlay from "assets/imageHome/Polygon-2.svg";
import iconTick from "assets/imageHome/icon-tick.svg";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import TopDrawer from "components/TopDrawer/TopDrawer";

const BannerStyled = styled.div`
  padding-left: 140px;
  padding-bottom: 102px;
  height: auto;
  background-color: #f7f7f7;

  .banner-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 222px;
  }

  .left {
    display: flex;
    flex-direction: column;
    width: 55%;

    .banner-title1 {
      @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap");
      font-family: "Nunito", sans-serif;
      font-size: 64px;
      font-weight: 900;

      p {
        margin: 0;
      }
      p:first-child {
        color: #2e2c2c;
      }
      p:last-child {
        color: #0c4ca3;
      }
    }
    .banner-title2 {
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
      font-family: "Poppins", sans-serif;
      color: #96989b;
      line-height: 38.7px;
      font-size: 22px;
      font-weight: 600;
      width: 80%;
    }

    .btn-group {
      padding-top: 100px;
      display: flex;
      flex-direction: row;
      padding-bottom: 75px;
      gap: 40px;

      p {
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
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

      p {
        color: #2e2c2c;
      }
      button:hover {
        background-color: #0c4ca3;
        img {
          filter: invert(100%) sepia(43%) saturate(2860%) hue-rotate(184deg)
            brightness(126%) contrast(98%);
        }
      }
    }

    .banner-title3 {
      display: flex;
      justify-content: space-between;
    }

    .group-title3 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;

      p {
        margin: 0;
        font-size: 17px;
      }
    }
  }

  .right {
    width: 35%;
  }

  .img-size1 {
    width: 80%;
  }
`;

const Banner = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <BannerStyled>
      <div className="banner-content">
        <div className="left">
          <div className="banner-title1">
            <p> Access Your Class From</p>
            <p>Anywhere & Anytime</p>
          </div>
          <div className="banner-title2">
            <p>
              A solution for easy and flexible online learning, you can study
              anywhere and at anytime on this platform
            </p>
            <div>
              <img src={lineBanner} alt="line-in-banner" />
            </div>
            <div className="btn-group">
              <Link to="student-login">
                <Button
                  width="208px"
                  height="84px"
                  bgColor="#FE7243"
                  textColor="#fff"
                  borderRadius="40px"
                  className="btn-hover"
                >
                  <p> Join For Free</p>
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
                <p>Play Now</p>
              </div>
            </div>
            <div className="banner-title3">
              <div className="group-title3">
                <img src={iconTick} alt="icon-Tick" />
                <p>Experienced Instructors</p>
              </div>
              <div className="group-title3">
                <img src={iconTick} alt="icon-Tick" />
                <p>Quality Videos</p>
              </div>
              <div className="group-title3">
                <img src={iconTick} alt="icon-Tick" />
                <p>Affordable Prices</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={banner1} alt="img-banner1" className="img-size1" />
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
