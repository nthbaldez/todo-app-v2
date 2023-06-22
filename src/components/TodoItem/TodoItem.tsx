import { useState } from 'react';
import TrashIcon from '../icons/trash';
import styles from './styles.module.scss';

interface TodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;

  handleTaskTodoCompleted: (id: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
}

export default function TodoItem({ title, isCompleted, id, handleTaskTodoCompleted, deleteTask }: TodoItemProps) {

  const [ taskChecked, setTaskChecked ] = useState(isCompleted);

  function handleTaskCompleted() {
    setTaskChecked(prev => !prev);
    handleTaskTodoCompleted(id, taskChecked);
  }

  return (
    <div className={styles.todoItemContainer}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        checked={taskChecked}
        onChange={handleTaskCompleted}
        value={title}
      />
      <p className={styles.todoTitle}>{title}</p>
      <button onClick={() => deleteTask(id)}>
        <TrashIcon />
      </button>
    </div>
  ) 
}
