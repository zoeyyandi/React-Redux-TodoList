import React, { Component } from 'react';
import Titlebar from '../components/Titlebar.js';
import Todolist from '../components/Todolist.js';
import Input from '../components/Input.js';
import Hole from '../components/Hole.js';
// import localforage from 'localforage';

// const uuidv4 = require('uuid/v4');

class App extends Component {
  //   componentWillMount() {
  //     localforage
  //       .getItem('todoList')
  //       .then(value => {
  //         if (value) {
  //           this.setState({
  //             todoList: value,
  //             isActive: false,
  //             isComplete: false,
  //             isAll: true,
  //             arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //           });
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }

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
