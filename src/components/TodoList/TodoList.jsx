import React from 'react'

import TodoItem from '../TodoItem'

const TodoList = ({ data, handleClick, onDelete, onEdit }) => {

  const todos = data.map((todo) => <TodoItem onEdit={onEdit} onDelete={onDelete} handleClick={handleClick} key={todo._id} {...todo} />)

  return (
    <ul>
        {todos}
    </ul>
  )
}

export default TodoList