import Navbar from './Navbar';
import Home from './Home';


function App() {
  const desc = "Component Learning"
  return (
    <div className="App">
      <p>This is the {desc} session</p>
      <Navbar/> 
     <div className="content">
      <Home />
      
     </div>
    </div>
  );
}

export default App;
 