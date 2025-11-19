import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./success.css";
import Footer from "./Footer";

export default function Success({ orderResult }) {
  if (!orderResult) {
    return (
      <section className="success-section">
        <Container fluid>
          <Row className="justify-content-center text-center">
            <Col xs="12">
              <img
                className="success-logo"
                src="/images/iteration-1-images/logo.svg"
                alt="Teknolojik Yemekler"
              />
              <h1 className="success-title">Henüz bir sipariş bulunamadı.</h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  const { form, quantity, totalPrice, selectionsPrice, apiResponse } =
    orderResult;

  console.log("API response:", apiResponse);

  const sizeMap = { kucuk: "S", orta: "M", buyuk: "L" };
  const doughMap = { ince: "İnce", normal: "Normal", kalin: "Kalın" };

  return (
    <section className="success-section">
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col xs="12">
            <img
              className="success-logo"
              src="/images/iteration-1-images/logo.svg"
            />
            <h3 className="success-subtitle">lezzetin yolda</h3>
            <h1 className="success-title">SİPARİŞ ALINDI</h1>
            <div className="success-divider"></div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col xs="12" sm="10" md="6" lg="4">
            <h4 className="pizza-name">Position Absolute Acı Pizza</h4>

            <div className="pizza-info">
              <p>
                <strong>Boyut:</strong> {sizeMap[form.size]}
              </p>
              <p>
                <strong>Hamur:</strong> {doughMap[form.dough]}
              </p>
              <p>
                <strong>
                  Ek Malzemeler:{" "}
                  <span className="toppings-list">
                    {form.toppings.join(", ")}
                  </span>
                </strong>
              </p>

              <p>
                <strong>Adet:</strong> {quantity}
              </p>
            </div>

            <Card className="price-card">
              <CardBody>
                <h5 className="price-title">Sipariş Toplamı</h5>

                <div className="price-row">
                  <span>Seçimler</span>
                  <span>{selectionsPrice.toFixed(2).replace(".", ",")}₺</span>
                </div>

                <div className="price-row total">
                  <span>Toplam</span>
                  <span>{totalPrice.toFixed(2).replace(".", ",")}₺</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}
