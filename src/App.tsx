import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NewTask } from "./components/NewTask"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"

import styles from './App.module.css'
import './global.css'



function App() {

  const [tasks, setTasks] = useState([
    { id: uuidv4(), check: false, text: 'Integer urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  ])

  function onNewTask( text: string) {
    const newTask = { id: uuidv4(), check: false, text }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onNewTask={onNewTask} />
        <TaskList tasks={tasks}/>
      </main>
    </>
  )
}

export default App
