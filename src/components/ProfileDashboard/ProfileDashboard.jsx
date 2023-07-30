import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { URLApi } from "api/urlApi";

import { useRef } from "react";
import Project from "./Project";

const ProfileDashboard = () => {
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
    axios
      .get(`${URLApi}api/v1/user/userType?userType=teacher`)
      .then((response) => {
        // Cập nhật state với dữ liệu trả về từ API
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log("users", users);

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
  `;
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
        {sliderProject}
      </Slider>
    </Container>
  );
};
export { ProfileDashboard };
