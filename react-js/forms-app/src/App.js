import React, { Component } from 'react';
import Profile from './components/profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return <Profile className="profile" user="iurykrieger"/>
  }
}

export default App;