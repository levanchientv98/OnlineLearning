import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import SidebarTutor from "components/SidebarSessions";
import { HeaderDashBoard } from "components/Header";
import { NavLink } from "react-router-dom";

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const MessagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 40px;

  .title {
    width: 95%;
    border-bottom: 1px solid #edebeb;
    h2 {
      margin: 0;
      padding: 52px 0 48px 0;
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: 0em;
      color: #2e2c2c;
    }
  }

  .messages-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    padding: 50px 0;

    .nav-item {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
      color: #464444;
    }

    .nav-item:hover {
      p {
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0em;
      }

      .borderBT {
        width: 25px;
        border-bottom: 3px solid #0c4ca3;
      }
    }
  }
`;

const MessagesTutorPage = () => {
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <SidebarTutor></SidebarTutor>
        </Col>
        <Col span={18}>
          <MessagesStyle>
            {" "}
            <HeaderDashBoard></HeaderDashBoard>
            <div className="title">
              {" "}
              <h2>Messages</h2>
            </div>
            <div className="messages-menu">
              <NavLink
                to="/messages"
                className="nav-item"
                exact="true"
                activeclassname="active"
              >
                <p>Chat</p>
                <div className="borderBT"></div>
              </NavLink>
              <NavLink
                to="/messages/contacts"
                className="nav-item"
                exact="true"
                activeclassname="active"
              >
                <p>Contacts</p>
                <div className="borderBT"></div>
              </NavLink>
            </div>
          </MessagesStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};
export default MessagesTutorPage;
