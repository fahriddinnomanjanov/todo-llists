import React, { useState } from 'react'

import styles from './TodoItem.module.css'

const TodoItem = ({ _id, title, checked, handleClick, onDelete, onEdit }) => {
  return (
    <li>
        <h3 className={styles.title}>{title}</h3>
        <input type="checkbox" checked={checked} onChange={ () => handleClick(_id)} />
        <button onClick={() => onDelete(_id)}>Delete</button>
        <button onClick={() => onEdit(_id)} >Edit</button>
    </li>
  )
}

export default TodoItem