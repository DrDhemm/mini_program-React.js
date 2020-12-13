import React, { Fragment } from "react";
import { House, Arrow90degUp } from "react-bootstrap-icons";
import { Helmet } from "react-helmet";

function Focusing(nav) {
  nav.current.focus();
  setTimeout(() => {
    nav.current.blur();
  }, 300);
}

function Home(props) {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <h1 className="custom-h1-home">
        <small>welcome,</small>
        <br />
        this is home <House />
      </h1>
      <p className="custom-p-home" onClick={() => Focusing(props.nav)}>
        <Arrow90degUp />
        choose an app
      </p>
    </Fragment>
  );
}

export default Home;
