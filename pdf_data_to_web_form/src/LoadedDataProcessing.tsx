import { useEffect, useState } from "react";
import FormPageRender from "./FormPageRender";
import PageStatusData from "./DocumentDataInterface";
import PageData from "./PageDataInterface";
import Loading from "./Loading";

function LoadedDataProcessing(props: {
  data: PageStatusData | PageData | undefined | any;
  loaded: boolean;
  pageN: number;
}) {
  console.log("Data processing info", props);
  let renderArray: any = [];

  if (props.loaded) {
    if (props.data.hasOwnProperty("pages")) {
      props.data.pages.map((page: any, index: number) => {
        renderArray.push(
          <Loading path={`pageInfo_${page.id}.json`} pageN={index} />
        );
        console.log("renderArray", renderArray);
      });

      return <>{renderArray}</>;
    } else {
      return <FormPageRender pageData={props.data} pageN={props.pageN} />;
    }
  } else {
    return <div>Didnt work</div>;
  }
}

export default LoadedDataProcessing;
