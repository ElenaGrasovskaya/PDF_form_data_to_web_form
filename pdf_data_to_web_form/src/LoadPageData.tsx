import "./App.css";
import Loading from "./Loading";
import FormPageRender from "./FormPageRender";

function LoadPageData(props: any) {
  let AllData:any;
  console.log(props.docData);

  props.docData.pages.map((page: any, index: number) => {
    setTimeout(() => {AllData=Loading({path:`pageInfo_${page.id}.json`, pageN:index,firstLoad:false});
    console.log(AllData);}, 5000);
  });


  return ( 
    <>
    <FormPageRender pageData = {AllData} pageN = {0}/>
    <div>Loading a page</div>
    </>

   );
}

export default LoadPageData;
