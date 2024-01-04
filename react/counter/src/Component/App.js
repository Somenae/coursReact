import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App({ title }) {
  // Un seul state doit gérer 5 compteurs
  const [counters, setCounters] = useState([
    {value:0, id:0},
    {value:1, id:1},
    {value:2, id:2},
    {value:3, id:3},
    {value:4, id:4},
  ]);

  function handleCLickLess(counterId) {
    // Copie du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      if (counterId === counter.id) {
        counter.value --;
      }
    });
    // Changement du state
    setCounters(() => countersCopy);
  }

  function handleClickMore(counterId) {
    // Copie du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      if (counterId === counter.id) {
        counter.value ++;
      }
    });
    // Changement du state
    setCounters(() => countersCopy);
  }

  function handleCLickLessAll() {
    // Copie du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      counter.value --;
    });
    // Changement du state
    setCounters(() => countersCopy);
  }

  function handleCLickMoreAll() {
        // Copie du state
        const countersCopy = [...counters];
        countersCopy.forEach(counter => {
          counter.value ++;
        });
        // Changement du state
        setCounters(() => countersCopy);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      {counters.map((counter) => <Counter 
      key = { counter.id } 
      counter = { counter } 
      onCLickLess={handleCLickLess}
      onCLickMore={handleClickMore}
      onCLickLessAll={handleCLickLessAll}
      onCLickMoreAll={handleCLickMoreAll} />)}
      {/* Appel du composant fonction Counter */}
    </div>
  );
}

export default App;
