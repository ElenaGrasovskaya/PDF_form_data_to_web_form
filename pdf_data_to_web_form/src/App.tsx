import "./App.css";
import ViewerApi from "./ViewerApi";
import {useState} from "react";

function App() {

  const [formData, setFormData] = useState<any>("");
  const getAllFormData = (e:any) => {setFormData(e.target.value);}
  let dataSource: string = "status.json";  
  

  return (
    <section className="App">
      <form>
       <ViewerApi path = {dataSource} pageN={0} prevData= {{}}/>
        
      </form>
    </section>
  );
}

export default App;
