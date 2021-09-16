import "./App.css";
import LoadData from "./LoadData";

function App() {
  return (
    <section className="App">
      <form>
        <LoadData />
        <input type="submit" className="SubmitButton"></input>
      </form>
    </section>
  );
}

export default App;
