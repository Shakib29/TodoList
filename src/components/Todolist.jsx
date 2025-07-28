import styles from "./Todolist.module.css";

import { TodoListItem } from "./Todolistitem";
export function Todolist({todos,onupdate,ondelete}) {

  


  return (
    <section>
      <h3> To-Do's</h3>
      {!todos.length && <p> Sorry ,you don't have any To-Do's</p>}

      <ul className={styles.TodoList}>
        {todos.map((todos) => (
         <TodoListItem  key={todos.id} todos={todos} onupdate={onupdate} ondelete={ondelete}></TodoListItem>
        ))}
      </ul>
    </section>
  );
}
