import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navbar, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tabs/style/react-tabs.css";
import MBB_Machine from './components/MBB/MBB_Machine';
import { BrowserRouter as Router, Switch, Route ,Link} from 'react-router-dom';
import cycletime from './components/cycletime';
import temptime from './components/temptime';
import vactime from './components/vactime';

function App() {
  return (
    <div className="App"><Router>
      <Navbar className="App-navbar">
        <img src={logo} width="50" height="50" />
        <h1>Monitoring for Seal Machine </h1>
        <div className="px-4 "> 
        </div>
      </Navbar>
      <Row>
    <Col sm={1} className="Sidebar" >
      <div className="SidebarList">
          <Link className="row" to="/MBB_Machine">MBB Machine
          </Link>
          <Link className="cycletime" to="/cycletime">Cycle Time
          </Link>
          <Link className="cycletime" to="/vactime">Vacuum Time
          </Link>
          <Link className="cycletime" to="/temptime"><font size="3">Temperature Time</font>
          </Link>
          
          </div>
    </Col>
    <Col sm={10}>
      <Switch>
      <Route path='/cycletime' component={cycletime} />
      <Route path='/MBB_Machine' exact component={MBB_Machine} />
      <Route path='/temptime' component={temptime} />
      <Route path='/vactime' component={vactime} />
      </Switch>
    </Col>
  </Row></Router>
    </div>
  );
}

export default App;
