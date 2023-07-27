import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Rate, Collapse } from "antd";
import { Header } from "components/Header";
import { Footer } from "components/footer";
import Img from "../../icon/img.svg";
import { useParams } from "react-router-dom";
// import { ReactComponent as Check } from "../../icon/check.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import iconRight from "assets/imgDashboard/rightArrow.svg";
import { URLApi } from "api/urlApi";

const CourseDetailStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
  font-family: "Roboto", sans-serif;
  width: 1920px;
  margin: 0 auto;
  padding: 0 144px;

  .cate {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }
  .cate-p {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #96989b;
  }
  .main {
    width: 995px;
  }
  .p-title {
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
    color: #504e4e;
  }
  .p-content {
    font-weight: 500;
    font-size: 26px;
    line-height: 51px;
    color: #96989b;
  }
  .rating {
    display: flex;
    align-items: baseline;
  }
  .rate {
    margin-left: 30px;
  }
  .start {
    font-size: 30px;
    line-height: 60.5px;
    font-weight: 400;
  }
  .rate-1 {
    font-size: 26px;
    line-height: 51.5px;
    font-weight: 500;
  }
  .p-viewer {
    font-size: 26px;
    line-height: 51.5px;
    font-weight: 500;
    color: #96989b;
    margin-left: 40px;
  }
  .p-enrolled {
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    color: #96989b;
    margin-left: 100px;
  }
  .taughtby {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
  .p-taught {
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    color: #96989b;
    margin-left: 40px;
  }
  .p-name {
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    color: #2e2c2c;
  }
  .enroll {
    display: flex;
    gap: 40px;
    align-items: center;
  }
  .p-start {
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    color: #2e2c2c;
  }
  .btn-enroll {
    width: 251px;
    height: 81px;
    border: none;
    border-radius: 55px;
    background-color: #0c4ca3;
    color: white;
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    cursor: pointer;
  }
  .btn-enroll-active {
    width: 251px;
    height: 81px;
    border: none;
    border-radius: 55px;
    background-color: #db7129;
    color: white;
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    cursor: pointer;
  }

  .p-about {
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    color: #2e2c2c;
  }
  .about-content {
    width: 1324px;
    margin: 0 auto;
    font-size: 26px;
    line-height: 55px;
    font-weight: 500;
    color: #96989b;
  }
  .learn-content {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 1324px;
    margin: 0 auto;
    font-size: 26px;
    line-height: 55px;
    font-weight: 500;
    color: #96989b;
  }
  .p-learn {
    position: relative;
    width: 580px;
  }
  .p-learn::before {
    content: url("data:image/svg+xml; utf8, %3Csvg%20width%3D%2242%22%20height%3D%2241%22%20viewBox%3D%220%200%2042%2041%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.8359%2041C9.5141%2041%200.335938%2031.8218%200.335938%2020.5C0.335938%209.17816%209.5141%200%2020.8359%200C32.1578%200%2041.3359%209.17816%2041.3359%2020.5C41.3359%2031.8218%2032.1578%2041%2020.8359%2041ZM20.8389%2037.2735C30.1022%2037.2735%2037.6116%2029.7641%2037.6116%2020.5007C37.6116%2011.2374%2030.1022%203.728%2020.8389%203.728C11.5755%203.728%204.06612%2011.2374%204.06612%2020.5007C4.06612%2029.7641%2011.5755%2037.2735%2020.8389%2037.2735ZM26.9701%2013.5907L17.1061%2023.4547L12.8329%2019.1816L10.1974%2021.8172L17.1061%2028.7259L29.6057%2016.2263L26.9701%2013.5907Z%22%20fill%3D%22%2334BCAD%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A");
    display: block;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 8%;
    left: -11%;
  }
  .faq-content {
    width: 1324px;
    margin: 0 auto;
    font-size: 26px;
    line-height: 55px;
    font-weight: 500;
    color: #96989b;
  }
  .colap {
    margin-bottom: 50px;
    /* background-color: rgba(0, 0, 0, 0.05); */
    box-shadow: 2px 2px 2px 2px lightgray;
  }
  .ant-collapse-arrow {
    font-size: 40px;
  }

  .btn-active {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  .go-session {
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #2e2c2c;
    }
  }

  .go-session:hover {
    span {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.5;
    }
    img {
      opacity: 0.5;
    }
  }

  .icon-size {
    position: absolute;
    width: 165px;
    height: 75px;
    top: -13px;
    left: -26px;
  }
`;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const header_collapse2 = () => (
  <span style={{ color: "#2E2C2C", fontSize: 28, fontWeight: 600 }}>
    {" "}
    What do web designers and developers do?
  </span>
);
const header_collapse3 = () => (
  <span style={{ color: "#2E2C2C", fontSize: 28, fontWeight: 600 }}>
    {" "}
    How long does it take to complete the specialization?
  </span>
);
const header_collapse4 = () => (
  <span style={{ color: "#2E2C2C", fontSize: 28, fontWeight: 600 }}>
    {" "}
    What background knowledge is necessary?
  </span>
);
const header_collapse1 = () => (
  <span style={{ color: "#2E2C2C", fontSize: 28, fontWeight: 600 }}>
    {" "}
    Is this course really 100% online? Do I need to attend any classes in
    person?
  </span>
);
const header_collapse5 = () => (
  <span style={{ color: "#2E2C2C", fontSize: 28, fontWeight: 600 }}>
    {" "}
    Do I need a certain device to take this course?
  </span>
);

const CourseDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // Gọi API và cập nhật dữ liệu vào trạng thái 'data'
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${URLApi}/api/v1/courseDetail/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("daat" ,data)
  const isLoggedIn = () => {
    // Kiểm tra xem trong local storage có id và token không
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    return userId && token;
  };

  // hàm call api gán course cho user
  const handleEnrollCourse = async () => {
    const userId = localStorage.getItem("id");
    try {
      if (!enrolled) {
        // Step 1: Gọi API Post enroll
        const apiUrl = `${URLApi}/api/v1/enroll`;
        const enrollResponse = await axios.post(apiUrl, {
          user_user_id: userId,
          course_course_id: id,
        });

        if (enrollResponse.status === 200) {
          setEnrolled(true);
          toast("Successfully enroll the course");
          console.log(enrollResponse.data);
          localStorage.setItem(
            "courseId",
            enrollResponse.data.course_course_id
          );
        } else {
          toast("Course registration failed");
        }
      } else {
        // If already enrolled, do nothing or show a message
        localStorage.removeItem("courseId");

        toast("successfully exited the course");
      }
    } catch (error) {
      toast("Enroll failed: Course registration failed", error);
    }
  };

  return (
    <>
      {data && (
        <div>
          <Header />
          <CourseDetailStyle>
            <div className="cate">
              <p></p>
              <p className="cate-p">#Popular categories</p>
              <p className="cate-p">#Computer science</p>
              <p className="cate-p">#Mobile and web development</p>
              <p className="cate-p">#Programming</p>
            </div>
            <div className="main">
              <p className="p-title">{data.courseDetailName}</p>
              <p className="p-content">{data.description}</p>
              <div className="rating">
                <span>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={data.rating_ratingPoint}
                  />
                </span>
                <div className="rate">
                  <p className="rate-1">
                    <span className="start">{data.rating_ratingPoint}</span>/5
                  </p>
                </div>
                <p className="p-viewer">722 reviews</p>
                <p className="p-enrolled">2,320 already enrolled</p>
              </div>
              <div className="taughtby">
                <img src={Img} alt="" />
                <p className="p-taught">
                  Taught by <span className="p-name">{data.user_fullname}</span>
                </p>
              </div>
              <div className="enroll">
                <p className="p-start">Start as early as Today</p>
                {isLoggedIn() ? (
                  <div>
                    {enrolled ? (
                      <div className="btn-active">
                        <button
                          className="btn-enroll-active"
                          onClick={handleEnrollCourse}
                        >
                          Enroll
                        </button>
                        <div className="go-session">
                          <Link to="/start-sessions">
                            <span>Go to Session</span>
                            <img
                              src={iconRight}
                              alt="icon-rightArrow"
                              className="icon-size"
                            />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="btn-enroll"
                        onClick={handleEnrollCourse}
                      >
                        Enroll
                      </button>
                    )}
                  </div>
                ) : (
                  <button className="btn-enroll">Enroll</button>
                )}
              </div>
            </div>
            <div style={{ backgroundColor: "#FAFEFF" }} className="about">
              <p className="p-about">About instructor</p>
              <p className="about-content">{data.about}</p>
            </div>
            <div style={{ backgroundColor: "#FAFEFF" }} className="learn">
              <p className="p-about">What you would learn</p>
              <div className="learn-content">
                <p className="p-learn">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <p className="p-learn">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <p className="p-learn">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: "#FAFEFF" }} className="faq">
              <p className="p-about">FAQ’s</p>
              <div className="faq-content">
                <Collapse className="colap" size="large" ghost>
                  <Collapse.Panel
                    showArrow={false}
                    header={header_collapse1()}
                    key="1"
                  >
                    <p
                      style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#7D7C7C",
                      }}
                    >
                      {text}
                    </p>
                  </Collapse.Panel>
                </Collapse>
                <Collapse className="colap" size="large" ghost>
                  <Collapse.Panel
                    showArrow={false}
                    header={header_collapse2()}
                    key="1"
                  >
                    <p
                      style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#7D7C7C",
                      }}
                    >
                      {text}
                    </p>
                  </Collapse.Panel>
                </Collapse>
                <Collapse className="colap" size="large" ghost>
                  <Collapse.Panel
                    showArrow={false}
                    header={header_collapse3()}
                    key="1"
                  >
                    <p
                      style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#7D7C7C",
                      }}
                    >
                      {text}
                    </p>
                  </Collapse.Panel>
                </Collapse>
                <Collapse className="colap" size="large" ghost>
                  <Collapse.Panel
                    showArrow={false}
                    header={header_collapse4()}
                    key="1"
                  >
                    <p
                      style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#7D7C7C",
                      }}
                    >
                      {text}
                    </p>
                  </Collapse.Panel>
                </Collapse>
                <Collapse className="colap" size="large" ghost>
                  <Collapse.Panel
                    showArrow={false}
                    header={header_collapse5()}
                    key="1"
                  >
                    <p
                      style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: "#7D7C7C",
                      }}
                    >
                      {text}
                    </p>
                  </Collapse.Panel>
                </Collapse>
              </div>
            </div>
          </CourseDetailStyle>
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetail;
