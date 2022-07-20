import { Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Task.module.css'

const tasks = [
  { id: uuidv4, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
  { id: uuidv4, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
]
interface divProps {
  children?: React.ReactChild | React.ReactChild[];
}

export function Task() {
  return (
    <>
      {
        tasks.map(task => (
          <div className={styles.task} key={uuidv4.toString()}>
            <input type="checkbox" name={task.id.toString()} />
            {task.text}
            <Trash 
              className={styles.delete}
              size={24}
            />
          </div>
        ))
      }
    </>
  )
}