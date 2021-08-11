import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Applications from './pages/Applications'
import './App.css';

function App() {
  return (
    <Switch>
      <Route extact path = "/thankyou" component ={Homepage}/>
      <Route extact path = "/" component ={Applications}/>

    </Switch>
  );
}

export default App;
