import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import { Dashboard, DashboardTutor } from "./container/Dashboard";
import Search from "./container/Search";
import AboutUs from "./container/AboutUs";
import Help from "./container/Help/Help";
import PricingPage from "./container/PricingPage";
import { ProfileDashboard } from "./components/ProfileDashboard/ProfileDashboard";
import Home from "./container/Home";
import CourseDetail from "container/CourseDetails";
import SignUp from "container/SignUp";
import Forgot from "container/Forgot Password";
import Reset from "container/Reset Password/Reset";
import TutorLogin from "container/Tutor Login/TutorLogin";
import TutorForgot from "container/Tutor Forgot";
import { MessagesPage, MessagesTutorPage } from "container/Messages";
import { Session, TutorSession } from "container/Session";
import MyStudent from "container/MyStudent/MyStudent";
import AssignHomework from "container/Assign Homework/AssignHomework";
import Wallet from "container/Wallet/Wallet";
import PayoutRequest from "container/Payout request/PayoutRequest";

import MyTutorPage from "container/MyTutor";
import SettingStudent from "container/SettingPage";
import TutorReset from "container/Tutor Reset/TurotReset";
import PurchaseHistory from "container/History";
import ListCourse from "components/ListCourse";
import VideoCall from "container/VideoCall";
import StartSessions from "container/StartSessions/StartSessions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/student-dashboard" element={<Dashboard />} />{" "}
      <Route path="/tutor-dashboard" element={<DashboardTutor />} />{" "}
      <Route path="/student-messages" element={<MessagesPage />} />{" "}
      <Route path="/tutor-messages" element={<MessagesTutorPage />} />{" "}
      <Route path="/search" element={<Search />} />{" "}
      <Route path="/about-us" element={<AboutUs />} />{" "}
      <Route path="/help" element={<Help />} />{" "}
      <Route path="/pricing" element={<PricingPage />} />{" "}
      <Route path="/test" element={<ProfileDashboard />} />{" "}
      <Route path="/course-detail/:id" element={<CourseDetail />} />{" "}
      <Route path="/sign-up" element={<SignUp />} />{" "}
      <Route path="/my-student" element={<MyStudent />} />{" "}
      <Route path="/assign-homework" element={<AssignHomework />} />{" "}
      <Route path="/wallet" element={<Wallet />} />{" "}
      <Route path="/payout-request" element={<PayoutRequest />} />{" "}
      <Route path="/student-login" element={<Login />} />{" "}
      <Route path="/student-forgot" element={<Forgot />} />{" "}
      <Route path="/student-reset" element={<Reset />} />{" "}
      <Route path="/tutor-login" element={<TutorLogin />} />{" "}
      <Route path="/tutor-reset" element={<TutorReset />} />{" "}
      <Route path="/tutor-forgot" element={<TutorForgot />} />{" "}
      <Route path="/session" element={<Session />} />{" "}
      <Route path="/tutor-session" element={<TutorSession />} />{" "}
      <Route path="/my-tutor" element={<MyTutorPage />} />{" "}
      <Route path="/edit-student" element={<SettingStudent />} />{" "}
      <Route path="/purchase-history" element={<PurchaseHistory />} />{" "}
      <Route path="/list-course" element={<ListCourse />} />{" "}
      <Route path="/video-call" element={<VideoCall />} />{" "}
      <Route path="/start-sessions" element={<StartSessions />} />{" "}
    </Routes>
  );
}

export default App;
