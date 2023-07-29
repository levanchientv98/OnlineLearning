import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HeaderDashBoard } from "components/Header";
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

const Session = () => {
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <Sidebar></Sidebar>
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

export default Session;
