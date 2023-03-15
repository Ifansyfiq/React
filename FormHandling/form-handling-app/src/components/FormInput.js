import "./Form.css";

const FormInput = (props) => {
    return ( 
        <div className="formInput">
            <label>Username: </label>
            <input
             ref={props.refer}
             placeholder={props.placeholder} 
            ></input>
        </div> 
     );
}
 
export default FormInput;