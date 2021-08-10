import React, { Component } from 'react';
import './App.css';
import StudentList from './StudentList/StudentList';

class App extends Component {
  state = {
    //array that holds all shows
    students: []
  }

  componentDidMount() {

    fetch(`https://api.hatchways.io/assessment/students`)
      .then((studentRes) => {
        if (!studentRes.ok)
          return studentRes.json().then(e => Promise.reject(e));
        return (studentRes.json());
      })
      .then((students) => {
        this.setState({ students: students.students });

      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {

    return (

      <div>
        <StudentList students={this.state.students} ></StudentList>
      </div>

    )
  }
}
export default App;