import FormInput from './components/FormInput';
import "./app.css";

const App =  () =>   {
  return (
  <div className="apps">
      <form>
        <FormInput placeholder="Username"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="etc"/>
      </form>
    </div>
  );
}

export default App;
