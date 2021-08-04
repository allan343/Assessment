import React, { useState } from "react";
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
  let [showText, setShowText] = useState(false);
const onClick = () => setShowText(!showText);
/*
const enterTag=() =>{
  
}*/
  let GradesText= ()=>
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
          {showText} <button className="gradesToggle" onClick={onClick}>Click me</button>
          {showText ? <GradesText /> : null}
          </div>
          <div>
         {/* <input type="text" className="tagFilter" placeholder="Entertag"
          name="tags" id="tags"  />
         { <button className="tagButton" onClick={}>Enter tag</button>*/}
            </div>
        </div>
      </div>
    </div>
  )
}
