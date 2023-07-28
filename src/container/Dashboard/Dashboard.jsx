import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";

import Dashboardprofile from "../../components/Dashboardprofile";
import { Footer } from "components/footer";
import { Dashboardmain } from "components/Dashboardmain";

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;

  .setHeight {
    height: 1500px;
  }
`;

const Dashboard = () => {
  return (
    <DashboardStyle>
      <Row gutter={16} className="setHeight">
        <Col span={5}>
          <Sidebar></Sidebar>
        </Col>
        <Col span={14}>
          <Dashboardmain></Dashboardmain>
        </Col>
        <Col span={5}>
          <Dashboardprofile></Dashboardprofile>
        </Col>
      </Row>
      <Footer />
    </DashboardStyle>
  );
};
export default Dashboard;
