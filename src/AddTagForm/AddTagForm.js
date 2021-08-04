import React from "react";

export default class AddItemForm extends React.Component {


  static defaultProps = {
    tags: []
  };
  constructor(props) {
    //states a homework can have
    super(props);
  this.state = {
    homeworkdescription: {
      value: '',
      touched: false
    }
  }
}
  updateTag(tagName) {
    this.setState({ tagName: { value: tagName, touched: true } });
  }

  render() {
    let { tags } = this.props
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Add Tag'
            aria-label='Shopping list item'
            onChange={e => this.updateDescription(e.target.value)}
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