import React from "react";

export default class AddItemForm extends React.Component {
  render() {
   
    return (
      <form>
        <input
          type='text'
          placeholder='Add Tag'
          aria-label='Shopping list item'
        />
        <button type='submit'>Add Tag</button>
      </form>
    )
  }
}