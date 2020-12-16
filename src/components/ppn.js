import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

function Ppn() {
  const [data, setData] = useState({
    harga: 0,
    unitHarga: "Rp",
    PPN: 0,
    unitPPN: "%",
    diskon: 0,
    unitDiskon: "%",
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

    firstCount = (data.harga / 100) * data.diskon;
    firstCount = data.harga - firstCount;
    secondCount = (firstCount / 100) * data.PPN;
    secondCount = firstCount + secondCount;
    hasil = secondCount;

    hasil = `Rp ${hasil
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")},-`;

    console.log(hasil);
    var updated = { ...data, hasil: hasil };
    setData(updated);
  };

  return (
    <Fragment>
      <Helmet>
        <title>+PPN</title>
      </Helmet>
      <Container className="h-100">
        <div className="d-flex custom-wrapper-mini">
          <div className="d-flex align-items-center custom-desc-mini">
            <h1 className="custom-h1-mini">
              <small>welcome,</small>
              <br />
              this is +PPN{" "}
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>
                    Aplikasi ini memproses dengan urutan menghitung Diskon
                    terlebih dahulu dan hasil dihitung dan dijumlah dengan PPN.
                    Untuk angka spesifik dengan contoh di modul, hasil tidak
                    sama dengan hasil dimodul, kemungkinan karena berbeda rumus.
                  </Tooltip>
                }
              >
                <InfoCircle className="custom-info-mini" />
              </OverlayTrigger>
            </h1>
          </div>
          <div className="d-flex custom-program-mini align-items-center justify-content-center">
            <div className="custom-card-mini">
              <Form onSubmit={compute}>
                <Form.Group controlId="formHarga" className="mb-3">
                  <Form.Label>Harga</Form.Label>
                  <section>
                    <Form.Control
                      as="select"
                      name="hargaUnit"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("hargaUnit")[0])
                      }
                      disabled
                    >
                      <option>Rp</option>
                    </Form.Control>
                    <Form.Control
                      type="number"
                      name="harga"
                      placeholder="Masukkan harga tanpa titik"
                      title="Masukkan harga tanpa titik"
                      min="100"
                      className="d-inline-block custom-input"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("harga")[0])
                      }
                    />
                  </section>
                </Form.Group>
                <Form.Group controlId="formPPN" className="mb-3">
                  <Form.Label>PPN</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      placeholder="Masukkan persen PPN"
                      min="1"
                      name="PPN"
                      className="d-inline-block custom-input"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("PPN")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitPPN"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("unitPPN")[0])
                      }
                      disabled
                    >
                      <option>%</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Form.Group controlId="formDiskon" className="mb-3">
                  <Form.Label>Diskon</Form.Label>
                  <section>
                    <Form.Control
                      type="number"
                      placeholder="Masukkan persen diskon"
                      min="1"
                      name="diskon"
                      className="d-inline-block custom-input"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("diskon")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="unitDiskon"
                      className="d-inline-block custom-unit"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("unitDiskon")[0])
                      }
                      disabled
                    >
                      <option>%</option>
                    </Form.Control>
                  </section>
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3 custom-button-mini">
                  Compute result
                </Button>
              </Form>
              <p className="custom-p-mini mb-0">
                {data.hasil === "" ? (
                  "Result will be shown here"
                ) : (
                  <Fragment>
                    Harga akhir yaitu sebesar
                    <br />
                    {data.hasil}
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Ppn;
