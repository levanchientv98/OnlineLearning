import { styled } from "styled-components";
import logoFooter from "../../assets/imgFooter/logoFooter.svg";
import { IconLogo } from "../iconLogoFooter/IconLogo";
import iconFace from "../../assets/iconFooter/iconFace.svg";
import iconTwit from "../../assets/iconFooter/iconTwitter.svg";
import iconIN from "../../assets/iconFooter/iconIN.svg";
import iconYou from "../../assets/iconFooter/iconYoutube.svg";
import iconInta from "../../assets/iconFooter/iconInstagram.svg";
import imgAppStore from "../../assets/imgFooter/imgApp.svg";
import imgGPlay from "../../assets/imgFooter/imgGPlay.svg";
import { Link } from "react-router-dom";

const DivStyled = styled.div`
  background-color: #0c4ca3;
  width: 100%;
  min-height: 597px;
  height: auto;
  .left {
    float: left;
    width: 50%;
    height: 597px;
  }
  .right {
    float: right;
    width: 50%;
    height: 597px;
  }
  .logoFooter {
    padding: 50px 200px;
  }
  .logoSocial {
    display: flex;
    column-gap: 30px;
    margin-top: 50px;
  }
  .textBottom {
    margin-top: 200px;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
  }
  .rightFooter {
    padding: 80px 150px;
  }
  .table_right {
    display: flex;
    column-gap: 100px;
  }
  .table-item {
    padding-left: 30px;
  }
  .table-item div {
    color: #ffffff;
    font-weight: 600;
    font-size: 22px;
  }
  .table-item p {
    color: #ffffff;
    font-size: 19px;
    font-weight: 500;
  }
  .imgAppStore {
    padding-left: 111px;
    display: flex;
  }
  .imgGPlay {
    margin-top: 10px;
  }
`;
const Footer = () => {
  return (
    <DivStyled>
      <div className="left">
        <div className="logoFooter">
          <img src={logoFooter} alt="" />
          <div className="logoSocial">
            <IconLogo logoSocial={iconFace} top={-35} left={23} />
            <IconLogo logoSocial={iconTwit} top={-30} left={19} />
            <IconLogo logoSocial={iconIN} top={-35} left={18} />
            <IconLogo logoSocial={iconYou} top={-35} left={19} />
            <IconLogo logoSocial={iconInta} top={-35} left={17} />
          </div>
          <div className="textBottom">
            © Copyright Leon Inc 2023. All rights reserved
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightFooter">
          <div class="table_right">
            <div class="table-item">
              <div>Useful Links</div>
              <p>Safety and Security Policies</p>
              <Link to="/about-us">
                <p>About</p>
              </Link>
              <Link to="/pricing">
                <p>Pricing</p>
              </Link>
              <Link to="/help">
                <p>Help</p>
              </Link>
              <p>Legal</p>
            </div>
            <div class="table-item">
              <div>Contact Us</div>
              <p>support@kits.com</p>
              <p>1-800-200-300</p>
              <p>3500 Deer Crock Rd Palo Alto,CA</p>
            </div>
          </div>
        </div>
        <div className="imgAppStore">
          <img src={imgAppStore} alt="" />
          <img className="imgGPlay" src={imgGPlay} alt="" />
        </div>
      </div>
    </DivStyled>
  );
};
export { Footer };
