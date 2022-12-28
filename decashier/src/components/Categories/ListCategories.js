import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { Product, Products } from "../../graphql/Queries";

const ListCategories = () => {
  const { data, loading, error } = useQuery(Products);
  console.log(data);

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
