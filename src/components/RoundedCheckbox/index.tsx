import { useState } from 'react';
import styles from './RoundedCheckbox.module.css'

interface RoundedCheckboxProps {
  checked: boolean;
  onCheck: Function;
  taskIdx: number;
}

export function RoundedCheckbox({ checked, onCheck, taskIdx }: RoundedCheckboxProps) {
  const [check, setCheck] = useState(checked)
  const handleCheck = (check: boolean) => {
    setCheck(check)
    onCheck(taskIdx)
  }

  return (
    <label className={styles.container}>
      <input type="checkbox" checked={check} onChange={() => handleCheck(!check)} />
      <span className={styles.checkmark}></span>
    </label>
  )
}