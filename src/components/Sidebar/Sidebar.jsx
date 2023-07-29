import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo1 } from "assets/imgDashboard/icon-dashboard.svg";
import { ReactComponent as Logo } from "../../icon/logo.svg";
import { ReactComponent as Logo2 } from "../../icon/logomess.svg";
import { ReactComponent as Logo3 } from "assets/imgDashboard/videocall.svg";
import { ReactComponent as Logo4 } from "../../icon/logopurchase.svg";
import { ReactComponent as Logo5 } from "../../icon/logotutors.svg";

const SidebarStyle = styled.div`
  height: 100%;
  border-right: rgba(0, 0, 0, 0.04) solid 1px;
  .logo {
    padding-top: 50px;
    margin-left: 63px;
  }
  .side {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 50px;
    padding-left: 63px;
  }
  .nav-item {
    display: flex;
    gap: 30px;
    align-items: center;

    p {
      margin: 0;
      color: rgba(140, 136, 136, 1);
      font-size: 15px;
      font-family: "Poppins", sans-serif;
    }
  }

  .nav-item:hover {
    filter: invert(19%) sepia(85%) saturate(1888%) hue-rotate(201deg)
      brightness(99%) contrast(94%);

    p {
      color: #0c4ca3;
    }
  }

  .active {
    filter: invert(19%) sepia(85%) saturate(1888%) hue-rotate(201deg)
      brightness(99%) contrast(94%);

    p {
      color: #0c4ca3;
    }
  }

  .classes {
    margin-top: 20px;
    span {
      color: rgba(199, 196, 196, 1);
      font-family: "Poppins", sans-serif;
      font-size: 13px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-top: 20px;
    }
    li:first-child::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(254, 214, 111, 1);
    }
    li:nth-child(2)::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(119, 173, 255, 1);
    }
    li:nth-child(3)::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(246, 110, 110, 1);
    }
  }
  .icon-size {
    width: 21px;
    height: 30px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="logo">
        <Link to="/" exact="true">
          {" "}
          <Logo></Logo>
        </Link>
      </div>
      <div className="side">
        <NavLink
          to="/student-dashboard"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo1></Logo1>
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/student-messages"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo2></Logo2>
          <p>Messages</p>
        </NavLink>
        <NavLink
          to="/video-call"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo3 className="icon-size"></Logo3>
          <p>Video Call</p>
        </NavLink>
        <NavLink
          to="/purchase-history"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo4></Logo4>
          <p>Hour purchase history</p>
        </NavLink>
        <NavLink
          to="/my-tutor"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo5></Logo5>
          <p>Tutors</p>
        </NavLink>

        <div className="classes">
          <span>Classes</span>
          <div className="class-desgin">
            <ul>
              <li>Desgin</li>
              <li>Development</li>
              <li>Illustrations</li>
            </ul>
          </div>
        </div>
      </div>
    </SidebarStyle>
  );
};
export default Sidebar;
