import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { RoundedCheckbox } from '../RoundedCheckbox';

interface TasksProps {
  content: {
    id: string;
    check: boolean;
    text: string;
  }[]
}

export function Task({ content }: TasksProps) {
  return (
    <div className={styles.list}>
      {
        content.map(task => (
          <div className={task.check ? styles.taskChecked : styles.task} key={task.id.toString()}>
            <RoundedCheckbox checked={task.check} />
            <span className={styles.text}>{task.text}</span>
            <span className={styles.delete}>
              <Trash size={17.5} />
            </span>
          </div>
        ))
      }
    </div>
  )
}