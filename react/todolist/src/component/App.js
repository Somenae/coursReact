import { useEffect, useState } from 'react';
import './App.css';
import Todolist from './Todolist';
import TaskFetcher from '../services/TaskFetcher';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
// Utilisation du hook useEffect poue exécuter du code après le chargement du composant
  useEffect(() => {
    const promise = TaskFetcher.loadTasks();
    promise.then(tasks => {
      setTask(tasks);
    })
  }, [])

  // Création du state tasks en appelant la fonction useState qui s'exécute avant le chargement du composant
  const [tasks, setTask] = useState([]);

  // Gestion des erreurs
  const [error, setError] = useState("");

  function changeState(taskId)
  {
    // Copie de l'état et modification en utilisant map
    let propertyToPatch = null;
    const tasksCopy = tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
        propertyToPatch = {
          done: task.done
        }
      }
      return task;
    })

    // Modification de l'état
    setTask(() => tasksCopy);

    // Modification des données sur le server json-server
    if(propertyToPatch) {
      const promise = TaskFetcher.patchTask(taskId, propertyToPatch);
      promise
      .catch(error => {
        console.error("Erreur attrapée dans changeState " + error);
        setError(error.message);
        const promise = TaskFetcher.loadTasks();
        promise.then(tasks => {
          setTask(tasks);
        })
      })
    }
    
  }

  function deleteTask(task)
  {
    // confirmation
    if (window.confirm("Confirmez-vous la suppression ?")) {      
      setTask(tasks.toSpliced(tasks.indexOf(task), 1));
      // Suppression de la tâche sur le serveur json-server
      if(task) {
        const promise = TaskFetcher.deleteTask(task.id);
        promise
        .catch(error => {
          console.error("Erreur attrapée dans deleteTask" + error);
          setError(error.message);
          const promise = TaskFetcher.loadTasks();
          promise.then(tasks => {
            setTask(tasks);
          })
        })
      }
    }
  }

  return (
    <div className="App container">
    <h1>Gestion des tâches</h1>
    {error && (<p className='text-danger'>Une erreur est survenue : {error}</p>)}
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
