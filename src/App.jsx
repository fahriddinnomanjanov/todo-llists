import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

import Modal from './components/Modal/Modal';

function App() {
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    data?.length && setTodos(data)
  }, [])
  
  useEffect(() => {
   
   localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  const toggleModal = () => {
    setShow(!show)
  }

  const createTodo = (title) => {
    if (title) { 
      setTodos([{ title, checked: false, _id: Math.floor(Math.random() * 1000) }, ...todos])
      setNewTodo('')
      toggleModal()
    }
  }

  const handleClick = (id) => {
    const newData = todos.map(todo => id   === todo._id ? { ...todo, checked: !todo.checked } : todo)

    setTodos(newData)
  } 
  const handleEdit = (title) => {
    const editingTodo = todos.find(todo => todoId === todo._id)
    const newData = todos.map(todo => todoId === todo._id ? {...editingTodo, title } : todo)
    
    setTodos(newData)
    setNewTodo('')
    setTodoId(null)
    toggleModal()
  }
   const onClickEdit = (id) => {  
     const {title} = todos.find(todo => id === todo._id)
     setNewTodo(title)
     setTodoId(id)
     toggleModal()
  }

  const handleDelete = (id) => {
    const newData = todos.filter(({ _id }) => _id !== id);

    setTodos(newData)
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }


  return (
    <div className="App">
      {show && <Modal onClose={toggleModal} >
                  <input value={newTodo} type="text" onChange={handleChange} />
                  {todoId ? <button onClick={() => handleEdit(newTodo)} >Edit</button> : <button onClick={() => createTodo(newTodo)}> Add </button>}
                  
               </Modal>
      }
      <button  onClick={toggleModal}>Add Todo</button>
      <TodoList onEdit={onClickEdit} onDelete={handleDelete} data={todos} handleClick={handleClick} />
    </div>
  );
}

export default App;
