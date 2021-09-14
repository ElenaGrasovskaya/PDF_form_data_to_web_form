import { useEffect, useState } from "react";
import "./App.css";
import FormPageRender from "./FormPageRender";
import {PageData} from "./PageDataInterface";

interface LoadPageDataProps {
    pageID: string;
    pageN: number;
    key: string;
}

function LoadPageData(props:LoadPageDataProps) {
  console.log("This is Page ID PROPS", props.pageID);
  const [data, setData] = useState<PageData|undefined>(undefined);

  const getData = () => {
    fetch(`pageInfo_${props.pageID}.json`, {
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
    getData();
  }, []);

  console.log("All Pages data", data);
  if (data === undefined) {
    return <div>STILL LOADING</div>;
  } else {
    return (
      <div className="App">
        <FormPageRender pageData={data} pageN={props.pageN} />
      </div>
    );
  }
}

export default LoadPageData;
