import { styled } from "styled-components";
import imgBg from "../../assets/img/iconBg.svg";
const DivStyled = styled.div`
  .imgBg {
    object-fit: cover;
    width: 100%;
    height: 120px;
    position: relative;
  }
  .text {
    position: absolute;
    top: ${(props) => `${props.top}px`};
    left: 148px;
    font-weight: 700;
    font-size: 23px;
    color: #ffffff;
  }
`;
const BottomNavbar = ({ text, top }) => {
  return (
    <DivStyled text={text} top={top}>
      <div>
        <img className="imgBg" src={imgBg} alt="" />
        <div className="text">{text}</div>
      </div>
    </DivStyled>
  );
};
export { BottomNavbar };
