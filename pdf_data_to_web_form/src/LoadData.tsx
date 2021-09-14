import { useEffect, useState } from "react";
import "./App.css";
import LoadPageData from "./LoadPageData";
import { PageStatusData } from "./DocumentDataInterface";


function LoadData() {
  
  const [data, setData] = useState<PageStatusData|undefined>(undefined);
  const getData = () => {
    fetch("status.json", {
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
  if (data === undefined) {
    return <div>STILL LOADING</div>;
  } else {
    console.log("This is data from Status.json", data.pages);
    return (
      <>
        {data.pages.map((page, index) => (
          <LoadPageData
            pageID={page.id}
            pageN={index}
            key={(index + 1000).toString()}
          />
        ))}
      </>
    );
  }
}

export default LoadData;
