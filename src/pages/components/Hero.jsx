import { Container, Row, Col, Button } from "reactstrap";
import "./hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <img
              className="hero-logo"
              src="images\iteration-1-images\logo.svg"
              alt=""
            />

            <h1 className="hero-title">
              KOD ACIKTIRIR
              <br />
              PIZZA, DOYURUR
            </h1>

            <Button className="hero-btn" onClick={() => navigate("/order")}>
              ACIKTIM
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
