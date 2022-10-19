import { FC } from 'react';
import { useRecoilState, } from 'recoil';
import { Todo, todoState }from '../lib/todo'

const TodoList: FC = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  const deleteTodo = (todo: Todo) => {
    const newTodos = todos.filter(item => item.id !== todo.id).map((item, i) => ({id: i + 1, text: item.text}))
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Todo</h2>
      {todos && (
        <ul>
          {todos.map((item) => (
            <li key={item.text}>
              {item.text}
              <button onClick={() => deleteTodo(item)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default TodoList;
