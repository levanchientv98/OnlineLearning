import React from "react";
import styled from "styled-components";
import { Col, Row, Select, DatePicker, TimePicker } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HeaderDashBoard } from "components/Header";
import TableSession from "components/TableSession";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
const SessionStyle = styled.div`
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
    padding: 50px 0;
    display: flex;
    gap: 20px;

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
  .css-1yhpg23-MuiTableCell-root {
    //css table
    border: none;
  }
  .css-1q1u3t4-MuiTableRow-root th:not(:last-child) {
    border-right: 1px solid rgba(140, 136, 136, 0.5);
  }
  .css-1q1u3t4-MuiTableRow-root th {
    border-bottom: none;
    height: 0.2em;
    line-height: 10px;
  }
`;

const handleChange = (value) => {
  //select input
  console.log(`selected ${value}`);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const onChangeTime = (time, timeString) => {
  console.log(time, timeString);
};
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
            <div className="title">
              {" "}
              <h2>SESSION</h2>
            </div>
            <div className="messages-menu">
              <NavLink
                to="/messages"
                className="nav-item"
                exact="true"
                activeclassname="active"
              >
                <p>Upcoming</p>
                <div className="borderBT"></div>
              </NavLink>
              <NavLink
                to="/messages/contacts"
                className="nav-item"
                exact="true"
                activeclassname="active"
              >
                <p>Past</p>
                <div className="borderBT"></div>
              </NavLink>
            </div>
            <Filter>
              <Select
                placeholder="Select Level"
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
              <Select
                placeholder="Select Duration"
                style={{
                  width: 264,
                  borderRadius: 10,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "6-12 Months",
                    label: "6-12 Months",
                  },
                  {
                    value: "3-6 Months",
                    label: "3-6 Months",
                  },
                  {
                    value: "Less than 2 Hours",
                    label: "Less than 2 Hours",
                  },
                  {
                    value: "1-4 Weeks",
                    label: "1-4 Weeks",
                  },
                  {
                    value: "1-3 Months",
                    label: "1-3 Months",
                  },
                ]}
              />
              <DatePicker onChange={onChange} />

              <TimePicker
                onChange={onChangeTime}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
            </Filter>
            <TableSession />
          </SessionStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};

export default Session;
