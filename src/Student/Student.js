import React from 'react';
//import './SchoolClassItem.css';

export default function SchoolClassItem(props) {
    let student = props
  return (
    <div className='SchoolClassItem__row'>
      {<div className="courseName"> {student.firstName}</div>}
      {<div className="days"> <span id="item-content">{}</span></div>}
      {<div className="startEnd"> <span id="item-content"></span></div>}
    </div>
  )
}

