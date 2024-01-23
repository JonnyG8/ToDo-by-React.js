import './Input.css'

import {useState} from 'react';

export default function TodoForm({onAdd}) {
  const [text, setText] = useState('');

  let inputTextValue = (event) => {
    setText(event.target.value)
  }

  let defaultPreventSubmit = (event) => {
    event.preventDefault();
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={defaultPreventSubmit}>
      <input className='mainInput'
        type="text"
        value={text}
        onChange={inputTextValue}
      />
      <button className='inputButton'>
        Add
      </button>
    </form>
  )
}
