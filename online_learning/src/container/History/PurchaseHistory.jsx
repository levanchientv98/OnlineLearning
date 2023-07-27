import React from "react";
import styled from "styled-components";
import { Col, Row, Select, DatePicker, Button } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HeaderDashBoard } from "components/Header";
import TableSession from "components/TableSession";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const HistoryStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
const DivStyle = styled.div`
  padding: 50px 0 0 40px;

  .title {
    width: 95%;
    border-bottom: 1px solid #edebeb;
    margin-bottom: 148px;
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

  .MuiTableCell-root {
    //css table
    border: none;
  }
  .MuiTableRow-root th:not(:last-child) {
    border-right: 1px solid rgba(140, 136, 136, 0.5);
  }
  .MuiTableRow-root th {
    border-bottom: none;
    height: 0.2em;
    line-height: 10px;
  }

  .title-filter {
    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
      color: #464444;
    }
  }
  .ant-picker {
    width: 264px;
    height: 52px;
  }
  .ant-btn {
    width: 165px;
    height: 52px;
    border-radius: 37px;
    background-color: #0c4ca3;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0em;
      color: #fff;
    }
  }

  :where(
      .css-dev-only-do-not-override-14wwjjs
    ).ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector {
    height: 52px;

    .ant-select-selection-placeholder {
      padding-top: 5px;
    }
  }
`;

const handleChange = (value) => {
  //select input
  console.log(`selected ${value}`);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const PurchaseHistory = () => {
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <Sidebar></Sidebar>
        </Col>
        <Col span={18}>
          <HistoryStyle>
            <DivStyle>
              {" "}
              <HeaderDashBoard></HeaderDashBoard>
              <div className="title">
                {" "}
                <h2>Hour purchasing history</h2>
              </div>
              <div className="title-filter">
                <h3>Filter</h3>
              </div>
              <Filter>
                <DatePicker placeholder="Start Date" onChange={onChange} />
                <DatePicker placeholder="End Date" onChange={onChange} />

                <Select
                  size="large"
                  placeholder="Select Package"
                  style={{
                    width: 264,
                    borderRadius: 10,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Bigginer",
                      label: "Bigginer",
                    },
                    {
                      value: "Intermediate",
                      label: "Intermediate",
                    },
                    {
                      value: "Mixed",
                      label: "Mixed",
                    },
                  ]}
                />
                <Button>Filter</Button>
              </Filter>
              <TableSession />
            </DivStyle>
          </HistoryStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};

export default PurchaseHistory;
