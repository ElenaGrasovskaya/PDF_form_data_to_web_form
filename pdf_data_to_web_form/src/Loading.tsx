import { useEffect, useState } from "react";
import PageStatusData from "./DocumentDataInterface";
import PageData from "./PageDataInterface";
import LoadedDataProcessing from "./LoadedDataProcessing";

function Loading(props: { path: string; pageN: number; prevData:PageStatusData|any }) {
  const [Data, setData] = useState<PageStatusData | PageData | undefined | any>(
    []
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const getData = (source: string) => {
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
        setIsLoaded(true);
      });
  };
  useEffect(() => {
    getData(props.path);
  }, []);

  console.log("Loading", Data);

  if (isLoaded) {
    return (
      <>
        <LoadedDataProcessing
          data={Data}
          loaded={isLoaded}
          pageN={props.pageN}
          prevData = {props.prevData}
        ></LoadedDataProcessing>
      </>
    );
  } else {
    return <div>STILL LOADING</div>;
  }
}

export default Loading;
