import styles from './NewTask.module.css'

export function NewTask(){
  return (
    <section className={styles.section}>
      <input type="text" />
      <button>Criar +</button>
    </section>
  )
}