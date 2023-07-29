import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import { HeaderDashBoard } from "components/Header";
import SidebarTutor from "components/SidebarSessions";
import VideoCall from "container/VideoCall";


const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const SessionStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 40px;
  margin-bottom: 100px;
`;

const TutorSession = () => {
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <SidebarTutor></SidebarTutor>
        </Col>
        <Col span={18}>
          <SessionStyle>
            {" "}
            <HeaderDashBoard></HeaderDashBoard>
          </SessionStyle>
          <VideoCall></VideoCall>
        </Col>
      </Row>
    </DashboardStyle>
  );
};

export default TutorSession;
