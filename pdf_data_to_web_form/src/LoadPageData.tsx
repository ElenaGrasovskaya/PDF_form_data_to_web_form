import "./App.css";
import Loading from "./Loading";

function LoadPageData(props: any) {
  return props.docData.pages.map((page: any, index: number) => (
    <Loading path={`pageInfo_${page.id}.json`} pageN={index} />
  ));
}

export default LoadPageData;
