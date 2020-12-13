import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Bmi from "./bmi";
import Cicilan from "./cicilan";
import Ppn from "./ppn";
import Konversi from "./konversi";

const Preview = (propss) => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => <Home {...props} nav={propss.nav} />}
    />
    <Route path="/bmi" component={Bmi} />
    <Route path="/cicilankuu" component={Cicilan} />
    <Route path="/ppn" component={Ppn} />
    <Route path="/konversi" component={Konversi} />
  </Switch>
);

export default Preview;
