import styles from './Header.module.css';

import toDoLogo from '../../assets/logo.svg';

export default function Header(){
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo List Logo"/>
    </header>
  )
}