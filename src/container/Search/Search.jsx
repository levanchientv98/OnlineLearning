import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Footer } from "components/footer";
import SearchMain from "components/SearchMain";
const SearchStyle = styled.div``;

const Search = () => {
  return (
    <SearchStyle>
      <Row>
        <Col span={5}>
          <Sidebar></Sidebar>
        </Col>
        <Col span={19}>
          <SearchMain></SearchMain>
        </Col>
      </Row>
      <Footer />
    </SearchStyle>
  );
};

export default Search;
