import React from "react";

export default class AddItemForm extends React.Component {


  static defaultProps = {
    tags: []
  };
  render() {
    let { tags } = this.props
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Add Tag'
            aria-label='Shopping list item'
          />
          
          <button
            onClick={() => this.props.handleAddTag()}
            type='button'>
            Add Tag
          </button>
        </form>

        <div className="tagList">

          {tags.map(tag =>

            <span>tag</span>
          )}

        </div>
      </div>


    )
  }
}