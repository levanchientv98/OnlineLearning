import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Row, Form, Input, Radio, Upload, Avatar } from "antd";
import { Button } from "components/Button";
import { ReactComponent as Logo } from "../../icon/logo.svg";
import { UploadOutlined } from "@ant-design/icons";
import { URLApi } from "api/urlApi";
import axios from "axios";
import { toast } from "react-toastify";
import ImageUploader from "components/ImageUpload/ImageUploader";
import { Link } from "react-router-dom";

const DashboardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  width: 1920px;
  margin: 0 auto;
  .logo {
    padding-top: 50px;
    margin-left: 63px;
  }
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

  .first-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 47px;
    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      margin: 0;
      color: #2e2c2c;
    }
  }
  .student-profile {
    display: flex;
    flex-direction: column;
    padding: 0 30px 200px 30px;
  }
  .save-cancel {
    position: absolute;
    top: 257px;
    left: 75%;
    display: flex;
    flex-direction: row;

    span:first-child {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
    }
    span:last-child {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
    }

    Button:last-child:hover {
      color: #ec5959;
    }
  }
  .avatar-position {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar-size {
      width: 83px;
      height: 83px;
    }
    span {
      height: 83px;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      padding-top: 14px;
      color: #ffffff;
    }
  }

  .form-profile {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;

    .ant-form-item {
      margin: 0;
    }

    .left {
      display: flex;
      flex-direction: column;

      .ant-row {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .radio-size {
        .ant-row {
          height: 115px;

          label {
            font-size: 15px;
          }
        }
      }

      .ant-radio-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 60px;
      }

      .ant-form-item {
      }
    }
    .right {
      display: flex;
      flex-direction: column;

      .ant-row {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .ant-form {
        padding-bottom: 50px;
      }
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 10px;
    input {
      width: 376px;
      height: 48px;
      border-radius: 7px;
      border: none;
      outline: none;
      background: #f5f5f5;
      font-size: 20px;
      padding: 9px 18px;
      margin-bottom: 40px;
      color: #2e2c2c;
    }

    label {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
      padding-bottom: 35px;
    }
  }
  .profile2 {
    display: flex;
    flex-direction: column;
    height: 110px;
    gap: 10px;

    input {
      width: 376px;
      height: 48px;
      border-radius: 7px;
      border: none;
      outline: none;
      background: #f5f5f5;
      font-size: 20px;
      padding: 9px 18px;
      margin-bottom: 10px;
      color: #2e2c2c;
    }

    label {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
      padding-bottom: 35px;
    }
  }
  .avatar-style {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 330px;
    left: 39%;
  }
  .edit-avatar {
    width: 98px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    padding-top: 14px;
  }
`;

const SettingStudent = () => {
  const [phone, setPhone] = useState("");
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState("");
  // New state to store the fetched data
  const [userData, setUserData] = useState(null);
  const getImages = (url) => {
    console.log(url);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const userDataUrl = `${URLApi}/api/v1/user/${id}`; // Thay đổi URL theo endpoint của bạn
        const userDataResponse = await axios.get(userDataUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userDataResponse) {
          console.log(userDataResponse.data);
          setUserData(userDataResponse.data);
          setAvatarUrl(userDataResponse.data.avatar); // Assuming that the avatar URL is available in the fetched data as 'avatar'
        } else {
          // Handle the case when the response is null or undefined
          console.error("Error fetching user data: Empty response");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Set initial values for each input field using the fetched data
  useEffect(() => {
    if (userData) {
      form.setFieldsValue({
        studentFullName: userData.fullname,
        studentFirstName: userData.fisrtname,
        studentLastName: userData.lastname,
        studentUsername: userData.username,
        email: userData.email,
        phoneNumber: userData.phone,
        avatarUrl: userData.avatar,
      });
    }
  }, [userData, form]);

  const handleSave = async (userData) => {
    try {
      const urlEditProfile = `${URLApi}/api/v1/auth/edit-profile`;
      const token = localStorage.getItem("token");
      const updatedUserData = {
        username: userData.studentUsername,
        email: userData.email,
        fullname: userData.studentFullName,
        firstname: userData.studentFirstName,
        lastname: userData.studentLastName,
        phone: userData.phoneNumber,
        // avatar: userData.avatarUrl,

        // Add other fields like avatar if needed
      };

      // Make the API call to edit the profile
      const response = await axios.post(urlEditProfile, updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });

      if (response.status === 200) {
        toast("Update Success");

        // Optionally, you can update the form fields with the updated values
        form.setFieldsValue({
          studentUsername: userData.studentUsername,
          email: userData.email,
          studentFullName: userData.studentFullName,
          studentFirstName: userData.studentFirstName,
          studentLastName: userData.studentLastName,
          phoneNumber: userData.phoneNumber,
          // avatarUrl: userData.avatarUrl,
        });

        // Optionally, you can fetch the user data again after the update to reflect the changes
        // For example, you can call fetchUserData() here
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
  };

  // check number phone
  const handlePhoneChange = (event) => {
    const value = event.target.value;

    if (value.match(/^\d{0,11}$/)) {
      setPhone(value);
    }
  };

  const handleFileChange = async (file) => {
    setAvatarUrl(URL.createObjectURL(file));

    // Display image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarUrl("");
    }
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const urlEditProfile = `${URLApi}/api/v1/auth/edit-profile`;
      const token = localStorage.getItem("token");

      // Make the API call to update the avatar
      const response = await axios.post(urlEditProfile, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Update the avatarUrl in userData with the new avatarUrl from the response
        const newAvatarUrl = response.data.avatar;
        setUserData((prevUserData) => ({
          ...prevUserData,
          avatar: newAvatarUrl,
        }));

        // Optionally, you can update the form fields with the updated values
        form.setFieldsValue({
          avatarUrl: newAvatarUrl,
        });

        toast("Avatar Update Success");
      }
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={4}>
          {" "}
          <div className="logo">
            <Link to="/student-dashboard" exact="true">
              {" "}
              <Logo></Logo>
            </Link>
          </div>
        </Col>
        <Col span={18}>
          <DivStyle>
            <div className="title">
              {" "}
              <h2>Settings</h2>
            </div>
            <div className="student-profile">
              <div className="first-title">
                <h3>Profile</h3>
              </div>
              <div className="avatar-position">
                <span>Edit</span>
              </div>
              <Form
                className="form-profile"
                form={form}
                onFinish={handleSave}
                onFinishFailed={() => console.log("Failed")}
              >
                <div className="left">
                  <div className="profile">
                    <Form.Item name="studentFullName" label="Student Full Name">
                      <Input></Input>
                    </Form.Item>
                  </div>
                  <div className="profile">
                    <Form.Item
                      name="studentFirstName"
                      label="Student First Name"
                    >
                      <Input></Input>
                    </Form.Item>
                  </div>
                  <div className="profile">
                    <Form.Item name="studentLastName" label="Student Last Name">
                      <Input></Input>
                    </Form.Item>
                  </div>
                  <div className="radio-size">
                    <Form.Item name="gender" label="Gender">
                      <Radio.Group>
                        <Radio value="male"> Male </Radio>
                        <Radio value="female">Female </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
                <div className="right">
                  <div className="profile">
                    <Form.Item name="studentUsername" label="Student User Name">
                      <Input></Input>
                    </Form.Item>
                  </div>
                  <div className="profile2">
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input placeholder="abbeysavage12@hotmail.com" />
                    </Form.Item>
                  </div>
                  <div className="profile2">
                    <Form.Item
                      name="phoneNumber"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your phone number",
                        },
                        {
                          pattern: /^\d{0,11}$/,
                          message: "Invalid phone number",
                        },
                      ]}
                    >
                      <Input value={phone} onChange={handlePhoneChange} />
                    </Form.Item>
                  </div>
                  <div className="profile">
                    <Form.Item
                      name="schoolName"
                      label="School Name"
                      className="pad-3"
                    >
                      <Input></Input>
                    </Form.Item>
                  </div>
                  <Form.Item className="save-cancel">
                    <Button
                      width="100px"
                      height="37px"
                      bgColor="#0C4CA3"
                      textColor="#fff"
                      borderRadius="25px"
                      fontSize="20px"
                      type="submit"
                      htmlType="submit"
                    >
                      <span>Save</span>
                    </Button>
                    <Button
                      width="100px"
                      height="37px"
                      bgColor="#ffffff"
                      textColor="#000000"
                      borderRadius="25px"
                      fontSize="20px"
                      htmlType="button"
                      onClick={handleCancel}
                    >
                      <span>Cancel</span>
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <ImageUploader images={getImages} />
                  </Form.Item>
                  <Form.Item name="avatarUrl" className="avatar-style">
                    {avatarUrl && (
                      <div className="avatar-preview">
                        <Avatar name="avatarUrl" size={100} src={avatarUrl} />
                      </div>
                    )}
                    <Upload
                      maxCount={1}
                      beforeUpload={() => false}
                      onChange={(info) => handleFileChange(info.file)}
                    >
                      <Button className="edit-avatar" icon={<UploadOutlined />}>
                        Edit
                      </Button>
                    </Upload>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </DivStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};
export default SettingStudent;
