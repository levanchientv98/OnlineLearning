import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

import Dashboardprofile from "../../components/Dashboardprofile";
import { Footer } from "components/footer";
import SidebarTutor from "components/SidebarSessions";
import { Dashboardmain } from "components/Dashboardmain";
import { DashboardmainforTutor } from "components/Dashboardmain";

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;
const Foter = styled.div`
  margin-top: 50px;
`;

const DashboardTutor = () => {
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <SidebarTutor></SidebarTutor>
        </Col>
        <Col span={14}>
          {/* <Dashboardmain></Dashboardmain> */}
          <DashboardmainforTutor/>
        </Col>
        <Col span={5}>
          <Dashboardprofile></Dashboardprofile>
        </Col>
      </Row>
      <Foter>
        <Footer />
      </Foter>
    </DashboardStyle>
  );
};

export default DashboardTutor;
