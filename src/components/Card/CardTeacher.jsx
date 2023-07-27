import styled from "styled-components";
import iconNext from "assets/imageHome/icon-next.svg";

const CardTeacherStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 271px;

  .avatar-card {
    height: 274px;
    position: relative;

    img {
      width: 271px;
      height: 271px;
      border-radius: 50%;
    }
  }

  .teacher-name {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #2e2c2c;
    padding: 37px 0 24px 0;
  }

  .review {
    font-family: "Poppins", sans-serif;
    color: #2e2c2c;
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
    text-align: center;
  }
  .group-play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: #0c4ca3;
    position: absolute;
    cursor: pointer;
    top: 231px;
    left: 72%;

    .image2 {
      width: 13.6px;
      height: 22.56px;
    }
  }
`;

export const CardTeacher = ({ avatarTeacher, teacherName, review }) => {
  return (
    <CardTeacherStyled>
      <div className="avatar-card">
        <img src={avatarTeacher} alt="avatar-teacher" />
        <div className="group-play">
          <img src={iconNext} alt="icon-next" className="image2" />
        </div>
      </div>
      <div className="teacher-name">{teacherName}</div>
      <div className="review">{review}</div>
    </CardTeacherStyled>
  );
};
