import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

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
import Project from './Project';

const { Paragraph } = Typography;

const DivStyled = styled.div`
  /* position: relative; */
  padding: 10px 20px;
  width: 100%;
  margin-bottom: 300px;
  display: flex;
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









const ProfileDashboardforTutor = () => {
  const [open, setOpen] = useState(false); // open modal
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
        <img
          style={{
            ...style,
            display: "block",
            zIndex: "1",
            right: "90px",
            top: "200px",
            height: "40px",
          }}
          id="Arrow"
          className={className}
          // src={icon2}
          alt=""
          onClick={onClick}
        />
      </>
    );
  }


  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng khi component được mount
    axios.get('http://localhost:8080/api/v1/user/userType?userType=student')
      .then((response) => {
        // Cập nhật state với dữ liệu trả về từ API
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  console.log("users",users)


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow className="sample" />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const Container = styled.div`
    position: relative;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-left: 40px;
  `
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = users.map((item, i) => <Project item={item} key={i} />);
  return (
  //   <DivStyled>
  //     {/* <h2> Multiple items </h2> */}
  //     {/* <Slider {...settings}>
    
  //       </Slider> */}
  

  // {users.map((user) => (
  //           <div key={user.id} className="imgg left">
  //             <div className="imgHCircle" style={{ marginTop: 24 }}>
  //               <img className="img-circle" src={user.avatar} alt="" onClick={() => setOpen(true)} />
  //               <img className="check" src={user.firstname} alt="" />
  //             </div>
  //             <div className="textName">{user.username}</div>
  //             <div className="textSchool">{user.email}</div>
  //           </div>
       
  //         ))}



  //     {/* </Slider> */}
  //     {/* <div className="imgg left">
  //       <div className="imgHCircle" style={{ marginTop: 24 }}>
  //         <img className='img-circle' src={imgHCircle} alt="" onClick={() => setOpen(true)} />
  //         <img className="check" src={imgCheck} alt="" />
  //       </div>
  //       <div className="textName">Jacqueline</div>
  //       <div className="textSchool">Fodham University</div>
  //     </div> */}
  //     {/* <div className="imgg left">
  //         <div className="imgHCircle" style={{ marginTop: 24 }}>
  //           <img className='img-circle' src={imgHCircle} alt="" onClick={() => setOpen(true)} />
  //           <img className="check" src={imgCheck} alt="" />
  //         </div>
  //         <div className="textName">Jacqueline</div>
  //         <div className="textSchool">a</div>
  //       </div> */}
  //     <Modal
  //       // bodyStyle={{
  //       //     backgroundColor: 'red'
  //       // }}
  //       // title="Modal 1000px width"
  //       centered
  //       open={open}
  //       onOk={() => setOpen(false)}
  //       onCancel={() => setOpen(false)}
  //       width={1000}
  //       heigh={994}
  //       footer={null}
  //       className='modalStyle'

  //     >
  //       <Modall></Modall>

  //     </Modal>
  //     {/* <div className="divTop">
  //       <div className="into">
  //         <Modal
  //           // bodyStyle={{
  //           //     backgroundColor: 'red'
  //           // }}
  //           // title="Modal 1000px width"
  //           centered
  //           open={open}
  //           onOk={() => setOpen(false)}
  //           onCancel={() => setOpen(false)}
  //           width={1000}
  //           heigh={994}
  //           footer={null}
  //           className='modalStyle'

  //         >
  //           <Modall></Modall>

  //         </Modal>

  //         <div className="imgg right">
  //           <div className="imgHCircle" style={{ marginTop: 24 }}>
  //             <img className='img-circle' src={imgHCircle} alt="" onClick={() => setOpen(true)} />
  //             <img className="check" src={imgCheck} alt="" />
  //           </div>
  //           <div className="textName">Jacqueline</div>
  //           <div className="textSchool">Fodham University</div>
  //         </div>
  //         <div className="imgHCircle">
  //           <img src={imgHCircle} alt="" onClick={() => setOpen(true)} />
  //         </div>
  //         <img className="imgCheck" src={imgCheck} alt="" />
  //         <div className="textName">Jacqueline</div>
  //         <div className="textSchool">Fodham University</div>
  //         <div className="divButton">
  //           <button className="button">
  //             <div className="textButton">Book Hours</div>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="divEnd">
  //       <div className="bottom">
  //         <div className="textStudent">Student Reviews</div>
  //         <NavLink className="textVisit" to="/">
  //           Visit profile
  //         </NavLink>
  //       </div>
  //       <div className="bottomContent">
  //         <div className="bottomContentLeft">
  //           <div className="textNumber">
  //             <div className="textNumberLeft">4.8</div>
  //             <div className="textNumberRight">/5.0</div>
  //           </div>
  //           <div className="start">
  //             <img src={imgStart} alt="" />
  //             <img src={imgStart} alt="" />
  //             <img src={imgStart} alt="" />
  //             <img src={imgStart} alt="" />
  //             <img src={imgStart} alt="" />
  //           </div>
  //           <div className="reviews">92 Reviews</div>
  //         </div>
  //       </div>
  //       <div className="bottomRate">
  //         <Slider ref={arrowRef} {...settings}>
  //           {dataHumanRate.map((item) => {
  //             return (
  //               <>
  //                 <div className="bottomRateInto">
  //                   <div className="date">
  //                     <div className="textDate">{item.date}</div>
  //                   </div>
  //                   <div className="comment">
  //                     <div className="textComment">{item.commentText}</div>
  //                     <div className="iconComment">{item.coment}</div>
  //                   </div>
  //                   <div className="imgLine">
  //                     <img src={item.imgLine} alt="" />
  //                   </div>
  //                   <div className="humanComment">
  //                     <div className="human">
  //                       <img src={item.avatar} alt="" />
  //                       <div className="name">
  //                         <div className="textName">{item.textName}</div>
  //                         <div className="type">{item.textType}</div>
  //                       </div>
  //                     </div>
  //                     <div className="rating">
  //                       <img className="rateStart" src={item.rateStar} alt="" />
  //                       <div className="textRate">{item.numbetStart}</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </>
  //             );
  //           })}
  //         </Slider>
  //         <Buttons>
  //           <button
  //             onClick={() => arrowRef.current.slickPrev()}
  //             className="back"
  //           >
  //             <img src={imgLeft} alt="" />
  //           </button>
  //           <button
  //             onClick={() => arrowRef.current.slickNext()}
  //             className="next"
  //           >
  //             <img src={imgRight} alt="" />
  //           </button>
  //         </Buttons>
  //       </div>
  //     </div> */}
  //   </DivStyled>
  <Container>
    <Slider ref={arrowRef} {...settings}>
      { sliderProject}
    </Slider>
  </Container>
  );
};
export { ProfileDashboardforTutor };
