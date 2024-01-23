
import './InputItem.css';

export default function TodoItem({todo, onChange, onDelete}) {
  return (
    <div >
      <label>
        <input className='inputCheck'
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            //e.target.checked
            onChange({
              ...todo,
              isCompleted: e.target.checked
            })
          }}
        />
        {todo.text}
        <button className='buttonCheck'
          onClick={() => {
            onDelete(todo);
        }}>
          X
        </button>
      </label>
    </div>
  )
}
