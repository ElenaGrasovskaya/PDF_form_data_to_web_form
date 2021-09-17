import "./App.css";
import LoadData from "./LoadData";
import {useState} from "react";

function App() {

  const [formData, setFormData] = useState<any>("");
  const getAllFormData = (e:any) => {setFormData(e.target.value);}
    
  

  return (
    <section className="App">
      <form>
        <LoadData />
        <input type="submit" className="SubmitButton" onSubmit = {getAllFormData} ></input>
      </form>
    </section>
  );
}

export default App;
