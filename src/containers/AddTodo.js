import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  console.log("dispatch - ", dispatch);
  let input;

  return (
    <div id="myDIV" className="header">
      <form className="catalin" onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
          <input type="text" id="myInput" placeholder="Заметка…" ref={node => {
          input = node
        }} />
        <button type="submit" className="addBtn" />
      </form>
    </div>
  )
};
AddTodo = connect()(AddTodo);

export default AddTodo
