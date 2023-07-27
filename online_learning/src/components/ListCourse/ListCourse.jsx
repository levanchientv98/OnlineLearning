import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { HeaderDashBoard } from "components/Header";
import { Button, Col, Row, Skeleton, Rate } from "antd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SidebarTutor from "components/SidebarSessions";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useFormControl } from "@mui/material/FormControl";
import axios from "axios";
import {
  Pagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardStyle = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const ListCourseStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 40px;

  .title {
    width: 95%;
    border-bottom: 1px solid #edebeb;
    h2 {
      margin: 0;
      padding: 52px 0 48px 0;
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: 0em;
      color: #2e2c2c;
    }
  }
`;

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  "& .namee": {
    // Tùy chỉnh CSS cho TextField với className "namee"
    marginTop: "40px",
    width: "100%",
  },
  "& input": {
    borderRadius: 50,
  },
};

const ModalSytle = styled.div`
  .namee {
    width: 500px;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 200px;
    border-radius: 50px;
  }
`;

const styleInput = {
  // borderRadius: 40,
  // width: "100%",
  // mb: 2
};

const ModalAddNewCourse = () => {
  const idUser = localStorage.getItem("id"); //gia tri cua UserID sau khi login lưu vào localStorage
  const idUserLong = parseInt(idUser); // Chuyển đổi kiểu dữ liệu thành số nguyên
  console.log("Iduser: ", idUser);

  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseType, setCourseType] = useState("");
  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a request to the API to add the user
    axios.post("${URLApi}/api/v1/course", {
      courseName,
      courseType,
      user_id: idUserLong,
      img: "https://2.bp.blogspot.com/-fkChgXE8wS4/WwEnxMnIoRI/AAAAAAAAGPQ/fikctNUnMikCc1B3RGt_bSX4HTBzjVRggCLcBGAs/s1600/Creating-an-Online-Course.jpg",
    });
    toast.success("Successfully Created Account");
    window.location.reload();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ModalSytle>
      <Button onClick={handleOpen}>ADD NEW COURSE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={styleModal}>
          <ToastContainer />

          <h2>ADD NEW COURSE</h2>
          <form>
            <TextField
              sx={styleInput}
              className="namee"
              id="outlined-basic"
              label="Coures Name"
              name="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              fullWidth
              variant="outlined"
            />

            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "10px" }}
            >
              <InputLabel>Loại khóa học</InputLabel>
              <Select
                value={courseType}
                onChange={handleCourseTypeChange}
                label="Loại khóa học"
              >
                <MenuItem value="Programing">Programing</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Language">Language</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Thêm mới
            </Button>
          </form>
        </Box>
      </Modal>
    </ModalSytle>
  );
};

const ListCourse = () => {
  const idUser = localStorage.getItem("id"); //gia tri cua UserID sau khi login lưu vào localStorage
  console.log("id local store: ", idUser);
  const [isModalOpen, setIsModalOpen] = useState(false); //modal update

  const [openModalDetail, setOpenModalDetail] = useState(false);

  const handleOpenModalDetail = () => {
    setOpenModalDetail(true);
  };

  const handleCloseModalDetail = () => {
    setOpenModalDetail(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  //PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // Số lượng dòng trên mỗi trang

  // Tính tổng số trang dựa vào số lượng dòng trên mỗi trang
  const totalPages = Math.ceil(users.length / rowsPerPage);

  // Tính chỉ số bắt đầu và kết thúc của dữ liệu hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Lấy danh sách người dùng hiển thị trên trang hiện tại
  const usersOnCurrentPage = users.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng khi component được mount
    fetchUsers();
  }, []);

  // Hàm lấy dữ liệu từ API (thay đổi URL API tùy theo dự án của bạn)
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${URLApi}/api/v1/course/byUserId/${idUser}`
      );
      const data = await response.json();
      setUsers(data); // Lưu dữ liệu người dùng vào state
      setLoading(false); // Kết thúc trạng thái loading khi dữ liệu đã được lấy về
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false); // Kết thúc trạng thái loading nếu có lỗi xảy ra
    }
  };
  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`${URLApi}/api/v1/course/${id}`);
      // Sau khi xóa thành công, cập nhật lại danh sách khóa học
      fetchUsers();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  //UPDATE COURSE
  const [openModal, setOpenModal] = useState(false);
  const [courseToUpdate, setCourseToUpdate] = useState({
    courseName: "",
    courseType: "",
  });
  const handleCourseTypeChange = (event) => {
    setCourseToUpdate({ ...courseToUpdate, courseType: event.target.value });
  };
  const handleOpenModal = (course) => {
    setOpenModal(true);
    setCourseToUpdate(course);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleUpdateCourse = async () => {
    try {
      await axios.put(`${URLApi}/api/v1/course/update`, courseToUpdate);
      // Sau khi cập nhật thành công, đóng modal và cập nhật lại danh sách khóa học
      handleCloseModal();
      fetchUsers();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  //CREATE DETAIL COURSE
  const CourseDetailFormModal = ({ open, handleClose }) => {
    const [newCourseDetail, setNewCourseDetail] = useState({
      course_course_id: courseToUpdate.id,
      courseDetailName: courseToUpdate.courseName,
      description: "",
      about: "1234",
    });
    console.log("about", newCourseDetail);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewCourseDetail((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    console.log("courseToUpdate", courseToUpdate.id);

    const handleAddCourseDetail = async () => {
      try {
        await axios.post("${URLApi}/api/v1/courseDetail", newCourseDetail);
        // Thêm mới thành công, đóng modal và reset form
        handleClose();
        toast.success("Successfully Created Detail Course");

        console.log("Thêm mới chi tiết khóa học thành công!");
      } catch (error) {
        console.error("Lỗi khi thêm mới chi tiết khóa học:", error);
      }
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Thêm mới chi tiết khóa học</h2>
          <TextField
            label="ID khóa học"
            variant="outlined"
            fullWidth
            name="course_course_id"
            value={newCourseDetail.course_course_id}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Tên chi tiết khóa học"
            variant="outlined"
            fullWidth
            name="courseDetailName"
            value={newCourseDetail.courseDetailName}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Mô tả chi tiết khóa học"
            variant="outlined"
            fullWidth
            name="description"
            value={newCourseDetail.description}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Mô tả chi tiết khóa học"
            variant="outlined"
            fullWidth
            name="about"
            value={newCourseDetail.about}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCourseDetail}
          >
            Thêm mới chi tiết khóa học
          </Button>
        </Box>
      </Modal>
    );
  };

  return (
    <DashboardStyle>
      <Row gutter={16}>
        <Col span={5}>
          <SidebarTutor></SidebarTutor>
        </Col>
        <Col span={18}>
          <ListCourseStyle>
            <HeaderDashBoard></HeaderDashBoard>
            <div className="title">
              {" "}
              <h2>LIST COURSE</h2>
              <ModalAddNewCourse
                isOpen={isModalOpen}
                onClose={handleModalClose}
              />
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Course Name</TableCell>
                    <TableCell align="left">Course Type</TableCell>
                    <TableCell align="left">Teacher</TableCell>
                    <TableCell align="left">Rating</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                {loading ? (
                  <Skeleton />
                ) : (
                  <TableBody>
                    {usersOnCurrentPage?.map((user, index) => (
                      <TableRow
                        key={user?.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {startIndex + index + 1}
                        </TableCell>
                        <TableCell align="left">{user?.courseName}</TableCell>
                        <TableCell align="left">{user?.courseType}</TableCell>
                        <TableCell align="left">
                          {user?.user_username}
                        </TableCell>
                        <TableCell align="left">
                          <Rate allowHalf defaultValue={user?.rate} />
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => handleDeleteCourse(user?.id)}>
                            Xóa
                          </Button>
                          <Button onClick={() => handleOpenModal(user)}>
                            Chỉnh sửa
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpenModalDetail}
                          >
                            Thêm mới chi tiết khóa họcc
                          </Button>
                          {/* Modal thêm mới chi tiết khóa học */}
                          <CourseDetailFormModal
                            open={openModalDetail}
                            handleClose={handleCloseModalDetail}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              size="large"
            />
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                component="form"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <h2>Chỉnh sửa khóa học</h2>
                <form>
                  <TextField
                    label="ID khóa học"
                    variant="outlined"
                    fullWidth
                    value={courseToUpdate.id}
                    disabled // Không cho người dùng chỉnh sửa ID
                    sx={{ marginBottom: "10px" }}
                  />
                  <TextField
                    label="ID user"
                    variant="outlined"
                    fullWidth
                    value={courseToUpdate.user_id}
                    disabled
                    sx={{ marginBottom: "10px" }}
                  />
                  <TextField
                    label="Tên khóa học"
                    variant="outlined"
                    fullWidth
                    value={courseToUpdate.courseName}
                    onChange={(e) =>
                      setCourseToUpdate({
                        ...courseToUpdate,
                        courseName: e.target.value,
                      })
                    }
                    sx={{ marginBottom: "10px" }}
                  />

                  <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: "10px" }}
                  >
                    <InputLabel>Loại khóa học</InputLabel>
                    <Select
                      value={courseToUpdate.courseType}
                      onChange={handleCourseTypeChange}
                      label="Loại khóa học"
                    >
                      <MenuItem value="Programing">Programing</MenuItem>
                      <MenuItem value="Design">Design</MenuItem>
                      <MenuItem value="Business">Business</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Language">Language</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdateCourse}
                  >
                    Cập nhật
                  </Button>
                </form>
              </Box>
            </Modal>
          </ListCourseStyle>
        </Col>
      </Row>
    </DashboardStyle>
  );
};

export default ListCourse;
