import styled from "styled-components";
import iconKits from "assets/imageHome/logo-kits.svg";
import { Button } from "components/Button";
import { NavLink, Link } from "react-router-dom";
// import iconAccount from "assets/imageHome/account-avatar.svg";
import iconLogOut from "assets/imgDashboard/log-out.svg";
import iconDashBoard from "assets/imgDashboard/icon-dashboard.svg";
import { Popover } from "antd";
import { useNavigate } from "react-router";
import { Chip } from "@mui/material";

const HeaderStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  display: flex;
  justify-content: space-between;
  padding: 0 140px;
  align-items: center;
  background-color: #ffffff;
  height: 167px;

  .iconKits-size {
    width: 153px;
    height: 56px;
  }
  .nav-title {
    font-family: "Poppins", sans-serif;
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;

    p {
      color: #96989b;
    }

    .nav-item {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    /* Change color of dropdown links on hover */

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: flex;
      flex-direction: column;
    }

    .dropdown-content a {
      color: #96989b;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      color: #2e2c2c;
      font-weight: 700;

      background-color: #f1f1f1;
    }

    .dropdowns-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      background-color: #ffffff;

      p {
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
      }
    }

    .dropdown:hover {
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        color: #2e2c2c;
        text-align: center;
      }

      .borderBT {
        width: 25px;
        border-bottom: 3px solid #0c4ca3;
      }
    }

    .nav-item:hover {
      p {
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        color: #2e2c2c;
        text-align: center;
      }

      .borderBT {
        width: 25px;
        border-bottom: 3px solid #0c4ca3;
      }
    }
    .user-info {
      .tag {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .MuiChip-label {
        text-transform: capitalize;
      }
    }
  }

  .active {
    p {
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      color: #2e2c2c;
      text-align: center;
    }
    .borderBT {
      width: 25px;
      border-bottom: 3px solid #0c4ca3;
    }
  }
  .icon-size {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .avatar {
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .avatar:hover {
    p {
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      color: #2e2c2c;
      text-align: center;
    }
  }

  .left {
    width: 40%;
  }
  .right {
    font-family: "Poppins", sans-serif;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .btn-title {
      font-size: 17px;
      font-weight: 500;
      margin: 0;

      font-family: "Poppins", sans-serif;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0em;
      color: #ffffff;
    }

    .ant-anchor {
      gap: 60px;
      font-size: 18px;
      font-weight: 500;

      .ant-anchor-ink-visible {
        background-color: #0c4ca3;
        height: 3px;
      }

      a {
        color: #96989b;
      }

      .ant-anchor-link-title-active {
        color: #2e2c2c;
      }
    }
  }
`;
const DivStyled = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .nav-item {
    font-size: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      margin: 0;
      color: rgba(140, 136, 136, 1);
      font-size: 13px;
      font-family: "Poppins", sans-serif;
    }
  }
  .icon-size1 {
    width: 25px;
    height: 25px;
  }
  .nav-item:hover {
    p {
      margin: 0;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0em;
      color: #2e2c2c;
    }
    .icon-size1 {
      filter: invert(9%) sepia(1%) saturate(4254%) hue-rotate(346deg)
        brightness(92%) contrast(78%);
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const avatar = localStorage.getItem("avatar");
  const userType = localStorage.getItem("userType");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");

    navigate("/");
  };

  const content = (
    <DivStyled>
      {userType === "student" ? (
        <NavLink
          to="/student-dashboard"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <img
            src={iconDashBoard}
            alt="icon-dashboard"
            className="icon-size1"
          />
          <p>Dashboard</p>
        </NavLink>
      ) : (
        <NavLink
          to="/tutor-dashboard"
          className="nav-item"
          exact="true"
          activeclassname="active"
        >
          <img
            src={iconDashBoard}
            alt="icon-dashboard"
            className="icon-size1"
          />
          <p>Dashboard</p>
        </NavLink>
      )}
      <NavLink
        to={"/"}
        exact="true"
        className="nav-item"
        activeclassname="active"
        onClick={handleLogout}
      >
        <img src={iconLogOut} alt="icon-logout" className="icon-size1" />
        <p>Log out</p>
      </NavLink>
    </DivStyled>
  );
  const username = localStorage.getItem("myUsername");
  const isLoggedIn = () => {
    // Kiểm tra xem trong local storage có id và token không
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    return id && token;
  };
  return (
    <HeaderStyled>
      <div className="left">
        {" "}
        <NavLink to={"/"}>
          <img src={iconKits} alt="icon-Kits" className="iconKits-size" />
        </NavLink>
      </div>
      <div className="right">
        <div className="nav-title">
          <NavLink
            to="/"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <p>Home</p>
            <div className="borderBT"></div>
          </NavLink>
          <NavLink
            to="/pricing"
            className="nav-item"
            exact="true"
            activeclassname="active"
          >
            <p>Pricing</p>
            <div className="borderBT"></div>
          </NavLink>
          <div className="user-info">
            {isLoggedIn() ? (
              <Popover placement="bottom" content={content}>
                <div className="avatar">
                  {" "}
                  <img className="icon-size" src={avatar} alt="icon-account" />
                  <p>{username}</p>
                  {userType === "student" ? (
                    <Chip color="primary" size="large" label={userType} />
                  ) : (
                    <Chip size="large" color="success" label={userType}></Chip>
                  )}
                </div>
              </Popover>
            ) : (
              <div class="dropdown">
                <button className="dropdowns-menu">
                  <p>Login</p>
                  <div className="borderBT"></div>
                </button>
                <div class="dropdown-content">
                  <Link to="/tutor-login">Tutor Login</Link>
                  <Link to="/student-login">Student Login</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {isLoggedIn() ? (
          <div></div>
        ) : (
          <Button
            width="106px"
            height="50px"
            bgColor="#FE7243"
            textColor="#fff"
            borderRadius="40px"
            fontSize="18px"
          >
            <NavLink to="/sign-up" className="btn-title">
              Sign Up
            </NavLink>
          </Button>
        )}
      </div>
    </HeaderStyled>
  );
};
export default Header;
