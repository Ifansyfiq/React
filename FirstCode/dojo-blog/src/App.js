import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as  Routing ,Route, Routes } from 'react-router-dom'; //declare router (Switch (V5) change with Routes (v6))
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


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
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
     </Routes>
     </div>
    </div>
    </Routing>
  );
}

export default App;
 