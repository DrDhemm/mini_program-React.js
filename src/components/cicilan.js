import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Form, Button } from "react-bootstrap";

function Cicilan() {
  const [data, setData] = useState({
    nominal: 0,
    unitNominal: "Rp",
    bunga: 0,
    unitBunga: "%",
    periode: 0,
    unitPeriode: "bulan",
    jenis: "Pinjaman bank flat",
    hasil: "",
  });

  const changeState = (e) => {
    var updated = { ...data, [e.name]: e.value };
    setData(updated);
  };

  const compute = (e) => {
    // console.log(data);
    e.preventDefault();

    var firstCount = 0,
      secondCount = 0,
      hasil = 0;

    switch (data.unitPeriode) {
      case "bulan":
        break;
      default:
        break;
    }

    switch (data.jenis) {
      case "Pinjaman bank flat":
        firstCount = Math.round(data.nominal / data.periode);
        secondCount = Math.round(
          ((data.bunga / 100) * data.nominal) / data.periode
        );
        hasil = firstCount + secondCount;
        break;
      default:
        break;
    }

    hasil = `Cicilan anda per ${data.unitPeriode} yaitu sebesar ${
      data.unitNominal
    } ${hasil.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")},-`;

    // console.log(hasil);
    var updated = { ...data, hasil: hasil };
    setData(updated);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Cicilan</title>
      </Helmet>
      <Container className="h-100">
        <div className="d-flex custom-wrapper-mini">
          <div className="d-flex align-items-center custom-desc-mini">
            <h1 className="custom-h1-mini">
              <small>welcome,</small>
              <br />
              this is Cicilan
            </h1>
          </div>
          <div className="d-flex custom-program-mini align-items-center justify-content-center">
            <div className="custom-card-mini">
              <Form onSubmit={compute}>
                <Form.Group controlId="formNominal" className="mb-3">
                  <Form.Label>Nominal</Form.Label>
                  <section>
                    <Form.Control
                      as="select"
                      name="nominalUnit"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(
                          document.getElementsByName("nominalUnit")[0]
                        )
                      }
                      disabled
                    >
                      <option>Rp</option>
                    </Form.Control>
                    <Form.Control
                      type="number"
                      name="nominal"
                      placeholder="Masukkan nominal tanpa titik"
                      title="Masukkan nominal tanpa titik"
                      min="100"
                      className="d-inline-block custom-input"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("nominal")[0])
                      }
                    />
                  </section>
                </Form.Group>
                <Form.Group controlId="formBunga" className="mb-3">
                  <Form.Label>Bunga</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      placeholder="Masukkan persen bunga"
                      min="1"
                      name="bunga"
                      className="d-inline-block custom-input"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("bunga")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitBunga"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("unitBunga")[0])
                      }
                      disabled
                    >
                      <option>%</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Form.Group controlId="formPeriode" className="mb-3">
                  <Form.Label>Periode</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      placeholder="Masukkan periode"
                      min="1"
                      name="periode"
                      className="d-inline-block custom-input input-01"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("periode")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitPeriode"
                      className="d-inline-block custom-unit unit-01"
                      required
                      onChange={() =>
                        changeState(
                          document.getElementsByName("unitPeriode")[0]
                        )
                      }
                      disabled
                    >
                      <option>bulan</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Form.Group controlId="formJenis" className="mb-3">
                  <Form.Label>Jenis</Form.Label>
                  <section>
                    <Form.Control
                      as="select"
                      name="jenis"
                      className="d-inline-block"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("jenis")[0])
                      }
                      disabled
                    >
                      <option>Pinjaman bank flat</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3 custom-button-mini">
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

export default Cicilan;
