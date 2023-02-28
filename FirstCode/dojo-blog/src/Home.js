// eslint-disable-next-line
//import {useState} from "react"; 
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    //const name = 'hayai';
    // const [name, setName] = useState('hayai');
    // const [age, setAge] = useState(23);
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true); //loading
    // const [error , setError] = useState(null);  //error fetching

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); //for custom hook useFetch()

    // const [nama, setNama] = useState('jamal');  //useEffect 

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id); /* eslint eqeqeq: 0 */
    //     setBlogs(newBlogs);
    // } 
    // const handleClick = () => {
    //     setName('saki');
    //     setAge(39);
    // }
    // const handleClick2 = (name) => {
    //     console.log('hello ' +name);
    // }

    //useEffect
    // useEffect(() => { 
    //     setTimeout (() => { //test time out utk 1 sec (don't use this for real project)
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             console.log(res)
    //             if (!res.ok){ //test if have error on fetching or not (block response is false)
    //                 throw Error('Could not fetch from resource')  
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             setBlogs(data)
    //             setIsPending(false)
    //             setError(null)
    //         })
    //         .catch((err) => {
    //             setIsPending(false)
    //             setError(err.message)
    //         })
    //     },1000)
    // }, [])

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
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('hayai')}>Click Meeeeeeeee</button> */}

            {/* <button onClick={() => setNama('kamarul')}>Tukar</button> */}
            {/* <p>{nama}</p> */}
             
            {error && <div>{error}</div>} 
            {isPending && <div>Please Wait........</div>}
            {blogs && <BlogList blooging={blogs} title="All Blogs"  />} 
            {/* {handleDelete={handleDelete}} */}
           {/* {blogs && <BlogList blooging={blogs.filter( (blog) => blog.author == 'mario') } title="Mario Blogs"/>}  */}
           {/* eslint eqeqeq: 0 */}
        </nav>
    );
}
 
export default Home;    