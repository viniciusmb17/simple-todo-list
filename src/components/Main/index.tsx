import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NewTask } from "../../components/NewTask"
import { TaskList } from "../../components/TaskList"

import styles from './Main.module.css'

interface taskInterface {
  id: string;
  check: boolean;
  text: string;
}

export default function Main() {

  const [tasks, setTasks] = useState<taskInterface[]>([])

  function handleNewTask(text: string) {
    const newTask = { id: uuidv4(), check: false, text }
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, idx) => idx !== index))
  }

  function handleCheckbox(index: number) {
    tasks[index].check = !tasks[index].check
    setTasks([...tasks])
  }

  return (
    <main className={styles.wrapper}>
      <NewTask onNewTask={handleNewTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCheck={handleCheckbox} />
    </main>
  )
}