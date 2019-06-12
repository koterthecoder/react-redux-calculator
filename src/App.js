import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CalculatorFrame from './components/CalculatorFrame';

class App extends Component {
  render() {
   return (
    <div className="App">
     <header className="App-header">
        <h1 className="App-title">ReduxCalc</h1>
     </header>
      <CalculatorFrame />
    </div>
   );
  }
 }

 export default connect()(App);