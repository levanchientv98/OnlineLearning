import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HeaderDashBoard } from "components/Header";
import { Button } from "components/Button";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { URLApi } from "api/urlApi";

const DashboardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  width: 1920px;
  margin: 0 auto;
`;

const DivStyle = styled.div`
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

  .tutor-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: 50px 0;

    .search-tutor-course {
      width: 35%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .search-bar {
        width: 264px;
        height: 52px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        padding-left: 30px;
        padding-right: 10px;
        border: none;
        outline: none;
        box-shadow: 2px 4px 24px 0px rgba(185, 184, 184, 0.75);
      }

      input::placeholder {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        color: rgba(
          46,
          44,
          44,
          0.4
        ); /* Màu sắc bạn muốn áp dụng cho placeholder */
      }

      span {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0em;
      }
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
  }
`;

const MyTutorPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${URLApi}/api/v1/user/userType?userType=teacher`
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <Sidebar></Sidebar>
        </Col>
        <Col span={18}>
          <DivStyle>
            {" "}
            <HeaderDashBoard></HeaderDashBoard>
            <div className="title">
              {" "}
              <h2>My tutors</h2>
            </div>
            <div className="tutor-menu">
              <div className="search-tutor-course">
                <input
                  type="search"
                  name="tcsearch"
                  id="tcsearch"
                  className="search-bar"
                  placeholder="Tutor/Course"
                />
                <Button
                  width="165px"
                  height="52px"
                  bgColor="#0C4CA3"
                  textColor="#fff"
                  borderRadius="37px"
                  fontSize="18px"
                >
                  <span>Search</span>
                </Button>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Tên người dùng</TableCell>
                    <TableCell>Số điện thoại</TableCell>
                    <TableCell>Mô tả</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DivStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};
export default MyTutorPage;
