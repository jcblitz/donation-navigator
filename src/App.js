import React, { Component } from 'react';
import './App.css';
import SupportList from './Components/SupportList';

class App extends Component {
  render() {
    return (
      <div className="support-list">
        <SupportList />
      </div>
    );
  }
}

export default App;
