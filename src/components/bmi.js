import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Form, Button } from "react-bootstrap";
import convert from "convert-units";

function Bmi() {
  const [data, setData] = useState({
    tinggi: 0,
    unitTinggi: "CM",
    berat: 0,
    unitBerat: "KG",
    hasil: "",
  });

  const changeState = (e) => {
    var updated = { ...data, [e.name]: e.value };
    setData(updated);
  };

  const compute = (e) => {
    // console.log(data);
    e.preventDefault();
    var berat = parseInt(data.berat);
    var tinggi = parseInt(data.tinggi);
    berat = convert(berat).from(data.unitBerat.toLowerCase()).to("kg");
    tinggi = convert(tinggi).from(data.unitTinggi.toLowerCase()).to("m");
    // console.log(berat, tinggi);
    var hasil = berat / (tinggi * tinggi);
    hasil = hasil.toFixed(1);

    if (hasil < 18.5) {
      hasil = `You really need gain more weight !`;
    } else if (hasil <= 24.9 && hasil >= 18.5) {
      hasil = `You are ideal !`;
    } else if (hasil <= 29.9 && hasil >= 25.0) {
      hasil = `Carefull, you might need to loose some weight`;
    } else if (hasil > 30.0) {
      hasil = `Damn, you really need to loose a lot weight !`;
    }

    var updated = { ...data, hasil: hasil };
    setData(updated);
  };

  return (
    <Fragment>
      <Helmet>
        <title>BMI</title>
      </Helmet>
      <Container className="h-100">
        <div className="d-flex custom-wrapper-mini">
          <div className="d-flex align-items-center custom-desc-mini">
            <h1 className="custom-h1-mini">
              <small>welcome,</small>
              <br />
              this is BMI
            </h1>
          </div>
          <div className="d-flex custom-program-mini align-items-center justify-content-center">
            <div className="custom-card-mini">
              <Form onSubmit={compute}>
                <Form.Group controlId="formBeratBadan" className="mb-3">
                  <Form.Label>Berat Badan</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      name="berat"
                      placeholder="Masukkan berat badan"
                      min="1"
                      className="d-inline-block custom-input"
                      required
                      step=".01"
                      onChange={() =>
                        changeState(document.getElementsByName("berat")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitBerat"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("unitBerat")[0])
                      }
                    >
                      <option>KG</option>
                      <option>G</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Form.Group controlId="formTinggiBadan" className="mb-3">
                  <Form.Label>Tinggi Badan</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      placeholder="Masukkan tinggi badan"
                      min="1"
                      name="tinggi"
                      className="d-inline-block custom-input"
                      required
                      step=".01"
                      onChange={() =>
                        changeState(document.getElementsByName("tinggi")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitTinggi"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("unitTinggi")[0])
                      }
                    >
                      <option>CM</option>
                      <option>M</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3">
                  Compute result
                </Button>
              </Form>
              <p className="custom-p-mini mb-0">
                {data.hasil === "" ? "Result will be shown here" : data.hasil}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Bmi;
