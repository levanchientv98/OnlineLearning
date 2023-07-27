import styled from "styled-components";
import { Popover } from "antd";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logobell } from "../../icon/iconbell.svg";
import { ReactComponent as LogoSeting } from "../../icon/iconsetting.svg";
import iconLogOut from "assets/imgDashboard/log-out.svg";
import Logosearch from "../../icon/iconsreach.svg";
// import Imglogo from "../../icon/img.svg";

import React from "react";
import { Chip } from "@mui/material";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    padding-left: 50px;
    width: 113px;
    height: 48px;
    border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 2px 2px 2px lightgray;
    border-radius: 117px;
  }
  .nav-item {
    font-size: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      margin: 0;
      color: rgba(140, 136, 136, 1);
      font-size: 13px;
      font-family: "Poppins", sans-serif;
    }
  }

  .search {
    position: relative;
    img {
      position: absolute;
      left: 11%;
      top: 33%;
    }

    input {
      width: 190px;
      padding-right: 15px;
    }

    input:focus {
      outline: none;
    }
  }
  .notification {
    display: flex;
    align-items: center;
    gap: 30px;

    .tag {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
    }
    .MuiChip-label {
      text-transform: capitalize;
    }
  }

  .icon-setting {
    transition: transform 0.3s ease-in-out;
  }
  .icon-setting:hover {
    transform: rotate(360deg);
  }

  .icon-bell:hover {
    animation: ring 1s infinite; /* Áp dụng animation với tên keyframe "ring" */
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg); /* Góc xoay ban đầu */
    }
    10% {
      transform: rotate(20deg); /* Góc xoay 20 độ */
    }
    20% {
      transform: rotate(-20deg); /* Góc xoay -20 độ */
    }
    30% {
      transform: rotate(20deg); /* Góc xoay 20 độ */
    }
    40% {
      transform: rotate(-20deg); /* Góc xoay -20 độ */
    }
    50% {
      transform: rotate(20deg); /* Góc xoay 20 độ */
    }
    60% {
      transform: rotate(-20deg); /* Góc xoay -20 độ */
    }
    70% {
      transform: rotate(20deg); /* Góc xoay 20 độ */
    }
    80% {
      transform: rotate(-20deg); /* Góc xoay -20 độ */
    }
    90% {
      transform: rotate(20deg); /* Góc xoay 20 độ */
    }
    100% {
      transform: rotate(0deg); /* Góc xoay trở lại ban đầu */
    }
  }
  .select-item:hover {
    .borderBT {
      width: 25px;
      border-bottom: 3px solid #0c4ca3;
    }
  }
  .avatar-style {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
const DivStyled = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  .nav-item {
    font-size: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      margin: 0;
      color: rgba(140, 136, 136, 1);
      font-size: 13px;
      font-family: "Poppins", sans-serif;
    }
  }
  .icon-size1 {
    width: 30px;
    height: 30px;
  }
  .nav-item:hover {
    p {
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0em;
      color: #2e2c2c;
    }
    .icon-size1 {
      filter: invert(9%) sepia(1%) saturate(4254%) hue-rotate(346deg)
        brightness(92%) contrast(78%);
    }
  }
`;

const HeaderDashBoard = () => {
  const userType = localStorage.getItem("userType");
  const avatar = localStorage.getItem("avatar");
  const handleLogout = () => {
    localStorage.clear();
  };

  const content = (
    <DivStyled>
      {userType === "student" ? (
        <NavLink
          to={"/student-login"}
          exact="true"
          className="nav-item"
          activeclassname="active"
          onClick={handleLogout}
        >
          <img src={iconLogOut} alt="icon-logout" className="icon-size1" />
          <p>Log out</p>
        </NavLink>
      ) : (
        <NavLink
          to={"/tutor-login"}
          exact="true"
          className="nav-item"
          activeclassname="active"
          onClick={handleLogout}
        >
          <img src={iconLogOut} alt="icon-logout" className="icon-size1" />
          <p>Log out</p>
        </NavLink>
      )}
    </DivStyled>
  );

  return (
    <HeaderStyled>
      <div className="search">
        <img src={Logosearch} alt="Search" />
        <input placeholder="Search tutor" type="search"></input>
      </div>
      <div className="notification">
        <div className="select-item">
          {" "}
          <Logobell className="icon-bell" />
          <div className="borderBT"></div>
        </div>
        <div className="select-item">
          {" "}
          <a href="/edit-student">
            {" "}
            <LogoSeting className="icon-setting" />
          </a>
          <div className="borderBT"></div>
        </div>
        <div className="tag">
          <Popover placement="bottom" content={content}>
            <img src={avatar} alt="img" className="avatar-style" />
          </Popover>
          {userType === "student" ? (
            <Chip color="primary" size="large" label={userType} />
          ) : (
            <Chip size="large" color="success" label={userType}></Chip>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
};

export default HeaderDashBoard;
