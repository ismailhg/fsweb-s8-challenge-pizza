import { Container, Row, Col } from "reactstrap";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-wrap">
          <Col xs="12" md="4" className="communication">
            <img
              className="footer-logo"
              src="images/iteration-2-images/footer/logo-footer.svg"
              alt=""
            />

            <ul>
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                <p>
                  341 Londonderry Road,
                  <br /> Istanbul Türkiye
                </p>
              </li>

              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-2.png"
                  alt=""
                />
                <p>aciktim@teknolojikyemekler.com</p>
              </li>

              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-3.png"
                  alt=""
                />
                <p>+90 216 123 45 67</p>
              </li>
            </ul>
          </Col>

          <Col xs="12" md="4" className="hot-menu">
            <h4 className="hot-menu-title">Hot Menu</h4>

            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </Col>

          <Col xs="12" md="4" className="instagram">
            <h4 className="instagram-title">Instagram</h4>

            <div className="insta-grid">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div className="insta-item" key={i}>
                  <img
                    src={`images/iteration-2-images/footer/insta/li-${i}.png`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom-row">
          <Col xs="12" className="footer-bottom">
            <p>©2023 Teknolojik Yemekler.</p>
            <img
              src="images/iteration-2-images/footer/icons/twitter.png"
              alt="Twitter"
              className="twitter-icon"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
