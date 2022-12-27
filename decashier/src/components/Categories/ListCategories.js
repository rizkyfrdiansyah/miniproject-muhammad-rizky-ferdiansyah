import React from "react";
import { Col, ListGroup } from "react-bootstrap";

const ListCategories = () => {
  return (
    <Col md={2} className="mt-3">
      <h4>
        <strong>Daftar Kategori</strong>
      </h4>
      <hr />
      <ListGroup>
        <h5>Category Nama</h5>
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
