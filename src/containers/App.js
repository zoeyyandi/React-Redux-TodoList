import React, { Component } from 'react';
import Titlebar from '../components/Titlebar.js';
import Todolist from '../components/Todolist.js';
import Input from '../components/Input.js';
import Hole from '../components/Hole.js';

class App extends Component {
  render() {
    const holes = new Array(10).fill('');
    return (
      <div className="appContainer">
        <div className="verticalLine" />
        <div className="holes">
          {holes.map((item, index) => <Hole key={index} />)}
        </div>
        <div className="bottom">
          <div className="rightNotepad">
            <Titlebar />
            <Input />
            <Todolist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
