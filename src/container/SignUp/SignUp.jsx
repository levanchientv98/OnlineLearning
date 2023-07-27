import { styled } from "styled-components";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import gg from "../../assets/Pictures/Group 769.png";
import line from "../../assets/Pictures/Line 15.png";
import fb from "../../assets/Pictures/XMLID_834_.png";
import kits from "../../assets/Pictures/logo 1.png";
import girl from "../../assets/Pictures/758-7589797_working-after-studying-png-of-studying-girl-transparent 1.png";
import down from "../../assets/Pictures/© 2022 VeritEd Privacy Policy Terms and Conditions Contact.png";
import sign from "../../assets/Pictures/Sign Up.png";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { URLApi } from "api/urlApi";
import axios from "axios";

const SignUpStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  display: flex;
  background-color: #dee4f3;
  height: 100%;
  width: 100%;
  .left {
    padding: 70px 85px;
    background-color: rgb(248, 248, 248);
    position: fixed;
  }
  .right {
    position: relative;
    padding: 110px 110px;
    left: 45%;
  }
  .title {
    margin-left: 130px;
  }
  .h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 40px;
  }
  .or {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    color: #8c8888;
    font-size: 16px;
  }
  .text {
    font-size: 18px;
    color: #8c8888;
    margin-top: 20px;
    width: 380px;
  }
  .sign {
    margin-bottom: 20px;
  }
  .text2 {
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-start;
    align-items: center;
  }
  .input {
    width: 0px;
  }
  .name {
    width: 695px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid transparent;
    margin-bottom: 40px;

    input {
      padding: 10px 15px;
      background: #fff;
      border-radius: 15px;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0em;
    }
  }

  .name1 {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    width: 695px;
    height: 40px;
    border-radius: 15px;
    margin-bottom: 20px;
    background-color: #fff;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0em;
      color: #8c888880;
    }
  }

  .name2 {
    width: 330px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid transparent;
    margin-bottom: 40px;

    input {
      padding: 10px 15px;
      background: #fff;
      border-radius: 15px;
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0em;
    }
  }

  .MuiSelect-select {
    padding: 3px 10px 3px 15px;
    border: none;
    outline: none;
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  .job {
    display: flex;
    margin-right: 20px;
  }
  .checkbox {
    padding: 20px 0;
    display: flex;
    text-align: center;
  }
  .tutor {
    width: 41px;
    height: 33px;
    font-size: 16px;
    text-align: center;
    line-height: 3;
    margin-left: 5px;
  }
  .text3 {
    display: flex;
    text-align: center;
    line-height: 3;
    color: #000;
  }
  .button {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
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
  .signup {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;

    width: 205px;
    height: 55px;
    border-radius: 31px;
    background-color: #0c4ca3;
    color: white;
    border: 1px solid transparent;
    justify-content: center;
    margin: 20px auto;
    margin-left: 245px;
  }
  .already {
    color: #8c8888;
    font-size: 20px;
    margin-right: 10px;
    font-weight: bold;
  }
  .log {
    font-size: 20px;
    color: #0c4ca3;
    font-weight: bold;
  }
  .student {
    text-align: center;
    line-height: 3;
    margin-left: 5px;
  }
  .blue {
    color: #0c4ca3;
    padding: 0 8px;
    font-weight: bold;
  }
  .questtion {
    width: 695px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid transparent;
    margin-bottom: 40px;
  }
  .flex-item {
    display: flex;
    flex-direction: column;
  }
  .flex-item1 {
    display: flex;
    flex-direction: row;
    width: 695px;
    justify-content: space-between;
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
    background-color: #dee4f3;

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
  }
`;
const validationSchema = Yup.object({
  fistName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fistName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
      tutor: false,
      student: false,
      securityAnswer: "",
      agreeTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Hàm này được gọi khi người dùng nhấn nút "Sign Up" hoặc submit form
      // Trong đây, bạn có thể gọi hàm handleRegister() để xử lý việc đăng ký
      try {
        const apiUrl = `${URLApi}/api/v1/auth/register`; // Thay đổi URL theo endpoint của

        const data = {
          username: values.userName,
          password: values.password,
          email: values.email,
          userType: values.userType,
          fullname: values.fistName + " " + values.lastName,
          firstname: values.fistName,
          lastname: values.lastName,
        };

        console.log(data);
        const response = await axios.post(apiUrl, data);

        if (response.status === 200) {
          // Xử lý khi đăng ký thành công

          toast.success("Registration successful!"); // Show success toast
          navigate("/");
        } else {
          // Xử lý khi đăng ký thất bại hoặc các trạng thái lỗi khác
          toast.error("Registration failed. Please try again.", response); // Show error toast
        }
      } catch (error) {
        // Xử lý lỗi khi gọi API
        console.error("Error during registration:", error);
      }
    },
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <SignUpStyled>
      <div className="left">
        <div className="title">
          <Link to="/">
            <img src={kits} alt="icon-logo" />
          </Link>
          <div className="h1">Welcome to KITS!</div>
          <div className="text">
            VeritEd connects students and their families with qualified tutors
            for improved learning outcomes.
          </div>
        </div>
        <img src={girl} alt="" />
        <div>
          <img src={down} alt="" />
        </div>
      </div>
      <div className="right">
        <img className="sign" src={sign} alt="" />
        <div className="text2">
          <div className="already">Already have an account?</div>
          <div class="dropdown">
            <button className="dropdowns-menu">
              <span className="log">Log in</span>
            </button>
            <div class="dropdown-content">
              <Link to="/tutor-login">Tutor Login</Link>
              <Link to="/student-login">Student Login</Link>
            </div>
          </div>
        </div>
        <form action="signUp" onSubmit={formik.handleSubmit}>
          <div className="input">
            <div className="flex-item1">
              <TextField
                className="name2"
                size="small"
                placeholder="Fist Name"
                name="fistName"
                value={formik.values.fistName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fistName && Boolean(formik.errors.fistName)
                }
                helperText={formik.touched.fistName && formik.errors.fistName}
                required
              />{" "}
              <TextField
                className="name2"
                size="small"
                placeholder="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                required
              />{" "}
            </div>
            <TextField
              className="name"
              size="md"
              placeholder="User Name"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              required
            />{" "}
            <TextField
              className="name"
              size="md"
              placeholder="Email Address"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required
            />
            <TextField
              className="name"
              size="md"
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
            />
            <TextField
              className="name"
              size="md"
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              required
            />
          </div>
          <div>I am a</div>
          <RadioGroup
            className="checkbox"
            name="userType"
            value={formik.values.userType}
            onChange={formik.handleChange}
            row
          >
            <FormControlLabel
              className="radioButton"
              value="teacher"
              control={<Radio />}
              label="Tutor"
            />
            <FormControlLabel
              className="radioButton"
              value="student"
              control={<Radio />}
              label="Student"
            />
          </RadioGroup>
          <InputLabel id="select-information" className="text3">
            How did you here about us?
          </InputLabel>
          <Select
            labelId="select-information"
            className="name1"
            value={formik.hearAboutUs}
            onChange={formik.handleChange}
            variant="outlined"
            displayEmpty="true"
            required
          >
            <MenuItem value={formik.hearAboutUs} disabled>
              <span>Please Select</span>
            </MenuItem>
            <MenuItem value="word_of_mouth">Word of Mouth</MenuItem>
            <MenuItem value="online_search">Online Search</MenuItem>
            <MenuItem value="social_media">Social Media</MenuItem>
            <MenuItem value="advertisements">Advertisements</MenuItem>
            <MenuItem value="events">Events</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <InputLabel id="select-question" className="text3">
            Select Security Question?
          </InputLabel>{" "}
          <div className="flex-item">
            <Select
              labelId="select-question"
              id="select-question"
              className="name1"
              value={formik.securityQuestion}
              onChange={formik.handleChange}
              variant="outlined"
              displayEmpty="true"
              required
            >
              <MenuItem value={formik.securityQuestion} disabled>
                <span>Please Select</span>
              </MenuItem>
              <MenuItem value="first_pet">
                What was the name of your first pet?
              </MenuItem>
              <MenuItem value="favorite_book">
                What is your favorite book?
              </MenuItem>
              <MenuItem value="mother_maiden">
                What is your mother's maiden name?
              </MenuItem>
              <MenuItem value="birth_city">
                What city were you born in?
              </MenuItem>
              <MenuItem value="school_name">
                What is the name of your elementary school?
              </MenuItem>
              <MenuItem value="favorite_movie">
                What is your favorite movie?
              </MenuItem>
            </Select>
            <TextField
              className="name"
              size="md"
              name="securityAnswer"
              type="text"
              value={formik.securityAnswer}
              onChange={formik.handleChange}
              required
              placeholder="Security Question Answer"
            />
          </div>
          <label className="job">
            <Checkbox
              {...label}
              name="agreeTerms"
              checked={formik.agreeTerms}
              onChange={formik.handleChange}
            />
            <div className="text3">
              <div>I agree to </div>
              <div className="blue">VeritEd Terms of Service</div>
              <div>and</div>
              <div className="blue">Privacy Polices</div>
            </div>
          </label>
          <Button className="signup" variant="contained" type="submit">
            Sign Up
          </Button>{" "}
        </form>

        <div className="or">
          <img src={line} alt="" />
          <div>Or Sign Up</div>
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
    </SignUpStyled>
  );
};
export default SignUp;
