import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./order.css";

const toppingOptions = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const initialForm = {
  name: "",
  size: "",
  dough: "",
  toppings: [],
  notes: "",
};

const basePrice = 85.5;
const toppingPrice = 5;

export default function Order() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const toppings = form.toppings || [];

  const selectionsPrice = toppings.length * toppingPrice;
  const totalPrice = (basePrice + selectionsPrice) * quantity;

  useEffect(() => {
    if (form.size && form.dough && form.name.trim() !== "") {
      setIsValid(true);
      setErrors((prev) => ({
        ...prev,
        size: false,
        dough: false,
        name: false,
      }));
    } else {
      setIsValid(false);
      setErrors((prev) => ({
        ...prev,
        size: !form.size,
        dough: !form.dough,
        name: form.name.trim() === "",
      }));
    }
  }, [form.size, form.dough, form.name]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;

    setForm((prev) => {
      const current = prev.toppings || [];
      let updatedToppings = current;

      if (checked) {
        if (current.length >= 10) {
          return prev;
        }
        updatedToppings = [...current, value];
      } else {
        updatedToppings = current.filter((item) => item !== value);
      }

      return {
        ...prev,
        toppings: updatedToppings,
      };
    });
  };

  const increaseQty = () => {
    setQuantity((q) => q + 1);
  };

  const decreaseQty = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid) return;

    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        {
          ...form,
          quantity,
          totalPrice,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("API response:", response.data);

      setForm(initialForm);
      setQuantity(1);
      navigate("/success");
    } catch (err) {
      console.error(
        "API error:",
        err.response?.status,
        err.response?.data || err
      );
    }
  };

  return (
    <div className="order-page">
      <header className="order-header">
        <img
          className="order-logo"
          src="/images/iteration-1-images/logo.svg"
          alt="Logo"
        />
        <p className="header-nav">
          Anasayfa - <span className="bold">Sipariş Oluştur</span>
        </p>
      </header>

      <Container className="order-container">
        <Container className="urun">
          <h2 className="order-title">Position Absolute Acı Pizza</h2>

          <div className="price-rating-row">
            <span className="order-price-value">
              {basePrice.toFixed(2).replace(".", ",")}₺
            </span>

            <p className="order-rating">
              <span className="rating-score">4.9</span>
              <span className="rating-count">(200)</span>
            </p>
          </div>
        </Container>

        <Container className="order-description-container">
          <p className="order-description">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </Container>

        <Row className="order-layout">
          <Col lg="8">
            <Form onSubmit={handleSubmit}>
              <div className="size-dough-row">
                <FormGroup className="mb-3 size-box">
                  <Label className="form-label">
                    Boyut Seç <span className="compulsory">*</span>
                  </Label>
                  <div className="radio-group">
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="size"
                        value="kucuk"
                        checked={form.size === "kucuk"}
                        onChange={handleChange}
                        data-cy="size-small"
                      />
                      <Label check>Küçük</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="size"
                        value="orta"
                        checked={form.size === "orta"}
                        onChange={handleChange}
                        data-cy="size-medium"
                      />
                      <Label check>Orta</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        type="radio"
                        name="size"
                        value="buyuk"
                        checked={form.size === "buyuk"}
                        onChange={handleChange}
                        data-cy="size-large"
                      />
                      <Label check>Büyük</Label>
                    </FormGroup>
                  </div>
                  {errors.size && (
                    <p className="error-text">Lütfen bir boyut seçiniz!</p>
                  )}
                </FormGroup>

                <FormGroup className="mb-3 dough-box">
                  <Label className="form-label">
                    Hamur Seç <span className="compulsory">*</span>
                  </Label>
                  <Input
                    type="select"
                    name="dough"
                    value={form.dough}
                    onChange={handleChange}
                    className="select-input"
                    data-cy="dough-select"
                  >
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalin">Kalın</option>
                  </Input>
                  {errors.dough && (
                    <p className="error-text">
                      Lütfen bir hamur kalınlığı seçiniz!
                    </p>
                  )}
                </FormGroup>
              </div>

              <FormGroup className="mb-3">
                <Label className="form-label">Ek Malzemeler</Label>
                <p className="helper-text">
                  En fazla 10 malzeme seçebilirsiniz. 5₺
                </p>

                <div className="toppings-grid">
                  {toppingOptions.map((topping) => (
                    <FormGroup check key={topping} className="checkbox-item">
                      <Input
                        type="checkbox"
                        name="toppings"
                        value={topping}
                        checked={toppings.includes(topping)}
                        onChange={handleToppingChange}
                        disabled={
                          !toppings.includes(topping) && toppings.length >= 10
                        }
                        data-cy="topping-option"
                      />
                      <Label check>{topping}</Label>
                    </FormGroup>
                  ))}
                </div>
              </FormGroup>

              <FormGroup className="mb-3 isim-wrapper">
                <Label for="name" className="form-label isim-label">
                  İsim <span className="compulsory">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="İsmini yaz"
                  value={form.name}
                  onChange={handleChange}
                  className="isim-input"
                  data-cy="order-name"
                />
                {errors.name && (
                  <p className="error-text">Lütfen ismini yaz!</p>
                )}
              </FormGroup>

              <FormGroup className="mb-3 textarea-wrapper">
                <Label for="notes" className="form-label siparis-notu">
                  Sipariş Notu
                </Label>
                <Input
                  id="notes"
                  type="textarea"
                  name="notes"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  value={form.notes}
                  onChange={handleChange}
                  className="textarea-input"
                  data-cy="order-notes"
                />
              </FormGroup>
            </Form>
          </Col>

          <Col lg="4">
            <div className="summary-wrapper">
              <div className="quantity-row">
                <Button type="button" className="qty-btn" onClick={decreaseQty}>
                  -
                </Button>
                <div className="qty-display">{quantity}</div>
                <Button type="button" className="qty-btn" onClick={increaseQty}>
                  +
                </Button>
              </div>

              <div className="summary-panel">
                <Card className="summary-card">
                  <CardBody>
                    <h3 className="mb-3">Sipariş Toplamı</h3>
                    <div className="summary-row">
                      <span>Seçimler</span>
                      <span>
                        {selectionsPrice.toFixed(2).replace(".", ",")}₺
                      </span>
                    </div>
                    <div className="summary-row total">
                      <span>Toplam</span>
                      <span>{totalPrice.toFixed(2).replace(".", ",")}₺</span>
                    </div>
                  </CardBody>
                </Card>

                <Button
                  className="submit-btn"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isValid}
                  data-cy="order-submit"
                >
                  SİPARİŞ VER
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
