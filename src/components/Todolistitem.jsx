import { useState } from "react";
import { PRIORITIES,PRIORITY_DEFAULT } from "../constant/priorities";
import styles from './Todolistitem.module.css'
import { Todoformfields } from "./Todoformfields";

export function TodoListItem({todos,onupdate,ondelete}){
   const [isedititing,setisediting]=useState(false) 

  function handlecompleted(event){
   onupdate(todos.id, {...todos,completed:event.target.checked})
  }

   function handleedit(event){
     event.preventDefault();
       const {elements}=event.target;
        if(elements.name.value==="") return;
         
        onupdate(todos.id,{
        name: elements.name.value,
        description:elements.description?.value,
        deadline:elements.deadline?.value,
        priority:elements.priority?.value ,
        completed:todos.completed,
        });
        setisediting(false);
   }
  const viewingtemplate=( 
  <div className={styles.Content}>
        <input type="checkbox" name="completed" checked={todos.completed} 
           onChange={handlecompleted} className={styles.Status}></input>
           <div className={styles.Info}>  {todos.name}
            {todos.name} 
            {todos.description && <span className={styles.Description}>{todos.description}</span>} 

            <div className={styles.AdditionalInfo   }>
              {todos.deadline}
               {todos.priority!==PRIORITY_DEFAULT &&
                (
                  <span style={{color: PRIORITIES [todos.priority].color}}> { PRIORITIES [todos.priority].label}</span>
                )} <br />
            </div>
           </div>
           
           <div className={styles.Controls}>
           <button onClick={()=>setisediting(true)}>📝</button>
           <button onClick={()=>ondelete(todos.id)}>🗑️</button>
           </div>
    </div>
    
  )

  const editingtemplate=
  <form className={styles.Content} onReset={()=>setisediting(false) } onSubmit={handleedit}>
    <Todoformfields todos={todos}></Todoformfields>
    <div className={styles.Controls}>
  <input type="submit" value="💾"></input>
  <input type="reset" value="❌"></input>
    </div>
  </form>
  return(
     <li  className={styles.TodoListItem} data-completed={todos.completed}>
    {isedititing? editingtemplate: viewingtemplate}
          </li>
  )
}