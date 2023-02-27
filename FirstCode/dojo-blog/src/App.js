import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //declare router

function App() {
  const desc = "Learning"
  return (
    <Router> 
    <div className="App">
      <p>This is the {desc} session</p>
      <Navbar/> 
     <div className="content">
     <Routes>
          <Route path="/">
              <Home />
          </Route>
      </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
 