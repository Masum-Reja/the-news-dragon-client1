import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={8}>
            <Outlet></Outlet>
          </Col>

          <Col lg={4}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
