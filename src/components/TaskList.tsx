import { ClipboardText } from 'phosphor-react'
import clipboard from '../assets/clipboard.svg'
import styles from './TaskList.module.css'


export function TaskList() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.created}>
          Tarefas criadas
          <div className={styles.counter}>0</div>
        </div>
        <div className={styles.done}>
          Concluídas
          <div className={styles.counter}>0</div>
        </div>
      </div>
      <div className={styles.content}>
        <span>
          <img src={clipboard} alt="clipboard image" width={56} height={56} />
        </span>
        <div className={styles.text}>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </section>
  )
}