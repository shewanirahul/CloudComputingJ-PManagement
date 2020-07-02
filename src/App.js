import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './Component/login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={login} />
         
          

          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
