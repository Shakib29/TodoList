import { useEffect, useState } from "react";
import styles from "./todofilters.module.css"
import { COMPLETED_FILTERS,PRIORITY_FILTERS } from "./filters";

export function Todofilters({onFilter}) {
  const [completed,setcompleted]=useState('all')
  const [priority,setpriority]=useState('all')
  
  useEffect(()=>{
   const filters={
    completed: COMPLETED_FILTERS[completed].value,
    priority: PRIORITY_FILTERS[priority].value,

   };
   onFilter(filters)
  },[completed,priority])
  return (
    <section>
      <h3>filters</h3>
      <div className={styles.filters}>
        <label htmlFor="completed"> Completed</label>
        <select id="completed" defaultValue={completed} onChange={(event)=>setcompleted(event.target.value)}>
         
         {Object.entries(COMPLETED_FILTERS).map(([key,{label}])=>
        (
          <option key={key} value={key}>{label} </option>
        )
      
        )}
        </select>

         <label htmlFor="completed"> priority</label>
        <select id="completed" defaultValue={priority} onChange={(event)=>setpriority(event.target.value)}>
         
         {Object.entries(PRIORITY_FILTERS).map(([key,{label}])=>
        (
          <option key={key} value={key}>{label} </option>
        )
      
        )}
        </select>
      </div>
    </section>
  );
}
