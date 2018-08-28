import React from 'react';
// import React, { Component } from 'react';
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Adopt from './Adopt.jsx';
import Events from './Events';
import Home from './Home.jsx';

class Main extends React.Component {
  //       //              RENDERING
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} setUserId={this.props.setUserId} userId={this.props.userId} />} />
        <Route path="/events" render={props => <Events {...props} userId={this.props.userId} />} />
        <Route path="/adopt" render={props => <Adopt {...props} userId={this.props.userId} />} />
      </Switch>
    );
  }
}

export default Main;
