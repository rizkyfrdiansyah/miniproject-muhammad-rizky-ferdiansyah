import React from "react";

const TotalBayar = () => {
  return (
    <>
      {/* Web */}
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga : <strong className="float-right mr-2">Rp. 50.000</strong>
            </h4>
            <Button variant="primary" block className="mb-2 mt-4 mr-2" size="lg">
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* Mobile  */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga : <strong className="float-right mr-2">Rp. 50.000</strong>
            </h4>
            <Button variant="primary" block className="mb-2 mt-4 mr-2" size="lg">
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TotalBayar;
