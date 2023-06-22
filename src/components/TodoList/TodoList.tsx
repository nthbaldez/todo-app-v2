import styles from './styles.module.scss';

import EmptyTasks from '../EmptyTasks/EmptyTasks';
import TodoItem from '../TodoItem/TodoItem';
import { useEffect, useState } from 'react';

interface TodoProps {
  id: string;
  completed: boolean;
  title: string;
}

interface TodoListProps {
  todos: TodoProps[];
  handleTaskTodoCompleted: (id: string, completed: boolean) => void;
  deleteTask: (id: string) => void;
}

export default function TodoList({ todos, handleTaskTodoCompleted, deleteTask }: TodoListProps) {
  const [completedTodos, setCompletedTodos ] = useState(0);

  useEffect(() => {
    const filteredCompletedTodos = todos.filter(todo => todo.completed === true);

    setCompletedTodos(filteredCompletedTodos.length);
  }, [todos]);

  return (
    <section className={styles.sectionContainer}>
      <header className={styles.headerContainerInfo}>
        <div className={styles.tasksCreated}>
          <h3>Tarefas criadas</h3>
          <span>{todos.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <h3>Concluídas</h3>
          {completedTodos == 0 ? 
            <span>0</span>  
            :
            <span>{completedTodos} de {todos.length}</span>  
          }
        </div>
      </header>
      {todos.length === 0 ? 
        <EmptyTasks/> 
        
        :
        todos.map(todo => 
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            title={todo.title} 
            isCompleted={todo.completed} 
            handleTaskTodoCompleted={handleTaskTodoCompleted}
            deleteTask={deleteTask}
          />)
      }

    </section>
  );
}
