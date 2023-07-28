import React, { useState, useEffect } from "react";
import { Course } from "components/Course";
import styled from "styled-components";
// import imgCourse from "assets/imageHome/Course-1.svg";
import avatarTeacher from "assets/imageHome/avatar-teacher.svg";
import { NavLink } from "react-router-dom";
import { Spin, Skeleton, Pagination } from "antd";
import { URLApi } from "api/urlApi";

const CategoryStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  width: 100%;
  background-color: #fafeff;
  .popular-layout {
    display: flex;
    flex-direction: column;
    padding: 70px 140px 0 140px;

    .title {
      display: flex;
      flex-direction: column;
      padding-bottom: 110px;
      gap: 12px;

      h3 {
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: #0c4ca3;
        margin: 0;
      }

      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: #5f6368;
        line-height: 60px;
        margin: 0;
      }
    }

    .group-category-title {
      display: flex;
      justify-content: space-between;

      a {
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        color: #96989b;
        font-size: 16px;
        font-weight: 500;
      }

      .list-category:hover {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
        border-radius: 19px;
        background: #fdfdfd;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
        box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.05);

        a {
          font-weight: 700;
        }
      }
      .list-category:last-child {
        width: 220px;
      }
    }

    .list-course {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 40px;
      grid-row-gap: 40px;
      padding: 93px 0;
    }
  }
`;

const PopularCategory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Gọi API và cập nhật dữ liệu vào trạng thái 'data'
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URLApi}api/v1/course`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false); // Kết thúc trạng thái loading khi dữ liệu đã được lấy về
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Kết thúc trạng thái loading nếu có lỗi xảy ra
    }
  };
  return (
    <CategoryStyled>
      <div className="popular-layout">
        <div className="title">
          <h3>Popular Categories</h3>
          <h2>Explore the most popular categories</h2>
        </div>
        <div className="group-category-title">
          <div className="list-category">
            {" "}
            <a href="#1">Programming</a>
          </div>
          <div className="list-category">
            <a href="#2">Design</a>
          </div>
          <div className="list-category">
            {" "}
            <a href="#3">Business</a>
          </div>
          <div className="list-category">
            <a href="#4">Health & Fitness</a>
          </div>
          <div className="list-category">
            <a href="#5">Marketing</a>
          </div>
          <div className="list-category">
            {" "}
            <a href="#6">Music</a>
          </div>
          <div className="list-category">
            {" "}
            <a href="#7">Finance and Accounting</a>
          </div>
        </div>

        <div className="list-course">
          {loading ? (
            <Skeleton />
          ) : (
            <>
              {currentData && Array.isArray(currentData) ? (
                currentData.map((item) => {
                  if (item.user_user_type === "teacher") {
                    return (
                      <NavLink to={`/course-detail/${item.courseDetail_id}`}>
                        <Course
                          key={item.id}
                          img={item.img}
                          title={item.courseName}
                          ratting={item.rate}
                          avatarTeacher={avatarTeacher}
                          teacherName={item.user_username}
                        />
                      </NavLink>
                    );
                  }
                  return null;
                })
              ) : (
                <Spin />
              )}
            </>
          )}
        </div>
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          style={{ textAlign: "center", marginTop: "20px" }}
        />
      </div>
    </CategoryStyled>
  );
};

export default PopularCategory;
