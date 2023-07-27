import React, { useState } from 'react';
import { styled } from "styled-components";
import imgHCircle from "../../assets/img/imgHumanCircle.svg";
import imgCheck from "../../assets/img/checkTick.svg";
import { NavLink } from "react-router-dom";
import imgLeft from "../../assets/img/arrowLeft.svg";
import imgRight from "../../assets/img/arrowRight.svg";
import imgStart from "../../assets/img/imgStar.svg";
import { dataHumanRate } from "data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Typography, Collapse } from 'antd';
import Imglogo from "../../icon/img.svg";
import { ReactComponent as Verify } from '../../icon/iconverify.svg';
import { ReactComponent as Free } from '../../icon/iconfree.svg';
import { ReactComponent as Like } from '../../icon/iconlike.svg';
import { ReactComponent as People } from '../../icon/iconpeople.svg';
import { ReactComponent as Teacher } from '../../icon/iconteacher.svg';
import { ReactComponent as Verify1 } from '../../icon/iconverify01.svg';
import Rating from '@mui/material/Rating';


import { useRef } from "react";

const { Paragraph } = Typography;

const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  // nextArrow: <SampleNextArrow className="sample" />,
  // prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const DivStyled = styled.div`
  position: relative;
  padding: 10px 20px;
  width: 100%;
  margin-bottom: 300px;
  .divTop {
    width: 861px;
    justify-content: center;
    display: flex;
    
  }
  .into {
    background: rgba(208, 193, 241, 1);
    width: 321px;
    height: 356px;
    border-radius: 40px;
  }
  .divEnd {
    background: rgba(208, 193, 241, 1);
    width: 861px;
    height: 301px;
    border-radius: 40px;
    position: absolute;
    top: 330px;
  }
  .imgHCircle {
    position: relative;
    text-align: center;
    margin-top: 50px;
  }
  .imgCheck {
    position: absolute;
    top: 45px;
    left: 350px;
  }
  .check{
    position: absolute;
    top: 5px;
    left: 45px;
    height: 45px;

  }
  .img-circle{
    width: 98px;
    height: 98px;
    object-fit: cover;
  }
  .textName {
    height: 30px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }
  .textSchool {
    height: 23px;
    font-size: 15px;
    font-weight: 400;
    color: rgba(140, 136, 136, 1);
    margin-top: 10px;
    text-align: center;
  }
  .divButton {
    margin-top: 10px;
    text-align: center;
  }
  .button {
    text-align: center;
    height: 36px;
    border-radius: 78px;
    background: rgba(12, 76, 163, 1);
    border: 0;
  }
  .textButton {
    color: rgba(255, 255, 255, 1);
    width: 85px;
    font-size: 15px;
    font-weight: 500;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
  }
  .textStudent {
    width: 168px;
    height: 30px;
    font-size: 20px;
    font-weight: 600;
  }
  .textVisit {
    color: rgba(52, 115, 188, 1);
    font-size: 14px;
    font-weight: 400px;
    width: 77px;
    height: 21px;
  }
  .bottomContent {
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
  }
  .bottomContentRight {
    width: 10%;
    display: flex;
    justify-content: space-evenly;
  }
  .bottomContentLeft {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
  .start {
    display: flex;
  }
  .textNumber {
    display: flex;
    width: 57px;
    height: 32px;
  }
  .textNumberLeft {
    font-size: 21px;
    line-height: 31.5px;
    font-weight: 400;
  }
  .textNumberRight {
    font-size: 13px;
    line-height: 19.5px;
    font-weight: 400;
    margin-top: 8px;
  }
  .reviews {
    color: rgba(198, 194, 194, 1);
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
  }
  .bottomRate {
    padding: 20px 60px;
  }
  .bottomRateInto {
    width: 438px;
    height: 166px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
  }
  .date {
    width: 438px;
    display: flex;
    justify-content: end;
  }
  .textDate {
    width: 88px;
    height: 23px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22.5px;
    color: rgba(198, 194, 194, 1);
  }
  .comment {
    width: 438px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
  }
  .textComment {
    width: 300px;
    height: 40px;
    font-size: 13px;
    font-weight: 400;
  }
  .iconComment {
    width: 53px;
    height: 162px;
    font-size: 135px;
    font-weight: 400;
    color: rgba(140, 136, 136, 0.3);
    margin-top: -50px;
  }
  .imgLine {
    width: 438px;
    text-align: center;
  }
  .humanComment {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
  }
  .human {
    display: flex;
  }
  .name {
    margin-left: 20px;
  }
  .textName {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .type {
    color: rgba(198, 194, 194, 1);
    font-weight: 400;
    font-size: 13px;
    line-height: 19.5px;
  }
  .rating {
    display: flex;
  }
  .rateStart {
    width: 30px;
    height: 30px;
  }
  .textRate {
    font-size: 21px;
    font-weight: 500;
    line-height: 31.5px;
  }
  .imgg{
    width: 225px;
    height: 250px;
    position: absolute;
    border: none;
    border-radius: 23px;
    top:50px;

  }
  .left{
    background-color:#EFD9A1;
    left: 20px;;
  }
  .right{
  
    background-color:rgba(208, 193, 241, 0.2);
    left: 646px;
  }
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 70px;
    right: 3rem;
  }
  .back {
    right: 80px;
    top: 70px;
  }
`;

const ModalStyle = styled.div`
    .header{
        background-image: linear-gradient(to right, #F3F9FB, #e0f0ff);
        margin: -20px -24px;
        padding: 20px;
        height: 167px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        .header-main{
            display: flex;
            margin-left: 70px;
            align-items: center;
            position: relative;
            .btn-book{
                height: 36px;
                width: 109px;
                background-color: #0C4CA3;
                color: #FFFFFF;
                border-radius: 78px;
                border: none;
                position: absolute;
                top: 83%;
                left: 270%;

            }
            .namee{
                margin-left: 40px;
            }
            .abc{
                display : flex
            }
            #name{
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: 20px;
                line-height: 30px;
                color: #2E2C2C;
            }
            #place{
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 22px;
                color: #8C8888;
            }
        }
        img{
            width: 90px;
            height: 90px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .about{
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
    }
    .text1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #8C8888;
    }
    .text-1{
        margin-left: 20px;
        width: 418px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 44px;
        color: rgba(70, 68, 68, 1);

    }
    .about-1{
        width: 70%;
    }
    .about-2{
        width: 30%;
    }
    .fact{
        display: flex;
        flex-direction: column;
        gap: -5px
    }
    .fact-content{
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: -25px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 44px;
        color: rgba(70, 68, 68, 1);
    }
    .profile{
        display: flex;
    }
    .link{
        position: relative;
        width: 60%;
    }
    .star{
        width: 40%;
        display: flex;
        align-items: baseline;

    }
    .protofile-link{
        width: 468px;
        height: 50px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 44px;
        color: rgba(70, 68, 68, 1);
        border: 1px solid;
        border-radius: 33px;
    }
    .copyable{
        position: absolute;
        width: 57px;
        height: 53px;
        border-radius: 0px 33px 33px 0px;
        background-color: rgba(12, 76, 163, 1);
        top: 6%;
        left: 78%;
        transform:translate(-1%, -4%);
    }
    .anticon{
        position: absolute;
        top: 27%;
        left: 27%;
        transform:translate(-1%, -2%);
        color: white;
        font-size: 24px;
    }
    .star{
      display: flex;
      align-items: center;
      gap: 40px;

    }
    .rate{
      display: flex;
      align-items: center;
      gap: 20px;

    }
    .ratee{
      font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 21px;
        line-height: 35px;
        color: rgba(46, 44, 44, 1);
    }
    .colap{
    margin-bottom: 30px;
    box-shadow: 1px 1px 1px 1px lightgray;

  }
`;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const header_collapse2 = () => (
  <span style={{ color: '#2E2C2C', fontSize: 28, fontWeight: 600 }}> Awards</span>
);
const header_collapse3 = () => (
  <span style={{ color: '#2E2C2C', fontSize: 28, fontWeight: 600 }}> Languages</span>
);
const header_collapse4 = () => (
  <span style={{ color: '#2E2C2C', fontSize: 28, fontWeight: 600 }}> Certificates</span>
);
const header_collapse1 = () => (
  <span style={{ color: '#2E2C2C', fontSize: 28, fontWeight: 600 }}> Skills</span>
);


const Modall = () => {
  return (
    <ModalStyle>
      <div className="header">
        <div className="header-main">
          <img src={Imglogo} alt='' />
          <div className="namee">
            <div className='abc'>
              <p id="name">Jacqueline</p>

              <Verify style={{ marginTop: 11 }}></Verify>
            </div>
            <p id="place">Fodham University</p>
          </div>
          <button className='btn-book'>Book Hour</button>
        </div>
      </div>
      <div className="about">
        <div className="about-1">
          <p className='text1'>ABOUT</p>

          <div className="text">
            <p className='text-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum aliquid alias, commodi cumque numquam. Enim eveniet, minima recusandae aspernatur dolore eos ipsa qui dicta eligendi totam commodi, alias doloremque.</p>
          </div>
        </div>
        <div className="about-2">
          <p className='text1'>FACTS</p>
          <div className="fact">
            <div className="fact-content">
              <Verify1 />
              <p className="p-content">Verified Tutors</p>
            </div>
            <div className="fact-content">
              <People />
              <p className="p-content">2 Lessons hosted</p>
            </div>
            <div className="fact-content">
              <Teacher />
              <p className="p-content">Teaches: College student</p>
            </div>
            <div className="fact-content">
              <Like />
              <p className="p-content">100% Satisfaction rate </p>
            </div>
            <div className="fact-content">
              <Free />
              <p className="p-content">Offers free first lesson</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="link">
          <input style={{ paddingLeft: 20 }} className='protofile-link' type="text" enable value="https://www.verited.com/student/profile" readOnly />
          <div className="copyable">
            <Paragraph
              style={{ color: "red" }}
              copyable={{
                text: 'https://www.verited.com/student/profile',
              }}
            >
            </Paragraph>
          </div>
        </div>
        <div className="star">
          <div className="rate">
            <p className="rate-1"><span className="ratee">4</span>/5</p>
            <Rating name="size-medium" defaultValue={4.5} precision={0.5} readOnly />
          </div>
          <p className="p-viewer"> 722 reviews</p>
        </div>
      </div>
      <div className="faq-content">
        <Collapse className="colap" size="large" ghost >
          <Collapse.Panel showArrow={false} header={header_collapse1()} key="1">
            <p style={{ fontSize: 20, fontWeight: 500, color: "#2E2C2C" }}>{text}</p>
          </Collapse.Panel>
        </Collapse>
        <Collapse className="colap" size="large" ghost >
          <Collapse.Panel showArrow={false} header={header_collapse2()} key="1">
            <p style={{ fontSize: 20, fontWeight: 500, color: "#2E2C2C" }}>{text}</p>
          </Collapse.Panel>
        </Collapse>
        <Collapse className="colap" size="large" ghost >
          <Collapse.Panel showArrow={false} header={header_collapse3()} key="1">
            <p style={{ fontSize: 20, fontWeight: 500, color: "#2E2C2C" }}>{text}</p>
          </Collapse.Panel>
        </Collapse>
        <Collapse className="colap" size="large" ghost >
          <Collapse.Panel showArrow={false} header={header_collapse4()} key="1">
            <p style={{ fontSize: 20, fontWeight: 500, color: "#2E2C2C" }}>{text}</p>
          </Collapse.Panel>
        </Collapse>

      </div>

    </ModalStyle>
  )
}

const ProfileDashboard = () => {
  const [open, setOpen] = useState(false); // open modal

  const arrowRef = useRef(null);
  return (
    <DivStyled>

      <div className="divTop">
        <div className="into">
          <Modal
            // bodyStyle={{
            //     backgroundColor: 'red'
            // }}
            // title="Modal 1000px width"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            heigh={994}
            footer={null}
            className='modalStyle'

          >
            <Modall></Modall>

          </Modal>
          <div className="imgg left">
            <div className="imgHCircle" style={{marginTop:24}}>
              <img className='img-circle' src={imgHCircle} alt="" onClick={() => setOpen(true)} />
              <img className="check" src={imgCheck} alt="" />
            </div>
            <div className="textName">Jacqueline</div>
            <div className="textSchool">Fodham University</div>
          </div>
          <div className="imgg right">
            <div className="imgHCircle" style={{marginTop:24}}>
              <img className='img-circle' src={imgHCircle} alt="" onClick={() => setOpen(true)} />
              <img className="check" src={imgCheck} alt="" />
            </div>
            <div className="textName">Jacqueline</div>
            <div className="textSchool">Fodham University</div>
          </div>
          <div className="imgHCircle">
            <img src={imgHCircle} alt="" onClick={() => setOpen(true)} />
          </div>
          <img className="imgCheck" src={imgCheck} alt="" />
          <div className="textName">Jacqueline</div>
          <div className="textSchool">Fodham University</div>
          <div className="divButton">
            <button className="button">
              <div className="textButton">Book Hours</div>
            </button>
          </div>
        </div>
      </div>
      <div className="divEnd">
        <div className="bottom">
          <div className="textStudent">Student Reviews</div>
          <NavLink className="textVisit" to="/">
            Visit profile
          </NavLink>
        </div>
        <div className="bottomContent">
          <div className="bottomContentLeft">
            <div className="textNumber">
              <div className="textNumberLeft">4.8</div>
              <div className="textNumberRight">/5.0</div>
            </div>
            <div className="start">
              <img src={imgStart} alt="" />
              <img src={imgStart} alt="" />
              <img src={imgStart} alt="" />
              <img src={imgStart} alt="" />
              <img src={imgStart} alt="" />
            </div>
            <div className="reviews">92 Reviews</div>
          </div>
        </div>
        <div className="bottomRate">
          <Slider ref={arrowRef} {...settings}>
            {dataHumanRate.map((item) => {
              return (
                <>
                  <div className="bottomRateInto">
                    <div className="date">
                      <div className="textDate">{item.date}</div>
                    </div>
                    <div className="comment">
                      <div className="textComment">{item.commentText}</div>
                      <div className="iconComment">{item.coment}</div>
                    </div>
                    <div className="imgLine">
                      <img src={item.imgLine} alt="" />
                    </div>
                    <div className="humanComment">
                      <div className="human">
                        <img src={item.avatar} alt="" />
                        <div className="name">
                          <div className="textName">{item.textName}</div>
                          <div className="type">{item.textType}</div>
                        </div>
                      </div>
                      <div className="rating">
                        <img className="rateStart" src={item.rateStar} alt="" />
                        <div className="textRate">{item.numbetStart}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
          <Buttons>
            <button
              onClick={() => arrowRef.current.slickPrev()}
              className="back"
            >
              <img src={imgLeft} alt="" />
            </button>
            <button
              onClick={() => arrowRef.current.slickNext()}
              className="next"
            >
              <img src={imgRight} alt="" />
            </button>
          </Buttons>
        </div>
      </div>
    </DivStyled>
  );
};
export { ProfileDashboard };
