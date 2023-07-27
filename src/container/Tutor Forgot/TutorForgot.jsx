import kits from "../../assets/Pictures/logo 1.png";
import tutoricon from "../../assets/Pictures/Group 775.svg";
import student2 from "../../assets/Pictures/Forgot Password.png";
import picture1 from "../../assets/Pictures/Rectangle 495.png";
import picture2 from "../../assets/Pictures/Rectangle 496.png";
import picture3 from "../../assets/Pictures/Rectangle 501.png";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { URLApi } from "api/urlApi";
import { toast } from "react-toastify";
import axios from "axios";
const { styled } = require("styled-components");
const ForgotStyled = styled.div`
  background-color: #def2f3;
  height: 100vh;
  text-align: center;
  .kits {
    margin-top: 50px;
    padding: 30px 0;
  }
  .fogot {
    margin: auto;
    width: 650px;
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
  .username {
    width: 460px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 30px;
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
  .messege {
    background: #fdff8673;
    height: 50px;
    border-radius: 8px;
    color: #8c8888;
    font-size: 13px;
    width: 460px;
    display: inline-block;
    text-align: center;
    line-height: 4;
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
  email: Yup.string().email("Invalid email address").required("Required"),
});

const TutorForgot = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Hàm này được gọi khi người dùng nhấn nút "Sign Up" hoặc submit form
      // Trong đây, bạn có thể gọi hàm handleRegister() để xử lý việc đăng ký
      try {
        const apiUrl = `${URLApi}/api/v1/auth/reset-password/check-tutor`; // Thay đổi URL theo endpoint của

        const data = {
          email: values.email,
        };
        const response = await axios.post(apiUrl, data);

        if (response.status === 200) {
          // Xử lý khi đăng ký thành công
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          toast.success("Email Sent successful!"); // Show success toast
          navigate("/tutor-login");
        } else {
          // Người dùng không tồn tại hoặc gửi email thất bại
          const errorResponse = response.data;
          if (errorResponse.errorCode === "USER_NOT_FOUND") {
            // Người dùng không tồn tại trong cơ sở dữ liệu
            toast.error("User not found. Please check your email.", response);
          } else {
            // Xử lý các lỗi khác nếu cần thiết
            toast.error("Email Sent failed. Please try again.", response);
          }
        }
      } catch (error) {
        // Xử lý lỗi khi gọi API
        console.error("Error during API call:", error);
        toast.error("User not found. Please check your email.");
        // toast.error("An error occurred. Please try again later.");
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
      <form action="sentEmail" onSubmit={formik.handleSubmit}>
        <div className="fogot">
          <div className="student">
            <div>
              <img className="student1" src={tutoricon} alt="" />
            </div>
            <img src={student2} alt="" />
          </div>
          <TextField
            className="username"
            size="md"
            placeholder="Enter Recovery Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />{" "}
          <div className="messege">
            A recovery link would be sent to your email, use it to reset your
            password
          </div>
          <button className="button">Send email</button>
        </div>
      </form>
      <img className="picture1" src={picture1} alt="" />
      <img className="picture2" src={picture2} alt="" />
      <img className="picture3" src={picture3} alt="" />
    </ForgotStyled>
  );
};
export default TutorForgot;
