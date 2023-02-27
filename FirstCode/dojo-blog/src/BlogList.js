const BlogList = (props) => {
     const blogs = props.blooging;
     const header = props.title;
    //  const handleDelete = props.handleDelete;
    return (  
        
    <div className="blog-list">
      <h2>{header}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          {/* {<button onClick={() => handleDelete(blog.id)}>Delete blog</button>} */}
        </div>
      ))}
    </div>
    );
}
 
export default BlogList;
