import "./App.css";
import Loading from "./Loading";

function LoadData() {
  let dataSource: string = "status.json";

  return (
    <>
      <Loading path={dataSource} pageN={0} />
    </>
  );
}

export default LoadData;
