import React from 'react';
import './Student.css';

export default function SchoolClassItem(props) {
  let student = props
  let grades = student.grades;

  let gradesCumulative = 0;
  let gradeCount = 0;
  grades.map(grade => {
    gradesCumulative += parseInt(grade);
    gradeCount++;

  })
  let average = gradesCumulative / gradeCount;

  return (
    <div className='StudentItem__row'>
      {<div className="studentPic"> <img className="Pic" src={student.pic} alt="Logo" /></div>}
      <div className="studentInfo">
      {<div className="studentName"> {student.firstName + " " + student.lastName}</div>}
      {<div className="email"> <span id="item-content">{"Email: " + student.email}</span></div>}
      {<div className="company"> <span id="item-content">{"Company: " + student.company}</span></div>}
      {<div className="skill"> <span id="item-content">{"Skill: " + student.skill}</span></div>}
      {<div className="skill"> <span id="item-content">{"Average: " + average}</span></div>}
      </div>
    </div>
  )
}
