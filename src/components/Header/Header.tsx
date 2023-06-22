import RocketIcon from '../icons/rocket';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <RocketIcon />
      <h1>to<span>do</span></h1>
    </header>
  )
}
