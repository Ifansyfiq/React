import { useState } from "react";

const Home = () => {
    
    //const name = 'hayai';
    const [name, setName] = useState('hayai');
    const [age, setAge] = useState(23);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])


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

            {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
        </nav>
    );
}
 
export default Home; 