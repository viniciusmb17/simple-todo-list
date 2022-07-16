import { AddTask } from "./components/AddTask"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaksList"

import './global.css'

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <TaskList />
    </>
  )
}

export default App
