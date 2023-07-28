import styled from "styled-components";
// import ProfileImg from "../../icon/profile.svg";
import DemoColumn from "../Chart";
import { ReactComponent as Check } from "../../icon/check.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { URLApi } from "api/urlApi";

const DashboardStyle = styled.div`
  background-color: rgba(247, 247, 247, 1);
  height: 100%;
`;
const Profile = styled.div`
  /* padding-top: 45px ;
    padding-left: 20px;
    padding-right: 40px; */
  padding: 30px 25px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: rgba(46, 44, 44, 1);
  }
  .edit {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(59, 57, 57, 1);
  }
  .image {
    text-align: center;
    img {
      width: 139px;
      height: 139px;
      object-fit: cover;
      border-radius: 50%;
    }
    .name {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      color: rgba(46, 44, 44, 1);
    }
    .nickname {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 22.5px;
      color: rgba(140, 136, 136, 1);
    }
  }
  .rectangle {
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 90%;
    height: 65px;
    margin: 0 auto;
    border: none;
    border-radius: 14px;
    background-color: rgba(237, 237, 237, 1);
  }
  .rank {
  }
  .title {
    font-family: "Poppins", sans-serif;
    font-size: 8px;
    font-weight: 500;
    line-height: 12px;
    color: rgba(140, 136, 136, 1);
    margin-top: 12px;
  }

  .noidung {
    margin-top: -5px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    color: rgba(46, 44, 44, 1);
  }
`;
const Chartt = styled.div`
  height: 396px;
  background-color: white;
  margin-right: 10px;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: rgba(46, 44, 44, 1);
  }
`;
const Scheduled = styled.div`
  margin-top: 50px;
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: rgba(46, 44, 44, 1);
  }
`;

const ScheduledDetailstyed = styled.div`
  width: 90%;
  height: auto;
  .detail {
    margin-top: 20px;
    background-color: white;
    display: flex;
    gap: 30px;
    align-items: center;
    border-radius: 14px;
  }
  .a {
    /* margin-left: 20px; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
  }
  .name {
    margin-top: 20px;
    margin-bottom: 0px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    /* line-height: 30px; */
    color: rgba(46, 44, 44, 1);
  }
  .date {
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    font-weight: 500;
    /* line-height: 15x; */
    color: #8c8888;
  }
`;
const ScheduledDetail = ({ data }) => {
  return (
    <ScheduledDetailstyed>
      {data &&
        data.map((dt) => {
          return (
            <div>
              <div className="detail">
                <Check style={{ marginLeft: 20 }} />
                <div className="a">
                  <p className="name">{dt.name}</p>
                  <p className="date">{dt.date}</p>
                </div>
              </div>
            </div>
          );
        })}

      {/* <div className='detail'>
                <Check></Check>
                <div className="a">
                    <p className='name'>Java</p>
                    <p className='date'>Aug 2, 2022 from 8am - 10am</p>
                </div>
            </div> */}
    </ScheduledDetailstyed>
  );
};
const fakeData = [
  {
    name: "Java",
    date: "Aug 2, 2022 from 8am - 10am",
  },
  {
    name: "React",
    date: "Aug 2, 2022 from 8am - 10am",
  },
];

const Dashboardprofile = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const userId = localStorage.getItem("id");
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
        if (response.status === 200) {
          const userData1 = response.data;
          setUserData(userData1); // Set the entire user data object in the state
          const username = userData1.username;
          console.log("username", username);
          console.log(userData);

          //Lưu các thông tin đăng nhập vào localStorage
          localStorage.setItem("avatar", response.data.avatar);
          localStorage.setItem("myUsername", response.data.username);
          localStorage.setItem("userType", response.data.userType);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the API and get the user data
    getUserData(userId);
  }, []);

  return (
    <DashboardStyle>
      <Profile>
        <div className="header">
          <p className="profile">Profile</p>
          <NavLink
            to="/edit-student"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <p className="edit">Edit</p>
          </NavLink>
        </div>
        <div className="image">
          <img src={userData.avatar} alt="profile" />
          <p className="name">{userData.fullname}</p>
          <p className="nickname">{userData.email}</p>
        </div>
        <div className="rectangle">
          <div className="rank">
            <p className="title">Rank</p>
            <p className="noidung">137</p>
          </div>
          <div className="rank">
            <p className="title">Average Act.</p>
            <p className="noidung">3.2 Hours</p>
          </div>
          <div className="rank">
            <p className="title">Courses</p>
          </div>
        </div>
        <Chartt>
          <p>Statistics</p>
          <DemoColumn styled={{ borderRadius: 3 }} />
        </Chartt>
        <Scheduled>
          <p>Scheduled</p>
          {/* <ScheduledDetail></ScheduledDetail> */}
          <ScheduledDetail data={fakeData} />
        </Scheduled>
      </Profile>
    </DashboardStyle>
  );
};

export default Dashboardprofile;
