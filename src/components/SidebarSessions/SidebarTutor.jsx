import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo1 } from "assets/imgDashboard/icon-dashboard.svg";
import { ReactComponent as Logo } from "../../icon/logo.svg";
import { ReactComponent as Logo2 } from "../../icon/logomess.svg";
import { ReactComponent as Logo3 } from "assets/imgDashboard/videocall.svg";
import { ReactComponent as Student } from "assets/Pictures/people.svg";
import { ReactComponent as Assign } from "assets/Pictures/format_list_numbered_rtl.svg";
import { ReactComponent as Wallet } from "assets/Pictures/account_balance_wallet.svg";
import { ReactComponent as Request } from "assets/Pictures/request_quote.svg";
import { ReactComponent as Listt } from "../../icon/list.svg";

const SidebarStyle = styled.div`
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
    align-items: center;
    gap: 30px;
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

const SidebarTutor = () => {
  return (
    <SidebarStyle>
      <div className="logo">
        <Link to="/" exact="true">
          <Logo></Logo>
        </Link>
      </div>
      <div className="side">
        <NavLink
          to="/tutor-dashboard"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo1></Logo1>
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/tutor-messages"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo2></Logo2>
          <p>Messages</p>
        </NavLink>
        <NavLink
          to="/video-calls"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Logo3 className="icon-size"></Logo3>
          <p>Video Call</p>
        </NavLink>

        <NavLink
          to="/my-student"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Student></Student>
          <p>My Student</p>
        </NavLink>
        <NavLink
          to="/assign-homework"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Assign></Assign>
          <p>Assign Homework</p>
        </NavLink>
        <NavLink
          to="/wallet"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Wallet></Wallet>
          <p>Wallet</p>
        </NavLink>
        <NavLink
          to="/payout-request"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Request></Request>
          <p>Payout request</p>
        </NavLink>
        <NavLink
          to="/list-course"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <Listt style={{ width: 20 }}></Listt>
          <p>List course</p>
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
export default SidebarTutor;
