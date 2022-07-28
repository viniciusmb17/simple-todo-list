import { Task } from '../Task'
import clipboard from '../../assets/clipboard.svg'
import styles from './TaskList.module.css'


interface TaskListProps {
  tasks: {
    id: string;
    check: boolean;
    text: string;
  }[]
  onDeleteTask: Function;
  onCheck: Function;
}

export function TaskList({ tasks, onDeleteTask, onCheck }: TaskListProps) {

  const doneTasks = tasks.filter(task => task.check)

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.created}>
          Created tasks
          <div className={styles.counter}>{tasks.length}</div>
        </div>
        <div className={styles.done}>
          Done
          <div className={styles.counter}>
            {doneTasks.length !== 0 ?
              (`${doneTasks.length} of ${tasks.length}`)
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
              <p><strong>You don't have any tasks yet</strong></p>
              <p>Add new tasks and organize your to-do items</p>
            </div>
          </div>
        ) : (
          <Task content={tasks} onDeleteTask={onDeleteTask} onCheck={onCheck}/>
        )
      }
    </section>
  )
}