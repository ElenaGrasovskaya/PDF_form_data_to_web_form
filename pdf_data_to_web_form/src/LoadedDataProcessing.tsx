import { useEffect, useState } from "react";
import FormPageRender from "./FormPageRender";
import PageStatusData from "./DocumentDataInterface";
import PageData from "./PageDataInterface";
import ViewerApi from "./ViewerApi";

function LoadedDataProcessing(props: {
  data: PageStatusData | PageData | undefined | any;
  loaded: boolean;
  pageN: number;
  prevData:PageStatusData|any
}) {
  console.log("Data processing info", props);
  let renderArray: any = [];

  if (props.loaded) {
    if (props.data.hasOwnProperty("pages")) {
      props.data.pages.map((page: any, index: number) => {
        renderArray.push(
          <ViewerApi path={`pageInfo_${page.id}.json`} pageN={index} prevData = {props.data} />
        );
        console.log("renderArray", renderArray);
      });

      return <>{renderArray}</>;
    } else {
      return <FormPageRender pageData={props.data} pageN={props.pageN} pageStatus = {props.prevData}/>;
    }
  } else {
    return <div>Didnt work</div>;
  }
}

export default LoadedDataProcessing;
