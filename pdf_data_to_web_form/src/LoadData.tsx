import { useEffect, useState } from "react";
import "./App.css";
import LoadPageData from "./LoadPageData";
import { PageStatusData } from "./DocumentDataInterface";
import {PageData} from "./PageDataInterface";
import Loading from "./Loading";


function LoadData() {
  let dataSource:string = "status.json";
  const [DocData, setDocData] = useState<PageStatusData|undefined>(undefined);
  let StatusData:PageStatusData;
  let onePageData:PageData|undefined;
  let allFormData:PageData[] = [];
  const returnDocData:any = ((data:any) => {
    setDocData(data);
  });
 

 /* const getDocData = (source:string) => {
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
        setDocData(myJson);
      });
  };
  useEffect(() => {
    getDocData(dataSource);
  }, []);
  
  if (DocData === undefined) {
    return <div>STILL LOADING</div>;
  } 
  else {

    console.log("This is data from Status.json", DocData.pages);

    for (let index:number = 0; index<DocData.pages.length; index++)
   {
      dataSource = `pageInfo_${DocData.pages[index]}.json`;
      const getPageData = (source:string) => {
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
            setPageData(myJson);
          });
      };
      useEffect(() => {
        getPageData(dataSource);
      }, []);
      console.log("HERE ARE OUR PAGES",PageData);

    }
  }
   return (
      <>
        {DocData.pages.map((page, index) => (
          <LoadPageData
            pageID={page.id}
            pageN={index}
            key={(index + 1000).toString()}
          />
        ))}
      </>
    );
   */ 
    

    
    return (
      <>
        <Loading path={dataSource} sendDoc={returnDocData}/>
        <LoadPageData docData = {DocData}/>

               
      </>
    );
   
    
  }
 


export default LoadData;
