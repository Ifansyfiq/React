import { useState } from "react";

const Create = () => {
    const [Title, setTitle] = useState('');
    const [Body, setBody] = useState('');
    const [Author, setAuthor] = useState('');

    return ( 

        <div className="create">
            <h1>Add New blog</h1>
            <form>
                <label>Blog Title:</label>
                <input type={Text} required value={Title} onChange = {(e) => setTitle(e.target.value)} ></input>
                <label>Blog Body:</label>
                <textarea required value={Body} onChange = {(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={Author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}   
 
export default Create;