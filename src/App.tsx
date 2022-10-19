import { RecoilRoot, } from 'recoil';
import Todo from './components/TodoList'
import InputForm from './components/InputForm'
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <InputForm />
      <Todo />
    </RecoilRoot>
  )
}

export default App
