import ClipboardIcon from "../icons/clipboard";
import styles from './styles.module.scss';

export default function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardIcon />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
