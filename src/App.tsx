import { NewTask } from "./components/NewTask"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
          <NewTask />
          <TaskList />
      </main>
    </>
  )
}

export default App
