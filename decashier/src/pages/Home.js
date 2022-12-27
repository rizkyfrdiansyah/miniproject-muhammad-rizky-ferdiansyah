import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="mt-3">
      <Container fluid>
        <Row>
          <Col className="mt-3">
            <h4>
              <strong>Daftar Produk</strong>
            </h4>
            <hr />
            <Row className="overflow-auto menu">MENU</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
