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
    // e.target['inputName'] references `<input name='inputName' />`
    console.log("tagNameonsubmit",e.target.itemToAdd.value);
    this.props.onAddTag(e.target.itemToAdd.value)
    this.context.addTagsToFilter(e.target.itemToAdd.value,this.props.id)
  }

  handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    this.onSubmitForm();
  }
};
  /*
  updateTag(tagName) {
    //console.log("tagName",tagName);
    this.setState({ tagName: { value: tagName, touched: true } });
  }*/

  render() {
    let { tags } = this.props;
   

    return (
      <div>
      <form onSubmit={this.onSubmitForm}>
        <input
          name='itemToAdd'
          type='text'
          placeholder='new tag'
          aria-label='tag item'
          onKeyPress={this.handleKeypress}
        />
      </form>

        <div className="tagList">

          {tags.map(tag =>
          
            <span className="tag" key={tag}>{tag} </span>
          )}

        </div>
      </div>


    )
  }
}