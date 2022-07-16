import { AddTask } from "./components/AddTask"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaksList"

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
