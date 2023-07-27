import { styled } from "styled-components";
import React from "react";
import { HeaderDashBoard } from "components/Header";
import { Col, Row } from "antd";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SidebarTutor from "components/SidebarSessions";

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const MyStudentStyled = styled.div`
  height: 3000px;
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
  .filter {
    width: 165px;
    height: 52px;
    font-size: 15px;
    border-radius: 37px;
    margin-top: 30px;
    left: 80%;
  }
  .text {
    font-family: Poppins;
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .table1 {
    width: 1173px;
    height: 375px;
    border-radius: 12px;
    box-shadow: 0px 4px 48px 0px #00000026;
    padding: 50px;
    margin-top: 50px;
  }
  .table2 {
    width: 1173px;
    height: 375px;
    border-radius: 12px;
    padding: 50px;
    border: 1px;
  }
  .thead {
    display: flex;
    font-size: 15px;
    justify-content: space-evenly;
    width: 185px;
  }
  .input {
    width: 15px;
    padding: 0px 5px;
  }
  .etable {
    font-weight: bold;
    font-size: 15px;
  }
  .money {
    width: 487px;
    height: 52px;
    border-radius: 10px;
    padding: 0 40px;
  }
  .lich {
    display: flex;
    justify-content: space-between;
    width: 1270px;
  }
  .day {
    width: 600px;
  }
`;

const PayoutRequest = (props) => {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);

  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <SidebarTutor></SidebarTutor>
        </Col>
        <Col span={18}>
          <MyStudentStyled>
            {" "}
            <HeaderDashBoard></HeaderDashBoard>
            <div className="title">
              {" "}
              <h2>Payout Request</h2>
            </div>
            <div className="text">Current Balance</div>
            <Input className="money" value={"0$"} />
            <div className="text">Filter Transactions</div>
            <div className="lich">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    className="day"
                    label="Start Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    className="day"
                    label="End Date"
                    value={value1}
                    onChange={(newValue) => setValue1(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <Box>
              <Button className="filter">Filter</Button>
            </Box>
            <div className="table1">
              <div className="thead">
                <div>show</div>
                <input className="input" type="text" value={10} />
                <div>entries</div>
              </div>

              <table className="table2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Transaction Date</th>
                    <th>Transaction Type</th>
                    <th>Amount ($)</th>
                    <th>Balance ($)</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data
                    ? props.data.map((row, index) => (
                        <tr key={index}>
                          <td>{row.column1}</td>
                          <td>{row.column2}</td>
                          <td>{row.column3}</td>
                          <td>{row.column4}</td>
                          <td>{row.column5}</td>
                          <td>{row.column6}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              <div className="etable">Showing 0 to 0 of 0 entries</div>
            </div>
          </MyStudentStyled>
        </Col>
      </Row>
    </DashboardStyle>
  );
};
export default PayoutRequest;
