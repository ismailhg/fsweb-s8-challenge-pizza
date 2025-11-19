import { Container, Row, Col, Button } from "reactstrap";
import "./main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Row className="liste mt-4 justify-content-center">
          {[
            "YENİ! Kore",
            "Pizza",
            "Burger",
            "Kızartmalar",
            "Fast Food",
            "Gazlı İçecek",
          ].map((item, i) => (
            <Col key={i} xs="6" sm="4" md="2" className="liste-item">
              <img
                src={`images/iteration-2-images/icons/${i + 1}.svg`}
                alt={item}
              />
              <span>{item}</span>
            </Col>
          ))}
        </Row>
      </div>
      <main className="main-section">
        <Container>
          <Row className="siparis mt-5">
            <Col xs="12" md="6" className="siparis-left">
              <div className="siparis-left-content">
                <h4>
                  Özel <br />
                  Lezzetus
                </h4>
                <p>Position:Absolute Acı Burger</p>
                <Button onClick={() => navigate("/order")}>SİPARİŞ VER</Button>
              </div>
            </Col>

            <Col xs="12" md="6" className="siparis-right">
              <Row>
                <Col xs="12" className="siparis-right-top">
                  <div className="siparis-right-top-content">
                    <h4>
                      Hackathlon <br />
                      Burger Menü
                    </h4>
                    <Button onClick={() => navigate("/order")}>
                      SİPARİŞ VER
                    </Button>
                  </div>
                </Col>

                <Col xs="12" className="siparis-right-bottom mt-3">
                  <div className="siparis-right-bottom-content">
                    <h4>
                      <span className="h4-kirmizi">Çoooook</span> hızlı <br />
                      npm gibi kurye
                    </h4>
                    <Button onClick={() => navigate("/order")}>
                      SİPARİŞ VER
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="menu-title text-center mt-5">
            <Col xs="12">
              <p>en çok paketlenen menüler</p>
              <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
            </Col>
          </Row>
          <Row className="menu-buttons mt-4 justify-content-center">
            {[
              "Ramen",
              "Pizza",
              "Burger",
              "French fries",
              "Fast food",
              "Soft drinks",
            ].map((item, i) => (
              <Col key={i} xs="6" sm="4" md="2" className="mb-3 text-center">
                <Button className={item === "Pizza" ? "black-btn" : ""}>
                  <img
                    src={`images/iteration-2-images/icons/${i + 1}.svg`}
                    alt={item}
                  />
                  <span>{item}</span>
                </Button>
              </Col>
            ))}
          </Row>

          <Row className="menu mt-5">
            {[
              { name: "Terminal Pizza", img: "food-1" },
              { name: "Position Absolute Acı Pizza", img: "food-2" },
              { name: "useEffect Tavuklu Burger", img: "food-3" },
            ].map((item, i) => (
              <Col key={i} xs="12" sm="6" md="4" className="mb-4">
                <div className="menu-card">
                  <img
                    src={`images/iteration-2-images/pictures/${item.img}.png`}
                    alt={item.name}
                  />
                  <div className="menu-content">
                    <p>{item.name}</p>

                    <div className="ucret">
                      <span>4.9</span>
                      <ul>
                        <li>(200)</li>
                        <li>60₺</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}
