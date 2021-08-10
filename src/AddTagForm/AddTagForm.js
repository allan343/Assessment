import React from "react";
import ApiContext from '../ApiContext/ApiContext';
import './AddTagForm.css'

export default class AddItemForm extends React.Component {
  static contextType = ApiContext;

  static defaultProps = {
    tags: []
  };
  onSubmitForm = (e) => {
    e.preventDefault()


    this.props.onAddTag(e.target.itemToAdd.value)
    this.context.addTagsToFilter(e.target.itemToAdd.value, this.props.id)
  }

  handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      this.onSubmitForm();
    }
  };


  render() {
    let { tags } = this.props;


    return (
      <div>
        <div className="tagList">

          {tags.map(tag =>

            <span className="tag" key={tag}>{tag} </span>
          )}

        </div>
        <form onSubmit={this.onSubmitForm}>
          <input
            name='itemToAdd'
            type='text'
            placeholder='add a tag'
            aria-label='tag item'
            onKeyPress={this.handleKeypress}
          />
        </form>
      </div>


    )
  }
}