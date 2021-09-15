import { useEffect, useState } from "react";
import "./App.css";
import FormPageRender from "./FormPageRender";
import { PageData } from "./PageDataInterface";
import { PageStatusData } from "./DocumentDataInterface";
import Loading from "./Loading";


function LoadPageData(props:any) {
  const [PageData, setPageData] = useState<PageData|any>([]);
  let onePageData:PageData|undefined;
  console.log("Page Data Props", props);

  const returnPageData:any = ((data:any) => {
    setPageData(data);
  })

  


  /*console.log("This is Page ID PROPS", props.pageID);
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
  }*/
 for (let index = 0; index < props.docData.pages.length; index++) {
   
  return(
    <>
      <Loading path = {`pageInfo_${props.docData.pages[index].id}.json`}
      sendDoc={returnPageData}/>
      
      <FormPageRender pageData={PageData} pageN={index}/>
   

    </>
  )};
}

export default LoadPageData;
