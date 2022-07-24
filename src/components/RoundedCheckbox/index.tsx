import styles from './RoundedCheckbox.module.css'

interface RoundedCheckboxProps {
  checked: boolean;
}

export function RoundedCheckbox({ checked }: RoundedCheckboxProps) {

  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  )
}