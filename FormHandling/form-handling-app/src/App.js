import FormInput from './components/FormInput';
import "./app.css";
import { useRef, useState} from "react";

const App =  () =>   {
  const usernameRef = useRef()

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(usernameRef)
}  

  return (
  <div className="apps">
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="Username"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="etc"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
