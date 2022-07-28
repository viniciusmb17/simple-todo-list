import { ChangeEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

interface NewTaskProps {
  onNewTask: Function;
}

export function NewTask({ onNewTask }: NewTaskProps) {

  const [text, setText] = useState('')
  const handleNewTask = () => {
    if(text.length === 0){
      return alert(`Error!\n 
        This field is required.`)
    }
    onNewTask(text)
    setText('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setText(value)
  }

  return (
    <section className={styles.section}>
      <input
        type="text"
        placeholder='Add a new task'
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleNewTask}>
        Add
        <PlusCircle
          size={16}
        />
      </button>
    </section>
  )
}