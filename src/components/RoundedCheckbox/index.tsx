import styles from './RoundedCheckbox.module.css'

interface RoundedCheckboxProps {
  checked: boolean;
  label?: string;
}

export function RoundedCheckbox({ checked, label }: RoundedCheckboxProps) {

  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  )
}