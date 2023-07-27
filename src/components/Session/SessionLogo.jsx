import styled from "styled-components";
import iconAdobe from "assets/imageHome/icon-Adobe.svg";
import iconUdemy from "assets/imageHome/icon-Ucademi.svg";
import iconCoursera from "assets/imageHome/icon-coursera.svg";
import iconGoogle from "assets/imageHome/icon-google.svg";
import iconFacebook from "assets/imageHome/icon-Facebook.svg";
import iconZoom from "assets/imageHome/icon-Zoom.svg";

const SessionStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 72px 0;

  .group-icon {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0 180px;
  }
`;

const SessionLogo = () => {
  return (
    <SessionStyled>
      <div className="group-icon">
        <img src={iconAdobe} alt="icon-Adobe" />
        <img src={iconUdemy} alt="icon-Udemi" />
        <img src={iconCoursera} alt="icon-Cousera" />
        <img src={iconGoogle} alt="icon-Google" />
        <img src={iconFacebook} alt="icon-Facebook" />
        <img src={iconZoom} alt="icon-Zoom" />
      </div>
    </SessionStyled>
  );
};
export default SessionLogo;
