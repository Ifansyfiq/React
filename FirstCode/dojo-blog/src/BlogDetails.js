import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id); //utk url letak '/' dkt hujung utk specify id dkt belakang

    return (  
        <div className="blog-BlogDetails">
            {error && <div>{error}</div>} 
            {isPending && <div>Please Wait........</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails
