import { useState } from "react";

const Home = () => {
    
    //const name = 'hayai';
    const [name, setName] = useState('hayai');
    const [age, setAge] = useState(23);
    
    const handleClick = () => {
        setName('saki');
        setAge(39);
    }
    const handleClick2 = (name) => {
        console.log('hello ' +name);
    }
    return (  
        <nav className="home">
            <h1>HomePage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('hayai')}>Click Meeeeeeeee</button>
        </nav>
    );
}
 
export default Home; 