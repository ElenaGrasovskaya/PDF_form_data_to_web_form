import { useEffect, useState } from "react";
import FormPageRender from "./FormPageRender";
import LoadPageData from "./LoadPageData";
import PageStatusData from "./DocumentDataInterface";
import PageData from "./PageDataInterface";

function Loading(props: { path: string; pageN: number }) {
  const [Data, setData] = useState<PageStatusData | PageData | undefined>(
    undefined
  );
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
      });
  };
  useEffect(() => {
    getData(props.path);
  }, []);
  console.log("Loading data", Data);

  if (Data === undefined) {
    return <div>STILL LOADING</div>;
  } else {
    if (Data.hasOwnProperty("status"))
      return (
        <>
          <LoadPageData docData={Data} />
          <div>LOADED</div>
        </>
      );
    else
      return (
        <>
          <FormPageRender pageData={Data} pageN={props.pageN} />
          <div>LOADED</div>
        </>
      );
  }
}

export default Loading;
