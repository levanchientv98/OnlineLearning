import styled from "styled-components";
import { Header } from "components/Header";
import { Banner } from "components/Banner";
import { ContentHome } from "components/Content";
import { Footer } from "components/footer";

const LayoutStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
  font-family: "Roboto", sans-serif;
  width: 1920px;
  margin: 0 auto;
`;

const PrimaryLayout = ({ children }) => (
  <LayoutStyle>
    {children}
    <Header></Header>
    <Banner></Banner>
    <ContentHome></ContentHome>
    <Footer />
  </LayoutStyle>
);
export default PrimaryLayout;
