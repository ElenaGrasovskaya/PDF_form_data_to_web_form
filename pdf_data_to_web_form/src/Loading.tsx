import { useEffect, useState } from "react";

function Loading(props:any) {
  const [Data, setData] = useState<any|undefined>([]);
  const getData = (source:string) => {
    fetch(source, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData(props.path);
  }, []);
  console.log("Loading data", Data);
  

  if (Data === undefined) {
    return <div>STILL LOADING</div>;
  } 
  else
  {
    
    return <>
    {props.sendDoc(Data)}
      </>
  }
 
}

export default Loading;