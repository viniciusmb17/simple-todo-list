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
      <div>
        <span>task icon</span>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}