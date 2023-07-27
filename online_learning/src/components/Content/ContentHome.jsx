import {
  PopularCategory,
  SessionKitsAds,
  SessionLogo,
  SessionTeacher,
} from "components/Session";

const ContentHome = () => {
  return (
    <>
      <SessionLogo></SessionLogo>
      <PopularCategory></PopularCategory>
      <SessionTeacher></SessionTeacher>
      <SessionKitsAds></SessionKitsAds>
    </>
  );
};

export default ContentHome;
