import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Form, Button } from "react-bootstrap";
import Convert from "any-to-any";

function Konversi() {
  const [data, setData] = useState({
    awal: "",
    awalUnit: "decimal₁₀",
    akhirUnit: "biner₂",
    hasil: "",
  });

  const types = ["decimal₁₀", "octal₈", "biner₂", "hexadecimal₁₆"];

  const typesDetail = {
    "decimal₁₀": {
      base: 10,
      valid: "[0-9]",
      symbol: "₁₀",
      minlength: "1",
      type: "number",
      title: "Input valid antara 0-9"
    },
    "octal₈": {
      base: 8,
      valid: "[0-7]",
      symbol: "₈",
      minlength: "1",
      type: "number",
      title: "Input valid antara 0-7"
    },
    "biner₂": {
      base: 2,
      valid: "[0-1]",
      symbol: "₂",
      minlength: "8",
      type: "number",
      title: "Input valid antara 0-1 dan panjang min 8"
    },
    "hexadecimal₁₆": {
      base: 16,
      valid: "[0-9A-Fa-f]+",
      symbol: "₁₆",
      minlength: "1",
      type: "text",
      title: "Input valid antara 0-9 dan A-F atau a-f"
    },
  };

  const changeState = (e) => {
    var updated = { ...data, [e.name]: e.value };

    if (e.name === "awalUnit" && e.value === data.akhirUnit) {
      updated = {
        ...data,
        [e.name]: e.value,
        akhirUnit: types[(types.findIndex((p) => p === e.value) + 1) % 4],
      };
    }

    setData(updated);
  };

  const compute = (e) => {
    e.preventDefault();

    var InputNumber = data.awal,
      InputBase = typesDetail[data.awalUnit].base,
      OutputBase = typesDetail[data.akhirUnit].base,
      hasil = "";

    hasil = Convert(InputNumber, InputBase, OutputBase)
    hasil = `${InputNumber}${typesDetail[data.awalUnit].symbol} = ${hasil}${typesDetail[data.akhirUnit].symbol}`

    var updated = { ...data, hasil: hasil };
    setData(updated);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Konversi</title>
      </Helmet>
      <Container className="h-100">
        <div className="d-flex custom-wrapper-mini">
          <div className="d-flex align-items-center custom-desc-mini">
            <h1 className="custom-h1-mini">
              <small>welcome,</small>
              <br />
              this is Konversi
            </h1>
          </div>
          <div className="d-flex custom-program-mini align-items-center justify-content-center">
            <div className="custom-card-mini">
              <Form onSubmit={compute}>
                <Form.Group controlId="formAwal" className="mb-3">
                  <Form.Label>Konversi dari ...</Form.Label>
                  <section>
                    <Form.Control
                      type={typesDetail[data.awalUnit].type}
                      minLength={typesDetail[data.awalUnit].minLength}
                      pattern={typesDetail[data.awalUnit].valid}
                      name="awal"
                      placeholder="Masukkan value awal sesuai unit"
                      title={typesDetail[data.awalUnit].title}
                      className="d-inline-block"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("awal")[0])
                      }
                    />
                    <Form.Control
                      as="select"
                      name="awalUnit"
                      className="d-inline-block"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("awalUnit")[0])
                      }
                    >
                      {types.map((type, index) => {
                        return <option key={index}>{type}</option>;
                      })}
                    </Form.Control>
                  </section>
                </Form.Group>
                <Form.Group controlId="formAkhir" className="mb-3">
                  <Form.Label>Konversi ke ...</Form.Label>
                  <section>
                    <Form.Control
                      as="select"
                      name="akhirUnit"
                      className="d-inline-block"
                      required
                      onChange={() =>
                        changeState(document.getElementsByName("akhirUnit")[0])
                      }
                      value={data.akhirUnit}
                    >
                      {types.map((type, index) => {
                        if (type === data.awalUnit) {
                          return (
                            <option key={index} disabled>
                              {type}
                            </option>
                          );
                        }
                        return <option key={index}>{type}</option>;
                      })}
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

export default Konversi;
