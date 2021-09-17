import { useEffect, useState } from "react";
import FormPageRender from "./FormPageRender";
import PageStatusData from "./DocumentDataInterface";
import PageData from "./PageDataInterface";

function Loading(props: { path: string; pageN: number; firstLoad?: boolean }) {
  const [Data, setData] = useState< PageStatusData | PageData | undefined >(
    undefined
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
        setIsLoaded(true);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData(props.path);
  }, []);
  
  return { Data, isLoaded };

}
 
export default Loading;


/* if(isLoaded&&props.firstLoad)
  {
    console.log("Loading data", Data);
    return Data.pages.map((page: any, index: number) => (
      <Loading path={`pageInfo_${page.id}.json`} pageN={index} firstLoad = {false} />
    ));
  }
  else if(isLoaded&&!props.firstLoad)
  {
    return (
       <FormPageRender pageData={Data} pageN={props.pageN}/>
    )

  }

  else
  {
    return (
      <div>STILL LOADING</div>
    )
  }



  }



  /*if (Data === undefined) {
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
}*/