import { PRIORITIES, PRIORITY_DEFAULT } from "../constant/priorities";
import styles from "./Todoformfields.module.css";

export function Todoformfields({ todos={},showallfields = true }) {
  return (
    <>
      <div className={styles.Formfields}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          name="name"
          autoComplete="off"
          
          defaultValue={todos.name}
        />
      </div>

      {showallfields && (
        <div className={styles.Formfields}>
          <textarea
            aria-label="Description"
            placeholder="Description"
            name="description"
            rows="3"
            defaultValue={todos.description}
          />

          <div className={styles.FormRow}>
            <label htmlFor="deadline">Deadline</label>
            <input type="date" id="deadline" name="deadline"  defaultValue={todos.deadline}/>
          </div>

          <div className={styles.FormRow}>
            <label htmlFor="priority">Priority</label>
            <select
              defaultValue={todos.priority??PRIORITY_DEFAULT}
              id="priority"
              name="priority"
            >
              {Object.entries(PRIORITIES).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
