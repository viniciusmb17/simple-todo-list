import { Trash } from 'phosphor-react';
import { v4 } from 'uuid';
import styles from './Task.module.css';
import { RoundedCheckbox } from '../RoundedCheckbox';

interface TasksProps {
  content: {
    id: typeof v4;
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