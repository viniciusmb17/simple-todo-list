import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

export function NewTask(){
  return (
    <section className={styles.section}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
      />
      <button>
        Criar 
        <PlusCircle 
          size={16}
        />
      </button>
    </section>
  )
}