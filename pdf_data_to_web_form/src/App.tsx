import "./App.css";

import DocumentLoad from "./DocumentLoad"

function App() {

  let dataSource: string = "status.json";  
  const getAllData = (event:any) =>
  {
    event.preventDefault();
    console.log(event);
  }

  return (
    <section className="App">
      <form onSubmit= {getAllData} >
              <DocumentLoad path = {dataSource}></DocumentLoad>
              <input type="submit"></input>
      </form>
    </section>
  );
}

export default App;

