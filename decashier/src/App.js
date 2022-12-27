import "./App.css";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components/index";
import { Col, Container, Row } from "react-bootstrap";
import { API_URL } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                <Menus />
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
