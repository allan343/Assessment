import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList/StudentList';

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
        this.setState({ students: students.students });
       console.log("studentsobject",students.students)
        console.log("studentlistarray",this.state.students)
    })
    .catch(error => {console.log("error",error);
    });
}

render() {
  return (
<div>
<StudentList students={this.state.students} ></StudentList>
  Hello World
</div>
    
)
  }
}
export default App;