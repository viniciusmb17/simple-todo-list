import { Trash } from 'phosphor-react';
import { v4 } from 'uuid';
import styles from './Task.module.css';
import { RoundCheckbox } from './RoundCheckbox';

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
          <div className={styles.task} key={task.id.toString()}>
            <RoundCheckbox checked={task.check} />
            <span>{task.text}</span>
            <Trash className={styles.delete} />
          </div>
        ))
      }
    </div>
  )
}