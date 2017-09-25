import React, { Component } from 'react';
import './App.css';
import Skills from './Skills';
import Powers from './Powers.js';
import Description from './Description.js';
import Stat from './Stat.js';
import Name from './Name.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name Name="Meridian" Points="200" /><br />
      	<table>
      		<tr><td><Stat Name="PSY" /></td><td><Stat Name="WAR" /></td></tr>
      		<tr><td><Stat Name="STR" /></td><td><Stat Name="END" /></td></tr>
      	</table>
      	<Description />
      	<Powers />
        <Skills />
      </div>
    );
  }
}

export default App;
