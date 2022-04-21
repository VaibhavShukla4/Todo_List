import React from 'react'
import './Card.css'
function Card(props) {

const handleDelete = () => {
    let temp = [...props.todos]
    temp.splice(props.cardId, 1);
    props.setTodos(temp)
}

  return (
    <div className='delete_text'>
    <div>{props.todotext}</div>
    <button className="delete__button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Card