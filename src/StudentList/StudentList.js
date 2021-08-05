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
    console.log("tag from input", tag)
    this.setState({ tag: { value: tag, touched: true } });

  }

  render() {

    const { students } = this.props;
    let filteredStudents = [];
    if (this.state.name.value === "" && this.state.tag.value ==="") {
      filteredStudents = students;
    }
    else {
      filteredStudents = students.filter(
        student => {
          console.log("tags", this.state.tag.value.toLowerCase())
          console.log("name", student.tags)
          const tags = student.tags || [];
          console.log("test", tags.includes(this.state.tag.value.toLowerCase()))
          return student.firstName.toLowerCase().includes(this.state.name.value.toLowerCase()) ||
            student.lastName.toLowerCase().includes(this.state.name.value.toLowerCase() ||
              tags.includes(this.state.tag.value.toLowerCase()))



        })
    }


    return (
      <div className="studentList">
        <input type="text" className="nameFilter" placeholder="Search By Name"
          name="name" id="name" value={this.state.name.value} onChange={e => this.updateName(e.target.value)} />
        <input type="text" className="tagFilter" placeholder="Search By Tag"
          name="name" id="name" value={this.state.tag.value} onChange={e => this.updateTag(e.target.value)} />
        <ul className='StudentList__list' aria-live='polite'>
          <p>{this.state.tag.value}</p>
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
