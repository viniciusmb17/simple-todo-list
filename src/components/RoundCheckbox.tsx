import styles from './RoundCheckbox.module.css'

interface RoundCheckboxProps {
  checked: boolean;
  label?: string;
}

export function RoundCheckbox({ checked, label }: RoundCheckboxProps) {

  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  )
}