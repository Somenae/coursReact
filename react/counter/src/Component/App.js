import './App.css';

function App({title, date}) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{date}</h2>
    </div>
  );
}

export default App;