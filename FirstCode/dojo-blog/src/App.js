import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as  Routing ,Route, Routes } from 'react-router-dom'; //declare router (Switch (V5) change with Routes (v6))
import Create from './Create';


function App() {
  const desc = "Learning"
  return (
    <Routing>
    <div className="App">
      <p>This is the {desc} session</p>
      <Navbar/> 
     <div className="content">
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
     </Routes>
     </div>
    </div>
    </Routing>
  );
}

export default App;
 