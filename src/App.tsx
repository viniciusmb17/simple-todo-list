import { NewTask } from "./components/NewTask"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaksList"

import './global.css'

function App() {
  return (
    <>
      <Header />
          <NewTask />
          <TaskList />
    </>
  )
}

export default App
