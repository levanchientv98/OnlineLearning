import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Modal, Typography, Collapse } from 'antd';
import Imglogo from "../../icon/img.svg";
import { ReactComponent as Verify } from '../../icon/iconverify.svg';
import { ReactComponent as Free } from '../../icon/iconfree.svg';
import { ReactComponent as Like } from '../../icon/iconlike.svg';
import { ReactComponent as People } from '../../icon/iconpeople.svg';
import { ReactComponent as Teacher } from '../../icon/iconteacher.svg';
import { ReactComponent as Verify1 } from '../../icon/iconverify01.svg';
import Rating from '@mui/material/Rating';
import axios from 'axios';


const { Paragraph } = Typography;

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
                left: 232%;

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




const Project = ({ item }) => {

    const [open, setOpen] = useState(false); // open modal
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleOpenModal = async () => {
        setOpen(true);
        try {
            setLoading(true);
            setError(null);

            // Gọi API để lấy thông tin chi tiết người dùng dựa vào id
            const response = await axios.get(`http://localhost:8080/api/v1/user/${item?.id}`);
            setUserDetails(response.data); // Lưu thông tin người dùng vào state
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError('Failed to fetch user details.');
        }

    };  
    const handleCloseModal = () => {
        setOpen(false);
        setUserDetails(null); // Reset thông tin người dùng khi đóng modal
    };

    const Modall = () => {
        return (
            <ModalStyle>
                <div className="header">
                    <div className="header-main">
                        <img src={Imglogo} alt='' />
                        <div className="namee">
                            <div className='abc'>
                                <p id="name">{userDetails?.fullname}</p>

                                <Verify style={{ marginTop: 11 }}></Verify>
                            </div>
                            <p id="place">{userDetails?.email}</p>
                        </div>
                        <button className='btn-book'>Book Hour</button>
                    </div>
                </div>
                <div className="about">
                    <div className="about-1">
                        <p className='text1'>ABOUT</p>

                        <div className="text">
                            <p className='text-1'>{userDetails?.description}</p>
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

    const Container = styled.div`
    .slider{
    position: relative;
    width: 281px;
    height: 400px;
    border: none;
    border-radius: 23px;
    background-color: #D0C1F1;
    img{
        position: absolute;
        left: 48px;
        top: 37px;
        border-radius: 50%;
        width: 70%;
    }
    .contents{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 250px;
    }
  }
 
    `
    const Disc = styled.div`
         transform: translate(-150px, 45px);
    position: absolute;

    display: flex;
    `

        ;
    const Img = styled.img`  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-in-out;`


    return (
        <Container>
            <div className='slider'>
                {/* <img src={item?.avatar} alt="" /> */}
                <img className="img-circle" src={item?.avatar} alt="" onClick={handleOpenModal} />
                <div className="contents">
                    <div className="textName">
                        <h1>{item?.fullname}</h1>
                    </div>
                    <div className="textSchool">
                        <p>{item?.email}</p>
                    </div>
                </div>

            </div>
            <Modal
                // bodyStyle={{
                //     backgroundColor: 'red'
                // }}
                // title="Modal 1000px width"
                centered
                open={open}
                // onOk={() => setOpen(false)}
                // onCancel={() => setOpen(false)}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                width={1000}
                heigh={994}
                footer={null}
                className='modalStyle'

            >
                
                <Modall></Modall>
            </Modal>
        </Container>
    )
}

export default Project