import { Container, Row, Col } from "reactstrap";
import "./success.css";

export default function Success() {
  return (
    <section className="success-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="12">
            <img
              className="success-logo"
              src="/images/iteration-1-images/logo.svg"
              alt="Teknolojik Yemekler"
            />

            <h1 className="success-title">
              TEBRİKLER!
              <br />
              SİPARİŞİNİZ ALINDI!
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
