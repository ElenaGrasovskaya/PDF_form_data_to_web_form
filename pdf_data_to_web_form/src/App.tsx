import "./App.css";
import Loading from "./Loading";
import {useState} from "react";

function App() {

  const [formData, setFormData] = useState<any>("");
  const getAllFormData = (e:any) => {setFormData(e.target.value);}
  let dataSource: string = "status.json";  
  

  return (
    <section className="App">
      <form>
       <Loading path = {dataSource} pageN={0}/>
        <input type="submit" className="SubmitButton" onSubmit = {getAllFormData} ></input>
      </form>
    </section>
  );
}

export default App;
