import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    //const name = 'hayai';
    const [name, setName] = useState('hayai');
    const [age, setAge] = useState(23);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    const [nama, setNama] = useState('jamal');  //useEffect 

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    } 
    const handleClick = () => {
        setName('saki');
        setAge(39);
    }
    const handleClick2 = (name) => {
        console.log('hello ' +name);
    }

    useEffect(() => { //useEffect
        console.log({nama})
    }, [nama])

    return (  
        <nav className="home">
            <h1>HomePage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('hayai')}>Click Meeeeeeeee</button>

            <button onClick={() => setNama('kamarul')}>Tukar</button>
            <p>{nama}</p>

            <BlogList blooging={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blooging={blogs.filter( (blog) => blog.author == 'mario') } title="Mario Blogs"/>
        </nav>
    );
}
 
export default Home; 