import { useState } from 'react'
import Todo from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseReducer /> */}
    <Todo />
    {/* <TodoItem /> */}
    </>
  )
}

export default App