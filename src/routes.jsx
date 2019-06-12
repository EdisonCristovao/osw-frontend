import React from 'react';
import { Switch, Route } from "react-router-dom";

import Feed from "./app/Feed";
import New from "./app/New";

const Routes = () => (
  <Switch>
    <Route path="/new" component={New} />
    <Route path="/" exact component={Feed} />
  </Switch>
);

export default Routes;