import { useState, FC } from 'react';
import { useRecoilState, } from 'recoil';
import { todoState } from '../lib/todo'

const InputForm: FC = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useRecoilState(todoState);

  const onClick = () => {
    const todosLength = todos.length;
    setTodos([
      ...todos,
      {
        text: todo,
        id: todosLength + 1,
      }
    ]);
    setTodo('');
  };

  return (
    <div>
      <h2>Input Todo</h2>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={onClick}>added</button>
    </div>
  )
}
export default InputForm;
