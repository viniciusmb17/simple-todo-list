import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NewTask } from "../../components/NewTask"
import { TaskList } from "../../components/TaskList"

import styles from './Main.module.css'

export default function Main() {

  const [tasks, setTasks] = useState([
    { id: uuidv4(), check: false, text: 'Integer urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    { id: uuidv4(), check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  ])

  function handleNewTask( text: string) {
    const newTask = { id: uuidv4(), check: false, text }
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(index: number) {
    console.log(index)
    setTasks(tasks.filter((_, idx) => idx !== index ))
  }

  return (
    <main className={styles.wrapper}>
      <NewTask onNewTask={handleNewTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  )
}