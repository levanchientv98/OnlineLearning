import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo1 } from "assets/imgDashboard/icon-dashboard.svg";
import { ReactComponent as Logo } from "../../icon/logo.svg";
import { ReactComponent as Logo2 } from "../../icon/logomess.svg";
import { ReactComponent as Logo3 } from "../../icon/logosessions.svg";
import { ReactComponent as Logo4 } from "../../icon/logopurchase.svg";
import { ReactComponent as Logo5 } from "../../icon/logotutors.svg";
import source from "assets/Pictures/Group 1000005293.svg";
import download from "assets/Pictures/Group.png";
import Button from "@mui/material/Button";
import intro from "assets/Pictures/Group 1000005299.png";
import bong from "assets/Pictures/figma-svgrepo-com 1.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { URLApi } from "api/urlApi";
import Pagination from "@mui/material/Pagination";

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const VideoPagination = ({ currentPage, totalPages, onChangePage }) => {
  return (
    <DivStyled>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => onChangePage(value)}
        color="primary"
        shape="rounded"
      />
    </DivStyled>
  );
};

const SidebarStyle = styled.div`
  border-right: rgba(0, 0, 0, 0.04) solid 1px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 150%);
  height: 100vh;
  display: flex;
  .sidebar {
    background-color: white;
  }
  .logo {
    padding-top: 50px;
    margin-left: 33px;
  }
  .side {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 50px;
    padding-left: 63px;
  }
  .nav-item {
    display: flex;
    gap: 30px;
    p {
      margin: 0;
      color: rgba(140, 136, 136, 1);
      font-size: 15px;
      font-family: "Poppins", sans-serif;
    }
  }

  .nav-item:hover {
    filter: invert(19%) sepia(85%) saturate(1888%) hue-rotate(201deg)
      brightness(99%) contrast(94%);

    p {
      color: #0c4ca3;
    }
  }

  .active {
    filter: invert(19%) sepia(85%) saturate(1888%) hue-rotate(201deg)
      brightness(99%) contrast(94%);

    p {
      color: #0c4ca3;
    }
  }

  .classes {
    margin-top: 20px;
    span {
      color: rgba(199, 196, 196, 1);
      font-family: "Poppins", sans-serif;
      font-size: 13px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-top: 20px;
    }
    li:first-child::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(254, 214, 111, 1);
    }
    li:nth-child(2)::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(119, 173, 255, 1);
    }
    li:nth-child(3)::before {
      margin-right: 20px;
      content: "• ";
      color: rgba(246, 110, 110, 1);
    }
  }
  .video {
    margin-left: 100px;
    margin-top: 30px;
    border-radius: 15px;
    border: 4px solid #f5841f;
  }
  .source {
    display: flex;
    color: white;
    font-size: 25px;
    justify-content: center;
  }
  .right {
    width: 500px;
    padding: 120px 0;
  }
  .resource {
    margin-left: 15px;
  }
  .button {
    background-color: rgba(135, 206, 235, 0);
  }
  .download {
    display: flex;
    justify-content: space-between;
    padding: 65px 45px;
  }
  .practice {
    display: flex;
    padding: 0 45px;
    justify-content: space-between;
  }
  .open {
    font-size: 11px;
    color: #00abbd;
    width: 57px;
    text-align: center;
    line-height: 2;
  }
  .text {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin-left: 19px;
  }
  .text2 {
    display: flex;
  }
  .main {
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 28px;
      color: #fff;
      text-align: center;
      margin-top: 60px;
    }
  }
`;

const StartSessions = () => {
  const courseId = localStorage.getItem("courseId");
  const [videoData, setVideoData] = useState([]);

  const videosPerPage = 1; // Số video hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(videoData.length / videosPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videoData.slice(indexOfFirstVideo, indexOfLastVideo);

  const fetchVideo = async () => {
    try {
      const reponse = await axios.get(
        `${URLApi}/api/v1/video/byCourseId/${courseId}`
      );
      if (reponse.status === 200) {
        console.log(reponse.data);
        setVideoData(reponse.data);
      }
    } catch (error) {
      toast("Call api get video by courseId failed", error);
    }
  };
  useEffect(() => {
    // Gọi API và cập nhật dữ liệu vào trạng thái 'data'
    fetchVideo();
  }, []);

  return (
    <SidebarStyle>
      <div className="sidebar">
        <div className="logo">
          <Link to="/" exact="true">
            <Logo></Logo>
          </Link>
        </div>
        <div className="side">
          <NavLink
            to="/student-dashboard"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <Logo1></Logo1>
          </NavLink>
          <NavLink
            to="/messages"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <Logo2></Logo2>
          </NavLink>
          <NavLink
            to="/session"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <Logo3></Logo3>
          </NavLink>
          <NavLink
            to="/purchase-history"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <Logo4></Logo4>
          </NavLink>
          <NavLink
            to="/my-tutor"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <Logo5></Logo5>
          </NavLink>
          <div className="classes">
            <div className="class-desgin">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        {currentVideos.map((video, index) => (
          <div>
            <h2>{video.videoName}</h2>
            <iframe
              key={index}
              className="video"
              width="1162px"
              height="683px"
              src={video.urlVideo}
              title={video.videoName}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
        <VideoPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handlePageChange}
        />
      </div>
      <div className="right">
        <div className="source">
          <img src={source} alt="" />
          <div className="resource">Resources</div>
        </div>
        <div className="download">
          <div>
            <img className="intro" src={intro} alt="" />
          </div>
          <a href="/path/to/file.pdf" download>
            <Button className="button" variant="contained" disableElevation>
              <img src={download} alt="" />
            </Button>
          </a>
        </div>
        <div className="practice">
          <div className="text2">
            <img src={bong} alt="" />
            <div className="text">Heiracy Practice </div>
          </div>
          <div className="open">OPEN</div>
        </div>
      </div>
    </SidebarStyle>
  );
};
export default StartSessions;
