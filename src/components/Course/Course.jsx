import styled from "styled-components";
import iconStar from "assets/imageHome/Star.svg";

const CourseCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  display: flex;
  flex-direction: column;
  width: 456px;
  height: 513px;
  border-radius: 10px 10px 0px 0px;
  background-color: #fff;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px -4px 34px 0px rgba(0, 0, 0, 0.05);

  .img-course img {
    width: 456px;
    height: 283px;
  }
  .teacher-info {
    display: flex;
    justify-content: first baseline;
    align-items: center;
    padding: 16px 0 6px 32px;
    gap: 20px;

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
    p {
      font-family: "Poppins", sans-serif;
      color: #96989b;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .course-name {
    color: #504e4e;
    font-size: 19px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    padding: 0 0 33px 46px;
    line-height: 28.5px;
  }
  .ratting-style {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 46px;

    span:first-child {
      color: #2e2c2c;
      font-size: 21px;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
    }
    span:last-child {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      font-weight: 400;
    }

    .group-star {
      display: flex;
      gap: 5px;
    }
  }
`;

export const Course = ({ img, avatarTeacher, teacherName, title, ratting }) => {
  return (
    <CourseCard>
      <div className="img-course">
        <img src={img} alt="img-Course" />
      </div>
      <div className="teacher-info">
        <img src={avatarTeacher} alt="avatar-Teacher" />
        <p>{teacherName}</p>
      </div>
      <div className="course-name">{title}</div>
      <div className="ratting-style">
        <div className="score">
          {" "}
          <span>{ratting}</span>
          <span>/5.0</span>
        </div>
        <div className="group-star">
          <img src={iconStar} alt="icon-star" />
          <img src={iconStar} alt="icon-star" />
          <img src={iconStar} alt="icon-star" />
          <img src={iconStar} alt="icon-star" />
          <img src={iconStar} alt="icon-star" />
        </div>
      </div>
    </CourseCard>
  );
};
