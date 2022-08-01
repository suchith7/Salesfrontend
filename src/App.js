import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import Login from "./Components/Login/Login.js";
import Sidebar from './Components/SalesPage/Sidebar'
import Dashboard from './Components/SalesPage/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path={["/", "/login"]} >
        <Login />
      </Route>
      <Route exact path={["/", "/salesuser"]} >
      <Div>
        <Sidebar />
        <Dashboard />
    </Div>

      </Route>
      </Switch>
    </Router>

    
      
    
  );
}
export default App;
const Div = styled.div `
position: relative;
`;