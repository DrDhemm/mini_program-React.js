import React, { useRef } from "react";
import styled from "styled-components";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { House } from "react-bootstrap-icons";

import Preview from "./components/preview";

const CustomContainer = styled(Container)`
  padding: 1em 0;
  height: auto;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  height: 60px;
  background-color: #cccccc;
`;

const CustomHouse = styled(House)`
  vertical-align: unset;
  padding-top: 0.2rem;
  font-size: 1rem;
`;

const Footer = styled.div`
  height: 30px;
  background-color: #cccccc;

  p {
    margin: 0;
  }
`;

const Interface = styled.div`
  min-height: 560px;
  min-width: 650px;
`

function App() {
  const theNav = useRef(null);
  return (
    <Interface className="d-flex flex-column vh-100">
      <ButtonWrapper className="d-flex justify-content-center align-items-center">
        <ButtonGroup
          aria-label="Select your Apps"
          className="custom-nav-main"
          tabIndex="0"
          ref={theNav}
        >
          <Button
            className="shadow-none custom-button"
            as={NavLink}
            exact
            to="/"
            variant="secondary"
            size="sm"
          >
            <CustomHouse />
          </Button>
          <Button
            className="shadow-none custom-button"
            as={NavLink}
            to="/bmi"
            variant="secondary"
            size="sm"
          >
            BMI
          </Button>
          <Button
            className="shadow-none custom-button"
            as={NavLink}
            to="/cicilankuu"
            variant="secondary"
            size="sm"
          >
            Cicilanku
          </Button>
          <Button
            className="shadow-none custom-button"
            as={NavLink}
            to="/ppn"
            variant="secondary"
            size="sm"
          >
            +PPN
          </Button>
          <Button
            className="shadow-none custom-button"
            as={NavLink}
            to="/konversi"
            variant="secondary"
            size="sm"
          >
            Konversi
          </Button>
        </ButtonGroup>
      </ButtonWrapper>
      <CustomContainer className="d-flex flex-column justify-content-center align-items-center">
        <Preview nav={theNav} />
      </CustomContainer>
      <Footer className="d-flex justify-content-center align-items-center custom-footer-home">
        <p>Yusril Dhiyaul Haq Muttaqien | XIIRPL1 | 41</p>
      </Footer>
    </Interface>
  );
}

export default App;
