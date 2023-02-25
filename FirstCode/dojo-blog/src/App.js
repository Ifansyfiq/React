import './App.css';

function App() {
  const title = "Hello World"
  const desc = "Component Learning"
  

  return (
    <div className="App">
     <div className="content">
      <h1>{title}</h1>
      <p>This is the {desc} session</p>
     </div>
    </div>
  );
}

export default App;
