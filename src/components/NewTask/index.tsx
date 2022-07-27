import { ChangeEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

interface NewTaskProps {
  onNewTask: Function;
}

export function NewTask({ onNewTask }: NewTaskProps) {

  const [text, setText] = useState('')
  const handleNewTask = () => onNewTask(text)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setText(value)
  }

  return (
    <section className={styles.section}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleNewTask}>
        Criar
        <PlusCircle
          size={16}
        />
      </button>
    </section>
  )
}