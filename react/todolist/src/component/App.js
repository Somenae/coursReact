import { useState } from 'react';
import './App.css';
import Todolist from './Todolist';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tasks, setTask] = useState([
    {name: 'Test0', id: 0, done: false,},
    {name: 'Test1', id: 1, done: true,},
    {name: 'Test2', id: 2, done: true,},
  ]);

  function changeState(taskId)
  {
    const tasksCopy = [...tasks];
    tasksCopy.forEach( task => {
      if (task.id === taskId) {
        if (task.done === true) {
          setTask(() => task.done = false);
        } else {
          setTask(() => task.done = true);
        }
      }
      setTask(() => tasksCopy);
    })
  }

  function deleteTask(task)
  {
    setTask(tasks.toSpliced(tasks.indexOf(task), 1));
  }

  return (
    <div className="App container">
    <h1>Gestion des tâches</h1>
      {tasks.map((task) => <Todolist 
        key = { task.id }
        task = { task } 
        onClickState = { changeState } 
        onClickDelete = { deleteTask }
        />)}
    </div>
  );
}

export default App;
