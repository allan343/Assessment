import React, { Component } from 'react';
import Student from './Student/Student';
//import './SchoolClassList.css';

class StudentList extends Component {
  
  static defaultProps = {
    students: [],
  
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { students } = this.props;
   
    return (
        <div className="studenList">
        <ul className='StudentList__list' aria-live='polite'>
          {students.map(student =>

            <li key={student.id} >
              <Student
                key={student.id}
                {...student}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default StudentList;