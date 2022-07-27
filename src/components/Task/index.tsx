import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { RoundedCheckbox } from '../RoundedCheckbox';

interface TasksProps {
  content: {
    id: string;
    check: boolean;
    text: string;
  }[]
  onDeleteTask: Function;
}

export function Task({ content, onDeleteTask }: TasksProps) {

  return (
    <div className={styles.list}>
      {
        content.map((task, index) => (
          <div className={task.check ? styles.taskChecked : styles.task} key={task.id.toString()}>
            <RoundedCheckbox checked={task.check} />
            <span className={styles.text}>{task.text}</span>
            <button className={styles.delete} onClick={() => onDeleteTask(index)}>
              <Trash size={17.5} />
            </button>
          </div>
        ))
      }
    </div>
  )
}