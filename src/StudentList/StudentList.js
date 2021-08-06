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
      tagsToFilter: []
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
    this.setState({ tagName: { value: tag, touched: true } });

  }

  addTagsToFilter = (tag,id) => {
    const newTags = [
      ...this.state.tagsToFilter,
        {tag,id}
    ]
    this.setState({
      tagsToFilter: newTags
    })
};

getTagsToFilter =()=>{
  console.log("tagstoFilter",this.state.tagsToFilter);
  return this.state.tagsToFilter;
}

  render() {
console.log("this.state",this.props.students);
console.log("tagstoFilterstate",this.state.tagsToFilter)
    const { students } = this.props;
    let filteredStudents = [];
    if (this.state.name.value === "" && this.state.tagName.value ==="") {
      filteredStudents = students;
    }
    else {
      filteredStudents = students.filter(
        student => {
         // console.log("tags", this.state.tag.value.toLowerCase())
         // console.log("name", student.tags)
          
         // let test = student.setTagsToFilter;
         // let tags = this.context.getTagsToFilter();
          //console.log("test", tags.includes(this.state.tag.value.toLowerCase()))
          return student.firstName.toLowerCase().includes(this.state.name.value.toLowerCase()) ||
            student.lastName.toLowerCase().includes(this.state.name.value.toLowerCase() )
            /*||
              tags.includes(this.state.tag.value.toLowerCase()))*/

        })
    }
    const value = {
      addTagsToFilter: this.addTagsToFilter,
  getTagsToFilter:this.getTagsToFilter
    }

    return (
      <ApiContext.Provider value={value}>
      <div className="studentList">
        <input type="text" className="nameFilter" placeholder="Search By Name"
          name="name" id="name" value={this.state.name.value} onChange={e => this.updateName(e.target.value)} />
        <input type="text" className="tagFilter" placeholder="Search By Tag"
          name="name" id="name" value={this.state.tagName.value} onChange={e => this.updateTag(e.target.value)} />
        <ul className='StudentList__list' aria-live='polite'>
          <p>{this.state.tagName.value}</p>
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
