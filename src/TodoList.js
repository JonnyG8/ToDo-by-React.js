import TodoItem from "./TodoItem"
import './List.css'

export default function TodoList({todos, onDelete, onChange}) {


  return (
    <div className='listDiv'>
      {todos.map((todo) => {
        return (
          < TodoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}
