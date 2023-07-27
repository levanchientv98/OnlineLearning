import { styled } from "styled-components";
import { BottomNavbar } from "../../components/BottomNavbar";
import { Footer } from "../../components/footer/Footer";
import imgDo from "../../assets/img/learnDoAchieve.svg";
import imgBu from "../../assets/img/imgBlurred.svg";
import { dataAboutContainer, dataEndContent } from "../../data/data";
import imgHuman from "../../assets/img/imgHuman.svg";
import imgDot from "../../assets/img/imgDot.svg";
import { Header } from "components/Header";

const DivStyled = styled.div`
  width: 1920px;
  margin: 0 auto;
  .containerAbout {
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 110px;
  }
  .imgHuman {
    position: absolute;
    left: 735px;
    top: -110px;
  }

  .topCantainer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
  }
  .imgDo {
    position: relative;
  }
  .imgBu {
    position: absolute;
    left: 200px;
    top: 80px;
  }
  .textTop {
    font-weight: 300;
    font-size: 23px;
    color: #2e2c2c;
    width: 878px;
    height: 175px;
  }
  .textTutors {
    font-size: 33px;
    font-weight: 700;
    text-align: center;
  }
  .content {
    padding: 0 280px;
    display: grid;
    grid-template-columns: 1fr 0fr;
    margin-top: 140px;
    row-gap: 71px;
    position: relative;
  }
  .bgContent {
    width: 412px;
    height: 153px;
    border-radius: 25px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
  }
  .intoContent {
    padding-left: 40px;
    margin-top: 20px;
  }
  .title {
    font-size: 17px;
    font-weight: 700;
  }
  .des {
    font-size: 17px;
    font-weight: 300;
  }
  .endContent {
    display: flex;
    justify-content: space-evenly;
    margin-top: 120px;
  }
  .into {
    display: flex;
    margin-left: 60px;
  }
  .key {
    color: rgba(52, 188, 173, 0.4);
    font-size: 63px;
    font-weight: 600;
    width: 44px;
    height: 123px;
  }
  .textForm {
    margin-top: 26px;
  }
  .disText {
    width: 346px;
    height: 75px;
    font-size: 13px;
    font-weight: 400;
  }
  .textName {
    color: rgba(12, 76, 163, 1);
    font-size: 13px;
    font-weight: 600;
  }
  .imgDot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
`;
const AboutUs = () => {
  return (
    <DivStyled>
      <Header></Header>
      <BottomNavbar text="About KITS" top={205} />
      <div className="containerAbout">
        <div className="topCantainer">
          <img className="imgDo" src={imgDo} alt="" />
          <img className="imgBu" src={imgBu} alt="" />
          <div className="textTop">
            KITS's mission is to help bridge the knowledge gap by ensuring that
            students get access to quality tutoring at affordable pricing. KITS
            leverages technology and an army of passionate tutors to help
            students learn successfully.
          </div>
        </div>
        <div className="textTutors">Why tutors choose KITS?</div>
        <div className="content">
          <img className="imgHuman" src={imgHuman} alt="" />
          {dataAboutContainer.map((item) => {
            return (
              <div className="bgContent">
                <div className="intoContent">
                  <div className="title">{item.title}</div>
                  <div className="des">{item.des}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="endContent">
          {dataEndContent.map((item) => {
            return (
              <div className="into">
                <div className="key">{item.key}</div>
                <div className="textForm">
                  <div className="disText">{item.dis}</div>
                  <div className="textName">{item.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        <img className="imgDot" src={imgDot} alt="" />
      </div>
      <Footer />
    </DivStyled>
  );
};
export default AboutUs;
