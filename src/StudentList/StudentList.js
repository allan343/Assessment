import React, { Component } from 'react';
import Student from '../Student/Student';
import ApiContext from '../ApiContext/ApiContext';
import './StudentList.css';

class StudentList extends Component {

  constructor(props) {
    super(props);
    this.state = {

      name: {
        value: "",
        touched: false
      },
      tagName: {
        value: "",
        touched: false
      },
      tagsToFilter: [],
      tagsToRender: []
    };
  }
  static defaultProps = {
    students: [],

  };
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updateTag(tag) {

    this.setState({ tagName: { value: tag, touched: true } });

  }

  addTagsToFilter = (tag, id) => {
    const newTags = [
      ...this.state.tagsToFilter,
      {
        "tag": tag,
        "id": Number(id)
      }
    ]
    this.setState({
      tagsToFilter: newTags
    })
    const newTags1 = [
      ...this.state.tagsToRender,
      {
        "id": Number(id),
        "tag": tag

      }
    ]
    this.setState({
      tagsToRender: newTags1
    })
  };

  getTagsToFilter = () => {

    return this.state.tagsToFilter;
  }

  getTagsToRender = () => {

    return this.state.tagsToRender;
  }

  render() {

    const { students } = this.props;
    let filteredStudents = [];
    if (this.state.name.value === "" && this.state.tagName.value === "") {
      filteredStudents = students;
    }
    else if (this.state.name.value !== "") {


      filteredStudents = students.filter(
        student => {
          const hasFirstName = student.firstName.toLowerCase().includes(this.state.name.value.toLowerCase())
          const hasLastName = student.lastName && student.lastName.toLowerCase().includes(this.state.name.value.toLowerCase())

          return hasFirstName || hasLastName;

        })
    }

    else if (this.state.tagName.value !== "") {
      let tagQuery = this.state.tagName.value.toLowerCase();

      let filteredIds = this.state.tagsToFilter.filter(function (el) {
        return el.tag === tagQuery;
      }

      );

      let idsonly = []

      for (let i = 0; i < filteredIds.length; i++) {

        idsonly.push(Number(filteredIds[i].id))

      }



      filteredStudents = students.filter(
        student => {


          return idsonly.includes(Number(student.id));

        })
    }
    const value = {
      addTagsToFilter: this.addTagsToFilter,
      getTagsToFilter: this.getTagsToFilter,
      getTagsToRender: this.getTagsToRender
    }

    return (
      <ApiContext.Provider value={value}>
        <div className="studentList">
          <input type="text" className="nameFilter" placeholder="Search By Name"
            name="name" id="name" value={this.state.name.value} onChange={e => this.updateName(e.target.value)} />
          <input type="text" className="tagFilter" placeholder="Search By Tag"
            name="name" id="name" value={this.state.tagName.value} onChange={e => this.updateTag(e.target.value)} />
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
      </ApiContext.Provider>
    );
  }
}

export default StudentList;