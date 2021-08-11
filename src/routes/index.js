import React from "react";
import { Route, Switch } from "react-router-dom";

import Applications from "../pages/Applications";
import Thankyou from "../pages/Thankyou";


const Routes = () => {
  return (
    
    <Switch>
  
      <Route exact path="/" component={Applications} />
      <Route exact path="/thankyou" component={Thankyou} />
      
    </Switch>
    
  );
};

export default Routes;