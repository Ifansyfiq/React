import { useState } from "react";
import { useNavigate } from "react-router-dom" //declare navigate (for v5 use useHistory) to go next/previous page
 
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false); // utk loading submit
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent web from refresh
        const blog = {title, body, author}

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('blog added')
            setIsPending(false)
            //useNavigate.go(-1)
            navigate('/') //navigate to home after submit the form
        })  
    }

    return ( 

        <div className="create">
            <h1>Add New blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type={Text} required value={title} onChange = {(e) => setTitle(e.target.value)} ></input>
                <label>Blog Body:</label>
                <textarea required value={body} onChange = {(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Blog Added......</button>}
            </form>
        </div>
     );
}   
 
export default Create;