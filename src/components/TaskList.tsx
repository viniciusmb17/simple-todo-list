import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid';
import clipboard from '../assets/clipboard.svg'
import styles from './TaskList.module.css'

const tasks = [
  { id: uuidv4, check: false, text: 'Integer urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna iInteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
]

export function TaskList() {

  const doneTasks = tasks.filter(task => task.check)

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.created}>
          Tarefas criadas
          <div className={styles.counter}>{tasks.length}</div>
        </div>
        <div className={styles.done}>
          Concluídas
          <div className={styles.counter}>
            {doneTasks.length !== 0 ?
              (`${doneTasks.length} de ${tasks.length}`)
              :
              0
            }
          </div>
        </div>
      </div>
      {
        tasks.length === 0 ? (
          <div className={styles.content}>
            <span>
              <img src={clipboard} alt="clipboard image" width={56} height={56} />
            </span>
            <div className={styles.text}>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <Task content={tasks} />
        )
      }
    </section>
  )
}