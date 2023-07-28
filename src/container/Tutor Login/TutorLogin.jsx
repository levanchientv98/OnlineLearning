import { styled } from "styled-components";
import kits from "../../assets/Pictures/logo 1.png";
import tutoricon from "../../assets/Pictures/Group 775.svg";
import { useState } from "react";
import gg from "../../assets/Pictures/Group 769.png";
import fb from "../../assets/Pictures/XMLID_834_.png";
import search from "../../assets/Pictures/Show.png";
import line from "../../assets/Pictures/Line 15.png";
import picture1 from "../../assets/Pictures/Rectangle 495.png";
import picture2 from "../../assets/Pictures/Rectangle 496.png";
import picture3 from "../../assets/Pictures/Rectangle 501.png";
import tutor from "../../assets/Pictures/Tutor.png";
import Input from "@mui/joy/Input";
import Checkbox from "@mui/material/Checkbox";
import hide from "assets/Pictures/hide.png";
import { Link, NavLink } from "react-router-dom";
import { URLApi } from "api/urlApi";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Button } from "@mui/joy";

const LoginStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  background-color: #def2f3;
  height: 100vh;
  text-align: center;
  max-height: 100vh;
  .kits {
    margin-top: 50px;
    padding: 30px 0;
  }
  .login {
    margin: auto;
    width: 690px;
    border: 1px solid transparent;
    border-radius: 50px;
    text-align: center;
    background: linear-gradient(
        133.86deg,
        #ffffff 2.14%,
        rgba(0, 0, 0, 0.2) 134.84%
      ),
      linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    box-shadow: 0px 4px 48px 0px #00000026;
  }
  .student {
    padding: 35px 0;
  }
  .username {
    width: 470px;
    height: 35px;
    border-radius: 15px;
    border: 1px solid transparent;
    margin-bottom: 40px;
    margin-left: 105px;
  }
  .password {
    width: 470px;
    height: 35px;
    border-radius: 15px;
    border: 1px solid transparent;
    margin-bottom: 30px;
    margin-left: 105px;
  }
  .search {
    width: 20px;
    padding-top: 12px;
    position: absolute;
    right: 5%;
  }
  .forgot {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    font-size: 15px;
    color: #8c8888;
  }
  .signin {
    width: 210px;
    height: 60px;
    border-radius: 31px;
    background-color: #0c4ca3;
    color: white;
    font-size: 22px;
    border: 1px solid transparent;
    margin-bottom: 20px;

    a {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0em;
      color: #fff;
    }
  }
  .or {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    color: #8c8888;
    font-size: 13px;
  }
  .button1 {
    width: 200px;
    height: 60px;
    border-radius: 39px;
    border: 1px solid transparent;
    color: #898686;
  }
  .button2 {
    width: 200px;
    height: 60px;
    border-radius: 39px;
    border: 1px solid transparent;
    color: #898686;
  }
  .img2 {
    width: 14px;
  }
  .button {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
  }
  .picture1 {
    position: absolute;
    left: 0%;
    top: 60%;
  }
  .picture2 {
    position: absolute;
    left: 40%;
    bottom: 0%;
  }
  .picture3 {
    position: absolute;
    right: 0%;
    top: 60%;
  }
  .password2 {
    display: flex;
    position: relative;
    width: 85%;
  }
  .nav-item {
    p {
      width: 80px;
      margin: 0;
      color: #8c8888;
      font-size: 16px;
    }
    p:hover {
      color: #1496ec;
      font-weight: 500;
    }
  }
  .fpass {
    text-align: center;
    line-height: 3;

    a {
      font-family: "Poppins", sans-serif;
      text-decoration: none;
      color: #898686;
    }

    a:hover {
      color: #1496ec;
    }
  }
`;
const TutorLogin = () => {
  const [showPassword, setShowPassword] = useState("password");
  const handleShowPassword = () => {
    setShowPassword((showPassword) =>
      showPassword === "password" ? "text" : "password"
    );
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // Get UserType by Id
  // const [userData, setUserData] = useState({});
  // useEffect(() => {
  //   const getUserData = async (userId) => {
  //     try {
  //       const apiUrl = `http://localhost:8080/api/v1/user/${userId}`; // Replace with your API endpoint
  //       const token = localStorage.getItem("token"); // Assuming the token key is stored in the "token" key in localStorage

  //       const response = await axios.get(apiUrl, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       const userData1 = response.data;
  //       setUserData(userData1); // Set the entire user data object in the state
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   const userId = localStorage.getItem("id");
  //   // Call the API and get the user data
  //   getUserData(userId);
  // }, []);

  // Hàm Login Tutor kiểm tra quyền truy cập
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginAndAuthorize = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Gọi API login
      const loginUrl = `${URLApi}api/v1/auth/login`; // Thay đổi URL theo endpoint của bạn
      const loginResponse = await axios.post(loginUrl, {
        username: username,
        password: password,
      });

      if (loginResponse.status === 200) {
        const loginData = loginResponse.data;

        // Step 2: Lưu token vào localStorage (hoặc trong state nếu bạn muốn)
        localStorage.setItem("token", loginData.token);
        localStorage.setItem("id", loginData.id);

        // Step 3: Gọi API để lấy thông tin người dùng (phân quyền)
        const userDataUrl = `${URLApi}api/v1/user/${loginData.id}`; // Thay đổi URL theo endpoint của bạn
        const token = localStorage.getItem("token");

        const userDataResponse = await axios.get(userDataUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (userDataResponse.status === 200) {
          const userData = userDataResponse.data;

          // Step 4: Phân quyền và xử lý dữ liệu người dùng ở đây
          if (userData.userType === "teacher") {
            // Xử lý khi đăng nhập thành công và là admin
            toast("Login successful. User is an Teacher.");
            navigate("/tutor-dashboard");
          } else {
            // Xử lý khi không xác định được quyền truy cập
            toast(
              "Login failed. You do not have permission to access tutor dashboard"
            );
          }
        } else {
          toast("Error fetching user data:", userDataResponse);
        }
      }
    } catch (error) {
      toast(
        "Login failed: Please check your username or password and try again",
        error
      );
    }
  };

  return (
    <LoginStyled>
      <div>
        <Link to="/" exact="true">
          <img className="kits" src={kits} alt="" />
        </Link>
      </div>
      <div className="login">
        <div className="student">
          <img src={tutoricon} alt="" />
          <div>
            <img src={tutor} alt="" />
          </div>
        </div>
        <form className="form">
          <Input
            className="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password2">
            <Input
              className="password"
              placeholder="Password"
              type={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className="search"
              src={showPassword === "password" ? hide : search}
              alt="icon"
              onClick={handleShowPassword}
            />
          </div>
        </form>
        <div className="forgot">
          <label>
            <Checkbox
              {...label}
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />{" "}
            Remember me
          </label>
          <div className="fpass">
            {" "}
            <a href="/tutor-forgot">Forgot password</a>
          </div>
        </div>
        <Button className="signin" onClick={loginAndAuthorize}>
          {" "}
          <a href="/signup">Sign In</a>
        </Button>
        <div className="or">
          <img src={line} alt="" />
          <NavLink
            to="/sign-up"
            className="nav-item"
            exact="true"
            active="active"
          >
            <p>Or Sign In</p>
          </NavLink>
          <img src={line} alt="" />
        </div>
        <div className="button">
          <button className="button1">
            <img className="img1" src={gg} alt="" />
          </button>
          <button className="button2">
            <img className="img2" src={fb} alt="" />
          </button>
        </div>
      </div>
      <img className="picture1" src={picture1} alt="" />
      <img className="picture2" src={picture2} alt="" />
      <img className="picture3" src={picture3} alt="" />
    </LoginStyled>
  );
};
export default TutorLogin;
