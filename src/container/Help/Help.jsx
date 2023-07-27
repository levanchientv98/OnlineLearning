import styled from "styled-components";
import { BottomNavbar } from "../../components/BottomNavbar";
import { Footer } from "../../components/footer/Footer";
import imgChat from "../../assets/img/iconChat.svg";
import imgEmail from "../../assets/img/iconEmail.svg";
import imgForm from "../../assets/img/iconForm.svg";
import { Header } from "components/Header";

const DivStyled = styled.div`
  width: 1920px;
  margin: 0 auto;
  height: auto;
  .containerHelp {
    min-height: 60vh;
    width: 100%;
    height: auto;
    position: relative;
  }
  .text1 {
    font-size: 33px;
    font-weight: 700;
    text-align: center;
    margin-top: 100px;
  }
  .icon {
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
  }
  .textChat {
    color: #8c8888;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }
  .iconChatGreen {
    border-radius: 50%;
    border: 1px solid transparent;
    position: fixed;
    bottom: 8%;
    right: 10%;
  }
`;

const Help = () => {
  return (
    <DivStyled>
      <Header></Header>
      <BottomNavbar text="Need help?" top={205} />
      <div className="containerHelp">
        <div className="text1">Let us know how we can be of help!</div>
        <div className="bottomHelp">
          <div className="icon">
            <div>
              <img src={imgChat} alt="" />
              <div className="textChat">Chat Us</div>
            </div>
            <div>
              <img src={imgEmail} alt="" />
              <div className="textChat">Email Us</div>
            </div>
            <div>
              <img src={imgForm} alt="" />
              <div className="textChat">Submit A Form</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DivStyled>
  );
};
export default Help;
