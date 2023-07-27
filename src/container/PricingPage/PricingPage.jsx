import { styled } from "styled-components";
import { BottomNavbar } from "../../components/BottomNavbar";
import { Footer } from "../../components/footer/Footer";
import { data } from "../../data/data";
import { Header } from "components/Header";
import { Button } from "@mui/joy";

const DivStyled = styled.div`
  width: 1920px;
  margin: 0 auto;
  height: auto;
  .containerHelp {
    width: 100%;
    position: relative;
  }
  .text1 {
    font-size: 33px;
    font-weight: 700;
    text-align: center;
    margin-top: 60px;
  }
  .bottomPricing {
    display: flex;
    margin: 100px 0 200px 0;
    justify-content: space-evenly;
  }
  .pricing {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 37px;
    width: 313px;
    height: 481px;
  }
  .price {
    padding: 15px 0 25px 0;
    display: flex;
    justify-content: center;
  }
  .prices {
    font-size: 63px;
    font-weight: 300;
  }
  .money {
    font-size: 23px;
    font-weight: 300;
    margin-top: 40px;
  }
  .times {
    background-color: #f6f5f5;
    width: 313px;
    height: 35px;
  }
  .time {
    color: #0c4ca3;
    text-align: center;
    font-weight: 500;
    font-size: 23px;
  }
  .description {
    width: 313px;
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }
  .des {
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    width: 250px;
    height: 136px;
  }
  .divButton {
    text-align: center;
    width: 313px;
  }
  .button {
    width: 180.59px;
    height: 58px;
    border-radius: 33px;
    background-color: #0c4ca3;
    outline: none;
    border: 0;
  }
  .buttonText {
    color: #ffffff;
    font-size: 23px;
    font-weight: 700;
  }
  .iconChatBlue {
    position: fixed;
    right: 50px;
    top: 790px;
  }
  .buttonDis6 {
    position: absolute;
    left: 750px;
    top: 122px;
    width: 137px;
    height: 44px;
  }

  .discount-card {
    border-radius: 35px;
    box-shadow: 0px 16px 22px -10px rgba(253, 63, 63, 0.8);
  }
  .buttonDis4 {
    width: 137px;
    height: 44px;
    background-color: #ffffff;
    outline: none;
    border: none;
  }

  .buttonDis5 {
    width: 137px;
    height: 44px;
    border-radius: 33px;
    background-color: #fd3f3f;
    outline: none;
    border: none;
  }

  .buttonDis6 {
    position: absolute;
    left: 672px;
    top: 122px;
    width: 137px;
    height: 44px;
    border-radius: 33px;
    background-color: #fd3f3f;
    outline: none;
    border: 0;
  }

  .buttonDetail {
    color: #ffffff;
    text-align: center;
    font-size: 19px;
    font-weight: 400;
  }
`;
const PricingPage = () => {
  return (
    <DivStyled>
      <Header></Header>
      <BottomNavbar text="Pricing" top={205} />
      <div className="containerHelp">
        <div className="text1">
          Experience high quality and low-cost tutoring with mentoring
        </div>
        <div className="bottomPricing">
          {data.map((item) => {
            return (
              <div className="pricing">
                {item.discount > 0 ? (
                  <div className="discount-card">
                    <button className="buttonDis5">
                      <div className="buttonDetail">
                        {item.discount}% Discount
                      </div>
                    </button>
                  </div>
                ) : (
                  <Button className="buttonDis4"></Button>
                )}

                <div className="price">
                  <div className="money">$</div>
                  <div className="prices">{item.price}</div>
                </div>
                <div className="times">
                  <div className="time">{item.time}</div>
                </div>
                <div className="description">
                  <div className="des">{item.des}</div>
                </div>
                <div className="divButton">
                  <Button className="button">
                    <div className="buttonText">{item.buttonText}</div>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </DivStyled>
  );
};
export default PricingPage;
