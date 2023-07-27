import React, { useState } from "react";
import { styled } from "styled-components";
import { Select } from "antd";
import { Course } from "components/Course";
// import imgCourse from "assets/imageHome/Course-1.svg";
import avatarTeacher from "assets/imageHome/avatar-teacher.svg";
import { NavLink } from "react-router-dom";
import Logosreach from "../../icon/iconsreach.svg";
// import Thumbnail from "../../icon/imgcourse.svg";
import { URLApi } from "api/urlApi";

const SreachStyle = styled.div`
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
  /* background-color: #e0f0ff; */
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #e0f0ff);

  input {
    padding-left: 50px;
    width: 254px;
    height: 48px;
    border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 1px 1px 1px lightgray;
    border-radius: 117px;
  }
  .sreach {
    position: relative;
    img {
      position: absolute;
      left: 2%;
      top: 33%;
    }
  }
  .title {
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      color: #5f6368;
    }
    span {
      color: #0c4ca3;
    }
  }
  .btnfilter {
    width: 156px;
    height: 52px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    color: white;
    background-color: #0c4ca3;
    margin: 0 auto;
    border-radius: 37px;
    margin-top: 20px;
    border: none;
    float: right;
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-between;
`;

// const CourseDetail = styled.div`
//   width: 375px;
//   height: 422px;
//   border-radius: 10px;
//   background-color: white;
//   margin-top: 20px;
//   .rating {
//     font-family: "Poppins", sans-serif;
//     font-size: 13px;
//     line-height: 19.5px;
//     font-weight: 400;
//     display: inline-block;
//     margin-right: 20px;
//   }
//   .rate {
//     font-size: 21px;
//     line-height: 31.5px;
//     font-weight: 400;
//   }
//   .titlecourse {
//     margin-top: 15px;
//     margin-left: 20px;
//   }
//   .tcourse {
//     font-family: "Poppins", sans-serif;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 24px;
//     color: #504e4e;
//   }
//   .image {
//     display: flex;
//     gap: 15px;
//   }
//   img {
//     width: 375px;
//     height: 233px;
//     object-fit: cover;
//   }
//   .NA {
//     font-family: "Poppins", sans-serif;
//     font-size: 14px;
//     line-height: 21px;
//     font-weight: 500;
//     color: #96989b;
//   }
//   .hinh {
//     width: 43px;
//     height: 43px;
//     object-fit: cover;
//   }
// `;

// const Course = ({ data }) => {

//     return (
//         <>

//             {
//                 data && data.map((dt) => {
//                     return (
//                         <CourseDetail>
//                             <img src={dt.thumbnaiil} alt="Thumbnail" />
//                             <div className="titlecourse">
//                                 <div className="image">
//                                     <img src={dt.img} alt="" className="hinh" />
//                                     <p className="NA">{dt.name}</p>
//                                 </div>
//                                 <p className="tcourse">{dt.course}</p>
//                                 <p className="rating"><span className="rate">{dt.rate}</span>/5</p>
//                                 <span><Rate disabled defaultValue={[dt.rate]} /></span>
//                             </div>
//                         </CourseDetail>

//                     )
//                 })
//             }

//         </>

//     )
// }
// const fakeData = [
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 4,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 3,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 2.5,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 2.5,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 2.5,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 2.5,
//     },
//     {
//         thumbnaiil: Thumbnail,
//         img: ImgThumbnial,
//         name: "Diallo Liam",
//         course: "HTML, CSS and Javascript for web Developers",
//         rate: 5,
//     }

// ]

const handleChange = (value) => {
  //select input
  console.log(`selected ${value}`);
};
const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `${URLApi}/api/v1/course/search?query=${searchTerm}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error searching by name:", error);
      }
    }
  };
  return (
    <SreachStyle>
      <div className="sreach">
        {/* <Paper src={Logosreach} alt="Sreach" onClick={handleSearch}>

                </Paper> */}
        <img src={Logosreach} alt="Sreach" onClick={handleSearch} />
        <input
          onKeyDown={handleSearch}
          placeholder="HTML and CSSs"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="title">
        <p>
          Search Result<span>“HTML and CSS”</span>
        </p>
      </div>
      <p>Filter</p>
      <Filter>
        <Select
          defaultValue="Select Level"
          style={{
            width: 264,
            borderRadius: 10,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Bigginer",
              label: "Bigginer",
            },
            {
              value: "Intermediate",
              label: "Intermediate",
            },
            {
              value: "Mixed",
              label: "Mixed",
            },
          ]}
        />
        <Select
          defaultValue="Select Duration"
          style={{
            width: 264,
            borderRadius: 10,
          }}
          onChange={handleChange}
          options={[
            {
              value: "6-12 Months",
              label: "6-12 Months",
            },
            {
              value: "3-6 Months",
              label: "3-6 Months",
            },
            {
              value: "Less than 2 Hours",
              label: "Less than 2 Hours",
            },
            {
              value: "1-4 Weeks",
              label: "1-4 Weeks",
            },
            {
              value: "1-3 Months",
              label: "1-3 Months",
            },
          ]}
        />
        <Select
          defaultValue="Select Language"
          style={{
            width: 264,
            borderRadius: 10,
          }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
        <Select
          defaultValue="Sort By"
          style={{
            width: 264,
            borderRadius: 10,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Ratings",
              label: "Ratings",
            },
            {
              value: "No. of Students",
              label: "No. of Students",
            },
            {
              value: "Latest",
              label: "Latest",
            },
          ]}
        />
      </Filter>
      <button className="btnfilter">Filter</button>
      <Content>
        {/* <Course data={fakeData} /> */}

        {/* <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>
                            {result.courseName}
                            {result.courseType}
                        </li>
                    ))}
                </ul> */}

        {searchResults && Array.isArray(searchResults) ? (
          searchResults.map((result) => {
            if (result.user_user_type === "teacher") {
              return (
                <NavLink to={`/course-detail/${result.id}`}>
                  <Course
                    key={result.id}
                    img={result.img}
                    title={result.courseName}
                    ratting={result.rating_ratingPoint}
                    avatarTeacher={avatarTeacher}
                    teacherName={result.user_username}
                  />
                </NavLink>
              );
            } else {
              return null; // or any other placeholder value
            }
          })
        ) : (
          <p>Không có dữ liệu!</p>
        )}
      </Content>
    </SreachStyle>
  );
};

export default SearchMain;
