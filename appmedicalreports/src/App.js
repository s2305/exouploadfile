import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomDropZone from './components/CustomDropZone'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Page to upload a file</h1>
          <CustomDropZone></CustomDropZone>
        </header>
      </div>
    );
  }
}


