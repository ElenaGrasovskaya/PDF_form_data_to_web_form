import "./App.css";
import Loading from "./Loading";
import PageStatusData from "./DocumentDataInterface";
import LoadPageData from "./LoadPageData";

function LoadData():any {
  let dataSource: string = "status.json";
  const StatusData:any = Loading({path:dataSource,pageN:0,firstLoad:true});
  
  console.log ("StatusData", StatusData);
  if(StatusData.isLoaded)
  {
    setTimeout(()=>{
      console.log ("StatusData", StatusData.Data.pages);
      return (

       <LoadPageData docData = {StatusData} />
      )
     
     }, 5000);
     if(!StatusData){
     return(
       <div>LOADING</div>
     )
     }
        
  }
  //dataSource = `pageInfo_${StatusData.pages[0].id}.json`
  /*if(StatusData)
  {}
   StatusData.Data.pages.map((page: any, index: number) => (
      Loading({path:`pageInfo_${page.id}.json`, pageN:index,firstLoad:false})
    ));


  StatusData.pages.map((page: any, index: number) => (
    Loading({path:`pageInfo_${page.id}.json`,pageN:index,firstLoad:false})
  ));

   StatusData.Data.pages.map((page: any, index: number) => {
        setTimeout(() => {AllData.push(Loading({path:`pageInfo_${page.id}.json`, pageN:index,firstLoad:false}));
        console.log(AllData);}, 5000);
  
  */
 

  
}

export default LoadData;
