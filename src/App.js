import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    //array that holds all shows
    students: [],
  }

  componentDidMount() {
   
    fetch(`https://api.hatchways.io/assessment/students`)
    .then((studentRes) => {
        if (!studentRes.ok)
            return studentRes.json().then(e => Promise.reject(e));
        return (studentRes.json());
    })
    .then((students) => {
        this.setState({ students: students });
        console.log(students)
    })
    .catch(error => {
    });
}

render() {
  return (
<div>
  Hello World
</div>
    
)
  }
}
export default App;
