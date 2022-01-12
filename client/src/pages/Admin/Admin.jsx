import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

function Admin(props) {
  return (
    <Router>
      <SideBar />
      <div className="contents">
        <Switch>
          <Route exact path="/admin/posts"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Admin;
