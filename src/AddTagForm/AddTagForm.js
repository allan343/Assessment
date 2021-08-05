import React from "react";

export default class AddItemForm extends React.Component {


  static defaultProps = {
    tags: []
  };
  onSubmitForm = (e) => {
    e.preventDefault()
    // e.target['inputName'] references `<input name='inputName' />`
    console.log("tagNameonsubmit",e.target.itemToAdd.value);
    this.props.onAddTag(e.target.itemToAdd.value)
  }
  /*
  updateTag(tagName) {
    //console.log("tagName",tagName);
    this.setState({ tagName: { value: tagName, touched: true } });
  }*/

  render() {
    let { tags } = this.props

    return (
      <div>
      <form onSubmit={this.onSubmitForm}>
        <input
          name='itemToAdd'
          type='text'
          placeholder='Add Tag'
          aria-label='tag item'
        />
        <button type='submit'>Add Tag</button>
      </form>

        <div className="tagList">

          {tags.map(tag =>
          
            <span key={tag}>{tag} </span>
          )}

        </div>
      </div>


    )
  }
}