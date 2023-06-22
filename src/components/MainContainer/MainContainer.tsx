import { useDeferredValue, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import PlusIcon from '../icons/plus';
import styles from './styles.module.scss';

import { v4 as uuidv4 } from 'uuid';

interface TodoProps {
  id: string;
  completed: boolean;
  title: string;
}


export default function MainContainer() {
  const [ todos, setTodos ] = useState<TodoProps[]>([]);
  const [titleTodo, setTitleTodo] = useState('');
  const deferredTitle = useDeferredValue(titleTodo);

  const newTodo = {
    id: uuidv4(),
    completed: false,
    title: deferredTitle
  }

  function createNewTask() {

    if (deferredTitle === '') {
      alert('Preencha o campo');
      return;
    }
    setTodos([...todos, newTodo]);
    setTitleTodo('');
  }

  function handleTaskCompleted(id: string, completed: boolean) {
    const updatedCompleteTasks = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !completed;
      }
      return todo;
    });

    setTodos(updatedCompleteTasks);
  }

  function deleteTask(id: string) {
    const taskThatIsNotGonnaBeDeleted = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(taskThatIsNotGonnaBeDeleted);
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input value={titleTodo} onChange={e => setTitleTodo(e.target.value)} type="text" placeholder='Adicione uma nova tarefa'/>
        <button onClick={createNewTask}>
          Criar
          <PlusIcon />
        </button>
      </div>
      <TodoList todos={todos} handleTaskTodoCompleted={handleTaskCompleted} deleteTask={deleteTask}/>
    </main>
  )
}
