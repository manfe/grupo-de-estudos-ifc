import React, { Component } from 'react';
//import PropType from 'prop-types';
import Profile from './components/profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return <Profile user="manfe"/>
  }
}

// App.propTypes = {
//   firstName: PropType.string.isRequired,
//   lastName: PropType.string.isRequired,
//   treatment: PropType.oneOf(['Mr', 'Ms']).isRequired,
//   email: PropType.string.isRequired,
//   phone: PropType.string,
//   password: PropType.string.isRequired,
//   passwordConfirmation: PropType.string.isRequired
// }

export default App;