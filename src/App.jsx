import { Form } from "./components/Form";
import styles from'./App.module.css';
import { useState } from "react";
import { Todolist } from "./components/Todolist";
import { Todofilters } from "./components/Todofilters";


const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2025-02-09",
    priority: "low",
    completed: false,
  },
  {
    id: "2",
    name: "Sell old MacBook Pro 2025",
    description: "Try to sell it on OLX",
    deadline: "2025-02-28",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Charge Powerbank",
    description: "For the next travelling",
    deadline: "2025-02-15",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    name: "Test Todo onlye with a name",
    description: "",
    deadline: "",
    priority: "none",
    completed: false,
  },
];

function App() {

   const [todos,settodos]=useState(TODOS_DEFAULT)
   const [filters,setfilters]=useState({})

   function handletodos(newtodo){
     settodos((prevtodos)=>[...prevtodos,{id:`${prevtodos.length +1}`,...newtodo}]);

   }

   function handleupdate(id,newtodo){
   settodos((prevtodos) => prevtodos.map((todos) => todos.id ===id ?newtodo:todos))
   }

function handledelete(id){
 settodos((prevtodos)=>prevtodos.filter((todos)=>todos.id!==id))
}

function filtertodos(todo){
   const {completed,priority}=filters

   return (completed==="" || todo.completed===completed) && (priority==="" ||todo.priority===priority)
}
 return(
  <div className={styles.App}> 
    <header className={styles.Header}>
      <img className={styles.Logo} src="/to-do.png"/>
      <h2 className={styles.Tittle}> Todo-list</h2>
    </header>

    <div className={styles.AppContainer}>
   <Form oncreate={handletodos}></Form>
   <Todofilters onFilter={setfilters}></Todofilters>
   <Todolist todos={todos.filter(filtertodos)}  onupdate={handleupdate} ondelete={handledelete}></Todolist>
  
    </div>
  </div>
 )
}

export default App
