import React from "react";
import styles from "./Form.module.css"; // optional CSS module for styling
import { useState } from "react";
import { PRIORITY_DEFAULT } from "../constant/priorities";
import { Todoformfields } from "./Todoformfields";

export function Form({oncreate}) {
  const [showallfields,setshowallfields]=useState(false);



  function handlesubmit(event){
    event.preventDefault();
   const {elements}=event.target;
    if(elements.name.value==="") return;
     
    oncreate({
    name: elements.name.value,
    description:elements.description?.value ??"",
    deadline:elements.deadline?.value ??"",
    priority:elements.priority?.value ??PRIORITY_DEFAULT,
    completed:false,
    });
    event.target.reset();
  }
  return (
    <section className={styles.FormSection}>
      <h3 className={styles.Heading}>New To-Do
       <button onClick={()=> setshowallfields(!showallfields)}>{showallfields?"Hide":"Show"} all fields</button></h3>
   
      <form className={styles.Form} onSubmit={handlesubmit}>
       <Todoformfields showallfields={showallfields}></Todoformfields>
        <input className={styles.Submit} type="submit" value="Add" />
      </form>
    </section>
  );
}
