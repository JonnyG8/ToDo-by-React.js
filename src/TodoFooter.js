
import './Footer.css'

export default function TodoFooter({todos, onClearCompleted}) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;


  return (
    <div>
      <span>{completedSize}/{todos.length}</span>
      <button className='clearButton'
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  )
}
