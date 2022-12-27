import React from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";

const Hasil = () => {
  return (
    <Col>
      <h4>
        <strong>Hasil</strong>
      </h4>
      <hr />
      <Card className="overflow-auto hasil">
        <ListGroup variant="flush">
          <Row>
            <Col xs={2}>
              <h4>
                <Badge pill variant="success"></Badge>
              </h4>
            </Col>
            <Col>
              <h5>Product Nama</h5>
              <p>Rp. 50.000</p>
            </Col>
            <Col>
              <strong className="float-right">Rp. 50.000</strong>
            </Col>
          </Row>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Hasil;
