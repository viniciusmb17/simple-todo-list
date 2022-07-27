import { useState } from 'react';
import styles from './RoundedCheckbox.module.css'

interface RoundedCheckboxProps {
  checked: boolean;
}

export function RoundedCheckbox({ checked }: RoundedCheckboxProps) {
  const [check, setCheck] = useState(checked)
  const onChangeCheck = (check: boolean) => {
    setCheck(check)
  }
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={check} onChange={() => onChangeCheck(checked)} />
      <span className={styles.checkmark}></span>
    </label>
  )
}