import ListTodos from "../pages/ListTodos";
import AddTodo from "../pages/AddTodo";
import About from "../pages/About";
import CompletedTask from "../pages/CompletedTask";

function Main({currentView,setCurrentView}) {
// console.log(currentView)
if (currentView=="Home"){
return(
  <>
  <ListTodos/>
  </>
  )
}

else if(currentView=="create"){
  return (<AddTodo setCurrentView={setCurrentView}/>)
}

else if(currentView=="completedtasks"){
  return (<CompletedTask setCurrentView={setCurrentView}/>)
}

else{
  return (<About/>)
}


  
}

export default Main;
