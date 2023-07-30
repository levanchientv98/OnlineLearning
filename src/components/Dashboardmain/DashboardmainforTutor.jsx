import styled from "styled-components";
import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { ReactComponent as LogoRank } from "../../icon/iconrank.svg";
import { ReactComponent as LogoRank2 } from "../../icon/iconrank2.svg";
import { ReactComponent as LogoRank3 } from "../../icon/iconrank3.svg";
import { ReactComponent as LogoRank4 } from "../../icon/iconrank4.svg";
import Dashboardslide from "../../components/Dashboardslide";
import { HeaderDashBoard } from "components/Header";
import { ProfileDashboardforTutor } from "components/ProfileDashboard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { URLApi } from "api/urlApi";

const DashboadrStyled = styled.div`
  margin-top: 50px;
  margin-left: 40px;
  margin-right: 40px;
`;

const First = styled.div`
  border-bottom: rgba(0, 0, 0, 0.04) solid 1px;
  .welcome {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 48px;
    font-weight: 600;
  }
  .today {
    font-family: "Poppins", sans-serif;
    color: rgba(140, 136, 136, 1);
    font-size: 15px;
    line-height: 22.5px;
    font-weight: 400;
  }
`;

const BestTutor = styled.div`
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
  }
`;

const DATE_OPTIONS = { weekday: "long", month: "long", day: "numeric" }; //get current day

const TableStyle = styled.table`
  p {
    margin-left: 10px;
    margin-top: 19px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  width: 100%;
  .title {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    line-height: 19.5px;
    font-weight: 400;
    color: rgba(198, 194, 194, 1);
  }
  .rank {
    display: flex;
    align-items: center;
  }
`;

const Tutor = ({ data }) => {
  return (
    <TableStyle>
      <tr className="title">
        <td>Rankking</td>
        <td>Tutor name</td>
        <td>Subject</td>
        <td>Students</td>
        <td>Score</td>
      </tr>

      {data.map((dt) => {
        return (
          <tr>
            <td className="rank">
              {dt.icon}
              <p>{dt.ranked}</p>
            </td>
            <td>
              <p>{dt.name}</p>
            </td>
            <td>
              <p>{dt.subject}</p>
            </td>
            <td>
              {/* <p>{dt.students}</p> */}
              <Avatar.Group
                maxCount={2}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                  }}
                >
                  Nhat
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{
                    backgroundColor: "#1677ff",
                  }}
                  icon={<AntDesignOutlined />}
                />
                <Avatar
                  style={{
                    backgroundColor: "#1677ff",
                  }}
                  icon={<AntDesignOutlined />}
                />
                <Avatar
                  style={{
                    backgroundColor: "#1677ff",
                  }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </td>
            <td>
              <p>{dt.score}</p>
            </td>
          </tr>
        );
      })}
    </TableStyle>
  );
};

const fakeData = [
  {
    icon: <LogoRank />,
    ranked: "1",
    name: "Nhat",
    subject: "Michael Jordan",
    students: "@jordan_",
    score: 123,
  },
  {
    icon: <LogoRank2 />,
    ranked: "2",
    name: "Nhat",
    subject: "Michael Jordan",
    students: "@jordan_",
    score: 123,
  },
  {
    icon: <LogoRank3 />,
    ranked: "3",
    name: "Nhat",
    subject: "Michael Jordan",
    students: "@jordan_",
    score: 123,
  },
  {
    icon: <LogoRank4 />,
    ranked: "4",
    name: "Nhat",
    subject: "Michael Jordan",
    students: "@jordan_",
    score: 123,
  },
];

const DashboardmainforTutor = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async (userId) => {
      try {
        const apiUrl = `${URLApi}api/v1/user/${userId}`; // Replace with your API endpoint
        const token = localStorage.getItem("token"); // Assuming the token key is stored in the "token" key in localStorage

        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const userData1 = response.data;
        setUserData(userData1); // Set the entire user data object in the state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const userId = localStorage.getItem("id");
    // Call the API and get the user data
    getUserData(userId);
  }, []);
  return (
    <DashboadrStyled>
      <HeaderDashBoard></HeaderDashBoard>
      <First>
        <p className="welcome">Welcome back, {userData.lastname}!</p>
        <p className="today">
          {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}
        </p>
        {/* <ProfileDashboard /> */}
        <ProfileDashboardforTutor />
      </First>
      <Dashboardslide></Dashboardslide>
      <BestTutor>
        <p>Best tutors of the week</p>
        <Tutor data={fakeData} />
      </BestTutor>
    </DashboadrStyled>
  );
};

export default DashboardmainforTutor;
