import React, { Component } from 'react';
import Student from '../Student/Student';
import './StudentList.css';

class StudentList extends Component {

  constructor(props) {
    super(props);
    this.state = {

      name: {
        value: "",
        touched: false
      },
      tag: {
        value: "",
        touched: false
      }
    };
  }
  static defaultProps = {
    students: [],

  };
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updateTag(tag) {
    this.setState({ tag: { value: tag, touched: true } });
  }

  render() {

    const { students } = this.props;
    let filteredStudents = [];
    if (this.state.name.value == "") {
      filteredStudents = students;
    }
    else {
      filteredStudents = students.filter(student => student.firstName.toLowerCase().includes(this.state.name.value.toLowerCase()) ||
        student.lastName.toLowerCase().includes(this.state.name.value.toLowerCase()
        /*||  filteredStudents = students.filter(student => student.tags.toLowerCase().includes(this.state.tag.value.toLowerCase()*/)
      )
    }
   


    return (
      <div className="studentList">
        <input type="text" className="nameFilter" placeholder="Search By Name"
          name="name" id="name" value={this.state.name.value} onChange={e => this.updateName(e.target.value)} />
           <input type="text" className="tagFilter" placeholder="Search By Tag"
          name="name" id="name" value={this.state.tag.value} onChange={e => this.updateName(e.target.value)} />
        <ul className='StudentList__list' aria-live='polite'>

          {filteredStudents.map(student =>

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
