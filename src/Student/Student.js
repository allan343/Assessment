import React, { Component } from 'react';
import AddTagForm from '../AddTagForm/AddTagForm';
import './Student.css';

class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      showGrades: false
    };
  }

  ToggleGrades() {
    this.setState({ showGrades: !this.state.showGrades });
  }

  handleAddTag = (tagName) => {
    const newTags = [
      ...this.state.tags,
      { name: tagName}
    ]
    this.setState({
      shoppingItems: newTags
    })
  }
  render() {
    let student = this.props
    let grades = student.grades;
    let gradesCumulative = 0;
    let gradeCount = 0;
    grades.map(grade => {
      gradesCumulative += parseInt(grade);
      gradeCount++;

    })
    let average = gradesCumulative / gradeCount;
    let GradesText =
      <div>
        {<div className="testScore"><span id="test-details-label"> Test1:</span> <span id="item-content"> {grades[0]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test2: </span> <span id="item-content">{grades[1]}</span></div>}
        {<div className="testScore"> <span id="test-details-label">Test3:</span> <span id="item-content">{grades[2]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test4: </span> <span id="item-content">{grades[3]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test5:  </span> <span id="item-content">{grades[4]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test6:  </span> <span id="item-content">{grades[5]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test7:  </span> <span id="item-content">{grades[6]}</span></div>}
        {<div className="testScore"><span id="test-details-label"> Test8:  </span> <span id="item-content">{grades[7]}</span></div>}
      </div>

    return (
      <div className='StudentItem__row'>
        {<div className="studentPic"> <img className="Pic" src={student.pic} alt="Logo" /></div>}
        <div className="studentNameAndInfo">
          {<div className="studentName"> <h1>{student.firstName + " " + student.lastName}</h1></div>}
          <div className="studentInfo">
            <div className="Info">
              {<div className="email"> <span id="item-content">{"Email: " + student.email}</span></div>}
              {<div className="company"> <span id="item-content">{"Company: " + student.company}</span></div>}
              {<div className="skill"> <span id="item-content">{"Skill: " + student.skill}</span></div>}
              {<div className="average"> <span id="item-content">{"Average: " + average}</span></div>}
              {<button className="gradesToggle" onClick={() => this.ToggleGrades()}>Click me</button>}
              {this.state.showGrades ? GradesText : null}
              <div
                className={this.state.showGrades ? GradesText : null}
              ></div>
              <div className="addTagSection">
              <AddTagForm/>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    )
  }
}

export default Student;