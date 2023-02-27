import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    //const name = 'hayai';
    const [name, setName] = useState('hayai');
    const [age, setAge] = useState(23);
    const [blogs, setBlogs] = useState(null);

    const [nama, setNama] = useState('jamal');  //useEffect 

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id); /* eslint eqeqeq: 0 */
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
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
    }, [])

//     Async version:
// useEffect(() => {
//     async function fetchBlogs() {
//       let response = await fetch('http://localhost:8000/blogs');
//       response = await response.json();
//       setBlogs(response);
//     }

//     fetchBlogs();
//   }, []);

    return (  
        <nav className="home">
            <h1>HomePage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('hayai')}>Click Meeeeeeeee</button>

            <button onClick={() => setNama('kamarul')}>Tukar</button>
            <p>{nama}</p>

            {blogs && <BlogList blooging={blogs} title="All Blogs" handleDelete={handleDelete} />}
           {blogs && <BlogList blooging={blogs.filter( (blog) => blog.author == 'mario') } title="Mario Blogs"/>}
        </nav>
    );
}
 
export default Home; 