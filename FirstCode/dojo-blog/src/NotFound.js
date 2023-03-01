import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry -_- </h2>
            <p>page not found</p>
            <Link to="/">back to HomePage?</Link>
        </div>
    );
}
 
export default NotFound;