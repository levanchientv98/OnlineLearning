import kits from "../../assets/Pictures/logo 1.png";
import student from "../../assets/Pictures/Group 777.png";
import student2 from "../../assets/Pictures/Group 778.png";
import picture1 from "../../assets/Pictures/Rectangle 495.png";
import picture2 from "../../assets/Pictures/Rectangle 496.png";
import picture3 from "../../assets/Pictures/Rectangle 501.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { URLApi } from "api/urlApi";

import { toast } from "react-toastify";
import axios from "axios";

const { styled } = require("styled-components");
const ForgotStyled = styled.div`
  background-color: #dee4f3;
  height: 100vh;
  text-align: center;
  .kits {
    margin-top: 50px;
    padding: 30px 0;
  }
  .fogot {
    margin: auto;
    width: 650px;
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
    padding: 25px 0;
  }
  .password {
    width: 460px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 40px;
    background-color: #fff;
  }
  .cpassword {
    width: 460px;
    height: 50px;
    border-radius: 15px;
    background-color: #fff;
  }
  .MuiSelect-select {
    padding: 3px 10px 3px 15px;
    border: none;
    outline: none;
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  .button {
    width: 210px;
    height: 60px;
    border-radius: 31px;
    background-color: #0c4ca3;
    color: white;
    font-size: 22px;
    border: 1px solid transparent;
    margin: 40px auto;
    cursor: pointer;
  }
  .picture1 {
    position: absolute;
    left: 0%;
  }
  .picture2 {
    position: absolute;
    left: 40%;
    bottom: 0%;
  }
  .picture3 {
    position: absolute;
    right: 0%;
  }
`;
const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
const Reset = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Hàm này được gọi khi người dùng nhấn nút "Sign Up" hoặc submit form
      // Trong đây, bạn có thể gọi hàm handleRegister() để xử lý việc đăng ký
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        const userDataUrl = `${URLApi}api/v1/user/${userId}`; // Thay đổi URL theo endpoint

        const userDataResponse = await axios.get(userDataUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userDataResponse.status === 200) {
          const userData = userDataResponse.data;

          const data = {
            username: userData.username,
            password: values.password,
          };

          const apiUrl = `${URLApi}api/v1/auth/reset-password`;
          const response = await axios.post(apiUrl, data);
          if (response.status === 200) {
            // Xử lý khi đăng ký thành công
            toast.success("Reset Password Successful!");
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            // Show success toast
            navigate("/student-login");
          } else {
            // Xử lý khi reset password thất bại hoặc các trạng thái lỗi khác
            toast.error("Reset Password failed. Please try again", response); // Show error toast
          }
        } else {
          // Xử lý khi lấy dữ liệu người dùng không thành công
          toast.error("Failed to get user data. Please try again.");
        }
      } catch (error) {
        // Xử lý lỗi khi gọi API
        console.error("Error during registration:", error);
      }
    },
  });
  return (
    <ForgotStyled>
      <div>
        <Link to="/" exact="true">
          <img className="kits" src={kits} alt="" />
        </Link>
      </div>
      <form action="resetPassword" onSubmit={formik.handleSubmit}>
        <div className="fogot">
          <div className="student">
            <div>
              <img className="student1" src={student} alt="" />
            </div>
            <img src={student2} alt="" />
          </div>
          <TextField
            className="password"
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
            className="cpassword"
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
          <button className="button" variant="contained" type="submit">
            Reset Password
          </button>
        </div>
      </form>
      <img className="picture1" src={picture1} alt="" />
      <img className="picture2" src={picture2} alt="" />
      <img className="picture3" src={picture3} alt="" />
    </ForgotStyled>
  );
};
export default Reset;
